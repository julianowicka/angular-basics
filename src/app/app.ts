import { Component, signal } from '@angular/core'
import { ToDosComponent } from './to-dos/to-dos';

@Component({
  selector: 'app-root',
  imports: [ToDosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
