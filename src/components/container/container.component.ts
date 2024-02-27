import { JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  inject,
} from '@angular/core';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { TuiButtonModule } from '@taiga-ui/core';
import { UrlService } from 'src/services/url.service';
import { PARENT_PROVIDER_TOKEN } from 'src/tokens/parent-provider.token';

@Component({
  standalone: true,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  imports: [NgIf, NgFor, JsonPipe, TuiButtonModule, TuiTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    UrlService,
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
  #urlService = inject(UrlService);

  urlParams = this.#urlService.parseParams(window.location.href);
  winsowSize = 0;

  config = null;

  @Input() title = '';

  @Output() updateTitle = new EventEmitter<void>();

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.winsowSize = event.target.innerWidth;
    }

  constructor() {
    this.config = (window as any).config;
    this.winsowSize = window.innerWidth;
  }

  onUpdateTitle() {
    this.updateTitle.emit();
  }
}
