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
    interface ImgLinks {
    }
    interface MyAccord {
        "check": boolean;
        "isopen": boolean;
        "titelAccord": string;
    }
    interface MyAccordion {
        "accOpen": boolean;
    }
    interface MyButton {
        "appearance": string;
        "text": string;
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
    interface MyCookies {
    }
    interface MyGallery {
    }
    interface MySection {
        "headline": any;
        "image": any;
        "text": any;
    }
}
declare global {
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLImgLinksElement extends Components.ImgLinks, HTMLStencilElement {
    }
    var HTMLImgLinksElement: {
        prototype: HTMLImgLinksElement;
        new (): HTMLImgLinksElement;
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
    interface HTMLMyCookiesElement extends Components.MyCookies, HTMLStencilElement {
    }
    var HTMLMyCookiesElement: {
        prototype: HTMLMyCookiesElement;
        new (): HTMLMyCookiesElement;
    };
    interface HTMLMyGalleryElement extends Components.MyGallery, HTMLStencilElement {
    }
    var HTMLMyGalleryElement: {
        prototype: HTMLMyGalleryElement;
        new (): HTMLMyGalleryElement;
    };
    interface HTMLMySectionElement extends Components.MySection, HTMLStencilElement {
    }
    var HTMLMySectionElement: {
        prototype: HTMLMySectionElement;
        new (): HTMLMySectionElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "img-links": HTMLImgLinksElement;
        "my-accord": HTMLMyAccordElement;
        "my-accordion": HTMLMyAccordionElement;
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-contact": HTMLMyContactElement;
        "my-cookies": HTMLMyCookiesElement;
        "my-gallery": HTMLMyGalleryElement;
        "my-section": HTMLMySectionElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface ImgLinks {
    }
    interface MyAccord {
        "check"?: boolean;
        "isopen"?: boolean;
        "onOpenaccord"?: (event: CustomEvent<string>) => void;
        "titelAccord"?: string;
    }
    interface MyAccordion {
        "accOpen"?: boolean;
    }
    interface MyButton {
        "appearance"?: string;
        "text"?: string;
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
    interface MyCookies {
    }
    interface MyGallery {
    }
    interface MySection {
        "headline"?: any;
        "image"?: any;
        "text"?: any;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "img-links": ImgLinks;
        "my-accord": MyAccord;
        "my-accordion": MyAccordion;
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-contact": MyContact;
        "my-cookies": MyCookies;
        "my-gallery": MyGallery;
        "my-section": MySection;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "img-links": LocalJSX.ImgLinks & JSXBase.HTMLAttributes<HTMLImgLinksElement>;
            "my-accord": LocalJSX.MyAccord & JSXBase.HTMLAttributes<HTMLMyAccordElement>;
            "my-accordion": LocalJSX.MyAccordion & JSXBase.HTMLAttributes<HTMLMyAccordionElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-contact": LocalJSX.MyContact & JSXBase.HTMLAttributes<HTMLMyContactElement>;
            "my-cookies": LocalJSX.MyCookies & JSXBase.HTMLAttributes<HTMLMyCookiesElement>;
            "my-gallery": LocalJSX.MyGallery & JSXBase.HTMLAttributes<HTMLMyGalleryElement>;
            "my-section": LocalJSX.MySection & JSXBase.HTMLAttributes<HTMLMySectionElement>;
        }
    }
}
