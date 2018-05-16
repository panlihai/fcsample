import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FCEVENT } from 'fccomponent/fc';

@Component({
  selector: 'chartpie',
  templateUrl: './chartpie.component.html',
  styles: [``]
})
export class ChartpieComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-chartbar [fcOption]="_barLabels" [fcData]="_barData"></fc-chartbar>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'chartpie',
    templateUrl: './chartpie.component.html',
    styleUrl:'./chartpie.component.css'
  })
  export class ChartpieComponent{
    //饼状图文字
  _pieLabels: string[] = ['铁债', '国开行', '优先股']
  }
  `
  //pieview
  pieview : string = `
  <fc-chartbar [fcOption]="_barLabels" [fcData]="_barData" (fcEvent)="chartpieEvent($event)"></fc-chartbar>
  `
  //piejs
  piejs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'chartpie',
    templateUrl: './chartpie.component.html',
    styleUrl:'./chartpie.component.css'
  })
  export class ChartpieComponent{
    //饼状图文字
  _pieLabels: string[] = ['铁债', '国开行', '优先股']
  }
  chartpieEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'hover':
      this.mainService.providers.msgService.message("鼠标划入事件");
        break;
      case 'click':
      this.mainService.providers.msgService.message("鼠标点击事件")
        break; 
    }
  }
  `
  //饼状图文字
  _pieLabels: string[] = ['铁债', '国开行', '优先股']
  //饼状图数据
  /**
   * 饼状图事件
   * @param event 
   */
  chartpieEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'hover':
      this.mainService.providers.msgService.message("鼠标划入事件");
        break;
      case 'click':
      this.mainService.providers.msgService.message("鼠标点击事件")
        break; 
    }
  }
  _pieData: number[] = [1692215654.69178, 293107561.643836, 933395486.794522];
  constructor(public mainService: ComponentService) {
    super('FCCHARTPIE', mainService);
  }
}