/* eslint-disable prettier/prettier */
import { Customer } from "./customer";


export class IndividualCustomer implements Customer { 
    constructor(public name: string) {
        this.name += ' (INDIVUDUAL)'
    }
}