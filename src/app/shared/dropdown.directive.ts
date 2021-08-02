import { Directive, ElementRef, HostBinding, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {}

    @HostListener('click') onDropdownClick(e: Event) {
        this.isOpen = !this.isOpen;
    }
}