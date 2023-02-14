import { Component, Input } from '@angular/core';
import { MessageService } from 'src/app/components/api/messageservice';
import { Code } from '../../domain/code';

@Component({
    selector: 'target-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A page may have multiple toast components, in case you'd like to target a specific message to a particular toast, use the <i>key</i> property so that toast and the message can match.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast key="toast1"></p-toast>
            <p-toast key="toast2"></p-toast>
            <button type="button" pButton pRipple (click)="showToast1()" label="Show Success"></button>
            <button type="button" pButton pRipple (click)="showToast2()" label="Show Warning" class="p-button-warning"></button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class TargetDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    showToast1() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: 'key: toast1' });
    }

    showToast2() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'key: toast2' });
    }

    code: Code = {
        basic: `
<p-toast key="toast1"></p-toast>
<p-toast key="toast2"></p-toast>
<button type="button" pButton pRipple (click)="showToast1()" label="Show Success"></button>
<button type="button" pButton pRipple (click)="showToast2()" label="Show Warning" class="p-button-success"></button>`,
        html: `
<div class="card flex justify-content-center gap-2">
    <p-toast key="toast1"></p-toast>
    <p-toast key="toast2"></p-toast>
    <button type="button" pButton pRipple (click)="showToast1()" label="Show Success"></button>
    <button type="button" pButton pRipple (click)="showToast2()" label="Show Warning" class="p-button-success"></button>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { MessageService } from 'src/app/components/api/messageservice';

@Component({
    templateUrl: './toastdemo.html',
    providers: [MessageService]
})
export class ToastDemo {

    constructor(private messageService: MessageService) {}

    showToast1() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: 'key: toast1' });
    }

    showToast2() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'key: toast2' });
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastDemo } from './toastdemo';

@NgModule({
    imports: [CommonModule, ToastModule, ButtonModule, RippleModule],
    declarations: [ToastDemo]
})
export class ToastDemoModule {}`
    };
}