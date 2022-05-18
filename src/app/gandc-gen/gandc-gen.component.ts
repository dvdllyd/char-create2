import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-gandc-gen',
  templateUrl: './gandc-gen.component.html',
  styleUrls: ['./gandc-gen.component.css']
})
export class GandcGenComponent implements OnInit {

  constructor(
    private genService:GeneratorService,
  ) { }

  ngOnInit(): void {
  }

  getGandc() {
    this.genService.getRandomGandc()
  }

}
