import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCodeModule } from '../../layout/code/app.code.component';
import { MenuModelDemo } from './menumodeldemo';
import { MenuModelDemoRoutingModule } from './menumodeldemo-routing.module';

@NgModule({
    imports: [CommonModule, MenuModelDemoRoutingModule, AppCodeModule],
    declarations: [MenuModelDemo]
})
export class MenuModelDemoModule {}
