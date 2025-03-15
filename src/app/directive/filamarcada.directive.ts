import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFilamarcada]',
  standalone: true
})
export class FilamarcadaDirective {

  @Input() highlightColor: string = '#f5f5f5';
  
  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
    //console.log(this.highlightColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string | null) {
    const row = this.el.nativeElement;
    const cells = row.querySelectorAll('td');
    
    cells.forEach((cell: HTMLElement) => {
      if (color) {
        this.renderer.setStyle(cell, 'background-color', color);
      } else {
        this.renderer.removeStyle(cell, 'background-color');
      }
    });
    
    // También aplica al TR por si acaso
    this.renderer.setStyle(row, 'background-color', color);
  }

}
