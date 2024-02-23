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
  

  import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
  import { TuiDropdownHostModule } from '@taiga-ui/cdk';
import { UtmService } from 'src/utm.service';
  
  type IWindow = {
    dataLayer: any[];
    location: any;
    innerWidth: number;
    formConfig: any;
  };
  
  @Component({
    standalone: true,
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.less'],
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
    ],
    providers: [UtmService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [NO_ERRORS_SCHEMA],
  })
  export class RootComponent implements AfterContentInit {
    #alertService = inject<TuiAlertService>(TuiAlertService);
    #dialogService = inject<TuiDialogService>(TuiDialogService);
    #window = inject<IWindow>(WINDOW);
    #utmService = inject(UtmService);
  
    parsedSearchParams = this.#utmService.parseUtm(this.#window.location.search);
    isOpened = false;
  
    @Input() titleMessage: string = 'default title';
  
    @Output() clickButton = new EventEmitter<string>();
  
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
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
  
    onObscured(obscured: any): void {
      if (obscured) {
        this.open = false;
      }
    }
  
    onActiveZone(active: any): void {
      this.open = active && this.open;
    }
  
    openAccordion() {
      this.isOpened = !this.isOpened;
    }
  }
  