import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css'],
})
export class UsercardComponent implements OnInit {
  @Input() userName: string = 'Pedro';
  @Input() userAge: number = 21;
  @Input() userEmail: string = 'pedro@mail.com';

  constructor() {}

  ngOnInit(): void {}
}
