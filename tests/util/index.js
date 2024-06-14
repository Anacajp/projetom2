// Importando a biblioteca Sinon para criar stubs (funções mock)
const sinon = require("sinon");

// Função utilitária para criar um mock (stub) de uma função assíncrona de um modelo
const mockAsync = (model, module, result = null) => {
    // Cria um stub para o método especificado e configura para resolver com o resultado fornecido
    return sinon.stub(model, module).resolves(result);
};

// Objeto de resposta simulada para testes
const RESPONSE = {
    json: function (data) { // O método json simplesmente retorna os dados fornecidos, simulando o comportamento de uma resposta HTTP
        return data;
    },
};

// Exemplo de linha de montagem para uso nos testes
const HERO = {
    name: 'SuperMaria',
    power: 'Invisibilidade',
    age: 21,
    secretIdentity:'Maria',
};


// Exportando as funções e objetos utilitários para uso em outros scripts
module.exports = {
    mockAsync,
    RESPONSE,
    HERO,
};


