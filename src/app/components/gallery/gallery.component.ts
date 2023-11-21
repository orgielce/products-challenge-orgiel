import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product, ViewType} from "../../shared";
import {GalleryItem, GalleryModule, ImageItem} from "ng-gallery";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf, GalleryModule],
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

  ngOnInit() {
    this.products.map(el => {
      const item = new ImageItem({src: el.images[0], thumb: el.images[0], alt: el.title})
      this.posters.push(item);
      // console.log(this.posters, 1)
    });

    this.images = this.posters;
  }

  ngAfterViewInit() {

  }
}
