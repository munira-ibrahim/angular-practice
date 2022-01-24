import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { ButtonComponent } from './components/button/button.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { CommentsComponent } from './components/users/comments/comments.component';
import { AddCommentComponent } from './components/users/add-comment/add-comment.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDataService } from './services/user-data.service';
import { CounterService } from './services/counter.service';
import { CounterComponent } from './components/counter/counter.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { APP_ROUTES } from './app.router';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { ChangeDetectionParentComponent } from './components/change-detection-parent/change-detection-parent.component';
import { ChildComponent } from './components/change-detection-parent/child/child.component';



@NgModule({     //  register Components
  declarations: [
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    ButtonComponent,
    LifeCycleDemoComponent,
    CommentsComponent,
    AddCommentComponent,
    HighlightDirective,
    DirectiveDemoComponent,
    HighlightDirective,
    PipeDemoComponent,
    ReverseStringPipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    CounterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    ChangeDetectionParentComponent,
    ChildComponent
  ],
  imports: [  // Register Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule  // eagerly loaded module
  ],
  providers: [UserDataService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
