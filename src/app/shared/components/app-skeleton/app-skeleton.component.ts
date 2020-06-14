import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './app-skeleton.component.html',
  styleUrls: ['./app-skeleton.component.scss']
})
export class AppSkeletonComponent implements OnInit {
  @Input() config: any = {};

  defaultConfig: any = {};

  constructor() { }

  ngOnInit(): void {
    this.defaultConfig = {
      appId: 'app-id',
      appTitle: 'App Name',
      isShowSidebar: false
    };
    this.config = Object.assign(this.defaultConfig, this.config);
  }

}
