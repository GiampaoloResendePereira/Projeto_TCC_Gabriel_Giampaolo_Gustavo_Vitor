const Motoboy = require('../models/motoboyModel');

exports.createMotoboy = async (req, res) => {
  try {
    const result = await Motoboy.create(req.body);
    res.status(201).json({ message: 'Motoboy cadastrado com sucesso!', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar motoboy', error });
  }
};

exports.getAllMotoboys = async (req, res) => {
  try {
    const result = await Motoboy.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar motoboys', error });
  }
};

exports.updateMotoboy = async (req, res) => {
  try {
    const result = await Motoboy.update(req.params.id, req.body);
    res.status(200).json({ message: 'Motoboy atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar motoboy', error });
  }
};

exports.deleteMotoboy = async (req, res) => {
  try {
    const result = await Motoboy.delete(req.params.id);
    res.status(200).json({ message: 'Motoboy excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir motoboy', error });
  }
};
