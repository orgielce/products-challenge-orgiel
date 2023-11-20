import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {delay} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {
    spinner.show();
  }

  ngOnInit() {
    delay(3000);
    this.spinner.hide();
  }
}
