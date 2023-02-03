import { Component } from '@angular/core';

interface CodeLang {
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
}

@Component({
    selector: 'import-doc',
    template: ` <div>
        <app-docsectiontext title="Import" id="import"> </app-docsectiontext>
        <app-code [hideToggleCode]="true" [hideStackBlitz]="true" [hideCodeSandbox]="true" [code]="code"></app-code>
    </div>`
})
export class ImportDocComponent {
    value1: string;

    code: CodeLang = {
        html: `
        import { InputTextModule } from 'primeng/inputtext';
        `
    };
}
