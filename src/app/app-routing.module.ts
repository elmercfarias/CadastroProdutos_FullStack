import { ProdutosDetailsComponent } from './produtos-details/produtos-details.component';
import { CreateProdutosComponent } from "./create-produtos/CreateProdutosComponent";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { UpdateProdutosComponent } from './update-produtos/update-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosListComponent },
  { path: 'add', component: CreateProdutosComponent },
  { path: 'update/:id', component: UpdateProdutosComponent },
  { path: 'details/:id', component: ProdutosDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
