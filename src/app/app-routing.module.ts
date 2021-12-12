import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassGenComponent } from './class-gen/class-gen.component';
import { EquipGenComponent } from './equip-gen/equip-gen.component';
import { RaceGenComponent } from './race-gen/race-gen.component';
import { SpecialGenComponent } from './special-gen/special-gen.component';

const routes: Routes = [
  {path: 'race', component:RaceGenComponent},
  {path: 'class', component:ClassGenComponent},
  {path: 'equip', component:EquipGenComponent},
  {path: 'special', component:SpecialGenComponent},
  {path: '', redirectTo: "race", pathMatch:"full"}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})


export class AppRoutingModule { }
