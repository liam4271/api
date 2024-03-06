const db = require('../models'); // Assurez-vous que le chemin est correct vers vos modèles Sequelize

const Mesure = db.Mesure;

const createMesure = async (req, res) => {
  try {
    const mesure = await Mesure.create(req.body);
    res.status(201).json(mesure);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMesures = async (req, res) => {
  try {
    const mesures = await Mesure.findAll();
    res.status(200).json(mesures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMesureById = async (req, res) => {
  const { id } = req.params;
  try {
    const mesure = await Mesure.findByPk(id);
    if (!mesure) {
      res.status(404).json({ message: 'Mesure introuvable' });
      return;
    }
    res.status(200).json(mesure);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMesure = async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedRowsCount, updatedRows] = await Mesure.update(req.body, {
      where: { id },
      returning: true, // Retourner les lignes mises à jour
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: 'Mesure introuvable' });
      return;
    }
    res.status(200).json(updatedRows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMesure = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Mesure.destroy({ where: { id } });
    if (deletedRowCount === 0) {
      res.status(404).json({ message: 'Mesure introuvable' });
      return;
    }
    res.status(204).end(); // Pas de contenu retourné
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMesure,
  getMesures,
  getMesureById,
  updateMesure,
  deleteMesure,
};
