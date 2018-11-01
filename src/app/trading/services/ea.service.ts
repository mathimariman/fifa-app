import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import { Observable } from 'rxjs';


@Injectable()
export class EaService {

  constructor(private http: HttpClient) {}

  searchPlayers(term: string): Observable<Player[]> {
    return this.http
      .get<Player[]>('http://ec2-18-197-208-57.eu-central-1.compute.amazonaws.com:3000/api/players/search?playerName=' + term);
  }
}
