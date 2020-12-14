import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ClienteService } from '../cliente.service';
import { ClienteModel } from '../models';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  clientes: ClienteModel[];

  displayedColumns: string[] = ['id', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'fechaNacimiento', 'edad', 'fechaProbableMuerte'];
  dataSource = new MatTableDataSource<ClienteModel>();
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService.findAll().subscribe( 
      data => {
         this.clientes = data;
         this.dataSource = new MatTableDataSource<ClienteModel>(this.clientes);
      }
    )
  }

}
