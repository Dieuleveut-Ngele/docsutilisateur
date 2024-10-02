import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { AllaGuideComponent } from './components-docs/alla-guide/alla-guide.component';
import { BulkNotificationComponent } from './components-docs/bulk-notification/bulk-notification.component';
import { GuideFlashCashLiteComponent } from './components-docs/guide-flash-cash-lite/guide-flash-cash-lite.component';
import { GuideFlashMarchantComponent } from './components-docs/guide-flash-marchant/guide-flash-marchant.component';
import { GuideGestionStockComponent } from './components-docs/guide-flash-shop/guide-flash-shop.component';
import { GuideFlashTicketFlashPosComponent } from './components-docs/guide-flash-ticket-flash-pos/guide-flash-ticket-flash-pos.component';
import { GuideFlashBankComponent } from './components-docs/guide-flash-bank/guide-flash-bank.component';
import { OperateurAfricellDataComponent } from './components-docs/operateur-africell-data/operateur-africell-data.component';
import { OperateurGPTVISAComponent } from './components-docs/operateur-gptvisa/operateur-gptvisa.component';
import { OperateurMTNComponent } from './components-docs/operateur-mtn/operateur-mtn.component';
import { OperateurTelcoComponent } from './components-docs/operateur-telco/operateur-telco.component';
import { OperateurVasComponent } from './components-docs/operateur-vas/operateur-vas.component';
import { OperateurVodacomDataComponent } from './components-docs/operateur-vodacom-data/operateur-vodacom-data.component';
import { ParametrageComptaComponent } from './components-docs/parametrage-compta/parametrage-compta.component';
import { GuideTvComponent } from './components-docs/guide-tv/guide-tv.component';
import { GuideUtilisateurPaytaxComponent } from './components-docs/guide-utilisateur-paytax/guide-utilisateur-paytax.component';
import { WesternUnionComponent } from './components-docs/western-union/western-union.component';
import { MoneyGrameComponent } from './components-docs/money-grame/money-grame.component';
import { MukuruComponent } from './components-docs/mukuru/mukuru.component';
import { RakkacashComponent } from './components-docs/rakkacash/rakkacash.component';
import { ReportingFlashIdComponent } from './components-docs/reporting-flash-id/reporting-flash-id.component';
import { RiaComponent } from './components-docs/ria/ria.component';
import { SabaBaLarComponent } from './components-docs/saba-ba-lar/saba-ba-lar.component';
import { GuideOperateurCashInEtOutComponent } from './components-docs/guide-operateur-cash-in-et-out/guide-operateur-cash-in-et-out.component';
import { RakkacashAdminComponent } from './components-docs/rakkacash-admin/rakkacash-admin.component';
import { SababalarAdminComponent } from './components-docs/sababalar-admin/sababalar-admin.component';
import { RiaAdminComponent } from './components-docs/ria-admin/ria-admin.component';
import { RakkacashComplianceComponent } from './components-docs/rakkacash-compliance/rakkacash-compliance.component';
import { SababalarComplianceComponent } from './components-docs/sababalar-compliance/sababalar-compliance.component';
import { SababalarFinanceComponent } from './components-docs/sababalar-finance/sababalar-finance.component';
import { RakkacashFinanceComponent } from './components-docs/rakkacash-finance/rakkacash-finance.component';
import { RakkacashOperateurComponent } from './components-docs/rakkacash-operateur/rakkacash-operateur.component';
import { RiaComplianceComponent } from './components-docs/ria-compliance/ria-compliance.component';
import { RiaFinanceComponent } from './components-docs/ria-finance/ria-finance.component';
import { RiaOperateurComponent } from './components-docs/ria-operateur/ria-operateur.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: '', component: AllaGuideComponent },
      { path: 'introduction', component: AllaGuideComponent },
      { path: 'bulk-notification', component: BulkNotificationComponent },
      { path: 'flash-cash-lite', component: GuideFlashCashLiteComponent },
      { path: 'flash-marchant', component: GuideFlashMarchantComponent },

      { path: 'flash-pos', component: GuideOperateurCashInEtOutComponent },
      { path: 'gestion-stock', component: GuideGestionStockComponent },
      { path: 'flashticket-pos', component: GuideFlashTicketFlashPosComponent },
      { path: 'flashbank', component: GuideFlashBankComponent },
      { path: 'operateur-africell-data', component: OperateurAfricellDataComponent },

      { path: 'operateur-gpt-visa', component: OperateurGPTVISAComponent },
      { path: 'operateur-mtn', component: OperateurMTNComponent },
      { path: 'operateur-telco', component: OperateurTelcoComponent },
      { path: 'operateur-vas', component: OperateurVasComponent },
      { path: 'operateur-vodacom-data', component: OperateurVodacomDataComponent },

      { path: 'parametrage-compta', component: ParametrageComptaComponent },
      { path: 'guide-tv', component: GuideTvComponent },
      { path: 'guide-paytax', component: GuideUtilisateurPaytaxComponent },
      { path: 'western-union', component: WesternUnionComponent },
      { path: 'money-gram', component: MoneyGrameComponent },

      { path: 'mukuru', component: MukuruComponent },
      { path: 'rakkacash', component: RakkacashComponent },  
      { path: 'rakka-admin', component: RakkacashAdminComponent }, 
      { path: 'rakka-compliance', component: RakkacashComplianceComponent},  
      { path: 'rakka-finance', component: RakkacashFinanceComponent},
      { path: 'rakka-operateur', component: RakkacashOperateurComponent},
      { path: 'reporting-flashid', component: ReportingFlashIdComponent },
      { path: 'ria', component: RiaComponent },

      { path: 'ria-admin', component: RiaAdminComponent },
      { path: 'ria-compliance', component: RiaComplianceComponent},
      { path: 'ria-finance', component: RiaFinanceComponent},
      { path: 'ria-operateur', component: RiaOperateurComponent},
      { path: 'sababalar', component: SabaBaLarComponent },
      { path: 'saba-admin', component: SababalarAdminComponent },
      { path: 'saba-compliance', component: SababalarComplianceComponent},
      { path: 'saba-finance', component: SababalarFinanceComponent},
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];




// export const routes: Routes = [
//     { path: '', component: HomeComponent },
//     {
//       path: 'docs',
//       component: DocsComponent,
//       children: [
//         {
//           path: 'alla-guide',
//           component: AllaGuideComponent,
//           children: [
//             { path: 'lorem', component: LoremComponent },
//             { path: 'ipsum', component: IpsumComponent },
//             { path: 'dolor', component: DolorComponent }
//           ]
//         },
//         { path: 'bulk-notification', component: BulkNotificationComponent },
//         { path: '', redirectTo: 'alla-guide', pathMatch: 'full' }
//       ]
//     },
//     { path: '**', redirectTo: '' }
//   ];
