import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import {DetailsPage} from '../details/details'

@Component({
    selector: 'news',
    templateUrl: 'news.html',
    providers:[]
})
export class NewsPage {
    items:any;

    constructor(public navCtrl:NavController,public http:Http ) {

    }

    ngOnInit(){
              //recevoir les données sous format json en utilisant mon api sur heroku pour les injecter 
              //dans la page
               this.http.get('https://hamzamellah-api.herokuapp.com/api/news')
                .subscribe(response=>{this.items=response.json()})

    }
    viewItem(item){

        //envoyer le detail de l'actualité vers la page details.html pour les afficher
        this.navCtrl.push(DetailsPage,{item:item})
    }


}
