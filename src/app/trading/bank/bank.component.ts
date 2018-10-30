import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  saldo: Observable<number>;
  constructor(private bankService: BankService) {}

  // TODO3: Get BankSaldo from bankService and subscribe with async pipe in template
  ngOnInit() {
    this.saldo = this.bankService.getBankSaldo();
  }
}
