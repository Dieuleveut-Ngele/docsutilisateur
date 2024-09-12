import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent {}
