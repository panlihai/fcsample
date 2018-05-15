# Fcsample 
这个项目依赖于[Angular CLI](https://github.com/angular/angular-cli) version 1.6.7脚手架

# Demo
http://pcorp.cn 用户名：admin 密码：123456
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##  代码规范
<code>
    <pre>
-1.命名规范：
   模块命名：英文名称作为文件夹名称；
    Directive命名：英文名称+.directive.ts作为名称；
    Pipe命名：英文名称+.pipe.ts作为名称；
    Service命名:资源名称+.service.ts与component保持前缀一致；
    组件Component命名：后端资源名称+.component.ts作为名称；
    组件内部的View视图命名：后端资源名称+.component.html；
    组件内部的View视图样式命名：后端资源名称+.component.scss；
    方法命名：动词，保存（save）、删除（delete）、修改（modify）
    路由名称: 资源名称加动词，如：userLogin
-2.模块规范
模块由业务组件构成，业务模块依赖工具模块，工具模块提供公共服务如http请求、缓存、消息、日志、用户服务、工具、元数据等服务，模块独立编写内部服务，内部服务通过工具服务类请求后端资源；
模块通过index.module.ts对外暴露模块，index.module.ts整合内部各业务组件及内部服务；index.components.ts对外暴露结构；
各模块有directives，services,components,pipes,config文件夹组成；directives统一存放本模块的指令（扩展属性）；services统一存放本模块提供的服务，每个component组件提供一个服务类；components存放本模块的所有业务组件，每个组件一个文件夹，其包含本组件的类、视图，样式等文件；pipes存放本模块的所有视图内容管道工具；config存放本模块的配置文件，包含配置路由表。
-3.组件规范
各组件必须注入组件本身服务mainService、providersService；providersService包含log.service、cache.service、message.service、common.service、app.service、user.service；除这些服务之外不再注入其它服务；其它服务统一由组件本身服务依赖。组件继承工具服务模块的parent.component.ts类，父类提供对该资源表单及列表等公共方法，包含增删改查、导入、导出、获取资源的参照字典，静态字典，实时推送消息等
-4.整体编码规范
所有类名需注释，标记@description {描述}；@author {作者};
所有方法需注释，标记@description {描述}；@param {参数名称：类型}；@return {返回值：类型}；
核心代码需注释：保持3行代码一个行内注释的方式；
避免出现function方法，应采用箭头表单式；
方法之间保留一行空格；
方法名称后面的大括号保持与方法名称一行内
  </code>
</pre>
