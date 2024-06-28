import { Routes } from '@angular/router';
import { FormStep1Component } from './components/form-step1/form-step1.component';
import { FormStep2Component } from './components/form-step2/form-step2.component';
import { FormStep3Component } from './components/form-step3/form-step3.component';

export const routes: Routes = [
    { path: '', redirectTo: '/step1', pathMatch: 'full' },
    { path: 'step1', component: FormStep1Component },
    { path: 'step2', component: FormStep2Component },
    { path: 'step3', component: FormStep3Component }
];
