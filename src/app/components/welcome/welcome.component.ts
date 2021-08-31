import { Component, OnInit } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  discord = faDiscord;
  exclamation = faExclamation;
  constructor() {}

  ngOnInit(): void {}
}
