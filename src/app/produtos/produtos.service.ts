import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private API = '/assets/produtos.json'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Produto[]>(this.API);
  }
}
