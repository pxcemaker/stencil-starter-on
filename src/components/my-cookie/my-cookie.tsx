import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-cookie',
  styleUrl: 'my-cookie.css',
  shadow: true,
})
export class MyCookie {

  @Prop({
    mutable:true,
    reflect:true,
  })
  
  @Prop()
  isopen:boolean;

  
  private handelCancel = ()=> {
      this.isopen =true;
      
      
      
    }
  setCookie() {
  
      document.cookie = "Cookie wurde gesetzt"
    }
 
    render() {
      return (
        <Host >   
        <div class={this.isopen ? 'modal-wrapper' : 'modal-wrapper isopen'}>
          <div class="modal-overlay" onClick={this.handelCancel}/>
          <div class="modal">
          <div class="close"  onClick={this.handelCancel}>
                <p>X
                </p>
                <h3>Möchten Sie die Cookies akzeptieren ?</h3>
                </div>
            <div class="header">
              <input type="radio" id="submitBox1"onClick={this.setCookie} ></input>
                <label htmlFor="JA">Ja</label>
                <p></p>
              <my-button onClick={this.handelCancel} ques-opt="speichern" > </my-button>
                </div>
                  </div>
                </div>
                </Host>
      );
    }
  
  }