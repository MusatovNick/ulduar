import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ulduar';

  ngOnInit() {
    console.log('as asd1f asd as1ddf a1111sdf asa1d' );

    const a = { b: 3 };

    console.log(a, 'asd11fa 111 sd 11111111' );
    console.log(a, 'asd11fa 111 sd 11111111' );
  }

  getA() {
    return 10;
  }
}
