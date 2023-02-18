import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'import-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`
})
export class ImportDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        typescript: `
import { SidebarModule } from 'primeng/sidebar';`
    };
}
