import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges{
  @Input()number = 0;
  rep_title = '';
  constructor(){}
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
  }
  ngOnInit() {
    this.number = 15;
    console.log(this.number);
  }

  add() {
    this.number++;
  }  
}
