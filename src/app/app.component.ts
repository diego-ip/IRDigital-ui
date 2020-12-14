import { Component, Renderer2, Inject } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { NavigationService } from 'src/@uni/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IRDigital-ui';

  constructor(private navigationService: NavigationService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document) {

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.navigationService.items = [
      {
        type: 'link',
        label: 'Bienvenido',
        route: '/home',
      },
      {
        type: 'link',
        label: 'Nuevo Cliente',
        route: '/cliente/new',
      },
      {
        type: 'link',
        label: 'Clientes',
        route: '/cliente/list',
      },
      {
        type: 'link',
        label: 'KPI Clientes',
        route: '/cliente/kpi',
      },
    ];
  }
}
