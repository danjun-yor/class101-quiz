import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
    // 시동을 켠다
    public run() {
        this.wheels.forEach(wheel => (wheel.rpm = 5));
    }

    public isRoadEmpty(vehicles: Vehicle[]) {
        return vehicles.length === 0;
    }
}
