import { Component, OnInit } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../core/service/auth.service';
import {
  NotificationService,
  TypeOfNotification,
} from '../../layout/notification/notification.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  discord = faDiscord;
  exclamation = faExclamation;
  constructor(
    private readonly authService: AuthService,
    private readonly notif: NotificationService
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login();
  }

  show(type: TypeOfNotification, message: string): void {
    this.notif.show(type, message);
  }
}
