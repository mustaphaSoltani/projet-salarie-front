import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Salarie} from './Model/Salarie';
import {SalarieRequest} from './Model/SalarieRequest';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {
  link = 'http://localhost:8080/api/salaries';
  constructor(private http: HttpClient) { }

  addSalarie(salarieRequest: SalarieRequest): Observable<any> {
    console.log('salairies' + salarieRequest);
    return this.http.post(this.link + '/addSalarie', salarieRequest );
  }
  getSalaries(critere: any): Observable<any> {
    return this.http.get(this.link + '?critere=' + critere );
  }
}
