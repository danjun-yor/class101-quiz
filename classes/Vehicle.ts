import Wheel from "../components/Wheel";

export default class Vehicle {
    public _wheels: Wheel[];
    private _fuel: number; // 0~100

    constructor(wheels: Wheel[], fuel: number) {
        if (wheels.length <= -1) {
            throw new Error("Number of wheels must be bigger than -1");
        }
        if (fuel > 100 || fuel < 0) {
            throw new Error("Fuel must be greater than 0 and less than 100");
        }

        this._wheels = wheels;
        this._fuel = fuel;
    }

    get wheels() {
        return this._wheels;
    }

    get fuel() {
        return this._fuel;
    }
}
