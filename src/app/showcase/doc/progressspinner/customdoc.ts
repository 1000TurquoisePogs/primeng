import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'custom-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>ProgressSpinner can be customized with styling property like <i>styleClass</i>, <i>strokeWidth</i> and <i>fill</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <p-progressSpinner styleClass="w-4rem h-4rem" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"></p-progressSpinner>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class CustomDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-progressSpinner styleClass="w-4rem h-4rem" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"></p-progressSpinner>`,
        html: `
<div class="card">
    <p-progressSpinner styleClass="w-4rem h-4rem" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"></p-progressSpinner>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './progresspinnerdemo.html'
})

export class ProgressSpinnerDemo {
}`
    };
}