import { Component, Input } from '@angular/core';

@Component({
    selector: 'style-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Following is the list of structural style classes, for theming classes visit <a href="#" [routerLink]="['/theming']">theming</a> page.</p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>item</td>
                        <td>
                            $implicit: Data of the menu item <br />
                            index: Index of the option
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class StyleDocComponent {
    @Input() id: string;

    @Input() title: string;
}