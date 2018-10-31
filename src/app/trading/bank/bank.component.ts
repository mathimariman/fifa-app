import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  saldo: Observable<number>;
  bank = new FormControl();

  constructor(private bankService: BankService) {
  }

  ngOnInit() {
    this.saldo = this.bankService.getBankSaldo();
    this.bank.valueChanges.subscribe(value => this.bankService.updateBank(value));
  }
}
