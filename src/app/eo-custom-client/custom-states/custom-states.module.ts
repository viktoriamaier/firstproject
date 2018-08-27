import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {EoFrameworkModule} from '@eo-sdk/client';
import {EoLinkPlugin} from '@eo-sdk/client';
import {AuthGuard} from '@eo-sdk/client';

export const routes: Route[] = [
];

export const links: EoLinkPlugin[] = [
  {path: 'https://developer.enaio.org/display/DD/enaio+redline+4+client', id: 'eo.custom.link.developer.enaio', matchType: /sidebar-profile/},
  {path: 'https://developer.enaio.org/display/DD/enaio+redline+4+client', id: 'eo.custom.link.developer.enaio', matchType: /sidebar-navigation/},
  // {path: '/dashboard', id: 'eo.custom.state.sample', matchType: /sidebar-navigation/, queryParams: {debug: true}},
  // {path: 'https://google.com/', id: 'eo.custom.state.sample', matchType: /sidebar-profile/}
];

@NgModule({
  imports: [
    CommonModule,
    EoFrameworkModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class CustomStatesModule {
}
