
export default class SignupPage {

    static visitarSiteEVerificar() {
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a[href="/deliver"]').should('be.visible').click()
    }

    static preencherTodoOFormulario(deliver) {
        cy.get('input[name="fullName"]').should('be.visible').type(deliver.name)
        cy.get('input[name="cpf"]').should('be.visible').type(deliver.cpf)
        cy.get('input[name="email"]').should('be.visible').type(deliver.email)
        cy.get('input[name="whatsapp"]').should('be.visible').type(deliver.watss)

        cy.get('input[name="postalcode"]').should('be.visible').type(deliver.address.postalcode)
        cy.get('input[name="address-number"]').should('be.visible').type(deliver.address.number)
        cy.get('input[name="address-details"]').should('be.visible').type(deliver.address.details)

        // Outra maneira melhor de utilizar o get('input[type=button][value="Buscar postalcode"]')
        cy.get('input[type="button"]').should('be.visible').and('have.value', 'Buscar CEP').click()

        cy.get('input[name="address"]').should('be.visible').and('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('be.visible').and('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('be.visible').and('have.value', deliver.address.city_state)

        // Selecionando método de entrega

        cy.contains('.delivery-method li', deliver.delivery_method).should('be.visible').click()

        //Selecionando imagem
        // ^= pega o valor antes
        // $= pega o valor do final
        // *= qualquer valor

        //attachFile e da biblioteca que eu baixei
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    static submit() {
        //Clicando no botao de submit
        cy.get('button[type="submit"]').should('be.visible').click()
    }

    static modalContentShouldBe() {
        //Validando modal de cadastro
        // Ou .swal2-container .swal-html-container // Pegando da classe super pai
        cy.get('div[class="swal2-html-container"]').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
        cy.contains('Fechar').should('be.visible').click()
    }

    static AlertMessageShouldBe() {
        cy.get('.alert-error').should('be.visible').and('have.text', 'Oops! CPF inválido')
    }

    static alertMessageEmailIncorrect() {
        cy.get('.alert-error').should('be.visible').and('have.text', 'Oops! Email com formato inválido.')
    }

    static AlertMessageVariable(text) {
        cy.contains('.alert-error', text).should('be.visible')
    }

    static AlertMessageCnh(text) {
        cy.contains('.alert-warning', text).should('be.visible')
    }

}