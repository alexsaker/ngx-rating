import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Renderer,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
@Component({
  selector: 'ngx-rating-element',
  templateUrl: './ngx-rating-element.component.html',
  styleUrls: ['./ngx-rating-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NgxRatingElementComponent implements OnInit {
  @Input() ratingType: string;
  @Input() ratingColor: string;
  @Output() ratingElementHover: EventEmitter<boolean> = new EventEmitter();

  color: string;

  @HostListener('mouseover')
  onHover() {
    this.ratingElementHover.emit(true);
  }
  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit() {}
}
