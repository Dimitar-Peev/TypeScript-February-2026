import type {User} from "../interfaces/user.interface.ts";
import {renderHtml} from "../utils/html.ts";
import {UsersService} from "../services/users.service.ts";

const usersService = new UsersService();

export async function renderUsersView(): Promise<void> {

    const users = await usersService.getAll();

    const template = `
        <ul>
            ${users.map(post => generateSingleUserHtml(post)).join('')}
        </ul>
    `;

    renderHtml(template);
}

function generateSingleUserHtml(user: User): string {
    return `
        <li>
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        </li>
    `;
}
