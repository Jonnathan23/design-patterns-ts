class Singleton {
    constructor() {
        console.log('Entrando a constructor')
        if (Singleton.instance) return Singleton.instance

        console.log('No existe y se crea')
        Singleton.instance = this
    }
}

const singleton = new Singleton()
const singleton2 = new Singleton()