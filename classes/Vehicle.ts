import Wheel from "../components/Wheel";

export default class Vehicle {
    private _numberOfWheels: number; // bigger than -1
    public _wheels: Wheel[];
    private _fuel: number; // 0~100

    constructor(numberOfWheels: number, wheels: Wheel[], fuel: number) {
        this._numberOfWheels = numberOfWheels;
        this._wheels = wheels;
        this._fuel = fuel;
    }

    get wheels() {
        return this._wheels;
    }

    get numberOfWheels() {
        return this._numberOfWheels;
    }

    get fuel() {
        return this._fuel;
    }
}
