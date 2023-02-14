import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>FocusTrap is applied to a container element with the <i>pFocusTrap</i> directive.</p>
        </app-docsectiontext>
        <div pFocusTrap class="card flex align-items-center justify-content-center flex-wrap gap-3">
            <div>
                <h4>Input</h4>
                <input id="input" type="text" size="30" pInputText />
            </div>
            <div>
                <h4>Float Label</h4>
                <span class="p-float-label">
                    <input id="float-input" type="text" size="30" pInputText />
                    <label for="float-input">Username</label>
                </span>
            </div>
            <div>
                <h4>Disabled Input</h4>
                <input id="disabled-input" type="text" size="30" pInputText [disabled]="true" />
            </div>
            <div>
                <h4>Input with tabindex -1</h4>
                <input type="text" size="30" pInputText tabindex="-1" />
            </div>
            <div>
                <h4>Button</h4>
                <button pButton type="button" icon="pi pi-check" label="Check"></button>
            </div>
            <div>
                <h4>Dropdown</h4>
                <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [showClear]="true"></p-dropdown>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    selectedCity!: string;

    cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    code: Code = {
        basic: `
<div pFocusTrap class="card flex align-items-center justify-content-center flex-wrap gap-3">
    <div>
        <h4>Input</h4>
        <input id="input" type="text" size="30" pInputText>
    </div>
    <div>
        <h4>Float Label</h4>
        <span class="p-float-label">
            <input id="float-input" type="text" size="30" pInputText> 
            <label for="float-input">Username</label>
        </span>
    </div>
</div>`,
        html: `
<div pFocusTrap class="card flex align-items-center justify-content-center flex-wrap gap-3">
    <div>
        <h4>Input</h4>
        <input id="input" type="text" size="30" pInputText>
    </div>
    <div>
        <h4>Float Label</h4>
        <span class="p-float-label">
            <input id="float-input" type="text" size="30" pInputText> 
            <label for="float-input">Username</label>
        </span>
    </div>
    <div>
        <h4>Disabled Input</h4>
        <input id="disabled-input" type="text" size="30" pInputText [disabled]="true" />
    </div>
    <div>
        <h4>Input with tabindex -1</h4>
        <input type="text" size="30" pInputText tabindex="-1" />
    </div>
    <div>
        <h4>Button</h4>
        <button pButton type="button" icon="pi pi-check" label="Check"></button>
    </div>
    <div>
        <h4>Dropdown</h4>
        <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [showClear]="true"></p-dropdown>
    </div>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './focustrapdemo.html'
})
export class FocusTrapDemo {
    selectedCity!: string;

    cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FocusTrapModule } from 'primeng/focustrap';

@NgModule({
    imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, FocusTrapModule],
    declarations: [FocusTrapDemo]
})
export class FocusTrapDemoModule {}
`
    };
}