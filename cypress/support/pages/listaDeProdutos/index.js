class ListaDeProdutos {

    lista() {
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]').click()
    }
}


export default new ListaDeProdutos()