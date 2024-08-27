// import { CommonModule, NgClass } from '@angular/common';
// import { Component } from '@angular/core';
// import {  Router, RouterLink, RouterOutlet } from '@angular/router';
// import { LoremComponent } from '../../components-docs/alla-guide/lorem/lorem.component';
// import { DolorComponent } from '../../components-docs/alla-guide/dolor/dolor.component';
// import { IpsumComponent } from '../../components-docs/alla-guide/ipsum/ipsum.component';

// @Component({
//   selector: 'app-docs',
//   templateUrl: './docs.component.html',
//   styleUrls: ['./docs.component.scss'],
//   imports: [
//       RouterOutlet,
//       CommonModule,
//       RouterLink,
//       LoremComponent,
//       DolorComponent,
//       IpsumComponent,
//       NgClass
//       ],
//   standalone: true 
// })
// export class DocsComponent {
//   activeParent: string | null = null;
//   activeRoute!: string;

//   constructor(private router: Router) {}

//   navigateTo(route: string) {
//     if (route === 'alla-guide') {
//       this.activeParent = this.activeParent === 'alla-guide' ? null : 'alla-guide';
//       this.router.navigate(['/docs', route]);
//     } else {
//       this.activeParent = null;
//       this.router.navigate(['/docs', route]);
//     }
//   }

//   navigate(route: string) {
//     this.activeRoute = route;
//     this.router.navigate([route]);
//   }

//   ngOnInit() {
//     // Optionnel : initialiser activeRoute avec la route actuelle
//     this.activeRoute = this.router.url.substring(1); // Extrait la route actuelle sans le '/'
//   }
// }

import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoremComponent } from '../../components-docs/alla-guide/lorem/lorem.component';
import { DolorComponent } from '../../components-docs/alla-guide/dolor/dolor.component';
import { IpsumComponent } from '../../components-docs/alla-guide/ipsum/ipsum.component';
import { WelcomAvatarComponent } from '../../welcom-avatar/welcom-avatar.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  imports: [
    RouterOutlet,
    WelcomAvatarComponent,
    CommonModule,
    RouterLink,
    NgClass
  ],
  standalone: true
})
export class DocsComponent {
  activeParent: string | null = null;
  activeRoute: string = ''; // Initialisation de activeRoute

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'alla-guide') {
      this.activeParent = this.activeParent === 'alla-guide' ? null : 'alla-guide';
    } else {
      this.activeParent = null;
    }
    
    this.activeRoute = route; // Mise à jour de la route active
    this.router.navigate(['/docs', route]);
  }

  ngOnInit() {
    this.activeRoute = this.router.url.substring(1); 
  }


  toggleParent(parent: string) {
    this.activeParent = this.activeParent === parent ? null : parent;
  }
}




