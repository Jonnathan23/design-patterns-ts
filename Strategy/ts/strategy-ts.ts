interface Strategy {
    login(email: string, password: string): boolean
}

/**
 * @description Clase que administra las estrategias
 */
class LoginContext {
    private strategy: Strategy

    constructor(strategy: Strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }
    loging(email: string, password: string): boolean {
        return this.strategy.login(email, password);
    }
}


class LoginDBStrategy implements Strategy {

    login(email: string, password: string): boolean {
        if (email === 'email' && password === 'password') {
            return true;
        }

        return false;
    }
}


const auth = new LoginContext(new LoginDBStrategy())
const result = auth.loging('email', 'password');

console.log(`Conexion exitosa: ${result}`)

