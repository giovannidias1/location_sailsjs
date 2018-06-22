/**
 * Agencia.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    nome: {
      type: 'string',
      required: true
    },
    rua: {
      type: 'string',
      required: true
    },
    bairro: {
      type: 'string',
      required: true
    },
    cidade: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    },
    cep: {
      type: 'string',
      required: true
    },
    numero: {
      type: 'number',
      required: true
    },
    telefone: {
      type: 'string',
      required: true
    },
    status:{
      type: 'boolean',
      defaultsTo: true,
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    funcionario: {
      collection: 'funcionario',
      via: 'agencia'
    },
    carroAgencia: {
      collection: 'Carros',
      via: 'agencia'
    }

  },

};

