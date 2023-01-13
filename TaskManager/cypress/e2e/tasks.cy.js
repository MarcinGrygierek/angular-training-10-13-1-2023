describe('TaskManager', () => {
    it('should add task correctly', () => {
        cy.visit('http://localhost:4200/tasks');
        cy.get('ul li').should('have.length', 0)

        cy.get('input').type('Lorem ipsum{enter}');
        cy.get('ul li').should('have.length', 1);

    })
})