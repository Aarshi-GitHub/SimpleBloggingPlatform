import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { Post } from '../post';
import { PostService } from './../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [HeaderComponent,FormsModule],
templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent {
  id!:number;
  username!:any;
  post!:Post;
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    if(typeof localStorage!=="undefined"){
      this.username = localStorage.getItem("username")?.toString();
    }
    this.post = new Post();
    this.postService.getPost(this.id).subscribe(data=>{
      this.post = data;
    },err=>console.log(err))
  }
  constructor(private postService:PostService,private router:Router,private route:ActivatedRoute){}
  onSubmit(post:Post){
    this.postService.updatePost(post.id,post,this.username).subscribe(data=>{
      if(data){
        console.log(data);
        this.router.navigate(['blogs'])
      }
    },err=>console.log(err))
  }
}
