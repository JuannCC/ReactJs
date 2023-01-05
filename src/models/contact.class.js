import { CONECT } from "./levels.enum";

export class Task2 {
    name = '';
    lastname = '';
    email = '';
    conected = false;

    constructor(name, lastname, email,conected ){
        this.name= name;
        this.lastname= lastname;
        this.email= email;
        this.conected=conected
        

    }
}