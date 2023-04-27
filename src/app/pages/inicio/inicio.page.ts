import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirectTo: string
  color: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'list-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
      color: 'dark'
    },
    {
      icon: 'cloud-download-outline',
      name: 'Alert',
      redirectTo: '/alert',
      color: 'primary'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
