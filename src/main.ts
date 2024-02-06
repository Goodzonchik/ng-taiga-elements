import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ContainerComponent } from './components/container/container.component';
import { importProvidersFrom } from '@angular/core';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { TuiPushModule } from '@taiga-ui/kit';

(async () => {
  const app = await createApplication({
    providers: [
      importProvidersFrom(
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiPushModule,
      ),
    ],
  });

  const container = createCustomElement(ContainerComponent, {
    injector: app.injector,
  });

  customElements.define('custom-container', container);

})();