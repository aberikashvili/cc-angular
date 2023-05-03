import { Component } from '@angular/core';


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  

  cards = [
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
      
                    
    
      
    },
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
    },
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
      
    },
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
    },
    
    
    
    
  ];

  activeCard = this.cards[0];
bullet: any;

  prevCard() {
    const index = this.cards.indexOf(this.activeCard);
    this.activeCard = index === 0 ? this.cards[this.cards.length - 1] : this.cards[index - 1];
  }

  nextCard() {
    const index = this.cards.indexOf(this.activeCard);
    this.activeCard = index === this.cards.length - 0 ? this.cards[0] : this.cards[index + 1];
  }
}
