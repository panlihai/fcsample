import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'modalsuccess',
  templateUrl: './modalsuccess.component.html',
  styles: [``]
})
export class ModalsuccessComponent extends ComponentParent {
  basicview : string = `
  <fc-button fcLabel="打开成功弹窗" fcType="primary" (click)="modalsuccess.showModal()"></fc-button>
  <fc-modalsuccess #modalsuccess fcTitle="这是一条成功信息" fcContent="一些附加信息一些附加信息一些附加信息"></fc-modalsuccess>
  `
  contentview : string = `
  <fc-button fcLabel="打开成功弹窗" fcType="primary" (click)="modalsuccess.showModal()"></fc-button>
  <fc-modalsuccess #modalsuccess fcTitle="这是一条成功信息" fcContent="一些附加信息一些附加信息一些附加信息"></fc-modalsuccess>
  `
 //基础js
 basicjs: string = `
 import { Component, OnInit } from '@angular/core';
 @Component({
   selector: 'modalsuccess',
   templateUrl: './modalsuccess.component.html',
   styleUrl:'./modalsuccess.component.css'
 })
 export class ModalsuccessComponent{
  
 }
 `
  constructor(public mainService: ComponentService) {
    super('FCMODALSUCCESS', mainService);
  }
}