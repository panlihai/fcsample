import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { FcadformOption } from 'fccomponent';
@Component({
  selector: 'adform',
  templateUrl: './adform.component.html',
  styles: [``]
})
export class AdformComponent extends ComponentParent {
  //basicview
  basicview : string = `
  <fc-layoutcol fccontent>
    <form nz-form fccontent1>
      <fc-switch fcCheckValue="Y" fcLabel="开关label" fcOption='[{"label":"是","value":"Y"},{"label":"否","value":"N"}]' name="11"></fc-switch>
      <fc-any [(ngModel)]="anyValue" fcLabel="下拉单选对象label" [fcOption]="anyOptions" name="12"></fc-any>
      <fc-check [(ngModel)]="checkValue" fcLabel="多选框label" [fcOption]="checkOptions" name="13"></fc-check>
      <fc-chosen [(ngModel)]="chosenValue" fcLabel="下拉多选label" [fcOption]="chosenOptions" name="14"></fc-chosen>
      <fc-combo [(ngModel)]="comboValue" fcLabel="下拉单选label" fcRequired="true" [fcOption]="comboOptions" name="15"></fc-combo>
      <fc-date [(ngModel)]="now" fcLabel="日期label" name="16"></fc-date>
      <fc-datetime [(ngModel)]="now" fcLabel="时间日期label" name="17"></fc-datetime>
      <fc-double [(ngModel)]="inputNumber" fcLabel="数值label" name="18"></fc-double>
    </form>
    <div fccontent2>
      <fc-long [(ngModel)]="inputNumber" fcLabel="整数label"></fc-long>
      <fc-many [(ngModel)]="manyValue" fcLabel="下拉多选对象label" fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" fcValueCode='DICVALUE'
        fcLabelCode='DICDESC'></fc-many> 
      <fc-radio fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'></fc-radio>
      <fc-text fcAppid="SYSAPP" fcFieldCode='APPNAME' fcPlaceHolder="请输入" fcLabel="文本框label"></fc-text>
      <fc-textarea fcPlaceHolder="请输入" fcLabel="大文本框label"></fc-textarea>
    </div>
  </fc-layoutcol>
  <fc-tlbform fccontent [fcButtons]="[{BTNNAME:'查询'},{BTNNAME:'清空',BTNTYPE:'default'}]" fcLayout="center"></fc-tlbform>
  `
  //readonly
  readonlyview : string = `
  <fc-layoutcol fccontent>
  <div fccontent1>
    <form nz-form>
      <fc-switch fcCheckValue="Y" fcLabel="开关label" fcOption='[{"label":"是","value":"Y"},{"label":"否","value":"N"}]' name="11"></fc-switch>
      <fc-any [(ngModel)]="anyValue" fcLabel="下拉单选对象label" fcDisabledCode="true" [fcOption]="anyOptions" name="12"></fc-any>
      <fc-check [(ngModel)]="checkValue" fcLabel="多选框label" [fcOption]="checkOptions" name="13"></fc-check>
      <fc-chosen [(ngModel)]="chosenValue" fcLabel="下拉多选label" [fcOption]="chosenOptions" name="14"></fc-chosen>
      <fc-combo [(ngModel)]="comboValue" fcLabel="下拉单选label" fcRequired="true" [fcOption]="comboOptions" name="15"></fc-combo>
      <fc-date [(ngModel)]="now" fcLabel="日期label" name="16"></fc-date>
      <fc-datetime [(ngModel)]="now" fcLabel="时间日期label" name="17"></fc-datetime>
      <fc-double [(ngModel)]="inputNumber" fcLabel="数值label" name="18"></fc-double>
    </form>
  </div>
  <div fccontent2>
    <fc-long [(ngModel)]="inputNumber" fcLabel="整数label"></fc-long>
    <fc-many [(ngModel)]="manyValue" fcLabel="下拉多选对象label" fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" fcValueCode='DICVALUE'
      fcLabelCode='DICDESC'></fc-many>
    <fc-radio fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'></fc-radio>
    <fc-text fcPlaceHolder="请输入" fcLabel="文本框label" fcReadonly="true"></fc-text>
    <fc-textarea fcPlaceHolder="请输入" fcLabel="大文本框label" fcReadonly="true"></fc-textarea>
  </div>
</fc-layoutcol>
  `
  //disabledview
  disabledview : string = `
  <fc-layoutcol fccontent>
  <div fccontent1>
    <form nz-form>
      <fc-switch fcCheckValue="Y" fcLabel="开关label" fcOption='[{"label":"是","value":"Y"},{"label":"否","value":"N"}]' name="11"></fc-switch>
      <fc-any [(ngModel)]="anyValue" fcLabel="下拉单选对象label" [fcOption]="anyOptions" name="12"></fc-any>
      <fc-check [(ngModel)]="checkValue" fcLabel="多选框label" [fcOption]="checkOptions" name="13"></fc-check>
      <fc-chosen [(ngModel)]="chosenValue" fcLabel="下拉多选label" [fcOption]="chosenOptions" name="14"></fc-chosen>
      <fc-combo [(ngModel)]="comboValue" fcLabel="下拉单选label" fcRequired="true" [fcOption]="comboOptions" name="15"></fc-combo>
      <fc-date [(ngModel)]="now" fcLabel="日期label" name="16"></fc-date>
      <fc-datetime [(ngModel)]="now" fcLabel="时间日期label" name="17"></fc-datetime>
      <fc-double [(ngModel)]="inputNumber" fcLabel="数值label" name="18"></fc-double>
    </form>
  </div>
  <div fccontent2>
    <fc-long [(ngModel)]="inputNumber" fcLabel="整数label"></fc-long>
    <div style="margin-left:83px;">整数：[(ngModel)]="inputNumber"/inputNumber是配置参数</div>
    <fc-many [(ngModel)]="manyValue" fcLabel="下拉多选对象label" fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" fcValueCode='DICVALUE'
      fcLabelCode='DICDESC'></fc-many>
    <fc-radio fcAppid="SYSAPP" fcFieldCode="ENABLECACHE" [(ngModel)]="radioValue" fcValueCode='DICVALUE' fcLabelCode='DICDESC'></fc-radio>
    <fc-text fcPlaceHolder="请输入" fcDisabled="true" fcLabel="文本框label" [(ngModel)]="content"></fc-text>
    <fc-textarea fcPlaceHolder="请输入" fcDisabled="true" fcLabel="大文本框label" [(ngModel)]="content"></fc-textarea>
  </div>
</fc-layoutcol>
  `
  //basicjs
  basicjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'adform',
    templateUrl: './adform.component.html',
    styleUrl:'./adform.component.css'
  })
  export class AdformComponent{
    formConfig: FcadformOption = { fcTitle: "元数据编辑" };
    radioValue: string = 'a';
    anyValue: any = { "label": "A", "value": "a", "disabled": false };
    anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
    checkValue: string = 'a';
    checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    chosenValue: string = 'a';
    chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    comboValue: string = 'a';
    comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
    now = new Date();
    inputNumber: number = 3;
    content:string="这是文本框内容";
  }
  `
  //元数据表单
  sysjs : string = `
  import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'adform',
    templateUrl: './adform.component.html',
    styleUrl:'./adform.component.css'
  })
  export class AdformComponent{
    formConfig: FcadformOption = { fcTitle: "元数据编辑" };
  }
  `
  formConfig: FcadformOption = { fcTitle: "元数据编辑" };
  radioValue: string = 'a';
  anyValue: any = { "label": "A", "value": "a", "disabled": false };
  anyOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  manyValue: any[] = [{ "label": "A", "value": "a", "disabled": false }];
  checkValue: string = 'a';
  checkOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  chosenValue: string = 'a';
  chosenOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  comboValue: string = 'a';
  comboOptions: any[] = [{ icon: '', label: 'A', value: 'a' }, { icon: '', label: 'B', value: 'b' }, { icon: '', label: 'C', value: 'c' }];
  now = new Date();
  inputNumber: number = 3;
  content:string="这是文本框内容";
  constructor(public mainService: ComponentService) {
    super('FCADFORM', mainService);
  }
}