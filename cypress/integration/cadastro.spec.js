/// <reference types="cypress" />
import SignupPage from '../pages/SignupPage';
import signupFactory from '../factory/signupFactory';

describe('Signup', () => {

    it('User should be deliver', () => {

        var deliver = signupFactory.signup()

        SignupPage.visitarSiteEVerificar()
        SignupPage.preencherTodoOFormulario(deliver)
        SignupPage.submit()
        SignupPage.modalContentShouldBe()
    })

    it('Incorrect document', () => {

        cy.fixture('deliver').then((response) => {
            SignupPage.visitarSiteEVerificar()
            SignupPage.preencherTodoOFormulario(response.cpfInv)
            SignupPage.submit()
            SignupPage.AlertMessageShouldBe()
        })
    })

    it('Incorrect email', () => {

        cy.fixture('deliver').then((response) => {
            SignupPage.visitarSiteEVerificar()
            SignupPage.preencherTodoOFormulario(response.emailInv)
            SignupPage.submit()
            SignupPage.alertMessageEmailIncorrect()
        })
    })

    it('Required fields', () => {
        SignupPage.visitarSiteEVerificar()
        SignupPage.submit()
        SignupPage.AlertMessageVariable('É necessário informar o nome')
        SignupPage.AlertMessageVariable('É necessário informar o CPF')
        SignupPage.AlertMessageVariable('É necessário informar o email')
        SignupPage.AlertMessageVariable('É necessário informar o CEP')
        SignupPage.AlertMessageVariable('É necessário informar o número do endereço')
        SignupPage.AlertMessageVariable('Selecione o método de entrega')
        SignupPage.AlertMessageCnh('Atenção: CNH é obrigatória somente para veículos motorizados. Mesmo assim é importante enviar um documento com foto para aprovação do seu cadastro.')
    })
})