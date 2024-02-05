import { Component } from '@angular/core';

import { TuiRootModule } from '@taiga-ui/core';

@Component({
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  imports: [TuiRootModule]
})
export class AppComponent {
  title = 'ng-taiga-elements';
}
