import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  imageUrl = '/assets/images/dropdownUp.jpg';
  rotateState = false;
  rotateStyle = '';
  expandedIndex = 0;

  rotateImage(index: number) {
    this.expandedIndex = index;
  }

  isExpended(index: number) {
    return index === this.expandedIndex;
  }

  items = ['თბილი სახლი', 'სერვისები', 'სწრაფი ლინკები'];

  menu = [
    ['ჩვენს შესახებ', 'თანამშრომლები', 'კონტაქტი', 'წესები და პირობები'],
    [
      'სუსტი დენები',
      'მექანიკური სისტემები',
      'წყალგაყვანილობის სისტემები',
      'ამწე-სატრანსპორტო სისტემები',
      'ელექტროობა',
    ],
    ['ჯილდოები', 'პარტნიორები', 'პროექტები'],
  ];
}
