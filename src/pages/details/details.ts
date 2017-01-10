import { Component } from '@angular/core';
import { SocialSharing } from 'ionic-native';
import { NavController ,NavParams} from 'ionic-angular';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html'
})
export class DetailsPage {
    item:any;
    
    constructor(public navCtrl: NavController,public params:NavParams) {
    //pour avoir les infos venant (de item)de la page news.html
      this.item=params.get('item');
        
    }
   

}