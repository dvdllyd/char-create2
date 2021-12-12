import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-equip-gen',
  templateUrl: './equip-gen.component.html',
  styleUrls: ['./equip-gen.component.css']
})
export class EquipGenComponent implements OnInit {

  constructor(
    private genService:GeneratorService,) { }



  ngOnInit(): void {
  }

  getArmor() {
    this.genService.getRandomArmor()
  }

  getArmormat() {
    this.genService.getRandomArmormat()
  }

  getGp() {
    this.genService.getRandomGp()
  }

  getWeapon() {
    this.genService.getRandomWeapon()
  }

  getWeapmat() {
    this.genService.getRandomWeapmat()
  }

  getHand() {
    this.genService.getRandomHand()
  }

  getShield() {
    this.genService.getRandomShield()
  }

  getShieldmat() {
    this.genService.getRandomShieldmat()
  }

  getRange() {
    this.genService.getRandomRange()
  }
}
