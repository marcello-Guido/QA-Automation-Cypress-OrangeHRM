import userData from '../fixtures/users/userData.json';

describe('Orange HRM Tests', () => {
  //Creating a object selector__ goal: Maintenance
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: "[href='/web/index.php/dashboard/index']",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    genericField: ".oxd-input--active",
  }


  it.only('User info update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click() // or we can visit directly using cy.visit('pim/viewMyDetails')
    cy.get('[name="firstName"]').clear().type('FirstNameTest')
    cy.get('[name="middleName"]').clear().type('MiddleNameTest')
    cy.get('[name="lastName"]').clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('159753')
    cy.get(selectorsList.genericField).eq(4).clear().type('000159')
    cy.get(selectorsList.genericField).eq(5).clear().type('753000')
    cy.get(selectorsList.genericField).eq(6).clear().type('2024-12-12')
    cy.get('.--close').click()
    cy.get('.oxd-select-text').eq(0).contains('Brazilian')
    cy.get('.oxd-select-text').eq(1).click()
    cy.get(':nth-child(3) > span').click()
    cy.get(selectorsList.genericField).eq(8).clear().type('2012-12-12')
    cy.get('.--close').click()
    cy.get('.oxd-radio-wrapper').eq(1).click()
    cy.get('[type="submit"]').eq(0).click()
    cy.get('.oxd-text--toast-title').should('contain', 'Success')



  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert) // Get just the oxd alert because the text of the field can be edited.
  })
})