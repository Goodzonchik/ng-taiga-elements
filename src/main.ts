import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ContainerComponent } from './components/container/container.component';
import { importProvidersFrom } from '@angular/core';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { ParentProviderComponent } from './components/parent-provider/parent-provider.component';

import { provideAnimations } from '@angular/platform-browser/animations';
import { RootComponent } from './components/root/root.component';
import { StorageComponent } from './components/storage/storage.component';
import { ModalComponent } from './components/modal/modal.component';

(async () => {
  const otherApp = await createApplication({
    providers: [ provideAnimations()],
  });

  const appRoot = await createApplication({
    providers: [
      importProvidersFrom(TuiRootModule, TuiDialogModule, TuiAlertModule), // нужно только для одного компонента, который содержит root, нужен один чтобы открывать модалки
      provideAnimations(),
    ],
  });


  createAndDefineApp(ContainerComponent, 'test-container', appRoot); // container - не валидное имя
  createAndDefineApp(ParentProviderComponent, 'parent-provider', otherApp);
  createAndDefineApp(RootComponent, 'tui-root', appRoot); // root - не валидное имя
  createAndDefineApp(StorageComponent, 'test-storage', otherApp); // storage - не валидное имя
  createAndDefineApp(ModalComponent, 'test-modal', appRoot); // modal - не валидное имя

  function createAndDefineApp(element: any, registryName: string, app: any) {
    const el = createCustomElement(element, {
      injector: app.injector,
    });

    customElements.define(registryName, el);
  }
})();
