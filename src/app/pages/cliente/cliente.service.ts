import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteInput, ClienteKpi, ClienteModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = environment.URL_API;

  constructor(private http: HttpClient) {
  }

  save(clienteInput: ClienteInput): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(`${this.url}`, clienteInput);
  }

  findAll(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(`${this.url}`);
  }

  getKpi(): Observable<ClienteKpi> {
    return this.http.get<ClienteKpi>(`${this.url}/kpideclientes`);
  }
}
