import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product, ROUTES_PATH} from "../../shared";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() product!: Product;
  customRoutes = ROUTES_PATH;

}
