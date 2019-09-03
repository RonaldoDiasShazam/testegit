import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'desenvolvimento', loadChildren: './desenvolvimento/desenvolvimento.module#DesenvolvimentoPageModule'},
  { path: 'adm', loadChildren: './adm/adm.module#AdmPageModule' },
  { path: 'etim', loadChildren: './etim/etim.module#EtimPageModule' },
  { path: 'contabilidade', loadChildren: './contabilidade/contabilidade.module#ContabilidadePageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'marqueting', loadChildren: './marqueting/marqueting.module#MarquetingPageModule' },
  { path: 'rh', loadChildren: './rh/rh.module#RhPageModule' },
  { path: 'juridico', loadChildren: './juridico/juridico.module#JuridicoPageModule' },
  { path: 'vestuario', loadChildren: './vestuario/vestuario.module#VestuarioPageModule' },
  { path: 'ead', loadChildren: './ead/ead.module#EadPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
