import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoremComponent } from '../../components-docs/alla-guide/lorem/lorem.component';
import { DolorComponent } from '../../components-docs/alla-guide/dolor/dolor.component';
import { IpsumComponent } from '../../components-docs/alla-guide/ipsum/ipsum.component';
import { WelcomAvatarComponent } from '../../welcom-avatar/welcom-avatar.component';
import { ScrollToTopComponent } from '../../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  imports: [
    RouterOutlet,
    WelcomAvatarComponent,
    ScrollToTopComponent,
    CommonModule,
    RouterLink,
    NgClass,
  ],
  standalone: true,
})
export class DocsComponent {
  activeParent: string | null = null;
  activeRoute: string = ''; 

  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'introduction') {
      this.activeParent =
        this.activeParent === 'introduction' ? null : 'introduction';
    } else {
      this.activeParent = null;
    }

    this.activeRoute = route; 
    this.router.navigate(['/docs', route]);
  }

  ngOnInit() {
    this.activeRoute = this.router.url.substring(1);
  }

  toggleParent(parent: string) {
    this.activeParent = this.activeParent === parent ? null : parent;
  }
}
