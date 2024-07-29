/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';
import './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Bruno', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);