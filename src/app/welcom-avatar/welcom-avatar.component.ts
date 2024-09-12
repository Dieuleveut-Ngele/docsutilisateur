import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcom-avatar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './welcom-avatar.component.html',
  styleUrl: './welcom-avatar.component.scss',
})
export class WelcomAvatarComponent {}
