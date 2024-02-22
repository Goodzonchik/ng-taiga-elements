import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ContainerComponent } from './components/container/container.component';
import { importProvidersFrom } from '@angular/core';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { TuiPushModule } from '@taiga-ui/kit';
import { ParentProviderComponent } from './components/parent-provider/parent-provider.component';

(async () => {
  const app = await createApplication({
    providers: [
      importProvidersFrom(
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiPushModule
      ),
    ],
  });


  define('custom-container', ContainerComponent);
  define('parent-provider', ParentProviderComponent);

  function define(name: string, component: any) {
    const element = createCustomElement(component, {
      injector: app.injector,
    });

    customElements.define(name, element);
  }
})();


/* import { createCustomElement } from '@angular/elements';
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
})(); */

// DOC
// то что будет в registry это будет тегом для компонента.