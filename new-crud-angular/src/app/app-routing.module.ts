import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' }, //se a url estiver apenas com o caminho localhost vazio vai direcionar para /courses
  { path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) }  //rota de cursos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
