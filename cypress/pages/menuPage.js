class MenuPage {

    selectorsList() {
        const selectors = {
              myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
              performanceButton: '',
        }

        return selectors
    }

    accessMyInfo(){
         cy.get(this.selectorsList().myInfoButton).click() // or we can visit directly using cy.visit('pim/viewMyDetails')

    }

    accessPerformance(){
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default MenuPage