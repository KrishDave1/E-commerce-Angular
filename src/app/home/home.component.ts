import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) {} // A constructor is used to inject dependencies, such as services, before the component is initialized.

  ngOnInit(): void {
    //ngOnInit is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((data: Products) => {
        console.log(data);
      });
  }
}

//An Observable is like a Promise.You can subscribe to an Observable and wait for the request to complete.To wait for the request to complete, you can use the subscribe method on the Observable object returned by the getProducts method of the productsService service.
//Once you get an Observable from a return value,you can essentially subscribe to it and once the request goes through, you can get the data from the response.

