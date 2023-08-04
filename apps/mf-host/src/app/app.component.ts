import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, NgbAlertModule],
  selector: 'nx-mf-treeshaking-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-host';
}
