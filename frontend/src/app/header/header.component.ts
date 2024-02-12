import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username!:any;
  ngOnInit(){
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem("username")?.toString();
      if(this.username===undefined){
        console.log(this.username);
        this.router.navigate(['login']); 
      }
      else console.log(this.username);
    }
  }
  constructor(private router:Router){}
  logout(){
    if (typeof localStorage !== 'undefined'){
      localStorage.removeItem("username");
      this.router.navigate(['login'])
    }
  }
}
