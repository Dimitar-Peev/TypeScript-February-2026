import type {Post} from "../interfaces/post.interface.ts";
import {renderHtml} from "../utils/html.ts";
import {postsService} from "../services/services.ts";

export async function renderPostsView(): Promise<void> {

    try {
        const posts = await postsService.getAll();

        const template = `
            <ul>
                ${posts.map(post => generateSinglePostHtml(post)).join('')}
            </ul>
        `;

        renderHtml(template);
    } catch (error) {
        renderHtml(`<p>${error}</p>`);
    }
}

function generateSinglePostHtml(post: Post): string {
    return `
        <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
    `;
}
