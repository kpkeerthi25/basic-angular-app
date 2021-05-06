import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


import { UserService } from './shared/user.service';
import { UserClusterComponent } from './user-cluster/user-cluster.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserClusterComponent },
];
@NgModule({
  declarations: [AppComponent, HomeComponent, UserComponent, UserClusterComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
