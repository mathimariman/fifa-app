import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { map } from 'rxjs/operators';
import { FutbinPlayer } from '../models/futbin-player';
import { EaPrices, PriceDetails } from '../models/ea-prices';

@Injectable()
export class FutbinService {
  constructor(private http: HttpClient) {}

  searchPlayers = (term: string): Observable<Player[]> =>
    this.http.get<FutbinPlayer[]>(`/fut/search?year=19&term=${term}`).pipe(
      map(
        players =>
          Array.isArray(players) &&
          players.map(p => ({
            fullName: p.full_name,
            rating: p.rating,
            position: p.position,
            id: p.id,
            version: p.version,
            image: p.image
          }))
      )
    );

  getPlayerPrice = (id: string): Observable<PriceDetails> =>
    this.http
      .get<EaPrices>(`/fut/19/playerPrices?player=${id}`)
      .pipe(map(prices => prices[id].prices.ps));
}
