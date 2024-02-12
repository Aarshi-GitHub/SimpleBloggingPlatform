import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  username!:any;
  post:Post = new Post();
  ngOnInit(){
    if(typeof localStorage!=="undefined"){
      this.username = localStorage.getItem("username")?.toString();
    }
  }
  constructor(private postService:PostService,private router:Router){}
  onSubmit(post:Post){
    this.postService.createPost(post,this.username).subscribe(data=>{
      if(data){
        console.log(data);
        this.router.navigate(['blogs'])
      }
    },err=>console.log(err))
  }
}
