import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

// Démarrer l'application avec un composant autonome
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
});


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppConfig } from './app/app.config';

// platformBrowserDynamic().bootstrapModule(AppConfig)
//   .catch(err => console.error(err));



// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
