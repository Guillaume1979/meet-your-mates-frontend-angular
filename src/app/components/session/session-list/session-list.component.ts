import { Component, OnInit } from '@angular/core';
import { Session } from '../../../core/model/session';
import { SessionService } from '../../../core/service/session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  sessions!: Observable<Session[]>;

  constructor(private readonly sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessions = this.sessionService.getSessions();
  }
}
