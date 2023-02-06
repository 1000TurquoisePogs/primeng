import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'image-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
        <p>The <i>image</i> property is used to display an image like an avatar.</p>
            <div class="card flex align-items-center gap-2">
                <p-chip label="Amy Elsner" image="assets/showcase/images/demo/avatar/amyelsner.png"></p-chip>
                <p-chip label="Asiya Javayant" image="assets/showcase/images/demo/avatar/asiyajavayant.png"></p-chip>
                <p-chip label="Onyama Limba" image="assets/showcase/images/demo/avatar/onyamalimba.png"></p-chip>
                <p-chip label="Xuxue Feng" image="assets/showcase/images/demo/avatar/xuxuefeng.png" [removable]="true"></p-chip>
            </div>
        </app-docsectiontext>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ImageDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex align-items-center">
    <p-chip label="Amy Elsner" image="assets/showcase/images/demo/avatar/amyelsner.png" styleClass="mr-2"></p-chip>
    <p-chip label="Asiya Javayant" image="assets/showcase/images/demo/avatar/asiyajavayant.png" styleClass="mr-2"></p-chip>
    <p-chip label="Onyama Limba" image="assets/showcase/images/demo/avatar/onyamalimba.png" styleClass="mr-2"></p-chip>
    <p-chip label="Xuxue Feng" image="assets/showcase/images/demo/avatar/xuxuefeng.png" [removable]="true"></p-chip>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './chipdemo.html',
    styleUrls: ['chipdemo.scss']
})
export class ChipDemo {}`
    };
}