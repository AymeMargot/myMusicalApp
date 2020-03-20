import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    primary_products = [
        {
            name: 'Hand Wash',
            imagen: 'assets/images/handwash.png'
        },
         {
            name: 'Dish Washing Up',
            imagen: 'assets/images/dishwashingup.png'
        },
         {
            name: 'Floor Cleaner',
            imagen: 'assets/images/floorcleaner.png'
        },
        {
            name: 'Floor Cleaner',
            imagen: 'assets/images/antibacterialwipes.png'
        }
    ]
  //constructor() {}

}
