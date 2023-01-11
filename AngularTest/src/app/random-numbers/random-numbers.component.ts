import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RandomNumberComponent } from '../random-number/random-number.component';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.scss']
})
export class RandomNumbersComponent implements AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  // @ViewChildren(RandomNumberComponent)
  // randomNumbers!: QueryList<RandomNumberComponent>

  @ContentChildren(RandomNumberComponent)
  randomNumbers!: QueryList<RandomNumberComponent>

  sum!: number;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('After view init', this.randomNumbers);
    // this.sum = this.randomNumbers
    //   .map(randomNumber => randomNumber.value)
    //   .reduce((acc, curr) => acc + curr)
  }

  ngAfterContentInit(): void {
    console.log('After content init', this.randomNumbers);
    this.sum = this.randomNumbers
      .map(randomNumber => randomNumber.value)
      .reduce((acc, curr) => acc + curr)
  }

  ngAfterContentChecked(): void {
    console.log('After content checked', this.randomNumbers);
    this.sum = this.randomNumbers
      .map(randomNumber => randomNumber.value)
      .reduce((acc, curr) => acc + curr)
  }

  ngAfterViewChecked(): void {
    // console.log(this.randomNumbers);
    //  this.sum = this.randomNumbers
    //   .map(randomNumber => randomNumber.value)
    //   .reduce((acc, curr) => acc + curr)
  }

}
