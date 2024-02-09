import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { PARENT_PROVIDER_TOKEN } from 'src/parent-provider.token';

@Component({
  standalone: true,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  imports: [NgIf, NgFor, TuiRootModule, TuiButtonModule, TuiTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PARENT_PROVIDER_TOKEN,
      useValue: 'I am parent provide from',
    },
  ],
  viewProviders: [
    {
      provide: PARENT_PROVIDER_TOKEN,
      useValue: 'I am parent view provide',
    },
  ],
})
export class ContainerComponent {
  @Input() title = '';

  @Output() updateTitle = new EventEmitter<void>();

  onUpdateTitle() {
    this.updateTitle.emit();
  }
}
