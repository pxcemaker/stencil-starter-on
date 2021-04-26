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
        "titelAccord": string;
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
        "titel": string;
    }
    interface MyGallery {
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
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "my-accord": HTMLMyAccordElement;
        "my-component": HTMLMyComponentElement;
        "my-contact": HTMLMyContactElement;
        "my-cookies": HTMLMyCookiesElement;
        "my-gallery": HTMLMyGalleryElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface MyAccord {
        "onOpenaccord"?: (event: CustomEvent<string>) => void;
        "titelAccord"?: string;
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
        "titel"?: string;
    }
    interface MyGallery {
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "my-accord": MyAccord;
        "my-component": MyComponent;
        "my-contact": MyContact;
        "my-cookies": MyCookies;
        "my-gallery": MyGallery;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-accord": LocalJSX.MyAccord & JSXBase.HTMLAttributes<HTMLMyAccordElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-contact": LocalJSX.MyContact & JSXBase.HTMLAttributes<HTMLMyContactElement>;
            "my-cookies": LocalJSX.MyCookies & JSXBase.HTMLAttributes<HTMLMyCookiesElement>;
            "my-gallery": LocalJSX.MyGallery & JSXBase.HTMLAttributes<HTMLMyGalleryElement>;
        }
    }
}
