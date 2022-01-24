import faker from 'faker'
var cpf = require('gerador-validador-cpf')

export default class Factory{
    static signup() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        return {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            watss: '54999999999',
           address: {
                postalcode : '04534011',
                street : 'Rua Joaquim Floriano',
                number : '1000',
                details : 'Apt 142',
                district : 'Itaim Bibi',
                city_state : 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
    }
}