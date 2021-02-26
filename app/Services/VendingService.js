import { ProxyState } from "../AppState.js"
import Vending from "../Models/Vending.js"


class VendingService{

    constructor() {
        console.log("hello from vendor service");
    }

    soda(){
        
        ProxyState.vendingMachine.soda--
    }
    candy(){
        
        ProxyState.vendingMachine.candy--
    }
    water(){
        
        ProxyState.vendingMachine.water--
    }
    fireCrackers(){
        ProxyState.vendingMachine.fireCrackers--
    }

}

export const vendingService = new VendingService()