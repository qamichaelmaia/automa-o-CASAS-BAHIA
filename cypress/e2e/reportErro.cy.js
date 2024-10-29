/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Teste de Cadastro - Validação de Senha', () => {

    beforeEach(() => {
        cy.visit('minha-conta/') // URL da Loja
    });
    
    it('Sistema permite cadastro com senha de apenas 2 dígitos, ignorando requisito mínimo de 12 caracteres', () => {
        let emailFaker2 = faker.internet.email()
        cy.falsoCadastro(emailFaker2, '12') // Realizando cadastro com senha de 2 dígitos

    });
});