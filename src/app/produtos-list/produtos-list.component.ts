import { ProdutosDetailsComponent } from './../produtos-details/produtos-details.component';
import { Observable } from "rxjs";
import { ProdutosService } from "./../produtos.service";
import { Produtos } from "./../produtos";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-produtos-list",
  templateUrl: "./produtos-list.component.html",
  styleUrls: ["./produtos-list.component.css"]
})
export class ProdutosListComponent implements OnInit {
  publicacoes: Observable<Produtos[]>;

  constructor(private produtosService: ProdutosService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produtos = this.produtosService.getProdutossList();
  }

  deleteProdutos(id: number) {
    this.produtosService.deleteProdutos(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produtosDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateProdutos(id: number){
    this.router.navigate(['update', id]);
  }
}
