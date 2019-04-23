import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GodsonListPage } from './godson-list';

@NgModule({
  declarations: [
    GodsonListPage,
  ],
  imports: [
    IonicPageModule.forChild(GodsonListPage),
  ],
})
export class GodsonListPageModule {}
