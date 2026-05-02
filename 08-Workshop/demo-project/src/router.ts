import type {Routes} from "./interfaces/routes.interface.ts";

export class Router {
    private routes: Routes;

    constructor(routes: Routes) {
        this.routes = routes;
    }

    public navigate(route: string) {
        history.pushState({}, '', route);
        this.routes[route]();
    }
}
