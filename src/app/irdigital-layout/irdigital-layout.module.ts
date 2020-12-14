import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/@uni/layout/layout.module';
import { ToolbarModule } from 'src/@uni/layout/toolbar/toolbar.module';
import { SidenavModule } from 'src/@uni/layout/sidenav/sidenav.module';
import { IrdigitalLayoutComponent } from './irdigital-layout.component';
import { ClienteModule } from '../pages/cliente/cliente.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ToolbarModule,
    SidenavModule,
    ClienteModule,
    CommonModule
  ],
  declarations: [IrdigitalLayoutComponent]
})
export class IrdigitalLayoutModule { }
