import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RechercheComponent } from './recherche/recherche.component';
import{RouterModule,Routes} from '@angular/router';
import { LogComponent } from './log/log.component';
import { FooterComponent } from './footer/footer.component';
import { StoryComponent } from './story/story.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';


const appRoutes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'story',component:StoryComponent},
  {path:'signin',component:SigninComponent},
  {path:'log',component:LogComponent},
  {path:'about',component:AboutComponent},
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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }



