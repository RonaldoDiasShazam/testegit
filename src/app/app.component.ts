import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showSplash = true;

  public appPages = [     
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Desenvolvimento de Sistemas',
      url: '/desenvolvimento',
      icon: "laptop"
    },
    {
      title: 'Administração',
      url: '/adm',
      icon: 'podium'
    },
    {
      title: 'Etim',
      url: '/etim',
      icon: 'create'
    },
    {
      title: 'Contabilidade',
      url: '/contabilidade',
      icon: 'calculator'
    },
    {
      title: 'Marqueting',
      url: '/marqueting',
      icon: 'briefcase'
    },
    {
      title: 'Recursos Humanos',
      url: '/rh',
      icon: 'people'
    },
    {
      title: 'Recursos Jurídicos',
      url: '/juridico',
      icon: 'paper'
    },
    {
      title: 'Vestuário',
      url: '/vestuario',
      icon: 'shirt'
    },
    {
      title: 'Ensino á Distância',
      url: '/ead',
      icon: 'pin'
    },
    {
      title: 'xxxMUDARxxx',
      url: '/info',
      icon: 'controlle-a'
    }
  ];
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false);
    });
  }
}
