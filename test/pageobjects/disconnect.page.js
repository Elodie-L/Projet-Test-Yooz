import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DisconnectPage extends Page {
    /**
     * define selectors using getter methods
     */
    get divProfil () {
        return $('span[class="user-name"]');
    }

    get seDeconnecter(){
        return $("span=Se déconnecter")
    }

    async disconnect(){
        await this.divProfil.click();
        await this.seDeconnecter.click();
    }
}

export default new DisconnectPage();
