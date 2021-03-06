import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { WorkoutComponent } from './workout/workout.component';

import { MainService } from './shared/services/main.service';
import { SafePipe } from './shared/pipes/safe.pipe';

// Import your library
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    UpcomingComponent,
    WorkoutComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OwlModule,
    AppRoutingModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
