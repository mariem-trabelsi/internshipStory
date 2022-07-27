import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RechercheComponent } from './recherche/recherche.component';
import {RouterModule,Routes} from '@angular/router';
import { LogComponent } from './log/log.component';
import { FooterComponent } from './footer/footer.component';
import { StoryComponent } from './story/story.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SigninHrComponent } from './signin-hr/signin-hr.component';
import { HiringComponent } from './hiring/hiring.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ListInternsComponent } from './list-interns/list-interns.component';
import { ListHrsComponent } from './list-hrs/list-hrs.component';
import { StaticsComponent } from './statics/statics.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminGuard } from './admin.guard';
import { HrGuard } from './hr.guard';



const appRoutes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'story',component:StoryComponent},
  {path:'signin',component:SigninComponent},
  {path:'log',component:LogComponent},
  {path:'statics',component:StaticsComponent, canActivate:[AdminGuard]},
  {path:'about',component:AboutComponent},
  {path:'hiring',component:HiringComponent},
  {path:'setting',component:SettingComponent, canActivate:[AdminGuard]},
  {path:'signinHr',component:SigninHrComponent},
  {path:'profile',component:ProfileComponent, canActivate:[HrGuard]},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'listInterns',component:ListInternsComponent,canActivate:[AdminGuard]},
  {path:'listHRs',component:ListHrsComponent,canActivate:[AdminGuard]},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RechercheComponent,
    LogComponent,
    FooterComponent,
    StoryComponent,
    AboutComponent,
    SigninComponent,
    SigninHrComponent,
    HiringComponent,
    SettingComponent,
    ProfileComponent,
    ListInternsComponent,
    ListHrsComponent,
    StaticsComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }



