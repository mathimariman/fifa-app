import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor() {}

  // TODO1: Start with using PlayerService to get Playerpool
  // TODO2: Inside pipe use operators to transform the playerpool to a BankSaldo
  getBankSaldo(): Observable<number> {
    return;
  }
}
