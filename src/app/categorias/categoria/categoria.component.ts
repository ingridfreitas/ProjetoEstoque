import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[] = [
    {id: 1, nomecat: 'Bebidas'},
    {id: 2, nomecat: 'Açougue'},
    {id: 3, nomecat: 'Doces'},
    {id: 4, nomecat: 'Salgados'},
    {id: 5, nomecat: 'Limpeza'}
  ];
  displayedColumns = ['id', 'nomecat'];

  constructor() { }

  ngOnInit(): void {
  }

}
