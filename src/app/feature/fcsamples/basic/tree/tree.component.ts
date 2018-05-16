import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { TreeOptions, FctreeComponent } from 'fccomponent';
import { FCEVENT } from 'fccomponent/fc';
@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styles: [``]
})
export class TreeComponent extends ComponentParent {
  //树事件view
  treeeview: string = `
  <fc-tree [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)=" treeEvent($event);"></fc-tree>
  `
  //initializedview初始化事件
  initializedview : string = `
  <fc-tree [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)=" initializedEvent($event);"></fc-tree>
  `
  //选中事件checkview
  checkview : string = `
  <fc-tree [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)=" checkEvent($event);"></fc-tree>
  `
  //获取焦点事件focusview
  focusview : string = `
  <fc-tree [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)=" focusEvent($event);"></fc-tree>
  `
  //失去焦点事件blurview
  blurview : string = `
  <fc-tree [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)=" blurEvent($event);"></fc-tree>
  `
  //移走节点事件
  movenodeview : string = `
  <fc-tree [(ngModel)]="treeSelectObj" [fcOption]="treeOptions" (fcEvent)=" movenodeEvent($event);"></fc-tree>
  `
   // 基本basicjs
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'tree',
     templateUrl: './tree.component.html',
     styleUrl:'./tree.component.css'
   })
   export class DateComponent{
      treeSelectObj: any = {};
      treeOptions: TreeOptions = {
        //元数据id
        fcAppid: "SYSMENU",//元数据id
        //树结构节点显示内容
        fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
        // 关联父节点字段名称
        fcParentCode: 'PARENT',
        // 当前节点字段名称
        fcChildCode: 'MENUID',
        // 叶子节点字段名称
        fcLeafCode: 'HASCHILD',
        // 根节点条件
        fcTopWhere: "PARENT is null or PARENT=''",
        // 展开条件
        fcExpWhere: "PARENT=':{MENUID}'",
        // 排序字段
        fcOrderby: "",
        // 模式 false为单选，true为多选
        fcMode: true,
        // 展开子节点
        fcOpenChild: false,
        // 是否显示线条
        fcShowLine: true,
        //是否可拖拽
        fcAllowDrag: true
      };
    }
   `
   // 树事件
   treejs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'tree',
     templateUrl: './tree.component.html',
     styleUrl:'./tree.component.css'
   })
   export class DateComponent{
      treeSelectObj: any = {};
      treeOptions: TreeOptions = {
        //元数据id
        fcAppid: "SYSMENU",//元数据id
        //树结构节点显示内容
        fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
        // 关联父节点字段名称
        fcParentCode: 'PARENT',
        // 当前节点字段名称
        fcChildCode: 'MENUID',
        // 叶子节点字段名称
        fcLeafCode: 'HASCHILD',
        // 根节点条件
        fcTopWhere: "PARENT is null or PARENT=''",
        // 展开条件
        fcExpWhere: "PARENT=':{MENUID}'",
        // 排序字段
        fcOrderby: "",
        // 模式 false为单选，true为多选
        fcMode: true,
        // 展开子节点
        fcOpenChild: false,
        // 是否显示线条
        fcShowLine: true,
        //是否可拖拽
        fcAllowDrag: true
      };
      treeEvent(event: FCEVENT) {
        switch (event.eventName) {
          case 'initialized'://初始化事件
            this.mainService.providers.msgService.message("这是初始化事件");
            break;
          case 'check':
            this.mainService.providers.msgService.message("这是选中事件");
            break;
          case 'focus':
            this.mainService.providers.msgService.message("这是获取焦点事件");
            break;
          case 'blur':
            this.mainService.providers.msgService.message("这是失去焦点事件");
            break;
          case 'moveNode':
            this.mainService.providers.msgService.message("这是移走节点事件");
            break;
        }
      }
    }
   ` 
   //初始化事件initializedjs
   initializedjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'tree',
     templateUrl: './tree.component.html',
     styleUrl:'./tree.component.css'
   })
   export class DateComponent{
      treeSelectObj: any = {};
      treeOptions: TreeOptions = {
        //元数据id
        fcAppid: "SYSMENU",//元数据id
        //树结构节点显示内容
        fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
        // 关联父节点字段名称
        fcParentCode: 'PARENT',
        // 当前节点字段名称
        fcChildCode: 'MENUID',
        // 叶子节点字段名称
        fcLeafCode: 'HASCHILD',
        // 根节点条件
        fcTopWhere: "PARENT is null or PARENT=''",
        // 展开条件
        fcExpWhere: "PARENT=':{MENUID}'",
        // 排序字段
        fcOrderby: "",
        // 模式 false为单选，true为多选
        fcMode: true,
        // 展开子节点
        fcOpenChild: false,
        // 是否显示线条
        fcShowLine: true,
        //是否可拖拽
        fcAllowDrag: true
      };
      //初始化事件
    initializedEvent(event: FCEVENT) {
      switch (event.eventName){
        case 'initialized'://初始化事件
        this.mainService.providers.msgService.message("这是初始化事件");
        break;
      }
    }
  }
   `
    //选中事件checkjs
    checkjs : string = `
    import { Component, OnInit } from '@angular/core';
    @Component({
      selector: 'tree',
      templateUrl: './tree.component.html',
      styleUrl:'./tree.component.css'
    })
    export class DateComponent{
       treeSelectObj: any = {};
       treeOptions: TreeOptions = {
         //元数据id
         fcAppid: "SYSMENU",//元数据id
         //树结构节点显示内容
         fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
         // 关联父节点字段名称
         fcParentCode: 'PARENT',
         // 当前节点字段名称
         fcChildCode: 'MENUID',
         // 叶子节点字段名称
         fcLeafCode: 'HASCHILD',
         // 根节点条件
         fcTopWhere: "PARENT is null or PARENT=''",
         // 展开条件
         fcExpWhere: "PARENT=':{MENUID}'",
         // 排序字段
         fcOrderby: "",
         // 模式 false为单选，true为多选
         fcMode: true,
         // 展开子节点
         fcOpenChild: false,
         // 是否显示线条
         fcShowLine: true,
         //是否可拖拽
         fcAllowDrag: true
       };
       checkEvent(event: FCEVENT) {
        switch(event.eventName){
          case  'check' :
          this.mainService.providers.msgService.message("这是选中事件");
          break
        }
      }
   }
    ` 
     //获取焦点事件focusjs
     focusjs : string = `
     import { Component, OnInit } from '@angular/core';
     @Component({
       selector: 'tree',
       templateUrl: './tree.component.html',
       styleUrl:'./tree.component.css'
     })
     export class DateComponent{
        treeSelectObj: any = {};
        treeOptions: TreeOptions = {
          //元数据id
          fcAppid: "SYSMENU",//元数据id
          //树结构节点显示内容
          fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
          // 关联父节点字段名称
          fcParentCode: 'PARENT',
          // 当前节点字段名称
          fcChildCode: 'MENUID',
          // 叶子节点字段名称
          fcLeafCode: 'HASCHILD',
          // 根节点条件
          fcTopWhere: "PARENT is null or PARENT=''",
          // 展开条件
          fcExpWhere: "PARENT=':{MENUID}'",
          // 排序字段
          fcOrderby: "",
          // 模式 false为单选，true为多选
          fcMode: true,
          // 展开子节点
          fcOpenChild: false,
          // 是否显示线条
          fcShowLine: true,
          //是否可拖拽
          fcAllowDrag: true
        };
        //获取焦点事件
        focusEvent(event: FCEVENT) {
          switch(event.eventName){
            case  'check' :
            this.mainService.providers.msgService.message("这是获取焦点事件");
            break
          }
        }
    }
     ` 
      //获取焦点事件focusjs
      blurjs : string = `
      import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'tree',
        templateUrl: './tree.component.html',
        styleUrl:'./tree.component.css'
      })
      export class DateComponent{
         treeSelectObj: any = {};
         treeOptions: TreeOptions = {
           //元数据id
           fcAppid: "SYSMENU",//元数据id
           //树结构节点显示内容
           fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
           // 关联父节点字段名称
           fcParentCode: 'PARENT',
           // 当前节点字段名称
           fcChildCode: 'MENUID',
           // 叶子节点字段名称
           fcLeafCode: 'HASCHILD',
           // 根节点条件
           fcTopWhere: "PARENT is null or PARENT=''",
           // 展开条件
           fcExpWhere: "PARENT=':{MENUID}'",
           // 排序字段
           fcOrderby: "",
           // 模式 false为单选，true为多选
           fcMode: true,
           // 展开子节点
           fcOpenChild: false,
           // 是否显示线条
           fcShowLine: true,
           //是否可拖拽
           fcAllowDrag: true
         };
         //失去焦点事件
        blurEvent(event: FCEVENT) {
          switch(event.eventName){
            case  'blur' :
            this.mainService.providers.msgService.message("这是失去焦点事件");
            break
          }
        }
     }
      ` 
  //movenodejs 移走节点事件
  movenodejs : string = `
  import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'tree',
        templateUrl: './tree.component.html',
        styleUrl:'./tree.component.css'
      })
      export class DateComponent{
         treeSelectObj: any = {};
         treeOptions: TreeOptions = {
           //元数据id
           fcAppid: "SYSMENU",//元数据id
           //树结构节点显示内容
           fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
           // 关联父节点字段名称
           fcParentCode: 'PARENT',
           // 当前节点字段名称
           fcChildCode: 'MENUID',
           // 叶子节点字段名称
           fcLeafCode: 'HASCHILD',
           // 根节点条件
           fcTopWhere: "PARENT is null or PARENT=''",
           // 展开条件
           fcExpWhere: "PARENT=':{MENUID}'",
           // 排序字段
           fcOrderby: "",
           // 模式 false为单选，true为多选
           fcMode: true,
           // 展开子节点
           fcOpenChild: false,
           // 是否显示线条
           fcShowLine: true,
           //是否可拖拽
           fcAllowDrag: true
         };
         //移走节点事件
         movenodeEvent(event: FCEVENT) {
           switch(event.eventName){
             case  'blur' :
             this.mainService.providers.msgService.message("这是移走节点事件");
             break
           }
         }
     }
  `    
  treeSelectObj: any = {};
  treeOptions: TreeOptions = {
    //元数据id
    fcAppid: "SYSMENU",//元数据id
    //树结构节点显示内容
    fcLabel: ':{MENUNAME}::{MENUID}',//支持:{参数名称}
    // 关联父节点字段名称
    fcParentCode: 'PARENT',
    // 当前节点字段名称
    fcChildCode: 'MENUID',
    // 叶子节点字段名称
    fcLeafCode: 'HASCHILD',
    // 根节点条件
    fcTopWhere: "PARENT is null or PARENT=''",
    // 展开条件
    fcExpWhere: "PARENT=':{MENUID}'",
    // 排序字段
    fcOrderby: "",
    // 模式 false为单选，true为多选
    fcMode: true,
    // 展开子节点
    fcOpenChild: false,
    // 是否显示线条
    fcShowLine: true,
    //是否可拖拽
    fcAllowDrag: true
  };
  constructor(public mainService: ComponentService) {
    super('FCTREE', mainService);
  }
  //初始化事件
  initializedEvent(event: FCEVENT) {
    switch (event.eventName){
      case 'initialized'://初始化事件
      this.mainService.providers.msgService.message("这是初始化事件");
      break;
    }
  }
  //选中事件
  checkEvent(event: FCEVENT) {
    switch(event.eventName){
      case  'check' :
      this.mainService.providers.msgService.message("这是选中事件");
      break
    }
  }
  //获取焦点事件
  focusEvent(event: FCEVENT) {
    switch(event.eventName){
      case  'focus' :
      this.mainService.providers.msgService.message("这是获取焦点事件");
      break
    }
  }
   //失去焦点事件
   blurEvent(event: FCEVENT) {
    switch(event.eventName){
      case  'blur' :
      this.mainService.providers.msgService.message("这是失去焦点事件");
      break
    }
  }
  //移走节点事件
  movenodeEvent(event: FCEVENT) {
    switch(event.eventName){
      case  'blur' :
      this.mainService.providers.msgService.message("这是移走节点事件");
      break
    }
  }
  treeEvent(event: FCEVENT) {
    switch (event.eventName) {
      case 'initialized'://初始化事件
        this.mainService.providers.msgService.message("这是初始化事件");
        break;
      case 'check':
        this.mainService.providers.msgService.message("这是选中事件");
        break;
      case 'focus':
        this.mainService.providers.msgService.message("这是获取焦点事件");
        break;
      case 'blur':
        this.mainService.providers.msgService.message("这是失去焦点事件");
        break;
      case 'moveNode':
        this.mainService.providers.msgService.message("这是移走节点事件");
        break;
    }
  }
}