import {BASE_URL} from "../constants.ts";
import type {CreatePost, Post} from "../interfaces/post.interface.ts";
import {APIService} from "./api.ts";

export class PostsService extends APIService<Post , CreatePost> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}