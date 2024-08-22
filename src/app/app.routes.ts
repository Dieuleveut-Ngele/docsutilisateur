import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { AllaGuideComponent } from './components-docs/alla-guide/alla-guide.component';
import { LoremComponent } from './components-docs/alla-guide/lorem/lorem.component';
import { IpsumComponent } from './components-docs/alla-guide/ipsum/ipsum.component';
import { DolorComponent } from './components-docs/alla-guide/dolor/dolor.component';
import { BulkNotificationComponent } from './components-docs/bulk-notification/bulk-notification.component';

// export const routes: Routes = [
    
//     { path: '', component: HomeComponent },
//     { path: 'docs', component: DocsComponent, children: [
//         { path: 'alla-guide', component: AllaGuideComponent, children: [
//             { path: 'lorem', component: LoremComponent },
//             { path: 'ipsum', component: IpsumComponent },
//             { path: 'dolor', component: DolorComponent },
//             { path: 'bulk-notification', component: BulkNotificationComponent }
//         ] },
//         { path: 'bulk-notification', component: BulkNotificationComponent },
//         { path: '', redirectTo: 'alla-guide', pathMatch: 'full' }
//     ] },
//     { path: '**', redirectTo: '' }  
// ];

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
      path: 'docs', 
      component: DocsComponent, 
      children: [
        { 
          path: 'alla-guide', 
          component: AllaGuideComponent, 
          children: [
            { path: 'lorem', component: LoremComponent },
            { path: 'ipsum', component: IpsumComponent },
            { path: 'dolor', component: DolorComponent }
          ] 
        },
        { path: 'bulk-notification', component: BulkNotificationComponent },
        { path: '', redirectTo: 'alla-guide', pathMatch: 'full' }
      ] 
    },
    { path: '**', redirectTo: '' }  
  ];
  
