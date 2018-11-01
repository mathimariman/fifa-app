import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TradingModule } from './trading/trading.module';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TradingModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
