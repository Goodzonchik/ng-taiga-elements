import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import {
  TuiAlertModule,
  TuiAlertService,
  TuiButtonModule,
  TuiDialogModule,
  TuiDialogService,
} from '@taiga-ui/core';

@Component({
  standalone: true,
  selector: 'modal-comonent',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  imports: [TuiDialogModule, TuiAlertModule, TuiButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  #alertService = inject<TuiAlertService>(TuiAlertService);
  #dialogService = inject(TuiDialogService);

  openDialog() {
    this.#dialogService.open('Hello!').subscribe();
  }

  alertDialog() {
    this.#alertService
      .open('Basic <strong>HTML</strong>', { label: 'With a heading!' })
      .subscribe();
  }
}
