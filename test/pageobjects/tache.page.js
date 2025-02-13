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

    get spanAFaire() {
        return $('span[class="mat-mdc-tooltip-trigger ng-star-inserted"]');
    }
    
    get filtrerFermer (){
        return $('mat-icon[class="mat-icon notranslate acc right-accelerator ng-tns-c203779216-7 material-icons mat-ligature-font mat-icon-no-color"]');
    }

    get divEditiqueFiltre (){
        return $$('.mat-mdc-tooltip-trigger.value-container');
    }

    get divTypeDocument(){
        return $('div[class="form-control selectableElement border-prm focusable dynamic-filter"]');
    }

    get divCandidat (){
        return $("yz-ngb-highlight=CANDIDAT TEST AUTO (CAND001)");
    }
    get divjaimelestest (){
        return $("yz-ngb-highlight=J'aime les tests (L1)");
    }

    get caseFactureAchat(){
        return $("yz-ngb-highlight=Facture d'achat");
    }

    get caseFactureVente(){
        return $("yz-ngb-highlight=Facture de vente");
    }

    get inputDate(){
        return $('.standard-size.textinput.selectableElement');
    }

    get champDate(){
        return $('input[name="config.code"]');
    }

    get superieurOuEgal(){
        return $("div*= Supérieur ou égal à");
    }

    get btnOk(){
        return $("yz-command-button=OK");
    }

    async checkAccesTaches () {
        await this.btnTaches.click();
        await this.spanAFaire.isDisplayed();
    }

    async checkFiltreGrille () {
        if(await this.filtrerFermer.isExisting()){
            await this.filtrerFermer.click();
        }
        const divs = await $$('.form-control.selectableElement.border-prm.focusable.dynamic-filter');
        
        await divs[0].click();
        await this.divCandidat.click();
        await this.divjaimelestest.click();
        await this.btnOk.click();

        await divs[1].click();
        await this.caseFactureAchat.click();
        await this.caseFactureVente.click();
        await this.btnOk.click();

        await divs[3].click();
        await this.inputDate.click();
        await this.superieurOuEgal.click();
        await this.champDate.setValue('07/02/2025');
        await this.btnOk.click();

    }

    async checkLigne(){
        await this.MethodeVerificationParamètreLigne("Facture d'achat 250207090335323", "Enregistrement", "30/12/2024", "");
        const elements = await $$('yz-grouping-element');
    
        await elements[1].click();
        await this.MethodeVerificationParamètreLigne("Facture de vente 250207093247882","Enregistrement", "", "111,74");

    }

    async MethodeVerificationParamètreLigne(nom, tache, date, montant){
        if(nom != ''){
            const nomElement = await $(`div*=${nom}`);
            if(!(await nomElement.isExisting())){
                throw new Error("nom incorrect");
            }
        }
        if(tache != ''){
            const tacheElement = await $(`div*=${tache}`);
            if(!(await tacheElement.isExisting())){
                throw new Error("tache incorrect");
            }
        }
        if(date != ''){
            const dateElement = await $(`div*=${date}`);
            if(!(await dateElement.isExisting())){
                throw new Error("date incorrect");
            }
        }
        if(montant != ''){
            const montantElement = await $(`div*=${montant}`);
            if(!(await montantElement.isExisting())){
                throw new Error("montant incorrect");
            }
        }
    }

}

export default new TachePage();