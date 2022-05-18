import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassGenComponent } from './class-gen/class-gen.component';
import { RaceGenComponent } from './race-gen/race-gen.component';
import { EquipGenComponent } from './equip-gen/equip-gen.component';
import { SpecialGenComponent } from './special-gen/special-gen.component';
import { HeaderGenComponent } from './header-gen/header-gen.component';
import { SmashComponent } from './class-gen/smash/smash.component';
import { SneakComponent } from './class-gen/sneak/sneak.component';
import { SpellComponent } from './class-gen/spell/spell.component';
import { SmartComponent } from './class-gen/smart/smart.component';
import { ArmorComponent } from './equip-gen/armor/armor.component';
import { WeaponsComponent } from './equip-gen/weapons/weapons.component';
import { GoldComponent } from './equip-gen/gold/gold.component';
import { MiscComponent } from './equip-gen/misc/misc.component';
import { SpellbookComponent } from './special-gen/spellbook/spellbook.component';
import { CyberneticsComponent } from './special-gen/cybernetics/cybernetics.component';
import { MutationsComponent } from './special-gen/mutations/mutations.component';
import { AnimalCompanionComponent } from './special-gen/animal-companion/animal-companion.component';
import { RobotComponent } from './special-gen/robot/robot.component';
import { CharacterComponent } from './character/character.component';
import { GandcGenComponent } from './gandc-gen/gandc-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassGenComponent,
    RaceGenComponent,
    EquipGenComponent,
    SpecialGenComponent,
    HeaderGenComponent,
    SmashComponent,
    SneakComponent,
    SpellComponent,
    SmartComponent,
    ArmorComponent,
    WeaponsComponent,
    GoldComponent,
    MiscComponent,
    SpellbookComponent,
    CyberneticsComponent,
    MutationsComponent,
    AnimalCompanionComponent,
    RobotComponent,
    CharacterComponent,
    GandcGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
