import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent implements OnInit {
  @Input() model: string = '';
  @Input() brand: string = '';
  @Input() year: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
