import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoremComponent } from '../../components-docs/alla-guide/lorem/lorem.component';
import { DolorComponent } from '../../components-docs/alla-guide/dolor/dolor.component';
import { IpsumComponent } from '../../components-docs/alla-guide/ipsum/ipsum.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  imports: [
      RouterOutlet,
      CommonModule,
      RouterLink,
      LoremComponent,
      DolorComponent,
      IpsumComponent
      ],
  standalone: true 
})
export class DocsComponent {
  activeParent: string | null = null;

  constructor(private router: Router) {}

  // navigateTo(route: string) {
  //   if (route === 'alla-guide') {
  //     this.activeParent = this.activeParent === 'alla-guide' ? null : 'alla-guide';
  //     this.router.navigate(['/docs', route]);
  //   } else {
  //     this.activeParent = null;
  //     this.router.navigate(['/docs', route]);
  //   }
  // }
  navigateTo(route: string) {
    if (route === 'alla-guide') {
        this.activeParent = this.activeParent === 'alla-guide' ? null : 'alla-guide';
    } else {
        this.activeParent = null;
    }
    this.router.navigate(['/docs', route]);
}

}



