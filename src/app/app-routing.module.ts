import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    loadChildren: () => import('./paginas/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./paginas/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./paginas/slider/slider.module').then( m => m.SliderPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
