import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NotificationService,
  TypeOfNotification,
} from './notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  isVisible = false;
  message = '';

  isSuccess = false;
  isError = false;
  isWarn = false;

  notifSubscribe?: Subscription;

  timer = 0;

  constructor(private readonly notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifSubscribe = this.notificationService.notifState$.subscribe(
      (state) => {
        this.resetTimer();
        this.isVisible = state.isVisible;
        this.message = state.message;
        this.loadCSSClasses(state.type);
        this.launchTimer();
      }
    );
  }

  ngOnDestroy(): void {
    this.notifSubscribe?.unsubscribe();
  }

  private loadCSSClasses(type: TypeOfNotification): void {
    switch (type) {
      case 'SUCCESS':
        this.isSuccess = true;
        this.isError = false;
        this.isWarn = false;
        break;
      case 'ERROR':
        this.isSuccess = false;
        this.isError = true;
        this.isWarn = false;
        break;
      case 'WARN':
        this.isSuccess = false;
        this.isError = false;
        this.isWarn = true;
        break;
    }
  }

  launchTimer(): void {
    this.timer = setTimeout(() => (this.isVisible = false), 1500);
  }

  // reset of timer in order to always have a setTimeout with the entire duration for the last observable
  resetTimer(): void {
    clearTimeout(this.timer);
  }
}
