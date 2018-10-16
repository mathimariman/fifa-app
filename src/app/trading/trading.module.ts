import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerService } from './services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PoolfilterPipe } from './poolfilter.pipe';
import { PlayerCardComponent } from './player-card/player-card.component';
import { FutbinService } from './services/futbin.service';
import { EaService } from './services/ea.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, NgbTypeaheadModule],
  declarations: [DashboardComponent, PoolfilterPipe, PlayerCardComponent],
  providers: [PlayerService, FutbinService, EaService],
  exports: [DashboardComponent]
})
export class TradingModule {}
