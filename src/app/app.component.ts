import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {id:1,name:'Never Fight A loosing battle',description:'If you know you are going to loose the fight retreat.'},
    {id:2,name:'A Bird At Hand Is Worth Two In The Bush',description:'Never loose what you have for what you admire.'},
    {id:3,name:'If You Cannot Fight Them Join Them.',description:'Never fight against many cause you will not defeat them.'},
    {id:4,name:'Silence At Times Speaks Louder Than Words',description:'Avoid repetition if the person cannot react to what you are saying keep quite.'},
    {id:5,name:'If You Want To Go Far Walk Alone',description:'Too many cooks spoils the soup,work alone!'},
    {id:6,name:'Getting No Message Is Also A Message',description:'If someone is silent there is a reason behind that'},
  ];
}