import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import TachePage from '../pageobjects/tache.page.js'
import CapturePage from '../pageobjects/capture.page.js'
import Disconnect from '../pageobjects/disconnect.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('elodie.laborde@ta.com', '35gH45!.de86?')

        
        await CapturePage.checkAccess();
        await CapturePage.checkAccesCapture();

        await TachePage.checkAccesTaches();

        await TachePage.checkFiltreGrille();
        await TachePage.checkLigne();
        await Disconnect.disconnect();
        
        
        

        
    })
})

