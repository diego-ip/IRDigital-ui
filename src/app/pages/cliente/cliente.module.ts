import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  declarations: [HomeComponent, NuevoClienteComponent, ListarClientesComponent, IndicadoresComponent]
})
export class ClienteModule { }
