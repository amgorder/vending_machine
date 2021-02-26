import { vendingService } from '../Services/VendingService.js'
import { ProxyState } from '../AppState.js';
import Vending from '../Models/Vending.js';

function _draw() {
    let sodaElem = document.getElementById("soda")
    let candyElem = document.getElementById("candy")
    let waterElem = document.getElementById("water")
    let fireCrackersElem = document.getElementById("fire")


    sodaElem.innerText = ProxyState.vendingMachine.soda.toString()
    candyElem.innerText = ProxyState.vendingMachine.candy.toString()
    waterElem.innerText = ProxyState.vendingMachine.water.toString()
    fireCrackersElem.innerText = ProxyState.vendingMachine.fireCrackers.toString()



    console.log('draw page');
}

export default class VendingController{
    constructor() {
        console.log('hello from the vending controller');
    }

    soda() {
        vendingService.soda()
        _draw()
    }

    candy() {
        vendingService.candy()
        _draw()
    }

    water() {
        vendingService.water()
        _draw()
    }
    fireCrackers() {
        vendingService.fireCrackers()
        _draw()
    }

}