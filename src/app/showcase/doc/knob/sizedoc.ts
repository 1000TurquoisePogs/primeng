import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'size-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Diameter of the knob is defined in pixels using the <i>size</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-knob [(ngModel)]="value" [size]="200"></p-knob>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SizeDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: number = 60;

    code: Code = {
        basic: `
<p-knob [(ngModel)]="value" [size]="200"></p-knob>`,

        html: `
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [size]="200"></p-knob>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './knobdemo.html'
})

export class KnobDemo {
    value: number = 60;
}`
    };
}