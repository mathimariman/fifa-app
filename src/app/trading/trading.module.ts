import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerService } from './services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoolfilterPipe } from './poolfilter.pipe';
import { PlayerCardComponent } from './player-card/player-card.component';
import { FutbinService } from './services/futbin.service';
import { EaService } from './services/ea.service';
import { BankComponent } from './bank/bank.component';
import { BankService } from './services/bank.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, NgbTypeaheadModule, ReactiveFormsModule],
  declarations: [DashboardComponent, PoolfilterPipe, PlayerCardComponent, BankComponent],
  providers: [PlayerService, FutbinService, EaService, BankService],
  exports: [DashboardComponent]
})
export class TradingModule {
}
