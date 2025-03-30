import { Component } from '@angular/core';
import { StudentsComponent } from './students.component'; // Import your custom component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent],  // Import here
  template: `<students></students>`  // Use the selector
})
export class AppComponent { }
