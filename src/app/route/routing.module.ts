import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from "../page/file-upload/file-upload.component";
import { FileSummaryComponent } from "../page/file-summary/file-summary.component";

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FileUploadComponent
  },
  {
    path: 'summary',
    pathMatch: 'full',
    component: FileSummaryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true, initialNavigation: true})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
