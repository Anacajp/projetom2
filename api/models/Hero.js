module.exports = {
  attributes: {
    name: {
      type: 'string', //alteração no tipo atribuido para "string" pois não havia nada escrito dentro da string, causando problemas para a identificação do dado.
      required: true,
    },
    power: {
      type: 'string',
      required: true,
    },
    age: {
      type: 'integer',
      required: true,
    },
    secretIdentity: {
      type: 'string',
      required: true,
    },
  //não há referencia do colectio via no model (?)

  },
};
