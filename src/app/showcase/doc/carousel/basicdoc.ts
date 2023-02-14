import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Carousel requires a collection of items as its value along with a template to render each item.</p>
        </app-docsectiontext>
        <div class="card">
            <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
                <ng-template let-product pTemplate="item">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img src="assets/showcase/images/demo/product/{{ product.image }}" [alt]="product.name" class="product-image" />
                            </div>
                            <div>
                                <h4 class="mb-1">{{ product.name }}</h4>
                                <h6 class="mt-0 mb-3">{{ product.price }}</h6>
                                <span [class]="'product-badge status-' + product.inventoryStatus.toLowerCase()">{{ product.inventoryStatus }}</span>
                                <div class="car-buttons mt-5">
                                    <p-button type="button" styleClass="p-button p-button-rounded mr-2" icon="pi pi-search"></p-button>
                                    <p-button type="button" styleClass="p-button-success p-button-rounded mr-2" icon="pi pi-star-fill"></p-button>
                                    <p-button type="button" styleClass="p-button-help p-button-rounded" icon="pi pi-cog"></p-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-template>
            </p-carousel>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [ProductService]
})
export class BasicDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    products: Product[];

    responsiveOptions: any[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    code: Code = {
        basic: `
<p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
    <ng-template let-product pTemplate="item">
        //content
    </ng-template>
</p-carousel>`,
        html: `
<div class="card">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
        <ng-template let-product pTemplate="item">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="mb-3">
                        <img src="assets/showcase/images/demo/product/{{product.image}}" [alt]="product.name" class="product-image" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{product.name}}</h4>
                        <h6 class="mt-0 mb-3">{{product.price}}</h6>
                        <span [class]="'product-badge status-'+product.inventoryStatus.toLowerCase()">{{product.inventoryStatus}}</span>
                        <div class="car-buttons mt-5">
                            <p-button type="button" styleClass="p-button p-button-rounded mr-2" icon="pi pi-search"></p-button>
                            <p-button type="button" styleClass="p-button-success p-button-rounded mr-2" icon="pi pi-star-fill"></p-button>
                            <p-button type="button" styleClass="p-button-help p-button-rounded" icon="pi pi-cog"></p-button>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,
        typescript: `
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
    templateUrl: './carouseldemo.html',
    styleUrls: ['./carouseldemo.scss'],
    providers: [ProductService]
})

export class CarouselDemo {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });
    }
}`,
        scss: `
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }
    
        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
    }
}`,
        data: `
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `
    };
}