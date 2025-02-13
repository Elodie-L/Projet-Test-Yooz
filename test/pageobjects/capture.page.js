import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TachePage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnCapture () {
        return $("span=Capture");
    }

    get btnTaches () {
        return $("span=Mes tâches");
    }

    get btnExports () {
        return $("span=Mes exports");
    }

    get spanImportDeFichiers (){
        return $('span[class="mat-mdc-tooltip-trigger ng-star-inserted" ]');
    }
    
    

    async checkAccess () {
         await this.btnCapture.click();
         
        // on vérifie la visibilité des boutons
        await this.btnCapture.isDisplayed();
        await this.btnTaches.isDisplayed();
        await this.btnExports.isDisplayed();
    }

    async checkAccesCapture () {
        await this.btnCapture.click();
        await this.spanImportDeFichiers.isDisplayed();
    }

}

export default new TachePage();