import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'readonly-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>readOnly</i> present, value cannot be edited.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-rating [(ngModel)]="value" [readonly]="true" [cancel]="false"></p-rating>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ReadOnlyDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: number = 5;

    code: Code = {
        basic: `
<p-rating [(ngModel)]="value" [readonly]="true" [cancel]="false"></p-rating>`,

        html: `
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" [readonly]="true" [cancel]="false"></p-rating>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './ratingdemo.html'
})
export class RatingDemo {
    value: number = 5;
}`
    };
}
