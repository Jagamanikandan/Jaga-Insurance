import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { QuoteIssueComponent } from './quote-issue/quote-issue.component';
import { PolicyViewComponent } from './policy-view/policy-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomersComponent,
    QuoteIssueComponent,
    PolicyViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
