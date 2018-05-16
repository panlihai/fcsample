import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styles: [``]
})
export class TooltipComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-tooltip fcTitle="git" fcPosition="bottomRight">
    <a href="https://github.com/panlihai/fcexample" target="_blank" fcContent>
        <i class="anticon anticon-github toolbar-control navbar-icon-size"></i>
    </a>
  </fc-tooltip>
  `
  //文字
  textview : string = `
  <fc-tooltip fcTitle="这是提示信息" fcPosition="bottomRight">
      鼠标滑入我试一下
  </fc-tooltip>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrl:'./app-tooltip.component.css'
  })
  export class TooltipComponent{
    }
  `
  constructor(public mainService: ComponentService) {
    super('FCTOOLTIP', mainService);
  }
}
