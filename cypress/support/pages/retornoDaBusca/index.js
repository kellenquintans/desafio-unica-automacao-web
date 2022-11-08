const produtos = 'iPhone 14'

class RetornoDaBusca {

    retorno() {

        cy.get('.iphQIY').contains(produtos)

        cy.request({
            method: 'GET',
            url: 'https://www.magazineluiza.com.br/busca/iphone+14/'

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.not.empty
        })
    }
}


export default new RetornoDaBusca()




