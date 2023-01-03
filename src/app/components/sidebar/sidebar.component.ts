import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/operacoes', title: 'Operações',  icon: 'dashboard', class: '' },
  { path: '/arquivos', title: 'Arquivos',  icon:'folder', class: '' },
  { path: '/estatisticas', title: 'Analytics',  icon:'analytics', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
