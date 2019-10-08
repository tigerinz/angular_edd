import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  modifyPasswordModalVisible = false;
  constructor() { }

  ngOnInit() {
  }
  openModifyPassowordModal(): void {
    this.modifyPasswordModalVisible = true;
  }

  closeModifyPasswordModal(): void {
    console.log('Button cancel clicked!');
    this.modifyPasswordModalVisible = false;
  }

  modifyPassword(): void {
    console.log('Button ok clicked!');
    this.modifyPasswordModalVisible = false;
  }
}
