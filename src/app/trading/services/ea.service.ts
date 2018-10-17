import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import { Observable } from 'rxjs';
import { EaResponse } from '../models/ea-player';
import { map } from 'rxjs/operators';

@Injectable()
export class EaService {
  constructor(private http: HttpClient) {}

  searchPlayers(term: string): Observable<Player[]> {
    return this.http
      .get<EaResponse>(`/ea/item?jsonParamObject=${JSON.stringify({ name: term })}`)
      .pipe(
        map(response =>
          response.items.map(item => ({
            fullName: `${item.firstName} ${item.lastName}`,
            rating: `${item.rating}`,
            position: item.position,
            id: item.id,
            version: `${item.rarityId}`,
            image: item.headshot.imgUrl,
            prices: null
          }))
        )
      );
  }
}
