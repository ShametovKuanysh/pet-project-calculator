import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { CalcButtonComponent } from "../calc-button/calc-button.component";
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MatIconModule, CalcButtonComponent, NgIf, NgClass],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CalculatorComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  operator: string | null = null;
  result: number = 0;
  mode: string = 'light'

  ngOnInit(): void {
    this.changeThemeColor(this.mode)
  }

  pushButton(e: string){
    
    switch(e){
      case '=':
        if (this.operator && this.num2){
          this.calculate();
        }
        break;
      case 'AC': 
        this.num1 = 0;
        this.num2 = 0;
        this.operator = null;
        this.result = 0;
        break
      case '.': 
        // this.operator ? this.num2 = this.num2 * 0.1 : this.num1 = this.num1 * 0.1
        break;
      case '±': 
        this.operator ? this.num2 = this.num2 * -1 : this.num1 = this.num1 * -1
        break;
      case '+':
        if (this.num2){
          this.calculate()
          this.num2 = 0;
          this.operator = '+'
          this.num1 = this.result
        } else this.operator = '+'
        break;
      case '-':
        if (this.num2){
          this.calculate()
          this.num2 = 0;
          this.operator = '-'
          this.num1 = this.result
        } else this.operator = '-'
        break;
      case '*':
        if (this.num2){
          this.calculate()
          this.num2 = 0;
          this.operator = '*'
          this.num1 = this.result
        } else this.operator = '*'
        break;
      case '/':
        if (this.num2){
          this.calculate()
          this.num2 = 0;
          this.operator = '/'
          this.num1 = this.result
        } else this.operator = '/'
        break;
      default:
        if(!isNaN(Number(e))){
          if (this.operator){
            if (this.num2 < 1_000_000){
              this.num2 = this.num2 * 10 + Number(e);
            }
          } else {
            if (this.num1 < 1_000_000){
              this.num1 = this.num1 * 10 + Number(e);
            }
          }
        } else {
          this.operator = e;
        }
        break;
    }


    console.log('push button', e)
  }

  calculate(){
    switch(this.operator){
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        if(this.num2 === 0){
          alert('Cannot divide by zero!');
          return;
        }
        this.result = this.num1 / this.num2;
        break;
      case '%':
        this.result = this.num1 % this.num2;
        break;
      default:
        console.error('Invalid operator');
        break;
    }
  }

  changeThemeColor(type: string){
    this.mode = type;
    const body = document.getElementsByTagName('body')[0];

    if (type === 'light'){
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    }
  }
}
