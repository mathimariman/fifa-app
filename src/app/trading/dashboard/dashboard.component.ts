import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgbTypeaheadSelectItemEvent, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';

import { PlayerService } from '../services/player.service';
import { Player } from '../models/player';
import { Pools } from '../pools.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playerPool$: Observable<Player[]>;
  pools = Pools;

  @ViewChild('searchInput')
  searchInput: NgbTypeahead;

  @ViewChild('typeahead')
  typeAheadNode: ElementRef;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerPool$ = this.playerService.getPlayerPool();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      tap(term => {
        if (term.length === 0 && this.searchInput.isPopupOpen()) {
          this.searchInput.dismissPopup();
        }
      }),
      debounceTime(200),
      filter(term => term.length >= 3),
      switchMap(term => this.playerService.searchPlayers(term))
    );

  itemSelected = (event: NgbTypeaheadSelectItemEvent, searchInput) => {
    event.preventDefault();
    this.playerService.addToPlayerPool(event.item);
    this.typeAheadNode.nativeElement.value = '';
  };

  moveToPool = (player: Player, pool: Pools) => this.playerService.moveToPlayerPool(player, pool);
  removeFromPlayerPool = (player: Player) => this.playerService.removeFromPlayerPool(player);

  myFormatter = player => player && player.fullName;
}
