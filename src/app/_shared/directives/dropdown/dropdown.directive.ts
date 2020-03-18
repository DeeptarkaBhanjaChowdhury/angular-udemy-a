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

  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;

    const dropdownMenu = this.elRef.nativeElement.querySelector(
      ".dropdown-menu"
    );

    if (this.isOpen && dropdownMenu !== null) {
      this.renderer.addClass(dropdownMenu, "show");
    } else if (dropdownMenu !== null){
      this.renderer.removeClass(dropdownMenu, "show");
    }
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
