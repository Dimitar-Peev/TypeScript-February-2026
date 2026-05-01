import type {Post} from "../interfaces/post.interface.ts";
import {renderHtml} from "../utils/html.ts";
import {PostsService} from "../services/posts.service.ts";

const postsService = new PostsService();

export async function renderPostsView(): Promise<void> {

    const posts = await postsService.getAll();

    const template = `
        <ul>
            ${posts.map(post => generateSinglePostHtml(post)).join('')}
        </ul>
    `;

    renderHtml(template);
}

function generateSinglePostHtml(post: Post): string {
    return `
        <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
    `;
}
