import { CommonModule } from '@angular/common';
import {
  Component,
  OnChanges,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  standalone: true,
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  imports: [CommonModule],
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  starWidth = 0;
  @Output() ratingClicked = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
