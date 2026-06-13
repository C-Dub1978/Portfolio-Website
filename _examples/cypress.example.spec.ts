describe('Admin Authentication Flow', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('should successfully log in and redirect to the blank admin page', () => {
      cy.get('input[type="text"]').type('admin');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/admin');
      cy.get('h1').should('contain', 'Admin Dashboard');
    });
  });