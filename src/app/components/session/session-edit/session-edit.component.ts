import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Session } from '../../../core/model/session';
import { FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionEditComponent implements OnInit, OnChanges {
  @Input('session') session = new Session();
  @Output('closeModal') closeModal = new EventEmitter<void>();

  mode: 'CREATION' | 'EDITION' = 'CREATION';

  //todo: modifier le model session pour inclure les nouveaux champs (nombre de joueurs min/max, créateur de la session...)
  sessionForm = this.fb.group({
    date: [''],
    time: [''],
    owner: [''],
    game: [{ value: '', disabled: false }],
    gamersMin: [''],
    gamersMax: [''],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.sessionForm.reset();
    //todo faire une méthode générique de conversion d'une date ISO en format pour les inputs et inversement pour renvoyer vers le back
    // To get the current date and time
    // for the HTML Input format
    const dateToday = new Date().toISOString().split('T')[0];
    const hour = new Date().toISOString().split('T')[1].split(':')[0];
    const minutes = new Date().toISOString().split('T')[1].split(':')[1];
    const timeToday = `${hour}:${minutes}`;

    this.sessionForm.patchValue({
      date: dateToday,
      time: timeToday,
    });
    console.warn('date =', this.sessionForm.controls['date'].value); // todo à virer
    if (changes.session.currentValue.id !== undefined) {
      this.mode = 'EDITION';
      this.loadSessionForm();
    }
    console.log('changes = ', changes.session.currentValue); //todo : a supprimer
  }

  // todo à supprimer après les tests
  getFormValue() {
    console.log('form =', this.sessionForm.getRawValue());
  }

  close(): void {
    this.closeModal.emit();
  }

  private loadSessionForm(): void {
    this.sessionForm.patchValue({
      // date: this.session.date.
      game: this.session.game.name,
    });
    this.sessionForm.controls['game'].disable();
  }

  // formatDate(date: string): string {
  //   const year = formatDate();
  // }
}
