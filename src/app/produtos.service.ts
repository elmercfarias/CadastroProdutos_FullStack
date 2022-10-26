import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseUrl = 'http://localhost:8080/api/v1/produtos';

  constructor(private http: HttpClient) { }

  getProdutos(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProdutos(produtos: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, produtos);
  }

  updateProdutos(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProdutos(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProdutossList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
