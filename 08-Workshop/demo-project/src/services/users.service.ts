import {BASE_URL} from "../constants.ts";
import type {User} from "../interfaces/user.interface.ts";
import {APIService} from "./api.ts";

export class UsersService extends APIService<User> {
    constructor() {
        super(`${BASE_URL}/users`);
    }
}