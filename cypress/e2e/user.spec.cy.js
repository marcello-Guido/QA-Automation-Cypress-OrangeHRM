import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashPage = new DashPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it('User info update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashPage.checkDash()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails('1234', '4321', '000', '2000-12-12', '1999-11-11')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})