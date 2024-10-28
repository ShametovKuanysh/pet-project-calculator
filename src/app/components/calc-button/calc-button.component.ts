import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-calc-button',
  standalone: true,
  imports: [NgClass, MatIconModule],
  templateUrl: './calc-button.component.html',
  styleUrl: './calc-button.component.scss'
})
export class CalcButtonComponent {
  @Input() value: string = '';
  @Input() type: string = '';
  @Input() icon: string = '';
  @Output() pushed: EventEmitter<string> = new EventEmitter<string>();
  
  clickButton(){
    this.pushed.emit(this.value);
  }
}
