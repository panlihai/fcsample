import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'layoutrow',
  templateUrl: './layoutrow.component.html',
  styles: [`
    .all{
      height:200px;
      background: #e4be7c;
    }
    .text{
      color:#fff;
    }
    :host ::ng-deep .fc-layoutrowcell1{
      background:#8adcac;
    }
    :host ::ng-deep .fc-layoutrowcell2{
      background:#3a9d91;
    }
  `]
})
export class LayoutrowComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <div fccontent class="all">
      <fc-layoutrow fcSpan="70" fccontent>
        <div fccontent1 class="text">第一部分</div>
        <div fccontent2 class="text">第二部分</div>
      </fc-layoutrow>
  </div>
  `
  //basicstyle
  basicstyle : string = `
  .all{
    height:200px;
    background: #e4be7c;
  }
  .text{
    color:#fff;
  }
  :host ::ng-deep .fc-layoutrowcell1{
    background:#8adcac;
  }
  :host ::ng-deep .fc-layoutrowcell2{
    background:#3a9d91;
  }
  `
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'layoutrow',
     templateUrl: './layoutrow.component.html',
     styleUrl:'./layoutrow.component.css'
   })
   export class LayoutrowComponent{
   
   }
   `
  constructor(public mainService: ComponentService) {
    super('FCLAYOUTROW', mainService);
  }
}