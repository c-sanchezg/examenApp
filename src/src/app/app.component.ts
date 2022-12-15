import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderPage } from './pages/loader/loader.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home1', icon: 'home' },
    { title: 'Profile', url: '/profile', icon: 'happy' },
    { title: 'Conversor', url: '/conversor', icon: '' },
    { title: '¿LLevas o Te LLevo?', url: '', icon: '' },
    { title: 'Exit', url: '/login', icon: 'log-out' },
  ];

  constructor(private modalController: ModalController) {
    this.presentLoader();
  }
  async presentLoader() {
    const modal = await this.modalController.create({
      component: LoaderPage
    });
    return await modal.present();
  }
}
