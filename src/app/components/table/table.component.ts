import {Component, Input} from '@angular/core';
import {NgClass, NgFor, NgIf} from "@angular/common";

import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";

import {Product} from "../../shared";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgIf, NgFor, TableModule, TooltipModule, NgClass],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() products!: Product[];

  trackByIndex = (index: number): number => {
    return index;
  };

}
