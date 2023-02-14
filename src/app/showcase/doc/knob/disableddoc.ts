import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'disabled-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>disabled</i> is present, a visual hint is applied to indicate that the Knob cannot be interacted with.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-knob [(ngModel)]="value" [disabled]="true"></p-knob>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DisabledDocComponent {
    @Input() id: string;

    @Input() title: string;

    value: number = 75;

    code: Code = {
        basic: `
<p-knob [(ngModel)]="value" [disabled]="true"></p-knob>`,

        html: `
<div class="card flex justify-content-center">
    <p-knob [(ngModel)]="value" [disabled]="true"></p-knob>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './knobdemo.html'
})

export class KnobDemo {
    value: number = 75;
}`
    };
}