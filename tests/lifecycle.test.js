var sails = require ('sails');

before((done) => {  //define o que ocorrerá antes dos testes acontecerem.
    set.timeout(10000); //limita uma estimativa de tempo para rodar a aplicação

    sails.lift( //levanta o sistema do sails sem que eu precise ativar pelo comando do terminal, com as definições escolhidas abaixo
        {
            hooks: { grunt: false, csrf: false }, // Desabilita os hooks (caminhos falsos) 'grunt' e 'csrf' para agilizar o processo de levantamento
            log: { level: 'warn' }
        },

        function(err) { //abre a possibilidade de ocorrer um erro
            if(err){
                console.error('não foi possível ativar o sails no momento', err); // imprime a mensagem de erro
                return done(err); //avisos sobre onde está o erro
            }

            return done(); // ativa o sails com sucesso
        }

    )
});

after(function(done) { //Mostra o que acontece depois que ocorrer o teste
    sails.lower(done); // Desativa o sails após o teste
});