/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Teste com roteiro - Visualização e edição do carrinho de compras', () => {

    beforeEach(() => {
        cy.visit('minha-conta/') // URL da Loja
    });
    
    it('Esperado que seja possível adicionar, editar e remover o produto do carrinho com sucesso.', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha@!forte34', 'Michael', 'Maia') // realizar cadastro com sucesso utilizando Faker
        cy.addProdutos(); // Adicionar produto ao carrinho
        cy.editProdutos(); // Editar quantidade de produtos no carrinho
        cy.removerProdutos(); // Remover produto e deixar o carrinho vazio
    });
});