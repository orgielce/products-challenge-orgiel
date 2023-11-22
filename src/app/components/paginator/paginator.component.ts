import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

import {ProductsFilteringParams} from "../../shared";

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() searchParams!: ProductsFilteringParams;
  @Output() updateCurrentPage = new EventEmitter<number>();
  currentPage = new FormControl();

  ngOnInit() {
    this.currentPage.setValue(this.searchParams.page);

    // cambiando el numero de pagina manualmente
    // verifico que es un numero y > 0
    //   this.currentPage.valueChanges.subscribe(page => {
    //     if (Number(page) > 0 && page.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
    //       this.currentPage.setValue(page);
    //       this.updateCurrentPage.emit(Number(page));
    //     }
    //   });
  }

  previous(): void {
    if ((this.currentPage.value) > 1) {
      const page = Number(this.currentPage.value) - 1;
      this.updateCurrentPage.emit(page);
      this.currentPage.setValue(page.toString());
    }
  }

  next = (): void => {
    const page = Number(this.currentPage.value) + 1;
    this.updateCurrentPage.emit(page);
    this.currentPage.setValue(page.toString());
  }

  onlyNumbers = () => {
    this.currentPage.setValue(this.currentPage?.value.replace(/[^0-9]/, ''));
  }
}
