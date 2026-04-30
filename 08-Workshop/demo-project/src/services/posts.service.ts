import {BASE_URL} from "../constants.ts";
import type {Post} from "../interfaces/post.interface.ts";
import {APIService} from "./api.ts";

export class PostsService extends APIService<Post> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}