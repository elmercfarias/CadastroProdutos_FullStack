import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-update-produtos',
  templateUrl: './update-produtos.component.html',
  styleUrls: ['./update-produtos.component.css']
})
export class UpdateProdutosComponent implements OnInit {

  id: number;
  produtos: Produtos;

  constructor(private route: ActivatedRoute,private router: Router,
    private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtos = new Produtos();

    this.id = this.route.snapshot.params['id'];
    
    this.produtosService.getProdutos(this.id)
      .subscribe(data => {
        console.log(data)
        this.produtos = data;
      }, error => console.log(error));
  }

  updatePublicacao() {
    this.produtosService.UpdateProdutos(this.id, this.produtos)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produtos= new Produtos();
    this.gotoList();
  }

  onSubmit() {
    this.updateProdutos();    
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }
}
