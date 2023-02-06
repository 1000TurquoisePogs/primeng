import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/node.service';

@Component({
    templateUrl: './treetablestyledemo.html',
    styles: [
        `
            .kb-row {
                background-color: rgba(0, 0, 0, 0.15) !important;
            }

            .kb-cell {
                font-weight: 700;
                color: #ff5252;
                text-decoration: line-through;
            }
        `
    ]
})
export class TreeTableStyleDemo {
    files: TreeNode[];

    cols: any[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}