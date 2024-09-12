import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bulk-notification',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './bulk-notification.component.html',
  styleUrl: './bulk-notification.component.scss',
})
export class BulkNotificationComponent {}
