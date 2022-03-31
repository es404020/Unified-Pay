import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from "@angular/elements";
import { AppComponent } from './app.component';
import { UnifiedPaymentComponent } from './unified-payment/unified-payment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    UnifiedPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
entryComponents:[
  UnifiedPaymentComponent
]
})
export class AppModule {
  constructor(private injector:Injector){

  }

  ngDoBootstrap(){

    const el = createCustomElement(UnifiedPaymentComponent,{injector:this.injector});

    customElements.define('unified-payment',el);

  }
}
