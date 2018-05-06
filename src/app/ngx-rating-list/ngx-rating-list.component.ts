import {
  Component,
  OnInit,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ngx-rating-list',
  templateUrl: './ngx-rating-list.component.html',
  styleUrls: ['./ngx-rating-list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NgxRatingListComponent implements OnInit {
  @Input() ratings: boolean[];
  @Input() ratingNumberMax: string;
  @Input() ratingNumber: number;
  @Input() ratingType: string;
  @Input() ratingColor: string;
  @Output() ratingNumberUpdate: EventEmitter<number[]> = new EventEmitter();
  defaultColor = 'black';

  ngOnInit() {
    this.ratingColor = this.ratingColor || 'yellow';
    this.ratings = new Array<boolean>(parseInt(this.ratingNumberMax, 10)).fill(
      false
    );
    this.updateRating(this.ratingNumber - 1);
  }

  updateRating(index) {
    this.ratings = this.ratings.map((el, idx) => idx <= index);
    this.ratingNumberUpdate.emit([
      index + 1,
      parseInt(this.ratingNumberMax, 10)
    ]);
  }

  getRatingColor(index) {
    return this.ratings[index] ? this.ratingColor : this.defaultColor;
  }
}
