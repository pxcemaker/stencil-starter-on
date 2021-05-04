/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AnimalCard {
        "age": number;
        "animal": string;
        "habitat": string;
        "image": string;
        "weight": string;
    }
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
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
    interface MyCookie {
        "isopen": boolean;
    }
    interface MyFlipcard {
        "backText": string;
        "frontText": string;
    }
    interface MyFooter {
        "adresse": string;
        "datenschutz": string;
        "hausnummer": number;
        "impressum": string;
        "kontakt": string;
        "name": string;
        "postleitzahl": number;
        "stadt": string;
    }
    interface MyGallery {
    }
    interface MyHeader {
        "headerTitel": string;
    }
    interface MyLinks {
        "text1": string;
        "text2": string;
    }
    interface MyNavigation {
        "Bewertung": string;
        "Galerie": string;
        "Informationen": string;
        "Kontakt": string;
        "Startseite": string;
    }
    interface MyScrollbutton {
    }
    interface MySection {
        "headline": any;
        "image": any;
        "text": any;
    }
    interface MySlider {
        "image1": string;
        "image2": string;
        "image3": string;
    }
    interface StarRating {
    }
}
declare global {
    interface HTMLAnimalCardElement extends Components.AnimalCard, HTMLStencilElement {
    }
    var HTMLAnimalCardElement: {
        prototype: HTMLAnimalCardElement;
        new (): HTMLAnimalCardElement;
    };
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
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
    interface HTMLMyCookieElement extends Components.MyCookie, HTMLStencilElement {
    }
    var HTMLMyCookieElement: {
        prototype: HTMLMyCookieElement;
        new (): HTMLMyCookieElement;
    };
    interface HTMLMyFlipcardElement extends Components.MyFlipcard, HTMLStencilElement {
    }
    var HTMLMyFlipcardElement: {
        prototype: HTMLMyFlipcardElement;
        new (): HTMLMyFlipcardElement;
    };
    interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {
    }
    var HTMLMyFooterElement: {
        prototype: HTMLMyFooterElement;
        new (): HTMLMyFooterElement;
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
    interface HTMLMyLinksElement extends Components.MyLinks, HTMLStencilElement {
    }
    var HTMLMyLinksElement: {
        prototype: HTMLMyLinksElement;
        new (): HTMLMyLinksElement;
    };
    interface HTMLMyNavigationElement extends Components.MyNavigation, HTMLStencilElement {
    }
    var HTMLMyNavigationElement: {
        prototype: HTMLMyNavigationElement;
        new (): HTMLMyNavigationElement;
    };
    interface HTMLMyScrollbuttonElement extends Components.MyScrollbutton, HTMLStencilElement {
    }
    var HTMLMyScrollbuttonElement: {
        prototype: HTMLMyScrollbuttonElement;
        new (): HTMLMyScrollbuttonElement;
    };
    interface HTMLMySectionElement extends Components.MySection, HTMLStencilElement {
    }
    var HTMLMySectionElement: {
        prototype: HTMLMySectionElement;
        new (): HTMLMySectionElement;
    };
    interface HTMLMySliderElement extends Components.MySlider, HTMLStencilElement {
    }
    var HTMLMySliderElement: {
        prototype: HTMLMySliderElement;
        new (): HTMLMySliderElement;
    };
    interface HTMLStarRatingElement extends Components.StarRating, HTMLStencilElement {
    }
    var HTMLStarRatingElement: {
        prototype: HTMLStarRatingElement;
        new (): HTMLStarRatingElement;
    };
    interface HTMLElementTagNameMap {
        "animal-card": HTMLAnimalCardElement;
        "example-component": HTMLExampleComponentElement;
        "my-accordion": HTMLMyAccordionElement;
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-contact": HTMLMyContactElement;
        "my-cookie": HTMLMyCookieElement;
        "my-flipcard": HTMLMyFlipcardElement;
        "my-footer": HTMLMyFooterElement;
        "my-gallery": HTMLMyGalleryElement;
        "my-header": HTMLMyHeaderElement;
        "my-links": HTMLMyLinksElement;
        "my-navigation": HTMLMyNavigationElement;
        "my-scrollbutton": HTMLMyScrollbuttonElement;
        "my-section": HTMLMySectionElement;
        "my-slider": HTMLMySliderElement;
        "star-rating": HTMLStarRatingElement;
    }
}
declare namespace LocalJSX {
    interface AnimalCard {
        "age"?: number;
        "animal"?: string;
        "habitat"?: string;
        "image"?: string;
        "weight"?: string;
    }
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
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
    interface MyCookie {
        "isopen"?: boolean;
    }
    interface MyFlipcard {
        "backText"?: string;
        "frontText"?: string;
    }
    interface MyFooter {
        "adresse"?: string;
        "datenschutz"?: string;
        "hausnummer"?: number;
        "impressum"?: string;
        "kontakt"?: string;
        "name"?: string;
        "postleitzahl"?: number;
        "stadt"?: string;
    }
    interface MyGallery {
    }
    interface MyHeader {
        "headerTitel"?: string;
    }
    interface MyLinks {
        "text1"?: string;
        "text2"?: string;
    }
    interface MyNavigation {
        "Bewertung"?: string;
        "Galerie"?: string;
        "Informationen"?: string;
        "Kontakt"?: string;
        "Startseite"?: string;
    }
    interface MyScrollbutton {
    }
    interface MySection {
        "headline"?: any;
        "image"?: any;
        "text"?: any;
    }
    interface MySlider {
        "image1"?: string;
        "image2"?: string;
        "image3"?: string;
    }
    interface StarRating {
    }
    interface IntrinsicElements {
        "animal-card": AnimalCard;
        "example-component": ExampleComponent;
        "my-accordion": MyAccordion;
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-contact": MyContact;
        "my-cookie": MyCookie;
        "my-flipcard": MyFlipcard;
        "my-footer": MyFooter;
        "my-gallery": MyGallery;
        "my-header": MyHeader;
        "my-links": MyLinks;
        "my-navigation": MyNavigation;
        "my-scrollbutton": MyScrollbutton;
        "my-section": MySection;
        "my-slider": MySlider;
        "star-rating": StarRating;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "animal-card": LocalJSX.AnimalCard & JSXBase.HTMLAttributes<HTMLAnimalCardElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "my-accordion": LocalJSX.MyAccordion & JSXBase.HTMLAttributes<HTMLMyAccordionElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-contact": LocalJSX.MyContact & JSXBase.HTMLAttributes<HTMLMyContactElement>;
            "my-cookie": LocalJSX.MyCookie & JSXBase.HTMLAttributes<HTMLMyCookieElement>;
            "my-flipcard": LocalJSX.MyFlipcard & JSXBase.HTMLAttributes<HTMLMyFlipcardElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-gallery": LocalJSX.MyGallery & JSXBase.HTMLAttributes<HTMLMyGalleryElement>;
            "my-header": LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
            "my-links": LocalJSX.MyLinks & JSXBase.HTMLAttributes<HTMLMyLinksElement>;
            "my-navigation": LocalJSX.MyNavigation & JSXBase.HTMLAttributes<HTMLMyNavigationElement>;
            "my-scrollbutton": LocalJSX.MyScrollbutton & JSXBase.HTMLAttributes<HTMLMyScrollbuttonElement>;
            "my-section": LocalJSX.MySection & JSXBase.HTMLAttributes<HTMLMySectionElement>;
            "my-slider": LocalJSX.MySlider & JSXBase.HTMLAttributes<HTMLMySliderElement>;
            "star-rating": LocalJSX.StarRating & JSXBase.HTMLAttributes<HTMLStarRatingElement>;
        }
    }
}
