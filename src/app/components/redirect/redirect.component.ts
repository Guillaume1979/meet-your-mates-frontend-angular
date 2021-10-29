import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login();
  }
}
