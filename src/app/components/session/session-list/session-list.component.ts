import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Session } from '../../../core/model/session';
import { SessionService } from '../../../core/service/session.service';
import { Observable } from 'rxjs';
import { PlayerService } from '../../../core/service/player.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  sessions$!: Observable<Session[]>;
  editableSession = new Session();
  @ViewChild('sessionModal') sessionModal?: ElementRef;

  constructor(
    private readonly sessionService: SessionService,
    private readonly playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.sessions$ = this.playerService.getSessions();
  }

  openModal(session: Session): void {
    this.editableSession = session;
    this.sessionModal?.nativeElement.showModal();
  }

  closeModal() {
    this.sessionModal?.nativeElement.close();
  }
}
