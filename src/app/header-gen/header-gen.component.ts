import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-gen',
  templateUrl: './header-gen.component.html',
  styleUrls: ['./header-gen.component.css']
})
export class HeaderGenComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
