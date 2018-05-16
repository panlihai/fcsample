import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
@Component({
  selector: 'adcarousel',
  templateUrl: './adcarousel.component.html',
  styles: [`
  :host ::ng-deep .clearfix{
    height:200px;
    overflow:hidden;
  }
  `]
})
export class AdcarouselComponent extends ComponentParent {
  //basicview 
  basicview : string = `
  <fc-adcarousel [fcData]="carouselData" [fcOption]="{FILETYPE:'PIC',SOURCEID:'dd90c093667947c4a4265e001602b9cd',SOURCEAID:'SYSAPP','SOURCEFIELD':'APPURL','RESTITLE':''}"></fc-adcarousel>
  `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'carousel',
     templateUrl: './carousel.component.html',
     styleUrl:'./carousel.component.css'
   })
   export class CarouselComponent{
   }
   `
 
  constructor(public mainService: ComponentService) {
    super('FCADCAROUSEL', mainService);

  }
}

