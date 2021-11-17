import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sapient-assignment';
  routeUrl:any;
  constructor(private router:Router){
  }

  ngOnInit(){
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
           this.routeUrl = this.router.url;
           window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });
        }
      }
    );
     
  }
  naviagteToHome(){
    this.router.navigate([''])
  }
}
