import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { CalculatorService } from './calculator.service';
import { PostService } from './shared/post.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggerService,
    CalculatorService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
