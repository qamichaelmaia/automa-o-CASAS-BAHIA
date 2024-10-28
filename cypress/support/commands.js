Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.visit('minha-conta/');
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(senha);
    cy.get(':nth-child(4) > .button').click();
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobrenome);
    cy.get('.woocommerce-Button').click();
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    cy.wait(1000);

})

Cypress.Commands.add('addProdutos', () => {
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click();
    cy.get('.post-3964 > .product-block').click();
    cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt');
    cy.get('.button-variable-item-XS').click(); 
    cy.get('.button-variable-item-Green').click() 
    cy.get('.input-text').clear().type('11'); 
    cy.get('.single_add_to_cart_button').click();
    cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho');
    cy.wait(1500);
    cy.get('.woocommerce-message > .button').click();
    cy.wait(500);
})

Cypress.Commands.add('removerProdutos', () => {
    cy.get('.sub-title').should('contain', 'Cart : R$');
    cy.wait(1000);
    cy.wait(1000);
    cy.get('.remove > .fa').click();
    cy.get('.woocommerce-message').should('contain', 'removido');
    cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio.');
    cy.wait(2000);
})