export class Cars{
    id:number;
    brand:string;
    model:string;
    color:string;
    registration:string;

    constructor(id = -1, brand = "", model = "", color = "", registration = ""){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.registration = registration;
    }
}