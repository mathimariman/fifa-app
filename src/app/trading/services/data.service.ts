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
      .get<Player[]>(`https://4zgwv0ez11.execute-api.eu-central-1.amazonaws.com/dev/player/search?playerName=${term}`)
  }

  getPlayerPrice = (id: string): Observable<{ id: string; price: number }> =>
    this.http
      .get<FutbinPrices>(`https://4zgwv0ez11.execute-api.eu-central-1.amazonaws.com/dev/price/search?playerId=${id}`)
      .pipe(map(prices => ({ id, price: +prices[id] })));
}
