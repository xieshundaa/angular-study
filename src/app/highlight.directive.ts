import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // @Input('appHighlight') highlightColor: string;
  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') highlightColor: string;
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.hightLight('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hightLight(null);
  }
  private hightLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
