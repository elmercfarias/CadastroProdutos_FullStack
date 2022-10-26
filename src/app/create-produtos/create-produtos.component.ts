import { ProdutosService } from '../produtos.service';
import { Produtos } from '../produtos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-produtos',
  templateUrl: './create-produtos.component.html',
  styleUrls: ['./create-produtos.component.css']
})
export class CreateProdutosComponent implements OnInit {

  publicacao: Produtos = new Produtos();
  submitted = false;

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit() {
  }

  newProdutos(): void {
    this.submitted = false;
    this.produtos = new Produtos();
  }

  save() {
    this.produtosService.createProdutos(this.produtos)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produtos = new Produtos();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }
}
