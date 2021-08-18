import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Places';
  image1 = 'https://skiresorttest.com/uploads/alta-ski-resorts-768x512.jpg';
  image2 = 'https://cdn.recreation.gov/public/2020/02/03/16/18/232115_09af924d-f3c5-4d71-b955-8f8107ab8e9a_700.jpg';
  image3 = 'https://i2.wp.com/www.yourhikeguide.com/wp-content/uploads/PM-Silver-Lake-Flat.jpg';

  constructor() { }

  ngOnInit() {
  }

}