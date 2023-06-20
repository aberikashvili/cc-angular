import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  items = ['თბილი სახლი', 'სერვისები', 'სწრაფი ლინკები'];
  expandedIndex = 0;

  menu = [
    {
      menuItem1: 'ჩვენ შესახებ',
      menuItem2: 'თანამშრომლები',
      menuItem3: 'კონტაქტი',
    },
    {
      menuItem1: 'სუსტი დენები',
      menuItem2: 'მექანიკური სისტემები',
      menuItem3: 'წყალგაყვანილობის სისტემები',
      menuItem4: 'ამწე-სატრანსპორტო სისტემები',
      menuItem5: 'ელექტროობა',
    },
    {
      menuItem1: 'ჯილდოები',
      menuItem2: 'პარტნიორები',
      menuItem3: 'პროექტები',
    },
  ];
}
