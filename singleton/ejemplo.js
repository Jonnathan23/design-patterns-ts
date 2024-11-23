class WeekDay{
    daysEs = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    constructor(lang){
        this.lang = lang;

        if(WeekDay.instance)return WeekDay.instance;

        WeekDay.instance = this;
    }

    static getInstance(){
        return weekDay.instance
    }

    getDays(){
        return this.lang === 'es' ? this.daysEs :this.daysEn;
    }
}

const weekDay = new WeekDay('en');
console.log(weekDay.getDays())