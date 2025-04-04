import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true /* no anima la primera transacción */,
        // onViewTransitionCreated(transitionInfo){
        //   console.log({transitionInfo});
        // }
      })
    ),
    importProvidersFrom(HttpClientModule),
  ],
};
