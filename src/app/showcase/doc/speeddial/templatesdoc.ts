import { Component, Input } from '@angular/core';

@Component({
    selector: 'templates-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"> </app-docsectiontext>
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
                        <td>button</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class TemplatesDocComponent {
    @Input() id: string;

    @Input() title: string;
}