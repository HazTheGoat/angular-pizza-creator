import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { PizzaCreatorComponent } from './pizza-app/components/pizza-creator/pizza-creator.component';
import { PizzaFormComponent } from './pizza-app/components/pizza-form/pizza-form.component';
import { PizzaSizeComponent } from './pizza-app/components/pizza-size/pizza-size.component';
import { PizzaToppingsComponent } from './pizza-app/components/pizza-toppings/pizza-toppings.component';
import { PizzaViewerComponent } from './pizza-app/components/pizza-viewer/pizza-viewer.component';
import { PizzaSummaryComponent } from './pizza-app/components/pizza-summary/pizza-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaAppComponent,
    PizzaCreatorComponent,
    PizzaFormComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaViewerComponent,
    PizzaSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
