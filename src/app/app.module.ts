import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { WindowRef } from './_windowRef.service';
// import { WindowDOMRefService } from './-window-domref.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  // providers: [WindowDOMRefService], 
  providers: [ {provide: Window, useValue: window} ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
