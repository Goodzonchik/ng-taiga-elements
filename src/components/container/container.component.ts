import { JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { TuiButtonModule } from '@taiga-ui/core';
import { PARENT_PROVIDER_TOKEN } from 'src/parent-provider.token';

@Component({
  standalone: true,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  imports: [NgIf, NgFor, JsonPipe, TuiButtonModule, TuiTableModule],
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
  config = null;

  @Input() title = '';

  @Output() updateTitle = new EventEmitter<void>();

  constructor(){
    this.config = (window as any).config
  }

  onUpdateTitle() {
    this.updateTitle.emit();
  }
}
