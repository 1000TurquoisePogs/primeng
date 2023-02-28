import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDocComponent } from './basicdoc';
import { CustomDocComponent } from './customdoc';
import { ImportDocComponent } from './importdoc';
import { MethodsDocComponent } from './methodsdoc';
import { PropsDocComponent } from './propsdoc';
import { StyleDocComponent } from './styledoc';
import { TemplatesDocComponent } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ScrollPanelModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDocComponent, BasicDocComponent, CustomDocComponent, StyleDocComponent, PropsDocComponent, MethodsDocComponent, TemplatesDocComponent]
})
export class ScrollPanelDocModule {}