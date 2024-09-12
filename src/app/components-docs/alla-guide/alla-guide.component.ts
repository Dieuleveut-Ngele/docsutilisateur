import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alla-guide',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './alla-guide.component.html',
  styleUrl: './alla-guide.component.scss',
})
export class AllaGuideComponent {}
