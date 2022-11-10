export class LoginPage {
    chooseUser(userType) {
        cy.xpath('//*[@id="login_credentials"]/text()[1]')
            .then(($login) => {
                const userLogin = $login.text()
                cy.xpath('//input[@id="user-name"]')
                    .type(userLogin)
            })
    }

    choosePassword(userPassword) {
        cy.xpath('//div[@class="login_password"]/text()[1]')
            .then(($pwd) => {
                const userPwd = $pwd.text()
                cy.xpath('//input[@id="password"]')
                    .type(userPwd)
            })

    }
    pressLogin() {
        cy.xpath('//input[@id="login-button"]')
            .click()
    }
}
export const loginPage = new LoginPage