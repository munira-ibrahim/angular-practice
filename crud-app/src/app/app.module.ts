import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { RequestInterceptor } from './services/request.interceptor';
import { ResponseInterceptor } from './services/response.interceptor';
import { GlobalHttpErrorHandlerService } from './services/global-error-handler.service';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent,
    PostDetailComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : RequestInterceptor,
    multi : true
  },
  {
    provide : HTTP_INTERCEPTORS,
    useClass : ResponseInterceptor,
    multi : true
  },
  {
    provide : ErrorHandler,
    useClass : GlobalHttpErrorHandlerService
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
