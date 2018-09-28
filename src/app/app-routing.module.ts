import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactsComponent } from './settings-contacts/settings-contacts.component';
const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
{path: 'settings',
component: SettingsComponent,
children: [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', component: SettingsProfileComponent},
  {path: 'contacts', component: SettingsContactsComponent}
]
},
{path: '**', component: PageNotFoundComponent}
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
