
class ValidaSacola {

    adcionarNaSacola() {
        cy.get(':nth-child(2) > [data-testid="bagButton"]').click()

    }

    produtoAdcionado() {
        cy.get('[data-testid="summary-continue-btn"]').click()

    }

    validaItens() {
        cy.request({
            method: 'GET',
            url: 'https://sacola.magazineluiza.com.br/#/'

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.not.empty
            expect(res.body[0]).to.have
        })

    }
}


export default new ValidaSacola()