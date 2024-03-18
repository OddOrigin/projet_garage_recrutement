import {Cars} from "../cars/cars";

export class Garage {
    id: number;
    name: string;
    cars: Cars[];


    constructor(id = -1, name = "") {
        this.id = id;
        this.name = name;
        this.cars = [];
    }
}