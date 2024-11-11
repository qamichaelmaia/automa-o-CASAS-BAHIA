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

Cypress.Commands.add('editProdutos', () => {
    const quantidadeDesejada = 9; 
    
    for (let i = 0; i < quantidadeDesejada; i++) {
        cy.get('.plus').click();
    }
    cy.get('.woocommerce-message').should('contain', 'Carrinho atualizado.')
    cy.wait(1500);
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

Cypress.Commands.add('falsoCadastro', (email, senha) => {
    cy.log('🚨❗**Iniciando o cadastro com senha de apenas 2 dígitos**');
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(senha);
    cy.get('.woocommerce-password-strength').should('contain', 'Muito fraca - Digite uma senha segura.');
    cy.get('.woocommerce-password-hint').should('contain', 'Dica: A senha deve ter pelo menos doze caracteres. Para torná-la mais forte, use letras maiúsculas e minúsculas, números e símbolos como ! " ? $ % ^ & ).');
    cy.get(':nth-child(4) > .button').click();
    cy.log('🚨❗ **BUG DETECTADO**: Cadastro foi realizado com sucesso, mas deveria ter falhado devido à senha insuficiente.');
    cy.wait(1000);
    cy.get('.category-inside-title').click()
    cy.get('#menu-item-1004 > a').should('contain', 'All Categories').click()
    cy.log('🚨❗ **BUG DETECTADO**: no access All Categories');
    cy.get('#menu-item-1003 > a').should('contain', 'Recommended').click()
    cy.log('🚨❗ **BUG DETECTADO**: no access Recommended');
    cy.get('#menu-item-1002 > a').should('contain', 'Best Selling').click()
    cy.log('🚨❗ **BUG DETECTADO**: no access Best Selling');
    cy.get('#menu-item-1001 > a').should('contain', 'Speaker').click()
    cy.log('🚨❗ **BUG DETECTADO**: no access Speaker');
    cy.get('#menu-item-1000 > a').should('contain', 'Microphone').click()
    cy.log('🚨❗ **BUG DETECTADO**: no access Microphone');
})