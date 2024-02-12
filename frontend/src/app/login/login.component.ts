import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User = new User();
  constructor(private userService:UserService,private router:Router){}
  onSubmit(user:User){
    this.userService.loginUser(user).subscribe(data=>{
      if(data){
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem("username",data.username);
        }
        else console.log("local Storgae");
        this.router.navigate(['blogs'])
      }
    })
  }
}
