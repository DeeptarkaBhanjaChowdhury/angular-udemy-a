import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
  AfterViewInit
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.show") isOpen = false;

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;

    const dropdownMenu = this.el.nativeElement.querySelector(".dropdown-menu");

    if (this.isOpen) {
      this.renderer.addClass(dropdownMenu, "show");
    } else {
      this.renderer.removeClass(dropdownMenu, "show");
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
