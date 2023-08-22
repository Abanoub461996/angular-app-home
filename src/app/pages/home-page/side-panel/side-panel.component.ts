import { Component } from '@angular/core';
import * as moment from 'moment';
import { UserNotification } from 'src/app/core/interfaces/notifications';
// COMPONENTS

// ASSETS

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent {
  notifications: UserNotification[] = [
    {
      title: 'truth-fact',
      from: moment().format('hh:mm'),
      to: moment().add(1, 'hours').format('hh:mm'),
      avatar: 'https://picsum.photos/200/300',
      background: '#FAF1E4',
    },
    {
      title: 'truth-fact',
      from: moment().format('hh:mm'),
      to: moment().add(3, 'hours').format('hh:mm'),
      avatar: 'https://picsum.photos/200/300',
      background: '#CEDEBD',
    },
    {
      title: 'truth-fact',
      from: moment().format('hh:mm'),
      to: moment().add(2, 'hours').format('hh:mm'),
      avatar: 'https://picsum.photos/200/300',
      background: '#9EB384',
    },
    {
      title: 'truth-fact',
      from: moment().format('hh:mm'),
      to: moment().add(5, 'hours').format('hh:mm'),
      avatar: 'https://picsum.photos/200/300',
      background: '#435334',
    },
    {
      title: 'truth-fact',
      from: moment().format('hh:mm'),
      to: moment().add(3, 'hours').format('hh:mm'),
      avatar: 'https://picsum.photos/200/300',
      background: '#FAF1E4',
    },
    {
      title: 'truth-fact',
      from: moment().format('hh:mm'),
      to: moment().add(2, 'hours').format('hh:mm'),
      avatar: 'https://picsum.photos/200/300',
      background: '#FAF1E4',
    },
    {
      title: 'truth-fact',
      from: moment().format('hh:mm'),
      to: moment().add(5, 'hours').format('hh:mm'),
      avatar: 'https://picsum.photos/200/300',
      background: '#CEDEBD',
    },
  ];
  constructor() {}
}
