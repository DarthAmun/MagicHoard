import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {
  @Input() buttonIcon: string = "";
  @Output() newClickEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any){
    this.newClickEventEmitter.emit(event);
  }
}
