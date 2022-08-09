import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'abra-shopping-list-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('snackBar') snackBar: ElementRef;
  @ViewChild('alertBar') alertBar: ElementRef;
  
  @Input() text: string = '';
  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.snackBar.nativeElement.className = 'show';
    this.move()
  }

  private i = 0;
  public move() {
    if (this.i === 0) {
      let width = 1;
      let interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval);
          this.close();
        } else {
          width += 0.5;
          this.alertBar.nativeElement.style.width = width + "%";
        }
      }, 30)
    }
  }

  public close() {
    this.closeEvent.emit();
  }

  ngOnDestroy(): void {
  }

}
