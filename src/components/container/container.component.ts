import { Component } from '@angular/core';

import { TuiRootModule } from '@taiga-ui/core';

@Component({
  standalone: true,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  imports: [TuiRootModule]
})
export class ContainerComponent {
  title = 'ng-taiga-elements';
}
