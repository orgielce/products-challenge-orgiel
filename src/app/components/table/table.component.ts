import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";

import {Product} from "../../shared";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgIf, TableModule, TooltipModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() products!: Product[];

}
