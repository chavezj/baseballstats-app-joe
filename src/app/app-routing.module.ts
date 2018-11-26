import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  
  { path: "profile", component: ProfileComponent},
  { path: "upcoming", component: UpcomingComponent},
  { path: "workout", component: WorkoutComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
