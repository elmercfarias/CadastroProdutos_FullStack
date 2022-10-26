import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProdutosComponent } from "./create-produtos/CreateProdutosComponent";
import { ProdutosDetailsComponent } from './produtos-details/produtos-details.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProdutosComponent } from './update-produtos/update-produtos.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateProdutosComponent,
    ProdutosDetailsComponent,
    ProdutosListComponent,
    UpdateProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
