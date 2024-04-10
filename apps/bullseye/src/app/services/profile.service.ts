import { Injectable, inject } from '@angular/core';
import { HttpClientService } from '@digi-journal/http-client/lib/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly apiService = inject(HttpClientService);

  constructor() { }
 
  isUserLoggedIn(): boolean {
    return true;
  }
}
