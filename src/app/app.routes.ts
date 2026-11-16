import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EmberBackground } from './components/ember-background/ember-background';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ember', component: EmberBackground}
];
