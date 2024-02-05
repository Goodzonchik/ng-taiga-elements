import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const toogleElement = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('app-component', toogleElement);

})();