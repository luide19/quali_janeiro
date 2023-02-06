import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  constructor(private _http:HttpClient){ }

  //conexao front com back
  apiUrl = 'http://localhost:3000/user'

  //pegar tudo
  getAllData(): Observable<any>{
    return this._http.get(`${this.apiUrl}`)
  }

  //criar
  createData(data:any):Observable<any>{
    console.log(data, 'createapi=>')
    return this._http.post(`${this.apiUrl}`,data)
  }

  //filtro de usuario
  getUsuario(): Observable<any>{
    return this._http.get(`${this.apiUrl}`)
  }

  //filtro de sistema
  getSistema(): Observable<any>{
    return this._http.get(`${this.apiUrl}`)
  }
}