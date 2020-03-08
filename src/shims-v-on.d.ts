import {
  ComponentAdditionalAttrs,
  ElementAdditionalAttrs
} from "vue-tsx-support/types/base";

declare module "vue-tsx-support/types/base" {
  interface ElementAdditionalAttrs {
    on?: Record<string, Function | Function[]>;
  }

  interface ComponentAdditionalAttrs {
    on?: Record<string, Function | Function[]>;
  }
}
