import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  x: number = 12
  name:string= "siri"
  //  property binding
  imageUrl:string="favicon.ico"
  y:number=3
  disabled:boolean=true
  headingColor:string="#42f5dd"
  isactive:boolean=false
 
  //evet binding
  count:number=0
  incrementCounter(){
    this.count=this.count+1
  }

  reset(){
    this.count=0
  }

  h:string=''
  input(event:Event){
    console.log(event)
    const input=event.target as HTMLInputElement
    this.h=input.value
  }
  onKeyUp(event:KeyboardEvent) {
  console.log(event.key);
 
}
keyDowncount(event:Event){
  const j=event as KeyboardEvent
  console.log(j.key)
}

captureButton(input: HTMLInputElement):void{
  console.log(input.value)

}
// two way data binding........................
name_1:string="Deshan"
}


