
/**
 * @description Clase que administra las estrategias
 * @constructor stragy
 */
class SaleContextex {
    constructor(strategy) {
        this.strategy = strategy
    }

    calculate(amount) {
        return this.strategy.calculate(amount)
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }
}
/**
 * @description Estragia para el cálculo de impuestos
 * @constructor Monto del IVA
 */
class RegularSaleStrategy {

    constructor(txt) {
        this.txt = txt
    }
    calculate(amount) {
        return amount + (amount * this.txt)
    }
}

/**
 * @description Estragia para el cálculo de descuentos
 * @constructor Monto del descuento
 */
class DiscountSaleStrategy {
    constructor(txt) {
        this.txt = txt
    }
    calculate(amount) {
        return amount - (amount * this.txt)
    }
}

/**
 * @description Estragia para el cálculo de impuestos y descuentos 
 * @constructor Monto del descuento y el IVA
 */
class DiscountRegularSaleStrategy {
    constructor(discount, txt) {
        this.txt = txt
        this.discount = discount
    }
    calculate(amount) {
        return amount + (amount * this.txt) - (amount * this.discount)
    }
}

// Instancias:

const IVA = 0.15
const discount = 0.30
const amount = 100

const regularSale = new RegularSaleStrategy(IVA)

const sale = new SaleContextex(regularSale)

console.log(`Monto inicial: ${amount}`)

console.log(`Con Impuesto: ${sale.calculate(amount)}`)

sale.setStrategy(new DiscountSaleStrategy(discount))
console.log(`Con Descuento: ${sale.calculate(amount)}`)


sale.setStrategy(new DiscountRegularSaleStrategy(discount, IVA))
console.log(`Con Impuesto y Descuento: ${sale.calculate(amount)}`)