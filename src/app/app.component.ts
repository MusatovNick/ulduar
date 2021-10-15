import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ulduar';

  ngOnInit() {
    console.log('asdf asdf asasd' );

    const a = { b: 3 };

    console.log(a, 'asdfasd 111' );
  }

  getA() {
    return 10;
  }
}
