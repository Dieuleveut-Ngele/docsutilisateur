import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lorem',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.scss',
})
export class LoremComponent {}
