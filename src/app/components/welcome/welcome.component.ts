import { Component, OnInit } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  discord = faDiscord;
  exclamation = faExclamation;
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login();
  }
}
