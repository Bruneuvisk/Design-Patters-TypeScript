/* eslint-disable prettier/prettier */
import { User } from "../interfaces/userr";
const users: User[] = [];

export const MyDatabaseModule = {
    add(user: User): void {
        users.push(user);
    },

    remove(index: number): void {
        users.splice(index, 1);
    },

    show(): void {
        for (const user of users) {
            console.log(user);
        }
    },
};