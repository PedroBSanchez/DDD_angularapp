import { Component, Input, OnInit } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  @Input() show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
