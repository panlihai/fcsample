import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'progresspercent',
  templateUrl: './progresspercent.component.html',
  styles: [``]
})
export class ProgresspercentComponent extends ComponentParent {
   //basicview
   basicview : string = `
   <fc-progresspercent fcModel="75"></fc-progresspercent>
   <fc-progresspercent fcModel="70"></fc-progresspercent>
   <fc-progresspercent fcModel="100"></fc-progresspercent>
   `
   //sizeview
   sizeview : string = `
   <fc-progresspercent fcModel="75" fcStrokeWidth="80"></fc-progresspercent>
   <fc-progresspercent fcModel="70" fcStrokeWidth="80"></fc-progresspercent>
   <fc-progresspercent fcModel="100" fcStrokeWidth="80"></fc-progresspercent>
   `
   //basicjs
   basicjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'progresspercent',
     templateUrl: './progresspercent.component.html',
     styleUrl:'./progresspercent.component.css'
   })
   export class ProgresspercentComponent{
 
   }
   `
  constructor(public mainService: ComponentService) {
    super('FCPROGRESS', mainService);
  }
}