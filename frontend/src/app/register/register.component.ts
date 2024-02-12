import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User = new User();
  constructor(private userService:UserService,private router:Router){}
  onSubmit(user:User){
    this.userService.createUser(user).subscribe(data=>{
      if(data){
        console.log("Registered");
        this.router.navigate(['login'])
      }
    })
  }
}
