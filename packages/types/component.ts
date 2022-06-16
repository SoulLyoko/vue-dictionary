import type { SetupContext, ExtractPropTypes } from "vue-demi";

export type PropTypes<T> = Readonly<ExtractPropTypes<T>>;
export type EmitFn<T> = SetupContext<T>["emit"];
