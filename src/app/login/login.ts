import { Component, input,effect } from "@angular/core";

@Component({
    selector:'login-component',
    template:'',
    templateUrl:'./login.html',
    //styles:`h1{color:red}`,
    styleUrl:'./login.css'
})
export class LoginComponent{
    value=input(0)
  constructor()
    {
       effect(() => {
      console.log('Slider value:', this.value());
    });
    }

}