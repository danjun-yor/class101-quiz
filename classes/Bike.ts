import Vehicle from "./Vehicle";

export default class Bike extends Vehicle {
    // 페달을 밟는다
    public start() {
        this.wheels.forEach(wheel => (wheel.rpm = 8));
    }

    public isRoadEmpty(vehicles: Vehicle[]) {
        return vehicles.length === 0;
    }
}
