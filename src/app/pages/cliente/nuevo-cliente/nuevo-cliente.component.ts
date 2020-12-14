import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteInput } from '../models';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {

  form: FormGroup;
  clienteInput: ClienteInput;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      apellidoPaterno: ['', [Validators.required, Validators.maxLength(100)]],
      apellidoMaterno: ['', [Validators.required, Validators.maxLength(100)]],
      fechaNacimiento: ['', [Validators.required]]
    });
  }

  save() {
    const tempSave = this.form.getRawValue();
    this.clienteInput = tempSave as ClienteInput;
    this.clienteInput.fechaNacimiento = this.formatDate(this.clienteInput.fechaNacimiento);
    console.log(this.clienteInput)
    this.clienteService.save(this.clienteInput).subscribe(data => {
      this.router.navigateByUrl('/cliente/list');
    })

  }


  formatDate(date: any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

}
