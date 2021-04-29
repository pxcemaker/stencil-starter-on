import { Component,  h, Prop,Event, EventEmitter, Element, Host } from '@stencil/core';

@Component({
  tag: 'my-accord',
  styleUrl: 'my-accord.css',
  shadow: true,

})
export class MyAccord {
  @Prop() titelAccord: string ="ACHTUNG";
@Prop({
  mutable:true,
  reflect:true,
})

@Prop()
isopen:boolean;
@Prop() check:boolean;

  @Event({eventName:"openaccord"}) openAccord: EventEmitter<string>;

  @Element() myaccord: HTMLParagraphElement


  private handelCancel = ()=> {
    this.isopen =true;
    
    
  }

 

  testfunction(){
    let idCounter = 0;
    idCounter = localStorage.length;
    console.log("submit")
    let inputYes = document.querySelector('#submitBox1');
    const  inputNo = document.querySelector("#submitBox2");
    let count:string;  
     count = idCounter.toString()

    let obj = {
      "Ja": inputYes,
      "Nein": inputNo,
      "setCookie": count,
      "test": this.check,
  }

  localStorage.setItem(count ,JSON.stringify(obj)); // Hilfe zum LocalStorage https://www.mediaevent.de/javascript/local-storage.html
  //console.log(localStorage.getItem(listenId));
console.log("stringyfied look in local storage")

if(count != "" || this.check ===false){
  this.check =true;

}
  return obj;

}
  
  
  
didCompLoad(){
  console.log("it is successfully loaded, your accordeon")

 
}

 
  render() {
    return (
      <Host class={this.check ? 'hide' : 'modal-wrapper isopen'}>
      <div class={this.isopen ? 'modal-wrapper' : 'modal-wrapper isopen'}>
        <div class="modal-overlay" onClick={this.handelCancel}/>
        <div class="modal">
        <div class="close"  onClick={this.handelCancel}>
              <p>X
              </p>
              <h3>Möchten Sie die Cookies akzeptieren ?</h3>
              </div>
          <div class="header">
            <input type="radio" id="submitBox1"onClick={this.testfunction} ></input>
              <label htmlFor="JA">Ja</label>
              <p></p>
              <input type="radio" id="submitBox2" ></input>
              <label htmlFor="NE">Nein</label>
            <my-button onClick={this.testfunction} ques-opt="speichern" > </my-button>
            
              </div>
                </div>
              </div>
              
              </Host>
    );
  }

}