import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'invalid-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Invalid state style is added using the <i>ng-invalid</i> and <i>ng-dirty</i> class to indicate a failed validation.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" class="ng-dirty ng-invalid" optionLabel="name"></p-multiSelect>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class InvalidDocComponent {
    @Input() id: string;

    @Input() title: string;

    cities: City[];

    selectedCities: City[];

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    code: Code = {
        basic: `
<p-multiSelect [options]="cities" [(ngModel)]="selectedCities" class="ng-dirty ng-invalid" optionLabel="name"></p-multiSelect>`,

        html: `
<div class="card flex justify-content-center">
    <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" class="ng-dirty ng-invalid" optionLabel="name"></p-multiSelect>
</div>`,

        typescript: `
import { Component } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    templateUrl: './multiselectdemo.html'
})

export class MultiSelectDemo {

    cities: City[];

    selectedCities: City[];

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`
    };
}
