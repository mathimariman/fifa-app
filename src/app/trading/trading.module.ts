import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerService } from './player.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PoolfilterPipe } from './poolfilter.pipe';
import { PlayerCardComponent } from './player-card/player-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, NgbTypeaheadModule],
  declarations: [DashboardComponent, PoolfilterPipe, PlayerCardComponent],
  providers: [PlayerService],
  exports: [DashboardComponent]
})
export class TradingModule {}
