
const data = [
    {
        name: 'Gato',
        info: 'El gato (Felis catus) es un mamífero carnívoro doméstico, conocido por su agilidad, curiosidad y personalidad independiente. Tiene un pelaje suave y variado, ojos grandes y expresivos, y una cola larga y flexible. Es un animal popular como mascota en todo el mundo.',
        image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1600&h=1067'
    },
    {
        name: 'Perro',
        info: 'El perro (Canis lupus familiaris) es un mamífero carnívoro doméstico, conocido por su lealtad, inteligencia y capacidad para formar fuertes lazos con los humanos. Tiene un pelaje variado, ojos expresivos y una cola que utiliza para comunicarse. Es un animal muy versátil, utilizado como mascota, para trabajo, caza y asistencia.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOtv3TRF9fW_TYao8EtoYiPyBK3u7upYuMg&s'
    },
    {
        name: 'Conejo',
        info: 'El conejo (Oryctolagus cuniculus) es un mamífero herbívoro de pequeño tamaño, conocido por su pelaje suave y variado, ojos grandes y orejas largas. Es un animal tímido y social que vive en grupos en su estado natural. Es popular como mascota debido a su naturaleza dócil y su bajo mantenimiento.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewvizQ8d7sXR3JH749JU_DSInEtP7GmAs6A&s'
    }
]

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy)
        this.data = data
        this.element = element
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy {
    show(data, element) {
        element.innerHTML = `<div>
        <h2>Animales</h2>
            <ul>
                ${data.map(animal => `<li>${animal.name}</li>`).join('')}
            </ul>
        </div>
        <hr>`;
    }
}

class ListDetailStrategy {
    show(data, element) {
        element.innerHTML = `<div>
        <h2>Animales</h2>
            <ul>
                ${data.map(animal => `
                <li>
                    <h3>${animal.name}</h3>
                    <p>${animal.info}</p>
                    <img src="${animal.image}" alt="${animal.name}" width="40%">
                </li>
                <hr>
                `).join('')}
            </ul>
        </div>`;
    }
}

class ListImagesStrategy {
    show(data, element) {
        element.innerHTML = `
        <div>
            <h2>Animales</h2>
            <div>
                ${data.map(animal => `            
                    <img src="${animal.image}" alt="${animal.name}" width="40%">            
                <hr>
                `).join('')}            
            </div>
        </div>`;
    }
}

const strategies = [
    new ListStrategy(),
    new ListDetailStrategy(),
    new ListImagesStrategy()
]

const cbOption = document.getElementById('selectOption');
const info = new InfoContext(new ListStrategy(), data, content);
info.show();

cbOption.addEventListener('change', (e) => {
    const value = e.target.value;
    info.setStrategy(strategies[+value]);
    info.show();
})