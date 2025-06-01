export interface DebounceHTMLElement extends HTMLButtonElement {
    _debounceTime?: number
    _debounceHandler?: (event: Event) => void
}
