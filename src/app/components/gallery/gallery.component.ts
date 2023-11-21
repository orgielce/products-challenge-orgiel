import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GlobalState, Product, ProductAction, ProductsFilteringParams, ViewType} from "../../shared";
import {GalleryItem, GalleryModule, ImageItem} from "ng-gallery";
import {NgIf} from "@angular/common";

import {MessagesModule} from "primeng/messages";
import {Message} from "primeng/api";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf, GalleryModule, MessagesModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  @Input() products!: Product[];
  @Output() setViewFn = new EventEmitter<ViewType>();
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;
  images: GalleryItem[] = [];
  posters: any = [];
  views = ViewType;
  messages!: Message[];
  searchParams$!: Observable<ProductsFilteringParams>;
  searchParams!: ProductsFilteringParams;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    this.searchParams$ = this.store.select((store) => store.products.searchParams);
    this.searchParams$.subscribe(params => this.searchParams = params);

    this.products.map(el => {
      const item = new ImageItem({src: el.images[0], thumb: el.images[0], alt: el.title})
      this.posters.push(item);
      // console.log(this.posters, 1)
    });

    this.images = this.posters;

    this.messages = [{ severity: 'error', summary: '', detail: 'No products loaded. Must by click here to reload' }];
  }

  ngAfterViewInit() {

  }

  reloadProducts = (): void => {
    this.store.dispatch(ProductAction.UpdateProductsParams({params: this.searchParams}));
  };
}
