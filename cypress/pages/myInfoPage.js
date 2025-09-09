class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: ".oxd-input",
            saveButton: '[type="submit"]',
            messageSucessToast: '.oxd-text--toast-title',
            sexualOptionRadio: '.oxd-radio-wrapper',
            closeButton: '.--close',
            boxOptionButton: '.oxd-select-text',
            brazilianOption: ':nth-child(27) > span',
            marriedOption: ':nth-child(3) > span',
            genderOption: '.oxd-radio-wrapper',
            submitButton: '[type="submit"]',
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetails(EmployeeId, OtherId, DriversLicenseNumber, LicenseDate, BirthDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(DriversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(LicenseDate)
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(BirthDate) // Put the birth date in the field        
        cy.get(this.selectorsList().closeButton).click()
    }

    fillStatus() {
        // Challenge Nacionality box
        cy.get(this.selectorsList().boxOptionButton).eq(0).click() // Nacionality option to click in the field
        cy.get(this.selectorsList().brazilianOption).click() // Click in the Brazilian option
        cy.get(this.selectorsList().boxOptionButton).eq(1).click() // Marital Status field to click in the field
        cy.get(this.selectorsList().marriedOption).click() // Click in the Married option of the Marital Status
        cy.get(this.selectorsList().genderOption).eq(1).click() // Select the Gender radio button for Female
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('.oxd-text--toast-title').should('contain', 'Success')

    }





}

export default MyInfoPage