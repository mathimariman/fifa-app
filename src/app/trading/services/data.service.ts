import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import { Observable } from 'rxjs';
import { FutbinPrices } from '../models/futbin-prices';
import { map } from 'rxjs/operators';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  getPlayers(term: string): Observable<Player[]> {
    return this.http
      .get<Player[]>('http://ec2-18-197-208-57.eu-central-1.compute.amazonaws.com:3000/api/players/search?playerName=' + term);
  }

  getPlayerPrice = (id: string): Observable<{ id: string; price: number }> =>
    this.http
      .get<FutbinPrices>(`http://ec2-18-197-208-57.eu-central-1.compute.amazonaws.com:3000/api/prices?playerIds=${id}`)
      .pipe(map(prices => ({ id, price: +prices[id] })));
}
