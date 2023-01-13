describe('TaskManager', () => {
    it('should add task correctly', () => {
        cy.visit('/tasks');
        cy.get('[data-testid="tasks-list"] > li').should('have.length', 0)
    })
})