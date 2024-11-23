// Ejemplo 2
interface StrategyCalculate{
    calculate(amount:number):number
}

class SaleContext{
    private strategyCalculate : StrategyCalculate

    constructor(strategy:StrategyCalculate){
        this.setStrategyCalculate(strategy)
    }

    calculate(amount){
        return this.strategyCalculate.calculate(amount)
    }

    setStrategyCalculate(strategy){
        this.strategyCalculate = strategy
    }
}

class Discount implements StrategyCalculate{
    private taxt:number
    private discount:number
    
    constructor(taxt:number, discount:number){
        this.taxt = taxt/100;
        this.discount = discount/100;
    }
    
    calculate(amount:number){
        return amount + (this.taxt * amount) - (this.discount * amount)
    }
}

const saleContext = new SaleContext( new Discount(15,30))
const total = saleContext.calculate(15)
console.log(total)
