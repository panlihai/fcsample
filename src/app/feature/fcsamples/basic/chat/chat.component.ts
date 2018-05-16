import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';
import { ComponentParent } from '../../componentparent';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styles: [`
  .chat_bottom{
    margin-bottom:10px;
  }
  `]
})
export class ChatComponent extends ComponentParent {
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrl:'./chat.component.css'
  })
  export class ChatComponent{
   
   }
  `
  //sendjs
  sendjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrl:'./chat.component.css'
  })
  export class ChatComponent{
    sendEvnet (event:FCEVENT) {
      switch (event.eventName) {
        case 'send'://发送事件
          this.mainService.providers.msgService.message("发送事件");
          break;
      }
    }
   }
  `
  //closedjs
  closedjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrl:'./chat.component.css'
  })
  export class ChatComponent{
    closedEvent (event:FCEVENT) {
      switch (event.eventName) {
        case 'closed'://发送事件
          this.mainService.providers.msgService.message("这是关闭事件");
          break;
      }
    }
   }
  `
  //closedjs
  //sendevent
  sendEvent(event:FCEVENT) {
    switch (event.eventName) {
      case 'send'://发送事件
        this.mainService.providers.msgService.message("发送事件");
        break;
    }
  }
  //closeevent
  closedEvent (event:FCEVENT) {
    switch (event.eventName) {
      case 'closed'://发送事件
        this.mainService.providers.msgService.message("这是关闭事件");
        break;
    }
  }
  constructor(public mainService: ComponentService) {
    super('FCCHAT', mainService);
  }
  chatEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'send'://发送事件
        this.mainService.providers.msgService.message("发送事件");
        break;
      case 'closed':
        this.mainService.providers.msgService.message("这是关闭事件");
        break;
    }
  }
}
