import { Routes} from '@angular/router'
import { PostComponent } from './components/post/post.component'

export const APP_ROUTES : Routes=[
    {
    path: "posts",   //http://localhost:4200/posts
    component : PostComponent

},
{
    path : "**",
    redirectTo : "/posts"
}
]