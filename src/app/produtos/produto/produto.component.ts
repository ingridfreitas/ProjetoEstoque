import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/core/model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Observable<Produto[]>
  displayedColumns = ['id', 'nomeproduto'];

  constructor(private prodService: ProdutosService) { 
    this.produtos = prodService.listar();
  }

  ngOnInit(): void {
  }

}
