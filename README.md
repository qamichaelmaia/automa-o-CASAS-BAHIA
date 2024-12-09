# Projeto Crowdtest

Bem-vindo ao repositório do projeto Crowdtest. Este projeto tem como objetivo testar funcionalidades de uma plataforma de e-commerce e validar a experiência do usuário em diferentes cenários. Os testes foram desenhados para simular interações reais de usuários e garantir a qualidade do sistema.

---
### Utilizei Custom Commands para deixar a estrutura mais dinâmica
---

## Objetivo
O objetivo principal é realizar a validação de funcionalidades críticas da plataforma por meio de dois testes distintos: **Cadastro com validação de senha** e **Edição do carrinho de compras**. Esses testes ajudam a identificar possíveis problemas na interface, no fluxo de navegação e na integridade das funcionalidades.

---

## Testes e Cenários

### Teste 1 - Validação de Cadastro: Teste de Senha
Este teste avalia o fluxo de cadastro do usuário e a validação de senhas curtas (2 dígitos), assim como a navegação após a realização do cadastro.

**Passos do teste:**
1. Acessar o site da plataforma.
2. Realizar o cadastro utilizando uma senha com apenas **2 dígitos**.
3. Verificar se o cadastro é realizado com sucesso.
4. Navegar até a aba de categorias e observar se ocorre algum erro de acesso.

**Resultados esperados:**
- O cadastro deve ser realizado sem validação de senha, permitindo o uso de senhas de 2 dígitos.
- Deve ser exibido um **erro ao acessar a aba de categorias** após o cadastro.

---

### Teste 2 - Visualização e Edição do Carrinho de Compras
Este teste avalia a funcionalidade do carrinho de compras na plataforma de e-commerce escolhida. O objetivo é garantir que os usuários possam adicionar, editar e remover itens do carrinho.

**Passos do teste:**
1. Acessar o site ou aplicativo de e-commerce escolhido (uma lista de sugestões será fornecida).
2. Realizar uma busca por qualquer produto disponível.
3. Adicionar o produto no carrinho de compras.
4. Alterar a quantidade do item no carrinho.
5. Remover o produto do carrinho.

**Resultados esperados:**
- Os produtos devem ser adicionados corretamente ao carrinho.
- O usuário deve ser capaz de editar a quantidade de itens no carrinho.
- O produto deve ser removido do carrinho sem erros.

---

## Tecnologias Utilizadas
- **Ferramentas de automação:** [Cypress/Appium/Playwright ou similar]
- **Gerador de dados de teste:** `@faker-js/faker`
- **Integração contínua:** GitHub Actions

---
