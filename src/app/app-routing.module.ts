import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { ChuckSaysComponent } from './chuck-says/chuck-says.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './common/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/public', pathMatch: 'full' },
    { path: 'public', component: PublicComponent },
    { path: 'chuck', component: ChuckSaysComponent, canActivate: [AuthGuard] },
    { path: 'login', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
