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
