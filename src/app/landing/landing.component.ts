import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Post } from '../Post';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  title = 'AngularSimple';

  posts: Post[] = [];

  constructor(private dataSevice: DataService){
    
  }

  ngOnInit() {
    console.log('landing ngOnInit');

    this.dataSevice.getData().subscribe(data => {
      this.posts = data;
    });
  

  }

}
