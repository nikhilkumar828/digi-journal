import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { REACT_APP_API_URL } from '../../environments/environment';

@Component({
  selector: 'digi-journal-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {

  constructor() {}

  openGoogleAuth = () => {
    window.open(
      `${REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
}
