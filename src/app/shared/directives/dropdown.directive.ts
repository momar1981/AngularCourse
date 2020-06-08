import { Directive,Renderer2, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  ngOnInit(){
    this.render.removeClass(this.elmentRef.nativeElement,'open');
  }
  @HostListener('click') onMouseUp(evt: Event)
  { 
    if(this.elmentRef.nativeElement.classList.contains('open'))
      this.render.removeClass(this.elmentRef.nativeElement,'open');
    else
      this.render.addClass(this.elmentRef.nativeElement,'open');
  }

  constructor(private elmentRef: ElementRef,private render: Renderer2) 
  {
  
  }

}
