const sinon = require("sinon"); //ativa o sinon

const mockAsync = (model, module, result = null) => {
  return sinon.stub(model, module).resolves(result); //'mockAsync' cria um stub com o sinon (biblioteca)
};

const RESPONSE = {  //'RESPONSE' é uma resposta http simulada, e em formato json.
  json: function (data) {
    return data;
  },
};
const HERO = {   //objeto que eu crio para fazer os testes. Os valores são dados pelo desenvolvedor.
    name: 'SuperMaria',
    power: 'Invisibilidade',
    age: 21,
    secretIdentity:'Maria',
}

module.exports = {
    mockAsync, RESPONSE, HERO //cria um stub para a resposta
}