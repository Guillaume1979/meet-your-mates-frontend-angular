import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type TypeOfNotification = 'SUCCESS' | 'ERROR' | 'WARN';

export interface NotifState {
  isVisible: boolean;
  message: string;
  type: TypeOfNotification;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifState = new BehaviorSubject<NotifState>({} as NotifState);
  notifState$ = this.notifState as Observable<NotifState>;

  constructor() {}

  show(type: TypeOfNotification, message: string): void {
    this.notifState.next({ type, message, isVisible: true });
  }
}
