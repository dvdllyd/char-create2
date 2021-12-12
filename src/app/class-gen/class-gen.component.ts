import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-class-gen',
  templateUrl: './class-gen.component.html',
  styleUrls: ['./class-gen.component.css']
})
export class ClassGenComponent implements OnInit {

  constructor(
    private genService:GeneratorService
  ) { }

  ngOnInit(): void {
  }


  getClass() {
    this.genService.getRandomClass()
  }

  getSmart() {
    this.genService.getRandomSmart()
  }

  getSmash() {
  this.genService.getRandomSmash()
  }

  getSneak() {
    this.genService.getRandomSneak()
    }

  getSpell() {
      this.genService.getRandomSpell()
        }
}



