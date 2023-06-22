//Rough example of what is class. But this code isn't correct.

type Engine = 'V8' | '4 Stroke' | '3 Stroke'
type EngineType = 'Petrol' | 'Diesel' | 'CNG' | 'EV'

class Car{
    constructor(tyres:number,engine:Engine,engineTypes:EngineType){
        this.tyres = tyres;
        this.engine = engine;
        this engineTypes = engineTypes;
    }
    getTypes(){
        return this.tyres
    }
    getEngine(){
        return this.engine
    }
    getEngineType(){
        return this.engineType
    }
}
class Audi extends Car{
    constructor(tyres:number,engine:Engine,engineTypes:EngineType){
        super(tyres,engine,engineTypes)
    }
    setTyres(newTyreCount){
        this.tyres = 5
    }
}

const nissan = new Car(4,'V8','Petrol')

const audi = new Audi(4,'V8','Petrol')
audi.setTyres(5)