
import { home } from "../data/home.js";
import { Users } from "../data/users.js";
import { Todos } from "../data/todos.js";
import { Photos } from "../data/photos.js";
import { Albums } from "../data/albums.js";
import { Comments } from "../data/comments.js";
import { Posts } from "../data/posts.js";

export const routes = [
    {
        path: '/',
        component: home

    },
    {
        // path: '/',
        path: '/posts',
        component: Posts
    },
    {
        path: '/comments',
        component: Comments
    },
    {
        path: '/albums',
        component: Albums
    },
    {
        path: '/photos',
        component: Photos
    },
    {
        path: '/todos',
        component: Todos
    },
    {
        path: '/users',
        component: Users
    },
]