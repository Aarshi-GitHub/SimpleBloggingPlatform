import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MyPostsComponent } from './my-posts/my-posts.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'blogs',component:PostListComponent},
    {path:'my-blogs',component:MyPostsComponent},
    {path:'create',component:CreatePostComponent},
    {path:'blogs/:id',component:PostDetailsComponent},
    {path:"update/:id",component:UpdatePostComponent},
    {path:'',redirectTo:'login',pathMatch:'full'}
];
