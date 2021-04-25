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
    interface MyGallery {
    }
    interface StarRating {
    }
    interface TestComponent {
        "age": Number;
        "animal": String;
        "habitat": String;
        "image": String;
        "weight": String;
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
    interface HTMLMyGalleryElement extends Components.MyGallery, HTMLStencilElement {
    }
    var HTMLMyGalleryElement: {
        prototype: HTMLMyGalleryElement;
        new (): HTMLMyGalleryElement;
    };
    interface HTMLStarRatingElement extends Components.StarRating, HTMLStencilElement {
    }
    var HTMLStarRatingElement: {
        prototype: HTMLStarRatingElement;
        new (): HTMLStarRatingElement;
    };
    interface HTMLTestComponentElement extends Components.TestComponent, HTMLStencilElement {
    }
    var HTMLTestComponentElement: {
        prototype: HTMLTestComponentElement;
        new (): HTMLTestComponentElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "my-accord": HTMLMyAccordElement;
        "my-component": HTMLMyComponentElement;
        "my-gallery": HTMLMyGalleryElement;
        "star-rating": HTMLStarRatingElement;
        "test-component": HTMLTestComponentElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface MyAccord {
        "onOpenAccord"?: (event: CustomEvent<string>) => void;
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
    interface MyGallery {
    }
    interface StarRating {
    }
    interface TestComponent {
        "age"?: Number;
        "animal"?: String;
        "habitat"?: String;
        "image"?: String;
        "weight"?: String;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "my-accord": MyAccord;
        "my-component": MyComponent;
        "my-gallery": MyGallery;
        "star-rating": StarRating;
        "test-component": TestComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-accord": LocalJSX.MyAccord & JSXBase.HTMLAttributes<HTMLMyAccordElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-gallery": LocalJSX.MyGallery & JSXBase.HTMLAttributes<HTMLMyGalleryElement>;
            "star-rating": LocalJSX.StarRating & JSXBase.HTMLAttributes<HTMLStarRatingElement>;
            "test-component": LocalJSX.TestComponent & JSXBase.HTMLAttributes<HTMLTestComponentElement>;
        }
    }
}
