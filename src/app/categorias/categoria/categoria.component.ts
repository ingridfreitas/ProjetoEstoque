import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/core/model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {


  categorias: Observable<Categoria[]>;
  displayedColumns = ['id', 'nomecat'];

  constructor(private categoriaService: CategoriaService) { 
    this.categorias = this.categoriaService.listar()
  }

  ngOnInit(): void {
  }

}
