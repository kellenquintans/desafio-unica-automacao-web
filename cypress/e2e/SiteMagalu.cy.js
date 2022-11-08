/// <reference types="cypress" />
import homePage from '../support/pages/homepage'
import pesquisaProduto from '../support/pages/pesquisaProduto'
import retornoDaBusca from '../support/pages/retornoDaBusca'
import listaDeProdutos from '../support/pages/listaDeProdutos'
import validaSacola from '../support/pages/validaSacola'


describe('Magazine Luiza', () => {
    const five_seconds = 5000

    it('acessar o portal Magazine Luiza', () => {
        homePage.acessar()
    })

    it('realizar busca por produto', () => {
        pesquisaProduto.busca()

    })

    it('validar o retorno da busca', () => {
        cy.wait(five_seconds)
        retornoDaBusca.retorno()

    })

    it('seleciona um produto da lista', () => {
        listaDeProdutos.lista()

    })

    it('adiciona e valida o item na sacola', () => {
        validaSacola.adcionarNaSacola()
        cy.wait(five_seconds)
        validaSacola.produtoAdcionado()
        validaSacola.validaItens()

    })

})