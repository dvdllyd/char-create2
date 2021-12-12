import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-special-gen',
  templateUrl: './special-gen.component.html',
  styleUrls: ['./special-gen.component.css']
})
export class SpecialGenComponent implements OnInit {

  constructor(private genService:GeneratorService) { }

  ngOnInit(): void {
  }

  getCleric() {
    this.genService.getRandomCleric()
  }

    getDruid() {
    this.genService.getRandomDruid()
  }

  getWizard() {
    this.genService.getRandomWizard()
  }

  getPsionic() {
    this.genService.getRandomPsionic()
  }
}
