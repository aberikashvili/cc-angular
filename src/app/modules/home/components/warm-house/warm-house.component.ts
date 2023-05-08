import { Component} from '@angular/core';


@Component({
  selector: 'app-warm-house',
  templateUrl: './warm-house.component.html',
  styleUrls: ['./warm-house.component.scss']
})
export class WarmHouseComponent  {
  widgetValues: any[] = [
  { value: 245, label: 'შესრულებული სამუშაოები' },
  { value: 47, label: 'ჩვენი პარტნიორები' },
  { value: 287, label: 'თანამშრომელი' },
  { value: 38, label: 'მიღებული ჯილდო' },
];
Value: any;
}
