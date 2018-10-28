import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  bank = 0;
  totalCost = 0;
  totalProfit = 0;
  calculationResult = 0;

  constructor() {
  }

  addSelling(value: number): void {
    this.totalProfit = this.totalProfit + (value * 0.95);
    this.calculate();
  }

  addBuying(value: number): void {
    this.totalCost += value;
    this.calculate();
  }

  removeSelling(value: number): void {
    this.totalProfit = this.totalProfit - (value * 0.95);
    this.calculate();
  }

  removeBuying(value: number): void {
    this.totalCost -= value;
    this.calculate();
  }

  private calculate(): void {
    this.calculationResult = (this.bank + this.totalProfit) - this.totalCost;
  }

}
