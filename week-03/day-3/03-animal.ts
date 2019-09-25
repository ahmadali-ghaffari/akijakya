// Create an Animal class
    // Every animal has a hunger value, which is a whole number
    // Every animal has a thirst value, which is a whole number
    // when creating a new animal object these values are created with the default 50 value
    // Every animal can eat() which decreases their hunger by one
    // Every animal can drink() which decreases their thirst by one
    // Every animal can play() which increases both by one

class Animal {
    private _hunger:number;
    private _thirst:number;

    constructor () {
        this._hunger = 50;
        this._thirst = 50;
    }

    public eat () {
        this._hunger--;
    }

    public drink () {
        this._thirst--;
    }

    public play () {
        this._hunger++;
        this._thirst++;
    }

    public get hungerLevel ():number {
        return this._hunger;
    }
}

let lion = new Animal();
lion.eat();

console.log(lion.hungerLevel);