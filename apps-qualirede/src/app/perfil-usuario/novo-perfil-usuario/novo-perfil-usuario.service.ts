import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovoPerfilUsuarioService {

  constructor(private _http:HttpClient) { }

  //conexao front com back
  apiUrl = 'http://localhost:3000/novo_perfil_usuario'

  novo_perfil_usuario(data:any):Observable<any>{
    console.log(data, 'novoperfilusuario=>')
    return this._http.post(`${this.apiUrl}`,data)
  }
  
}
