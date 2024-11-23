class Subject {
    constructor() {
        this.observers = [];
    }

    suscribe(observer) {
        this.observers.push(observer);
    }

    unsuscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(obs => obs.refresh(data));
    }
}


class Observer {
    constructor(myFunction) {
        this.myFunction = myFunction
    }

    refresh(data) {
        this.myFunction(data)
    }
}

//Intancias

const subject = new Subject();
const observer1 = new Observer(data => console.log(`Soy el observador 1, esta es la data: ${data}`));

const observer2 = new Observer(data => div1.innerHTML = `<p>Obervador 2: ${data}</p>`)
const observer3 = new Observer(data => div2.innerHTML = `<h2>Obervador 3: ${data}</h2>`)

subject.suscribe(observer1);
subject.suscribe(observer2);
subject.suscribe(observer3);

// DOM
function change() {
    subject.notify(myText.value);
}