import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { QuoteIssueComponent } from './quote-issue/quote-issue.component';
import { PolicyViewComponent } from './policy-view/policy-view.component';
import { NewcustomerComponent } from './customers/newcustomer/newcustomer.component';
import { CustomersearchComponent } from './customers/customersearch/customersearch.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomersComponent,
    QuoteIssueComponent,
    PolicyViewComponent,
    NewcustomerComponent,
    CustomersearchComponent,
    CustomerslistComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
      path: 'newcustomer',
      component: NewcustomerComponent
    },
    {
      path: 'customersearch',
      component: CustomersearchComponent
    },
    {
      path: 'quote-issue',
      component: QuoteIssueComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
