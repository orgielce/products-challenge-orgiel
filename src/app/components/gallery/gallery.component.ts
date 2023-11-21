import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from "../../shared";
import {GalleryItem, GalleryModule, ImageItem} from "ng-gallery";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  @ViewChild(GalleryComponent) gallery!: GalleryComponent;
  images: GalleryItem[] = [];
  posters: any = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.productsService.getPosters().then((posters) => {

      posters.map(el => {
        const item = new ImageItem({src: el.src, thumb: el.thumb})
        this.posters.push(item);
        // console.log(this.posters, 1)
      });
    });
    this.images = this.posters;
  }
}
