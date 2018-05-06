import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ngx-rating',
  templateUrl: './ngx-rating.component.html',
  styleUrls: ['./ngx-rating.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NgxRatingComponent implements OnInit {
  @Input() label: string;
  @Input() ratingNumberMax: number;
  @Input() ratingNumber: number;
  @Input() ratingType: string;
  @Input() ratingColor: string;
  @Input() comment: string;
  @Output() ratingNumberUpdate: EventEmitter<number[]> = new EventEmitter();

  ngOnInit() {}
  onRatingNumberUpdate(newValue) {
    this.ratingNumberUpdate.emit(newValue);
  }
}
