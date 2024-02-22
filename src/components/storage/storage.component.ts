
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDropdownHostModule } from '@taiga-ui/cdk';

import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiRootModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiSelectModule,
} from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.less'],
  imports: [
    TuiButtonModule,
    TuiDropdownModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiRootModule,
    FormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiDropdownHostModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorageComponent {
  email = new FormControl('mail@mail.ru');

  items = [
    'Luke Skywalker',
    'Leia Organa Solo',
    'Darth Vader',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
  ];

  clearStorage() {
    localStorage.clear();
  }

  setLocalStorage() {
    localStorage.setItem('emailValue', this.email.value);
  }

  getFromlocalStorage() {
    console.log(
      localStorage.getItem('emailValue'),
      localStorage.getItem('pageItem'),
    );
  }
}