import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  skeletonConfig: any;

  constructor() { }

  ngOnInit(): void {
    this.skeletonConfig = {
      appId: 'admin',
      appTitle: 'Admin',
      isShowSidebar: true
    };
  }

}
