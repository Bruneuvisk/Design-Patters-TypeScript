/* eslint-disable prettier/prettier */

import { Customer } from "../customer/customer";
import { VehicleProtocol } from "../vehicle/vehicle-protocol";


export interface CreateVehicleCustomer {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, cutomerName: string): VehicleProtocol;
}