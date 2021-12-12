import { Component, OnInit, Output } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-race-gen',
  templateUrl: './race-gen.component.html',
  styleUrls: ['./race-gen.component.css']
})
export class RaceGenComponent implements OnInit {

  constructor(
    private genService:GeneratorService,

  ) { }

  ngOnInit(): void {
  }

  getColor() {
    this.genService.getRandomColor()
  }


  getRace() {
    this.genService.getRandomRace()
  }



}
