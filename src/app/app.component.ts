import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { QuoteIssueComponent } from './quote-issue/quote-issue.component';
import { PolicyViewComponent } from './policy-view/policy-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jaga';
}
