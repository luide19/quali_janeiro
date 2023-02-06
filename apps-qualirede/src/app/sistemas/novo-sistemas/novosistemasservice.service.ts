import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovosistemasserviceService {
  
  constructor(private _http:HttpClient) { }

  //conexao front com back
  apiUrl = 'http://localhost:3000/novo-sistemas'

  create_novo_sistemas(data:any):Observable<any>{
    console.log(data, 'setor=>')
    return this._http.post(`${this.apiUrl}`,data)
  }
  
}
