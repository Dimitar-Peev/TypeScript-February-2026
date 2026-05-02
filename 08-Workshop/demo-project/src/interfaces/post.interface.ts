export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

// export interface createPost {
//     userId: number;
//     title: string;
//     body: string;
// }

export type CreatePost = Omit<Post, 'id'>;