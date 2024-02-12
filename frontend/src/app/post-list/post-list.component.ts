import { Component } from '@angular/core';
import { Post } from '../post';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterLink,RouterModule,HttpClientModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  options = { weekday: 'narrow', year: 'numeric', month: 'short', day: 'numeric' };
  posts!:Post[]
  maxlength=60
  username:any="";
  constructor(private postService:PostService,private router:Router){}
  ngOnInit(){
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem("username")?.toString();
      if(this.username===undefined){
        console.log(this.username);
        this.router.navigate(['login']); 
      }
      else console.log(this.username);
    }
    if(this.username!==undefined)
      this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(data=>{
      this.posts = data;
    },err=>console.log(err))
  }

  updateBlog(id:number){
    this.postService.getPost(id).subscribe(data=>{
      if(data && data.user && data.user.username){
        if(data.user.username===this.username)
          this.router.navigate(['update',id]);
        else
        window.alert("User Can Only Update Blogs Created by Them.");
      }
    })
    
  }

  viewBlog(id:number){
    this.router.navigate(['blogs',id]);
  }
  deleteBlog(id:number){
    this.postService.deletePost(id,this.username).subscribe(data=>{
      if(data){
        this.getPosts();
      }
      else{
        window.alert("User Can Only Delete Blogs Created by Them.");
      }
    },err=>{
      console.log(err)
    })
    this.router.navigate(['blogs']);
  }
}
