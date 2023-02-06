import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovotipodeusuarioService {

  constructor(private _http:HttpClient) { 
  }

  //conexao front com back
  apiUrl = 'http://localhost:3000/novo_tipo_de_usuario'

  createNovoTipoDeUsuario(data:any):Observable<any>{
    console.log(data, 'createNovoTipoDeUsuario=>')
    return this._http.post(`${this.apiUrl}`,data)
  }
}
