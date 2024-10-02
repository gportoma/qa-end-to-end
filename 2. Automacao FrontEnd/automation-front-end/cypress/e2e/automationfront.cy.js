import ChallengingDOMPage from '../pages/ChallengingDOMPage';

describe('Test functionalities on The Internet', () => {
  const challengingDOMPage = new ChallengingDOMPage();

  it('Should render "Hello World!" text after clicking the Start button', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
    cy.get('#start button').click();
    cy.get('#finish', { timeout: 10000 }).should('be.visible').and('contain.text', 'Hello World!');
  });

  it('Should click the three buttons and all "Edit" and "Delete" in the grid', () => {
    challengingDOMPage.visit();

    const buttons = challengingDOMPage.getButtons();
    buttons.forEach((selector, index) => {
      challengingDOMPage.clickButton(selector);
      cy.log(`Clicou no botão ${index + 1}`);
    });

    challengingDOMPage.getTableRows().each(($row) => {
      challengingDOMPage.clickEditButton($row);
      cy.log('Clicou no botão Edit');
      challengingDOMPage.validateButtonExists($row, 'edit');

      challengingDOMPage.clickDeleteButton($row);
      cy.log('Clicou no botão Delete');
      challengingDOMPage.validateButtonExists($row, 'delete');
    });

    cy.get('table tbody tr').find('a').contains('edit').should('have.length.gt', 0);
    cy.get('table tbody tr').find('a').contains('delete').should('have.length.gt', 0);
  });
});

