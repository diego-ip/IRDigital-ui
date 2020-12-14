import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ClienteKpi } from '../models';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {


  clienteKpi: ClienteKpi;
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService.getKpi().subscribe(
      data => {
        this.clienteKpi = data;
      }
    );
  }

}
