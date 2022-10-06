import React from 'react';
import App from './App';

it('renders learn react link', () => {
  cy.mount(<App />);
  cy.get('.App-link').should('be.visible')
});
