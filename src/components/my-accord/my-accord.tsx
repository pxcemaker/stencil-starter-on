import { Component,  h, Prop,  Listen ,Event, EventEmitter, Element, Host } from '@stencil/core';

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
 
  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent){
    if (ev.key === 'ArrowDown'){
      console.log('down arrow pressed')
    }
  }
  private handelCancel = ()=> {
    this.isopen =true;
  }

  

  testfunction(){
    console.log("submit")
    
    console.log(this.check)
    const test = document.cookie = "CookieSet"
    if(test==="CookieSet")
    {
      this.check = true;
    }

  }
  
  
  
didCompLoad(){
  console.log("it is successfully loaded, your accordeon")

 
}

 
  render() {
    return (
      <Host class={this.check ? 'modal-wrapper' : 'modal-wrapper isopen'}>
      <div class={this.isopen ? 'modal-wrapper' : 'modal-wrapper isopen'}>
        <div class="modal-overlay" onClick={this.handelCancel}/>
        <div class="modal">
        <div class="close"  onClick={this.handelCancel}>
              <p>X
              </p>
              <h3>Möchten Sie die Cookies akzeptieren ?</h3>
              </div>
          <div class="header">
            <input type="checkbox" id="submitBox"onClick={this.testfunction} ></input>
              <label htmlFor="JA">Ja</label>
              <p></p>
              <input type="checkbox" id="submitBox"onClick={this.testfunction} ></input>
              <label htmlFor="NE">Nein</label>
            <my-button onClick={this.handelCancel} ques-opt="speichern"> </my-button>
            
              </div>
                </div>
              </div>
              
              </Host>
    );
  }

}