import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneratorService } from '../services/generator.service';
import { Character } from './character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {
  character: Character
  raceSub: Subscription
  race

  colorSub: Subscription
  color

  classSub: Subscription
  charClass

  smartSub: Subscription
  smart

  smashSub: Subscription
  smash

  sneakSub: Subscription
  sneak

  spellSub: Subscription
  spell

  armorSub: Subscription
  armor

  armormatSub: Subscription
  armormat

  gpSub: Subscription
  gp

  weaponSub: Subscription
  weapon

  weapmatSub: Subscription
  weapmat

  handSub: Subscription
  hand

  shieldSub: Subscription
  shield

  shieldmatSub: Subscription
  shieldmat

  rangeSub: Subscription
  range

  clericSub: Subscription
  cleric

  druidSub: Subscription
  druid

  wizardSub: Subscription
  wizard

  psionicSub: Subscription
  psionic

  gandcSub: Subscription
  gandc

  constructor(private gService: GeneratorService) { }

  ngOnInit(): void {
    this.raceSub = this.gService.race.subscribe((race) => {this.race = race})
    this.colorSub = this.gService.color.subscribe((color) => {this.color = color})
    this.classSub = this.gService.class.subscribe((charClass) => {this.charClass = charClass})
    this.smartSub = this.gService.smart.subscribe((smart) => {this.smart = smart})
    this.smashSub = this.gService.smash.subscribe((smash) => {this.smash = smash})
    this.sneakSub = this.gService.sneak.subscribe((sneak) => {this.sneak = sneak})
    this.spellSub = this.gService.spell.subscribe((spell) => {this.spell = spell})
    this.armorSub = this.gService.armor.subscribe((armor) => {this.armor = armor})
    this.armormatSub = this.gService.armormat.subscribe((armormat) => {this.armormat = armormat})
    this.gpSub = this.gService.gp.subscribe((gp) => {this.gp = gp})
    this.weaponSub = this.gService.weapon.subscribe((weapon) => {this.weapon = weapon})
    this.weapmatSub = this.gService.weapmat.subscribe((weapmat) => {this.weapmat = weapmat})
    this.handSub = this.gService.hand.subscribe((hand) => {this.hand = hand})
    this.rangeSub = this.gService.range.subscribe((range) => {this.range = range})
    this.shieldSub = this.gService.shield.subscribe((shield) => {this.shield = shield})
    this.shieldmatSub = this.gService.shieldmat.subscribe((shieldmat) => {this.shieldmat = shieldmat})
    this.clericSub = this.gService.cleric.subscribe((cleric) => {this.cleric = cleric})
    this.druidSub = this.gService.druid.subscribe((druid) => {this.druid = druid})
    this.wizardSub = this.gService.wizard.subscribe((wizard) => {this.wizard = wizard})
    this.psionicSub = this.gService.psionic.subscribe((psionic) => {this.psionic = psionic})
    this.gandcSub = this.gService.gandc.subscribe((gandc) => {this.gandc = gandc})
  }

  ngOnDestroy() {
    this.raceSub.unsubscribe()
    this.colorSub.unsubscribe()
    this.classSub.unsubscribe()
    this.smartSub.unsubscribe()
    this.smashSub.unsubscribe()
    this.sneakSub.unsubscribe()
    this.spellSub.unsubscribe()
    this.armorSub.unsubscribe()
    this.armormatSub.unsubscribe()
    this.gpSub.unsubscribe()
    this.weaponSub.unsubscribe()
    this.weapmatSub.unsubscribe()
    this.handSub.unsubscribe()
    this.rangeSub.unsubscribe()
    this.shieldSub.unsubscribe()
    this.shieldmatSub.unsubscribe()
    this.clericSub.unsubscribe()
    this.druidSub.unsubscribe()
    this.wizardSub.unsubscribe()
    this.psionicSub.unsubscribe()
    this.gandcSub.unsubscribe()

  }

}
