import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailActivityComponent } from './components/email-activity/email-activity.component';
import { PaymentActivityComponent } from './components/payment-activity/payment-activity.component';
import { WebActivityComponent } from './components/web-activity/web-activity.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmailActivityComponent,PaymentActivityComponent,WebActivityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quill-demo';
}
