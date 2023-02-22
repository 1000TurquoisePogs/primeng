import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'raisedtext-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Text buttons can be displayed as raised for elevation.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap gap-3 justify-content-center">
            <button pButton type="button" label="Primary" class="p-button-raised p-button-text"></button>
            <button pButton type="button" label="Secondary" class="p-button-raised p-button-text p-button-secondary"></button>
            <button pButton type="button" label="Success" class="p-button-raised p-button-text p-button-success"></button>
            <button pButton type="button" label="Info" class="p-button-raised p-button-text p-button-info"></button>
            <button pButton type="button" label="Warning" class="p-button-raised p-button-text p-button-warning"></button>
            <button pButton type="button" label="Help" class="p-button-raised p-button-text p-button-help"></button>
            <button pButton type="button" label="Danger" class="p-button-raised p-button-text p-button-danger"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class RaisedTextDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<button pButton type="button" label="Primary" class="p-button-raised p-button-text"></button>
<button pButton type="button" label="Secondary" class="p-button-raised p-button-text p-button-secondary"></button>
<button pButton type="button" label="Success" class="p-button-raised p-button-text p-button-success"></button>
<button pButton type="button" label="Info" class="p-button-raised p-button-text p-button-info"></button>
<button pButton type="button" label="Warning" class="p-button-raised p-button-text p-button-warning"></button>
<button pButton type="button" label="Help" class="p-button-raised p-button-text p-button-help"></button>
<button pButton type="button" label="Danger" class="p-button-raised p-button-text p-button-danger"></button>`,

        html: `
<div class="card flex flex-wrap gap-3 justify-content-center">
    <button pButton type="button" label="Primary" class="p-button-raised p-button-text"></button>
    <button pButton type="button" label="Secondary" class="p-button-raised p-button-text p-button-secondary"></button>
    <button pButton type="button" label="Success" class="p-button-raised p-button-text p-button-success"></button>
    <button pButton type="button" label="Info" class="p-button-raised p-button-text p-button-info"></button>
    <button pButton type="button" label="Warning" class="p-button-raised p-button-text p-button-warning"></button>
    <button pButton type="button" label="Help" class="p-button-raised p-button-text p-button-help"></button>
    <button pButton type="button" label="Danger" class="p-button-raised p-button-text p-button-danger"></button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './raisedtextdemo.html'
})
export class RaisedTextDemo { }`
    };
}