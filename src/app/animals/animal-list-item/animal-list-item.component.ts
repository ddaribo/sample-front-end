import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.css']
})
export class AnimalListItemComponent implements OnInit {

  @Input() animal: any;
  @Input() animalIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

}
