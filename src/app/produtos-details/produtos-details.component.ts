import { Produtos } from '../produtos';
import { Component, OnInit, Input } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ProdutosListComponent } from '../produtos-list/produtos-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-details',
  templateUrl: './produtos-details.component.html',
  styleUrls: ['./produtos-details.component.css']
})
export class ProdutosDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['produtos']);
  }
}
