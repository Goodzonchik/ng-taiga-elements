Modal
<div class="row-button">
  <h3>Тест модального окна и алерта</h3>
  <button tuiButton (click)="openDialog()">Открыть модалку</button>

  <button tuiButton (click)="alertDialog()">Открыть alert</button>
</div>

:host {
  display: block;
  width: 100%;
}

.row-button {
  margin: 20px 0;

  button {
    margin-right: 20px;
  }
}


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









______________________________________________________
  storage
<div class="row-button">
  <h3>работа с localStorage</h3>

  <button tuiButton (click)="clearStorage()">clear</button>

  <tui-dropdown-host>
    <tui-select tuiTextfieldSize="s" [formControl]="email">
      Character
      <input placeholder="Choose your hero" tuiTextfield />
      <tui-data-list-wrapper
        *tuiDataList
        [items]="items"
      ></tui-data-list-wrapper>
    </tui-select>
  </tui-dropdown-host>

  <button tuiButton (click)="setLocalStorage()">set</button>

  <button tuiButton (click)="getFromlocalStorage()">get</button>
</div>


:host {
  display: block;
  width: 100%;
}

.title {
  margin: 30px;
  width: 100%;
  text-align: center;
  color: rgb(33, 33, 33);
}


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


_______________________________________________________________________
  test|root
<tui-root>
  <div>
    <h3>Тест Input-параметра</h3>
    <h2 class="title">{{ titleMessage }}</h2>
    <h2 class="title-app">{{ titleMessage }}</h2>
    <h2 class="title-local">{{ titleMessage }}</h2>
  </div>

  <hr />

  <div class="row-button">
    <ng-content select="[storage]"></ng-content>
  </div>

  <div class="row-button">
    <button tuiButton (click)="eventEmmit()">Тест эмита</button>

    <button tuiButton (click)="setGoogleAnalytic()">
      Сохранить Google Analytic event
    </button>
  </div>

  <hr />

  <div>
    <button
      iconRight="tuiIconChevronDown"
      tuiButton
      type="button"
      [tuiDropdown]="dropdownContent"
      [tuiDropdownManual]="open"
      (click)="onClick()"
      (tuiActiveZoneChange)="onActiveZone($event)"
      (tuiObscured)="onObscured($event)"
    >
      Choose
      <ng-template #dropdownContent>
        <div class="dropdown">But there is nothing to choose...</div>
      </ng-template>
    </button>
  </div>

  <hr />

  <div>
    <h3>События window</h3>
    <h2>winsowSize = {{ winsowSize }}</h2>

    <h3>Получение utm_меток из url</h3>
    <h2>parsedSearchParams = {{ parsedSearchParams }}</h2>
  </div>

  <div>
    <h3>Проверка ng-template</h3>
    <div class="layout">
      <div class="column">
        <ng-content select="[first]"></ng-content>
      </div>
      <div class="column">
        <ng-content select="[second]"></ng-content>
      </div>
    </div>

    <ng-content select="[license]"></ng-content>
  </div>

  <div>
    <h3>Проверка динамического размера</h3>
    <button tuiButton (click)="openAccordion()">openAccordion</button>
    <div *ngIf="isOpened">sdfsfd</div>
  </div>

  <div>
    <h3>Проверка другого компонента</h3>
    <modal></modal>
  </div>

  <ng-container ngProjectAs="tuiOverContent"> </ng-container>
  <ng-container ngProjectAs="tuiOverDialogs"> </ng-container>
  <ng-container ngProjectAs="tuiOverAlerts"> </ng-container>
  <ng-container ngProjectAs="tuiOverPortals"> </ng-container>
  <ng-container ngProjectAs="tuiOverHints"> </ng-container>
</tui-root>


        :host {
  display: block;
  height: 100%;
  width: 100%;
}

.row-button {
  margin: 20px 0;

  button {
    margin-right: 20px;
  }
}

.column {
  width: 100%;
  background-color: #9292dd;

  &:hover {
    background-color: rgb(199, 255, 162);
  }
}

.layout {
  display: flex;
  width: 100%;
  justify-content: center;
  border: 1px solid rgb(9, 27, 148);
}

.title-local {
  color: green;
}

@media only screen and (max-width: 1200px) {
  .title-local {
    color: black;
  }
}



import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  NO_ERRORS_SCHEMA,
  Output,
  inject,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { WINDOW } from '@ng-web-apis/common';
import {
  TuiAlertModule,
  TuiAlertService,
  TuiButtonModule,
  TuiDialogModule,
  TuiDialogService,
  TuiDropdownModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';

import { UtmService } from '../utm.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiDropdownHostModule } from '@taiga-ui/cdk';
import { Test3Component } from '../test3/test3.component';

type IWindow = {
  dataLayer: any[];
  location: any;
  innerWidth: number;
  formConfig: any;
};

@Component({
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  imports: [
    NgIf,
    AsyncPipe,
    TuiDialogModule,
    TuiButtonModule,
    TuiDropdownModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiDropdownHostModule,
    TuiRootModule,
    Test3Component,
  ],
  providers: [UtmService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class TestComponent implements AfterContentInit {
  #alertService = inject<TuiAlertService>(TuiAlertService);
  #dialogService = inject<TuiDialogService>(TuiDialogService);
  #window = inject<IWindow>(WINDOW);
  #utmService = inject(UtmService);

  parsedSearchParams = this.#utmService.parseUtm(this.#window.location.search);
  isOpened = false;

  @Input() titleMessage: string;

  @Output() clickButton = new EventEmitter<string>();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.winsowSize = event.target.innerWidth;
  }

  winsowSize = 0;
  open = false;

  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });

  ngAfterContentInit(): void {
    this.winsowSize = this.#window.innerWidth;

    // Удаление атрибута data-tui-theme
    document.body.removeAttribute('data-tui-theme'); // for Taiga 3.*
    document.getElementsByTagName('html')[0].removeAttribute('data-tui-theme'); // for Taiga 4.*

    console.log(this.#window.formConfig);
  }

  setGoogleAnalytic() {
    this.#window.dataLayer = this.#window.dataLayer || [];
    this.#window.dataLayer.push({ event: 'event_from_web_component' });
  }

  openDialog() {
    this.#dialogService.open('Hello!').subscribe();
  }

  alertDialog() {
    this.#alertService
      .open('Basic <strong>HTML</strong>', { label: 'With a heading!' })
      .subscribe();
  }

  eventEmmit() {
    this.clickButton.emit('clickButton!!!!');
  }

  onClick(): void {
    this.open = !this.open;
  }

  onObscured(obscured: boolean): void {
    if (obscured) {
      this.open = false;
    }
  }

  onActiveZone(active: boolean): void {
    this.open = active && this.open;
  }

  openAccordion() {
    this.isOpened = !this.isOpened;
  }
}



__________________________________________________________--
import { InjectionToken } from '@angular/core';

export const TITLE_MESSAGE_INNER_TOKEN = new InjectionToken<string>(
  'TITLE_MESSAGE_INNER_TOKEN',
);



import { Injectable } from '@angular/core';

@Injectable()
export class UtmService {
  parseUtm(url: string): any {
    return decodeURIComponent(url);
  }
}


________________________________________________--
// main.ts

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
//import { BrowserModule, createApplication } from '@angular/platform-browser';
import { TestComponent } from './app/test/test.component';
import { StorageComponent } from './app/storage/storage.component';
import { Test3Component } from './app/test3/test3.component';
import { ModalComponent } from './app/modal/modal.component';
import { importProvidersFrom } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';

(async () => {
  const otherApp = await createApplication({
    providers: [importProvidersFrom(TuiRootModule), provideAnimations()],
  });

  const appRoot = await createApplication({
    providers: [
      importProvidersFrom(TuiRootModule, TuiDialogModule, TuiAlertModule),
      provideAnimations(),
    ],
  });

  createAndDefineApp(TestComponent, 'test-component', appRoot);
  createAndDefineApp(StorageComponent, 'cu-storage', otherApp);
  createAndDefineApp(Test3Component, 'license-modal', otherApp);
  createAndDefineApp(ModalComponent, 'my-modal', appRoot);

  function createAndDefineApp(element: any, registryName: string, app: any) {
    const el = createCustomElement(element, {
      injector: app.injector,
    });

    customElements.define(registryName, el);
  }
})();

// DOC
// то что будет в registry это будет тегом для компонента.


_________________________________________________________-
  @import "@taiga-ui/core/styles/taiga-ui-local.less";

.title-app {
  color: blue;
}

tui-dropdown-host {
  z-index: 1000;
}

_____________________________________________________________________
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>univer-test</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <style>
      #wrapper {
        margin: 20px auto;
        width: 50%;
        border: 1px solid black;
        position: relative;

        --tui-primary: red;
      }

      .wrapper_local {
        margin: 20px auto;
        width: 50%;
        border: 1px solid black;
        position: relative;
      }

      .title {
        color: red;
      }

      .title-app {
        color: red;
      }

      .title-local {
        color: red;
      }

      .current-page {
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        width: 50opx;
        margin: 50px auto;
      }
    </style>
    <link rel="stylesheet" href="http://localhost:4201/styles.css" />

    <script>
      var formConfig = {
        a: "test",
        formNalme: "test",
      };
    </script>

    <div class="wrapper_local">
      <h2 class="title">class title</h2>
      <h2 class="title-app">class title-app</h2>
      <h2 class="title-local">class title-local</h2>
    </div>

    <div id="wrapper">
      <test-component id="test" title-message="Заголовок как Input">
        <cu-storage first></cu-storage>

        <my-modal second></my-modal>
        <license-modal license></license-modal>
      </test-component>
    </div>

    <my-modal></my-modal>

    <cu-storage></cu-storage>

    <div class="current-page">Местный шрифт!!!</div>

    <script src="http://localhost:4201/runtime.js" type="module"></script>
    <script src="http://localhost:4201/polyfills.js" type="module"></script>
    <script src="http://localhost:4201/main.js" type="module"></script>

    <script>
      // Обработка событий из компонентов
      document
        .getElementById("test")
        .addEventListener("clickButton", (event) => {
          alert(
            `Сработа событие clickButton в тестовом компоненте ${event.detail}`,
          );
        });

      localStorage.setItem("pageItem", "_pageItem");

      setTimeout(() => {
        document
          .getElementById("test")
          .setAttribute("title-message", "Обновка пришла");
      }, 2000);
    </script>
  </body>
</html>
