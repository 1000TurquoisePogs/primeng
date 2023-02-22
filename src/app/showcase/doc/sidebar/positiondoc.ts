import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'position-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Sidebar location is configured with the <i>position</i> property that can take <i>left</i>, <i>right</i>, <i>top</i> and <i>bottom</i> as a value.</p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-content-center gap-2">
            <p-sidebar [(visible)]="sidebarVisible1" position="left">
                <h3>Left Sidebar</h3>
            </p-sidebar>

            <p-sidebar [(visible)]="sidebarVisible2" position="right">
                <h3>Right Sidebar</h3>
            </p-sidebar>

            <p-sidebar [(visible)]="sidebarVisible3" position="top">
                <h3>Top Sidebar</h3>
            </p-sidebar>

            <p-sidebar [(visible)]="sidebarVisible4" position="bottom">
                <h3>Bottom Sidebar</h3>
            </p-sidebar>

            <p-button type="button" class="mr-2" (click)="sidebarVisible1 = true" icon="pi pi-arrow-right"></p-button>
            <p-button type="button" class="mr-2" (click)="sidebarVisible2 = true" icon="pi pi-arrow-left"></p-button>
            <p-button type="button" class="mr-2" (click)="sidebarVisible3 = true" icon="pi pi-arrow-down"></p-button>
            <p-button type="button" class="mr-2" (click)="sidebarVisible4 = true" icon="pi pi-arrow-up"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class PositionDocComponent {
    @Input() id: string;

    @Input() title: string;

    sidebarVisible1!: boolean;

    sidebarVisible2!: boolean;

    sidebarVisible3!: boolean;

    sidebarVisible4!: boolean;

    code: Code = {
        basic: `
<p-sidebar [(visible)]="sidebarVisible1" position="left">
    <h3>Left Sidebar</h3>
</p-sidebar>

<p-sidebar [(visible)]="sidebarVisible2" position="right">
    <h3>Right Sidebar</h3>
</p-sidebar>

<p-sidebar [(visible)]="sidebarVisible3" position="top">
    <h3>Top Sidebar</h3>
</p-sidebar>

<p-sidebar [(visible)]="sidebarVisible4" position="bottom">
    <h3>Bottom Sidebar</h3>
</p-sidebar>

<p-button type="button" class="mr-2" (click)="sidebarVisible1 = true" icon="pi pi-arrow-right"></p-button>
<p-button type="button" class="mr-2" (click)="sidebarVisible2 = true" icon="pi pi-arrow-left"></p-button>
<p-button type="button" class="mr-2" (click)="sidebarVisible3 = true" icon="pi pi-arrow-down"></p-button>
<p-button type="button" class="mr-2" (click)="sidebarVisible4 = true" icon="pi pi-arrow-up"></p-button>`,

        html: `
<div class="card flex flex-wrap justify-content-center gap-2">
    <p-sidebar [(visible)]="sidebarVisible1" position="left">
        <h3>Left Sidebar</h3>
    </p-sidebar>

    <p-sidebar [(visible)]="sidebarVisible2" position="right">
        <h3>Right Sidebar</h3>
    </p-sidebar>

    <p-sidebar [(visible)]="sidebarVisible3" position="top">
        <h3>Top Sidebar</h3>
    </p-sidebar>

    <p-sidebar [(visible)]="sidebarVisible4" position="bottom">
        <h3>Bottom Sidebar</h3>
    </p-sidebar>

    <p-button type="button" class="mr-2" (click)="sidebarVisible1 = true" icon="pi pi-arrow-right"></p-button>
    <p-button type="button" class="mr-2" (click)="sidebarVisible2 = true" icon="pi pi-arrow-left"></p-button>
    <p-button type="button" class="mr-2" (click)="sidebarVisible3 = true" icon="pi pi-arrow-down"></p-button>
    <p-button type="button" class="mr-2" (click)="sidebarVisible4 = true" icon="pi pi-arrow-up"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './sidebardemo.html'
})
export class SidebarDemo {
    sidebarVisible1!: boolean;
    
    sidebarVisible2!: boolean;
    
    sidebarVisible3!: boolean;
    
    sidebarVisible4!: boolean;
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarDemo } from './sidebardemo';

@NgModule({
    imports: [CommonModule, SidebarModule, FormsModule, ButtonModule],
    declarations: [SidebarDemo]
})
export class SidebarDemoModule {}`
    };
}