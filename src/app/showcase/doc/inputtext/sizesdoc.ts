import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'sizes-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Apply <i>.p-input-sm</i> to reduce the size of the input element or <i>.p-input-lg</i> to enlarge it.</p>
        </app-docsectiontext>
        <div class="card flex flex-column align-items-center gap-3 ">
            <input pInputText type="text" class="p-inputtext-sm" placeholder="Small" [(ngModel)]="value1" />
            <input pInputText type="text" placeholder="Normal" [(ngModel)]="value2" />
            <input pInputText type="text" class="p-inputtext-lg" placeholder="Large" [(ngModel)]="value3" />
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SizesDocComponent {
    value1: string;
    
    value2: string;
    
    value3: string;

    @Input() id: string

    @Input() title: string
    
    code: Code = {
        html: `
<input pInputText type="text" class="p-inputtext-sm" placeholder="Small" [(ngModel)]="value1" />
<input pInputText type="text" placeholder="Normal" [(ngModel)]="value2" />
<input pInputText type="text" class="p-inputtext-lg" placeholder="Large" [(ngModel)]="value3" />`,

        typescript: `
export class InputText {
    value:1 string;
    value:2 string;
    value3: string;
}`
    };
}
