import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Vending from "./Models/Vending.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  vendingMachine = {
    soda: 100,
    candy: 100,
    water: 100,
    fireCrackers: 100,
  }

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
