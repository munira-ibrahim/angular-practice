import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { OverviewComponent } from "./components/product/overview/overview.component";
import { ProductComponent } from "./components/product/product.component";
import { SpecificationComponent } from "./components/product/specification/specification.component";
import { RegisterComponent } from "./components/register/register.component";
import { UsersComponent } from "./components/users/users.component";
import { LazyModule } from "./modules/lazy/lazy.module";
import { DeactivatedRouteService } from "./services/deactivated-route.service";
import { LogingaurdService } from "./services/logingaurd.service";
import { PostResolveService } from "./services/post-resolve.service";

export const APP_ROUTES: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [LogingaurdService]
    },
    {
        path: 'Register',
        component: RegisterComponent,
        canDeactivate: [DeactivatedRouteService]
    },
    {
        path: 'product',
        component: ProductComponent,
        children: [
            { path: "overview/:id/:pname", component: OverviewComponent },
            { path: "specification", component: SpecificationComponent }
        ]
    }, 
    {
        path: "lazy",
        loadChildren: () => import("./modules/lazy/lazy.module").then(m => m.LazyModule)
    },
    // {
    //     //Ask data from component during navigation & then Load whole component
    //     path : 'post',
    //     component : PostService,
    //     resolve : {post : PostResolveService}
    // },
    {
        path: '**',
        redirectTo: '/login'
    }
]