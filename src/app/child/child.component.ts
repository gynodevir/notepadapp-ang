import { Component, Input } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // message: string = '';
  // savedMessages: string[] = [];
  // showMessages: boolean = false;
  // buttonText: string = 'Show Messages';

  // save() {
  //   if (this.message.trim() !== '') {
  //     this.savedMessages.push(this.message);
  //     this.message = '';
  //   }
  // }

  // clear() {
  //   this.message = '';
  // }

  toggleMessages() {
    this.showMessages = !this.showMessages;
    this.buttonText = this.showMessages ? 'Hide Messages' : 'Show Messages';
  }
  message:string='';
  savedMessages:string[]=[];
  showMessages:boolean=false;
  buttonText: string = 'Show Messages';
  save(){
    if(this.message.trim()!=''){
      this.savedMessages.push(this.message)
      this.message=''
    }
  }
    clear(){
      this.message=''
    }
  
  

}
