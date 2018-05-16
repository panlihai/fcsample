import { Component, OnInit } from '@angular/core';
import { ComponentParent } from '../../componentparent';
import { ComponentService } from '../../services/component.service';
import { CarouselOptions } from 'fccomponent/fcbasic/fccarousel.component';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styles: [`
  .carousel_bottom{
    margin-bottom:10px;
  }
  `]
})
export class CarouselComponent extends ComponentParent {
   //基础js
   basicjs: string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'carousel',
     templateUrl: './carousel.component.html',
     styleUrl:'./carousel.component.css'
   })
   export class CarouselComponent{
    CarouselOptions = {
      fcEffect:'scollx',
      fcDots:true,
      fcVertical:false,
      fcAutoPlay:true,
      fcAutoPlaySpeed:2000,
      fcPauseOnHover:true
    }
    carouselData: any[] = [
      {
        label: "1",
        src: "assets/img/fc4.jpg"
      }, {
        label: "2",
        src: "assets/img/fc2.jpg"
      }, {
        label: "3",
        src: "assets/img/fc3.jpg"
      }, {
        label: "4",
        src: "assets/img/fc4.jpg"
      }
    ]
   }
   `
   //verticaljs
   verticaljs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'carousel',
     templateUrl: './carousel.component.html',
     styleUrl:'./carousel.component.css'
   })
   export class CarouselComponent{
    CarouselOptions = {
      fcEffect:'scollx',
      fcDots:true,
      fcVertical:false,
      fcAutoPlay:true,
      fcAutoPlaySpeed:2000,
      fcPauseOnHover:true
    }
    carouselData: any[] = [
      {
        label: "1",
        src: "assets/img/fc1.jpg"
      }, {
        label: "2",
        src: "assets/img/fc2.jpg"
      }, {
        label: "3",
        src: "assets/img/fc3.jpg"
      }, {
        label: "4",
        src: "assets/img/fc4.jpg"
      }
    ]
   }
   //垂直配置
   verticalOption: CarouselOptions = {
    fcEffect:'scollx',
    fcDots:true,
    fcVertical:true,
    fcAutoPlay:true,
    fcAutoPlaySpeed:2000,
    fcPauseOnHover:true
   }
   `
   //自动播放js
   autoplayjs : string = `
   import { Component, OnInit } from '@angular/core';
   @Component({
     selector: 'carousel',
     templateUrl: './carousel.component.html',
     styleUrl:'./carousel.component.css'
   })
   export class CarouselComponent{
    CarouselOptions = {
      fcEffect:'scollx',
      fcDots:true,
      fcVertical:false,
      fcAutoPlay:true,
      fcAutoPlaySpeed:2000,
      fcPauseOnHover:true
    }
    carouselData: any[] = [
      {
        label: "1",
        src: "assets/img/fc1.jpg"
      }, {
        label: "2",
        src: "assets/img/fc2.jpg"
      }, {
        label: "3",
        src: "assets/img/fc3.jpg"
      }, {
        label: "4",
        src: "assets/img/fc4.jpg"
      }
    ]
   }
   //自动播放
   autoplayData: CarouselOptions = {
    fcEffect:'scollx',
    fcDots:true,
    fcVertical:true,
    fcAutoPlay:false,
    fcAutoPlaySpeed:2000,
    fcPauseOnHover:true
   }
   `
     //hoverjs
     hoverjs : string = `
     import { Component, OnInit } from '@angular/core';
     @Component({
       selector: 'carousel',
       templateUrl: './carousel.component.html',
       styleUrl:'./carousel.component.css'
     })
     export class CarouselComponent{
      CarouselOptions = {
        fcEffect:'scollx',
        fcDots:true,
        fcVertical:false,
        fcAutoPlay:true,
        fcAutoPlaySpeed:2000,
        fcPauseOnHover:true
      }
      carouselData: any[] = [
        {
          label: "1",
          src: "assets/img/fc1.jpg"
        }, {
          label: "2",
          src: "assets/img/fc2.jpg"
        }, {
          label: "3",
          src: "assets/img/fc3.jpg"
        }, {
          label: "4",
          src: "assets/img/fc4.jpg"
        }
      ]
     }
     //鼠标悬停暂停
     pauseonhoverData : CarouselOptions = {
       fcEffect:'scollx',
       fcDots:true,
       fcVertical:true,
       fcAutoPlay:false,
       fcAutoPlaySpeed:2000,
       fcPauseOnHover:false
     }
     `
      //speedjs
      speedjs : string = `
      import { Component, OnInit } from '@angular/core';
      @Component({
        selector: 'carousel',
        templateUrl: './carousel.component.html',
        styleUrl:'./carousel.component.css'
      })
      export class CarouselComponent{
       CarouselOptions = {
         fcEffect:'scollx',
         fcDots:true,
         fcVertical:false,
         fcAutoPlay:true,
         fcAutoPlaySpeed:2000,
         fcPauseOnHover:true
       }
       carouselData: any[] = [
         {
           label: "1",
           src: "assets/img/fc1.jpg"
         }, {
           label: "2",
           src: "assets/img/fc2.jpg"
         }, {
           label: "3",
           src: "assets/img/fc3.jpg"
         }, {
           label: "4",
           src: "assets/img/fc4.jpg"
         }
       ]
      }
       //播放速度
      autoplayspeedData: CarouselOptions = {
        fcAutoPlaySpeed : 5000
      } 
      `
  //fadejs
       fadejs : string = `
       import { Component, OnInit } from '@angular/core';
       @Component({
         selector: 'carousel',
         templateUrl: './carousel.component.html',
         styleUrl:'./carousel.component.css'
       })
       export class CarouselComponent{
        CarouselOptions = {
          fcEffect:'scollx',
          fcDots:true,
          fcVertical:false,
          fcAutoPlay:true,
          fcAutoPlaySpeed:2000,
          fcPauseOnHover:true
        }
        carouselData: any[] = [
          {
            label: "1",
            src: "assets/img/fc1.jpg"
          }, {
            label: "2",
            src: "assets/img/fc2.jpg"
          }, {
            label: "3",
            src: "assets/img/fc3.jpg"
          }, {
            label: "4",
            src: "assets/img/fc4.jpg"
          }
        ]
       }
       //动画效果effect
       effectData: CarouselOptions = {
         fcEffect:'scollx'
       }
       `
  //默认效果
  CarouselOptions = {
    fcEffect:'scollx',
    fcDots:true,
    fcVertical:false,
    fcAutoPlay:true,
    fcAutoPlaySpeed:2000,
    fcPauseOnHover:true
  }
  //轮播图渲染
  carouselData: any[] = [
    {
      label: "1",
      src: "assets/img/fc1.jpg"
    }, {
      label: "2",
      src: "assets/img/fc2.jpg"
    }, {
      label: "3",
      src: "assets/img/fc3.jpg"
    }, {
      label: "4",
      src: "assets/img/fc4.jpg"
    }
  ]
  //垂直配置
  verticalOption: CarouselOptions = {
    fcEffect:'scollx',
    fcDots:true,
    fcVertical:true,
    fcAutoPlay:true,
    fcAutoPlaySpeed:2000,
    fcPauseOnHover:true
  }
  //自动播放
  autoplayOption: CarouselOptions = {
    fcEffect:'scollx',
    fcDots:true,
    fcVertical:true,
    fcAutoPlay:false,
    fcAutoPlaySpeed:2000,
    fcPauseOnHover:true
  }
  //播放速度
  autoplayspeedData: CarouselOptions = {
    fcAutoPlaySpeed : 5000
  }
 //动画效果effect
  effectData: CarouselOptions = {
    fcEffect:'scollx'
  }
  //鼠标悬停暂停
  pauseonhoverData : CarouselOptions = {
    fcEffect:'scollx',
    fcDots:true,
    fcVertical:true,
    fcAutoPlay:false,
    fcAutoPlaySpeed:2000,
    fcPauseOnHover:false
  }
  constructor(public mainService: ComponentService) {
    super('FCCAROUSEL', mainService);

  }
}

