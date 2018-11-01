import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FutbinPrices } from '../models/futbin-prices';

@Injectable()
export class FutbinService {

  constructor(private http: HttpClient) {}

  getPlayerPrice = (id: string): Observable<{ id: string; price: number }> =>
    this.http
      .get<FutbinPrices>(`http://ec2-18-197-208-57.eu-central-1.compute.amazonaws.com:3000/api/prices?playerIds=${id}`)
      .pipe(map(prices => ({ id, price: +prices[id] })));
}
