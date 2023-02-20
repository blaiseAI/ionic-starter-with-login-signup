import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  credentials!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: this.matchingPasswords('password', 'confirmPassword'),
      }
    );
  }

  async onSubmit() {
    // TODO: Add your sign-up logic here
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.register(this.credentials.value).subscribe({
      next: async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
      },
      error: async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Signup failed',
          message: res.error.error,
          buttons: ['OK'],
        });

        await alert.present();
      },
    });
  }

  // Getter for easy access to form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ mismatchedPasswords: true });
      }
    };
  }
}
