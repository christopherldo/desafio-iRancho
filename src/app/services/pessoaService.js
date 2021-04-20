const {
  Sequelize
} = require('sequelize');
const {
  pessoa
} = require('../models');

module.exports = {
  getPessoaByEmail: async email => {
    return await pessoa.findOne({
      where: {
        no_email: email,
      },
    });
  },
  create: async pessoaObject => {
    return await pessoa.create(pessoaObject);
  },
  readAll: async () => {
    return await pessoa.findAll()
  },
  readById: async id => {
    return await pessoa.findOne({
      where: {
        id,
      },
    });
  },
  update: async pessoaObject => {
    return await pessoa.update(pessoaObject, {
      where: {
        id: pessoaObject.id,
      },
    });
  },
  toggleActivate: async id => {
    return await pessoa.update({
      ic_ativo: Sequelize.literal('NOT ic_ativo')
    }, {
      where: {
        id,
      },
    });
  },
  delete: async id => {
    return await pessoa.destroy({
      where: {
        id,
      },
    });
  },
};