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
import { NewComponent } from './new/new.component';
import { HiringComponent } from './hiring/hiring.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ListInternsComponent } from './list-interns/list-interns.component';
import { ListHrsComponent } from './list-hrs/list-hrs.component';



const appRoutes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'story',component:StoryComponent},
  {path:'signin',component:SigninComponent},
  {path:'log',component:LogComponent},
  {path:'about',component:AboutComponent},
  {path:'hiring',component:HiringComponent},
  {path:'setting',component:SettingComponent},
  {path:'signinHr',component:SigninHrComponent},
  {path:'profile',component:ProfileComponent},
  {path:'listInterns',component:ListInternsComponent},
  {path:'listHRs',component:ListHrsComponent},
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
    NewComponent,
    HiringComponent,
    SettingComponent,
    ProfileComponent,
    ListInternsComponent,
    ListHrsComponent
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



