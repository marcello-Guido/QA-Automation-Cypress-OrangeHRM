class DashboardPage {
    selectorsList(){
        const selectors = {
            dashboardGrid: "[href='/web/index.php/dashboard/index']",

        }
        return selectors

    }

    checkDash(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}

export default DashboardPage