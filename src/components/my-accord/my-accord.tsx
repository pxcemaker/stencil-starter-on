import { Component,  h, Prop,  Listen ,Event, EventEmitter, Element } from '@stencil/core';

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
    this.check = true;
    console.log(this.check)
    document.cookie = "CookieSet"
  }
  
  
  
didCompLoad(){
  console.log("it is successfully loaded, your accordeon")

 
}

 
  render() {
    return (
      
      <div class={this.isopen ? 'modal-wrapper' : 'modal-wrapper isopen'}>
        <div class="modal-overlay" onClick={this.handelCancel}/>
        <div class="modal">
        <div class="close"  onClick={this.handelCancel}>
              <p>X</p>
              </div>
          <div class="header">
            <input type="checkbox" id="submitBox"onClick={this.testfunction}></input>
            <button onClick={this.handelCancel}>speichern</button>
            
              <slot/>
              </div>
                </div>
              </div>
              

    );
  }

}