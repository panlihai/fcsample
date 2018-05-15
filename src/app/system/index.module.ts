import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import { SysdicService, SysmessageService, MessageService } from 'fccore';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ErrorComponent } from './components/error/error.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { MainService } from './services/main.service';
import { SysdatasourceService } from './services/sysdatasource.service';
import { SysappService } from './services/sysapp.service';
import { SysproductService } from './services/sysproduct.service';
import { SysroleuserService } from './services/sysroleauth.service';
import { SysbackcodeService } from './services/sysbackcode.service';
import { SyscomponentService } from './services/syscomponent.service';
import { SysparamService } from './services/sysparam.service';
import { SysroleService } from './services/sysrole.service';
import { HomeComponent } from './components/home/home.component';
import { FclistModule, FctlbModule, FclayoutModule, FcbasicModule, 
  FcadModule, FcmodalModule, FcsearchModule, FctabModule, FcchartModule } from 'fccomponent';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    FclistModule,
    FctlbModule,
    FclayoutModule,
    FcbasicModule,
    FctlbModule,
    FcadModule,
    FcmodalModule,
    FcsearchModule,
    FctabModule,
    FcchartModule
  ],
  exports: [

  ],
  declarations: [
    MainComponent,
    NotfoundComponent,
    ErrorComponent,
    LockscreenComponent,
    ForgotComponent,
    HomeComponent
  ],
  providers: [
    MainService
  ]
})
export class SystemModule { 
 
}
