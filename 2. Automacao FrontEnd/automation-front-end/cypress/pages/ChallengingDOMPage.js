class ChallengingDOMPage {

    visit() {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom');
    }

    getButtons() {
        return ['.button:first', '.button:eq(1)', '.button:eq(2)'];
    }

    clickButton(selector) {
        cy.get(selector).should('be.visible').click();
    }

    getTableRows() {
        return cy.get('table tbody tr');
    }

    clickEditButton(row) {
        cy.wrap(row).find('a').contains('edit').should('be.visible').click();
    }

    clickDeleteButton(row) {
        cy.wrap(row).find('a').contains('delete').should('be.visible').click();
    }

    validateButtonExists(row, type) {
        cy.wrap(row).find(`a:contains(${type})`).should('exist');
    }
}

export default ChallengingDOMPage;
