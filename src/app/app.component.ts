import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ulduar';

  ngOnInit() {
    console.log('as asdf asd as1ddf a111sdf asasd' );

    const a = { b: 3 };

    console.log(a, 'asd1fa 111 sd 1111111' );
  }

  getA() {
    return 10;
  }
}
