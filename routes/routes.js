
import { home } from "../Alldata/home.js";
import { Users } from "../Alldata/users.js";
import { Todos } from "../Alldata/todos.js";
import { Photos } from "../Alldata/photos.js";
import { Albums } from "../Alldata/albums.js";
import { Comments } from "../Alldata/comments.js";
import { Posts } from "../Alldata/posts.js";

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