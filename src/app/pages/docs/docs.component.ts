import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RakkacashComponent } from '../../components-docs/rakkacash/rakkacash.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  imports: [
    RouterOutlet,
    RakkacashComponent,
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
