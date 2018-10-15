import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poolfilter'
})
export class PoolfilterPipe implements PipeTransform {
  transform(players: any, pool: any): any {
    return players.filter(p => p.pool === pool);
  }
}
