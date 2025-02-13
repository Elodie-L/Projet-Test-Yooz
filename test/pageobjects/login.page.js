import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get divSubmit () {
        return $('div[id="kc-form-buttons"]');
    }

    get divAvatar () {
        return $('div[class="avatar-container"]');
    }

    get btnCapture () {
        return $('button[class="mat-ripple ws-link-button ng-tns-c1182571910-0 intercom-capture-workspace ng-star-inserted"]');
    }

    get btnTaches () {
        return $('button[class="mat-ripple ws-link-button ng-tns-c1182571910-0 ng-star-inserted"]');
    }

    get btnExports () {
        return $('button[class="mat-ripple ws-link-button ng-tns-c1182571910-0 intercom-export-workspace ng-star-inserted"]');
    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.divSubmit.click();

        //on attend que l'avatar de connexion s'affiche (5sec max)
        await this.divAvatar.waitForDisplayed({timeout:10000});
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
