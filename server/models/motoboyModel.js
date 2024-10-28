const db = require('../config/db');

const Motoboy = {
  create: async (motoboyData) => {
    const { nome, cpf, telefone, placa, foto, senha, dataNascimento } = motoboyData;
    const [result] = await db.execute(
      'INSERT INTO motoboys (nome, cpf, telefone, placa, foto, senha, dataNascimento) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nome, cpf, telefone, placa, foto, senha, dataNascimento]
    );
    return result;
  },

  // Função para ler todos os motoboys
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM motoboys');
    return rows;
  },

  // Função para atualizar um motoboy
  update: async (id, motoboyData) => {
    const { nome, cpf, telefone, placa, foto, senha, dataNascimento } = motoboyData;
    const [result] = await db.execute(
      'UPDATE motoboys SET nome = ?, cpf = ?, telefone = ?, placa = ?, foto = ?, senha = ?, dataNascimento = ? WHERE id = ?',
      [nome, cpf, telefone, placa, foto, senha, dataNascimento, id]
    );
    return result;
  },

  // Função para deletar um motoboy
  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM motoboys WHERE id = ?', [id]);
    return result;
  },
};

module.exports = Motoboy;
