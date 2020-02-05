export default class Wheel {
    public kind: string;
    public rpm: number = 0;

    constructor(kind) {
        this.kind = kind;
    }

    public setNewRPM(r: number) {
        this.rpm = r;
    }
}
