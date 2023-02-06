import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private _http:HttpClient) { }

  //conexao front com back
  apiUrl = 'http://localhost:3000/pessoas'

  pessoas(data:any):Observable<any>{
    console.log(data, 'pessoas=>')
    return this._http.post(`${this.apiUrl}`,data)
  }
  
}
