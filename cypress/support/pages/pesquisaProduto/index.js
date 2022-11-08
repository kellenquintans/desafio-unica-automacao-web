const produtos = 'iPhone 14'

class PesquisaProduto {

    busca() {

        cy.get('[id=input-search]').type(produtos).type('{enter}')
    }
}


export default new PesquisaProduto()