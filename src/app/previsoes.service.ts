import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor (private httpClient: HttpClient) {

  }
  
  public obterPrevisoes(): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast?q=itu&appid=26735822845bb84be7ad00a666575a45&lang=pt_br&cnt=16')
  }
}
