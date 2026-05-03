import {renderHtml} from "../utils/html.ts";
import {postsService} from "../services/services.ts";

export async function renderCreatePostView(): Promise<void> {
    const template = `
        <form id="create-post-form">
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
 
            <label for="body">Body</label>
            <input type="text" name="body" id="body">
 
            <button type="submit">Create Post</button>
        </form>
    `;

    renderHtml(template);

    const formElement = document.getElementById('create-post-form') as HTMLFormElement;

    if (formElement) {
        formElement.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target as HTMLFormElement);
            const title = formData.get('title') as string;
            const body = formData.get('body') as string;

            const result = await postsService.create({title, body, userId: 1});
            console.log(result);
        });
    }
}