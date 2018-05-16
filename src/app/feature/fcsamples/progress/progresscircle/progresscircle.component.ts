import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progresscircle',
  templateUrl: './progresscircle.component.html',
  styles: [`
  .adcircle{
    height:36px;
    margin-top:20px;
    display:inline-block;
  }
  .circle_right{
    display: inline-block;
    margin-left: 42px;
    width:52px;
    height:36px;
  }
  `]
})
export class ProgresscircleComponent extends ComponentParent {
  //sizeview
  sizeview : string = `
  <fc-progresscircle fcSize="large"></fc-progresscircle>
  <fc-progresscircle fcSize="default"></fc-progresscircle>
  <fc-progresscircle fcSize="small"></fc-progresscircle>
  `
   //basicjs
   basicjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'progresscircle',
     templateUrl: './progresscircle.component.html',
     styleUrl:'./progresscircle.component.css'
   })
   export class ProgresscircleComponent{
 
   }
   `
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}