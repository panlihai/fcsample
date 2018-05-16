import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styles: [`
  .tag_bottom{
    margin-bottom:10px;
  }
  .tag_color{
    padding:5px;
  }
  `]
})
export class TagComponent extends ComponentParent {
  //基础js
  basicjs: string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'button',
    templateUrl: './tag.component.html',
    styleUrl:'./tag.component.css'
  })
  export class TagComponent{
    }
  `
  //closeview
  closeview : string = `
  <fc-tag  fcColor="blue" fcIcon="fc-icon-method" fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="blue" fcIcon="fc-icon-method" fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="blue" fcIcon="fc-icon-method" fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="blue" fcIcon="fc-icon-method" fcSize="large" fcClose="true"></fc-tag>
  `
  //checkview
  checkview : string = `
  <fc-tag  [fcCheckable]="true">Tag1</fc-tag>
  <fc-tag  [fcCheckable]="true">Tag2</fc-tag>
  <fc-tag  [fcCheckable]="true">Tag3</fc-tag>
  <fc-tag  [fcCheckable]="true">Tag4</fc-tag>
  `
  //colorview
  colorview: string = `
  <fc-tag  fcColor="pink" fcTitle="pink"  fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="red" fcTitle="red"  fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="orange" fcTitle="orange"  fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="green" fcTitle="green"  fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="cyan" fcTitle="cyan"  fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="blue" fcTitle="blue"  fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="orange" fcTitle="orange"  fcSize="large" fcClose="true"></fc-tag>
  <fc-tag  fcColor="purple" fcTitle="purple"  fcSize="large" fcClose="true"></fc-tag>
  `
  //标签是否关闭
  closejs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'button',
    templateUrl: './tag.component.html',
    styleUrl:'./tag.component.css'
  })
  export class TagComponent{
    _close(event: Event): void {
      this._fcEvent({
          eventName: 'close',
          param: event
      })
    }
  }
 
  `
  //是否选中
  checkjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'button',
    templateUrl: './tag.component.html',
    styleUrl:'./tag.component.css'
  })
  export class TagComponent{
      _checked = true;
      _handleChange(checked: boolean): void {
        this._checked = checked;
        this._fcEvent({
            eventName: 'check',
            param: event
        })
    }
  }
   `
  _fcEvent(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(public mainService: ComponentService) {
    super('FCTAG', mainService);
  }
  // 是否关闭
  _close(event: Event): void {
    this._fcEvent({
        eventName: 'close',
        param: event
    })
}
_checked = true;
 /**
     * 选中标签
     * @param checked 
     */
  _handleChange(checked: boolean): void {
    this._checked = checked;
    this._fcEvent({
        eventName: 'check',
        param: event
    })
}
}