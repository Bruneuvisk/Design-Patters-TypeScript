/* eslint-disable prettier/prettier */
import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Bruno', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });

export { myDatabaseClassic };
