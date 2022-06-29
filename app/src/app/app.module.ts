import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RechercheComponent } from './recherche/recherche.component';
import{RouterModule,Routes} from '@angular/router';
import { LogComponent } from './log/log.component';
import { FooterComponent } from './footer/footer.component';
import { SigninHrComponent } from './signin-hr/signin-hr.component';
import { SigninIntershipSeekerComponent } from './signin-intership-seeker/signin-intership-seeker.component';
import { StoryComponent } from './story/story.component';


const appRoutes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'story',component:StoryComponent},
  {path:'signin-hr',component:SigninHrComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'log',component:LogComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RechercheComponent,
    LogComponent,
    FooterComponent,
    SigninHrComponent,
    SigninIntershipSeekerComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



