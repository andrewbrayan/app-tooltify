import {
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ngx-tooltify',
  templateUrl: './ngx-tooltify.component.html',
  styleUrls: ['./ngx-tooltify.component.scss'],
})
export class NgxTooltifyComponent implements OnInit {
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() width: 'auto' | 'xs' | 'sm' | 'lg' | 'xl' | number = 'auto';

  tootify: HTMLElement;
  parentElement: HTMLElement | null;
  active: boolean = false;

  constructor(private elementRef: ElementRef) {
    this.tootify = this.elementRef.nativeElement;
    this.parentElement = this.tootify.parentElement;
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    if (this.parentElement) {
      this.parentElement.classList.add('ngx-tooltify-container');
      this.tootify.classList.add('ngx-tooltify');
      this.setPosition();
      this.setWidth();
    }
  }

  setPosition(): void {
    this.tootify.classList.add(`ngx-tooltify--is-${this.position}`);
  }

  setWidth(): void {
    if (Number(this.width)) {
      this.tootify.style.width = `${this.width}px`;
    } else {
      this.tootify.classList.add(`ngx-tooltify--width-${this.width}`);
    }
  }
}
