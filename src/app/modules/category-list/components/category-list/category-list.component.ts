import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  genereList: Array<any> = [
    {
      'name': "Route1",
      'image': "assets/image/Fiction.svg",
      'path' : '/route1'
    },
    {
      'name': "Route2",
      'image': "assets/image/Drama.svg",
      'path' : '/route2'
    },

    {
      'name': "Route3",
      'image': "assets/image/Humour.svg",
      'path' : '/route3'
    },
    {
      'name': "Route4",
      'image': "assets/image/Politics.svg",
      'path' : '/route4'
    },
    {
      'name': "Route5",
      'image': "assets/image/Philosophy.svg",
      'path' : '/route5'
    },
    {
      'name': "Route6",
      'image': "assets/image/History.svg",
      'path' : '/route6'
    }
  ]
  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  redirectPath(path:string){
    this.route.navigate([path])
  }

}
