import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { AllaGuideComponent } from './components-docs/alla-guide/alla-guide.component';
import { LoremComponent } from './components-docs/alla-guide/lorem/lorem.component';
import { IpsumComponent } from './components-docs/alla-guide/ipsum/ipsum.component';
import { DolorComponent } from './components-docs/alla-guide/dolor/dolor.component';
import { BulkNotificationComponent } from './components-docs/bulk-notification/bulk-notification.component';
import { GuideCommonComponent } from './components-docs/guide-common/guide-common.component';
import { GuideFlashCashLiteComponent } from './components-docs/guide-flash-cash-lite/guide-flash-cash-lite.component';
import { GuideFlashContactComponent } from './components-docs/guide-flash-contact/guide-flash-contact.component';
import { GuideFlashMarchantComponent } from './components-docs/guide-flash-marchant/guide-flash-marchant.component';
import { GuideFlashShopComponent } from './components-docs/guide-flash-shop/guide-flash-shop.component';
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
import { ProcedureAutorisationAccesComponent } from './components-docs/procedure-autorisation-acces/procedure-autorisation-acces.component';
import { RakkacashComponent } from './components-docs/rakkacash/rakkacash.component';
import { ReportingFlashIdComponent } from './components-docs/reporting-flash-id/reporting-flash-id.component';
import { RiaComponent } from './components-docs/ria/ria.component';
import { SabaBaLarComponent } from './components-docs/saba-ba-lar/saba-ba-lar.component';
import { WelcomAvatarComponent } from './welcom-avatar/welcom-avatar.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'docs', component: DocsComponent, children: [
        { path: 'lorem', component: WelcomAvatarComponent },
        { path: 'alla-guide', component: AllaGuideComponent, children: [
            { path: 'lorem', component: LoremComponent },
            { path: 'ipsum', component: IpsumComponent },
            { path: 'dolor', component: DolorComponent },
        ] },
        { path: 'bulk-notification', component: BulkNotificationComponent },
        { path: 'guide-common', component: GuideCommonComponent  },
        { path: 'flash-cash-lite', component: GuideFlashCashLiteComponent },
        { path: 'flash-contact', component: GuideFlashContactComponent },
        { path: 'flash-marchant', component: GuideFlashMarchantComponent },
        { path: 'flash-shop', component: GuideFlashShopComponent },
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
        { path: 'procedure-autorisation-acces', component: ProcedureAutorisationAccesComponent },
        { path: 'rakkacash', component: RakkacashComponent },
        { path: 'reporting-flashid', component: ReportingFlashIdComponent },
        { path: 'ria', component: RiaComponent },
        { path: 'Sababalar', component: SabaBaLarComponent },
        { path: '', redirectTo: 'alla-guide', pathMatch: 'full' }
    ] },
    { path: '**', redirectTo: '' }  
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
  
