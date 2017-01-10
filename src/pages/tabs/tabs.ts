import { Component } from '@angular/core';
import { NewsPage } from '../news/news';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab2Root: any = AboutPage;
  tab1Root: any = NewsPage;

  constructor() {

  }
}
