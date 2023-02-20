import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  CanLoad,
} from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/autologin.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard],
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./pages/intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
    canLoad: [IntroGuard, AutoLoginGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
