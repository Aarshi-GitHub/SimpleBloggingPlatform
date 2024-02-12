import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  id!:number;
  post!:Post;
  username!:any;
  constructor(private router:Router,private postService:PostService,private route:ActivatedRoute){}
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.post = new Post();
    this.postService.getPost(this.id).subscribe(data=>{
      this.post = data;
    },err=>console.log(err))

    if(typeof localStorage!=="undefined"){
      this.username = localStorage.getItem("username")
    }
  }

  goBack(){
    this.router.navigate(['blogs']);
  }
}
