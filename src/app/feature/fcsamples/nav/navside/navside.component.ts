import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';
import { NavsideOptions } from 'fccomponent';

@Component({
  selector: 'navside',
  templateUrl: './navside.component.html',
  styles: [``]
})
export class NavsideComponent extends ComponentParent {
  basicview: string = `
  <fc-navside [fcOption]="_navSideOption" [fcStatus]="_navbarStatus" (fcEvent)="navbarEvent($event)"></fc-navside>
  `
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'navside',
    templateUrl: './navside.component.html',
    styleUrl:'./navside.component.css'
  })
  export class NavsideComponent{
    //侧边栏配置
    _navSideOption: NavsideOptions;
    //导航栏状态
    _navbarStatus = "closed";
    navbarEvent(event: FCEVENT) {
      switch (event.eventName) {
        case 'toggle':
          this.mainService.providers.msgService.message("侧边栏点击关闭收起")
        break;
      }
    }
  }
  `
  //侧边栏配置
  _navSideOption: NavsideOptions;
  //导航栏状态
  _navbarStatus = "opened";
  navbarEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'toggle':
        this.mainService.providers.msgService.message("侧边栏点击关闭收起")
      break;
    }
  }
  navasideData :NavsideOptions = {
  fcLabelCode1 : '第一部分',
  fcLabelCode2 : '第二部分',
  fcTitleCode : '侧导航',
  fcColorCode : '#000',
  fcReadCode  : 'Y',
  fcValues1 :[{'value':'哈哈'},{'value':'测试'}],
  fcValues2 :[{'value':'Hi'},{'value':'Hello'}]
}
  constructor(public mainService: ComponentService) {
    super('FCNAVSIDE', mainService);
  }
}