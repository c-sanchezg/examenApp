import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    setTimeout(() => {
      this.modalController.dismiss();
    }, 2000);
  }
}
