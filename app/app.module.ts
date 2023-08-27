import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {MensagemService} from './services/mensagem.service'

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    ThreadsComponent,
    PostComponent,
    HomeComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [MensagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
