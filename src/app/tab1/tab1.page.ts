import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
