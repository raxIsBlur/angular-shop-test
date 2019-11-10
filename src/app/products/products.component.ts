import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Array<Object> = [
      {
        name: "Kone",
        price: 3488.99
      },
      {
        name: "Ironhide",
        price: 3299.99
      },
      {
        name: "Ironhide Cartridge",
        price: 529.99
      },
      {
        name: "Fox + Float",
        price: 66.0
      },
      {
        name: "Shimano+ Derailuer",
        price: 67.6
      },
      {
        name: "SANTA CRUZ",
        price: 185.5
      }
    ];;
  name = "Test";

  constructor() {}

  ngOnInit() {
    console.log(this.products);
  }
}
