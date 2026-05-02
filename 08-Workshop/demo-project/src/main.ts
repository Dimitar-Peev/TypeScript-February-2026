import './style.css'
import {Router} from './router.ts';
import type {Routes} from './interfaces/routes.interface.ts';
import {renderPostsView} from './views/posts.view.ts';
import {renderUsersView} from './views/users.view.ts';
import {renderCreatePostView} from './views/createPost.view.ts';

const routes: Routes = {
    '/posts': renderPostsView,
    '/users': renderUsersView,
    '/posts/create': renderCreatePostView
};

const router = new Router(routes);

function setupNavLinks(): void {
    const linksElements = document.querySelectorAll('nav a');

    linksElements.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            router.navigate((e.target as HTMLAnchorElement).pathname);
        });
    });

}

setupNavLinks();