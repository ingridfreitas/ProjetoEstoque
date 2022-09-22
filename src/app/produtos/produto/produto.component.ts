import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [
    {id: 1, nomeproduto: 'Coca-Cola'},
    {id: 2, nomeproduto: 'Vinho'},
    {id: 3, nomeproduto: 'Pão de Mel'},
    {id: 4, nomeproduto: 'Bolo de Cenoura'},
    {id: 5, nomeproduto: 'Detergente'}
  ];
  displayedColumns = ['id', 'nomeproduto'];

  constructor() { }

  ngOnInit(): void {
  }

}
