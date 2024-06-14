const assert = require('assert') //ativando o assert, utilizado para verificar se os dados estão iguals com o esperado.
const controller = require('../../api/controllers/HeroesController'); //indica a rota do controller
const { mockAsync, RESPONSE, HERO } = require('../sinonUtils'); //  importa o sinon e declara variáveis que serão utilizadas.
const sinon = require('sinon'); // ativa o sinon, framework usado para testes

describe('HeroesController', () => {

  afterEach(() => {
    sinon.restore();// Volta para as características iniciais após o teste.
  });

it('Deve criar um herói com sucesso', async () => {  //começa o teste efetivamente
    const createStub = mockAsync(controller, 'create', HERO);
    const req = {
      body: HERO
    };
    const result = await controller.create(req, RESPONSE);

    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, true);
  });

it('Deve listar todos os heróis com sucesso', async () => {  //começa o teste efetivamente
    const createStub = mockAsync(controller, 'list', HERO);
    const req = {
      body: HERO
    };
    const result = await controller.list(req, RESPONSE);

    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, true);

})


it('Deve listar todos os heróis que possuirem arma', async () => {  //começa o teste efetivamente
    const createStub = mockAsync(controller, 'listwithgun', HERO);
    const req = {
      body: HERO
    };
    const result = await controller.listwithgun(req, RESPONSE);

    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, true);

})

});