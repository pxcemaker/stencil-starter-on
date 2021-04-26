import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-contact',
  styleUrl: 'my-contact.css',
  shadow: true,
})
export class MyContact {

componentDidLoad() {
const componentElement = document.querySelector("my-contact");
const frage : HTMLTextAreaElement = componentElement.shadowRoot.querySelector("#frage");
const form : HTMLInputElement = componentElement.shadowRoot.querySelector("#form");
const errorElement : HTMLElement = componentElement.shadowRoot.querySelector("#error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (frage.value === "" || frage.value === null) {
    messages.push("Es muss eine Frage gestellt werden!")
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(", ");
  }
})
}

  render() {

    return (
      <Host>

      <form id="form" action="#" method="GET">

      <div class="formular">

        <div class="inputFields">

          <p>Kontaktformular</p>

          <div id="name">
            <input type="text" name="Name" id="name" placeholder="Gib deinen Namen an" required/>
         </div>

         <div id="email">
            <input type="email" name="Email" id="email" placeholder="Gib deine E-Mail-Adresse an" required/>
          </div>

         <div id="question">
           <textarea id="frage" placeholder="Stelle deine Frage"></textarea>
          </div>

            <div id="error"></div>

            <div class="submitBtn">
              <button type="submit">einreichen</button>
            </div> 
        
         </div>
        
      </div>    

      </form>
          
      </Host>
    );
  }

}

