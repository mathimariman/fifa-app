import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor(public bankService: BankService) {
  }

  ngOnInit() {
  }

  addBuying(): void {
    this.bankService.addBuying(1000);
  }

  removeBuying(): void {
    this.bankService.removeBuying(1000);
  }

  addSelling(): void {
    this.bankService.addSelling(1000);
  }

  removeSelling(): void {
    this.bankService.removeSelling(1000);
  }

}
