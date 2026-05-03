import type {User} from "../interfaces/user.interface.ts";
import {renderHtml} from "../utils/html.ts";
import {usersService} from "../services/services.ts";

export async function renderUsersView(): Promise<void> {

    try {
        const users = await usersService.getAll();

        const template = `
            <ul>
                ${users.map(post => generateSingleUserHtml(post)).join('')}
            </ul>
        `;

        renderHtml(template);
    } catch (error) {
        renderHtml(`<p>${error}</p>`);
    }
}

function generateSingleUserHtml(user: User): string {
    return `
        <li>
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        </li>
    `;
}
