import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinksTitle = "Favorite Links";
  favLinks = ['https://organ.byu.edu', 'https://www.alltrails.com/', 'https://www.launchcode.org/']
  constructor() { }

  ngOnInit() {
  }

}
