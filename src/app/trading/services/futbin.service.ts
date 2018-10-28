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
      .get<FutbinPrices>(`/futbin/19/playerPrices?player=${id}`)
      .pipe(map(prices => ({ id, price: +prices[id].prices.ps.LCPrice.replace(/,/g, '') })));
}
