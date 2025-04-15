/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "vee-validate";
declare module 'intl-tel-input' {
  export interface Plugin {
    getNumber: () => string
    setNumber: (number: string) => void
    isValidNumber: () => boolean
  }

  export interface Options {
    initialCountry?: string
    preferredCountries?: string[]
    utilsScript?: string
    [key: string]: any
  }

  export default function intlTelInput(
    input: HTMLInputElement,
    options?: Options
  ): Plugin
}