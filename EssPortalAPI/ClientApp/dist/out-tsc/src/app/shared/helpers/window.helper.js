import { InjectionToken } from "@angular/core";
export function _window() {
    return window;
}
export const WINDOW = new InjectionToken("WindowToken");
export class WindowRef {
    get nativeWindow() {
        throw new Error("Not implemented.");
    }
}
export class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return _window();
    }
}
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
export const windowProvider = {
    provide: WINDOW,
    useFactory: _window,
    deps: []
};
export const WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];
//# sourceMappingURL=window.helper.js.map