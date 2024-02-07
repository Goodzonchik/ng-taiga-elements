import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import {  TuiButtonModule, TuiRootModule } from '@taiga-ui/core';

@Component({
  standalone: true,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  imports: [TuiRootModule, TuiButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ContainerComponent {
  @Input() title = '';

  @Output() updateTitle = new EventEmitter<void>();

  onUpdateTitle() {
    this.updateTitle.emit();
  }
}
