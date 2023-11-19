import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ROUTES_PATH} from "../../shared";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  customRoutes = ROUTES_PATH;
}
