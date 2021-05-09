import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login().subscribe((token) => console.log(token));
  }
}
