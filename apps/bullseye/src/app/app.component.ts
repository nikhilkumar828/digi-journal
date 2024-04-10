import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@digi-journal/header/lib/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'digi-journal-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bullseye';
}
