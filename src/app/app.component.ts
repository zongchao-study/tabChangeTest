import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChangeSelectedTab';
  index = 0;
  tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.index = this.tabs.length - 1;
  }
  tabChange() {
    alert('tab changed ...');
  }
}
