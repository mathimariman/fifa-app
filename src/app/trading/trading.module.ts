import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerService } from './services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoolfilterPipe } from './poolfilter.pipe';
import { PlayerCardComponent } from './player-card/player-card.component';
import { BankComponent } from './bank/bank.component';
import { BankService } from './services/bank.service';
import { DataService } from './services/data.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, NgbTypeaheadModule, ReactiveFormsModule],
  declarations: [DashboardComponent, PoolfilterPipe, PlayerCardComponent, BankComponent],
  providers: [PlayerService, BankService, DataService],
  exports: [DashboardComponent]
})
export class TradingModule {
}
