import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <h2>{{ title }}</h2>
    <p>{{ getTitle() }}</p>
    <p>Today's Date: {{ getCurrentDate() }}</p>
  `
})
export class StudentsComponent {
  title = 'COMP 3133 - Angular Component Example';

  getTitle() {
    return 'Welcome to Students Component';
  }

  getCurrentDate() {
    return new Date().toDateString();
  }
}
