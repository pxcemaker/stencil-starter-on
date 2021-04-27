/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface MyAccord {
        "check": boolean;
        "isopen": boolean;
        "titelAccord": string;
    }
    interface MyAccordion {
        "accordText": string;
        "isOpen": boolean;
    }
    interface MyButton {
        "quesOpt": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyContact {
    }
    interface MyGallery {
    }
    interface MyHeader {
        "headerTitel": string;
    }
}
declare global {
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLMyAccordElement extends Components.MyAccord, HTMLStencilElement {
    }
    var HTMLMyAccordElement: {
        prototype: HTMLMyAccordElement;
        new (): HTMLMyAccordElement;
    };
    interface HTMLMyAccordionElement extends Components.MyAccordion, HTMLStencilElement {
    }
    var HTMLMyAccordionElement: {
        prototype: HTMLMyAccordionElement;
        new (): HTMLMyAccordionElement;
    };
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyContactElement extends Components.MyContact, HTMLStencilElement {
    }
    var HTMLMyContactElement: {
        prototype: HTMLMyContactElement;
        new (): HTMLMyContactElement;
    };
    interface HTMLMyGalleryElement extends Components.MyGallery, HTMLStencilElement {
    }
    var HTMLMyGalleryElement: {
        prototype: HTMLMyGalleryElement;
        new (): HTMLMyGalleryElement;
    };
    interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {
    }
    var HTMLMyHeaderElement: {
        prototype: HTMLMyHeaderElement;
        new (): HTMLMyHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "my-accord": HTMLMyAccordElement;
        "my-accordion": HTMLMyAccordionElement;
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-contact": HTMLMyContactElement;
        "my-gallery": HTMLMyGalleryElement;
        "my-header": HTMLMyHeaderElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface MyAccord {
        "check"?: boolean;
        "isopen"?: boolean;
        "onOpenaccord"?: (event: CustomEvent<string>) => void;
        "titelAccord"?: string;
    }
    interface MyAccordion {
        "accordText"?: string;
        "isOpen"?: boolean;
    }
    interface MyButton {
        "quesOpt"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyContact {
    }
    interface MyGallery {
    }
    interface MyHeader {
        "headerTitel"?: string;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "my-accord": MyAccord;
        "my-accordion": MyAccordion;
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-contact": MyContact;
        "my-gallery": MyGallery;
        "my-header": MyHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-accord": LocalJSX.MyAccord & JSXBase.HTMLAttributes<HTMLMyAccordElement>;
            "my-accordion": LocalJSX.MyAccordion & JSXBase.HTMLAttributes<HTMLMyAccordionElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-contact": LocalJSX.MyContact & JSXBase.HTMLAttributes<HTMLMyContactElement>;
            "my-gallery": LocalJSX.MyGallery & JSXBase.HTMLAttributes<HTMLMyGalleryElement>;
            "my-header": LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
        }
    }
}
