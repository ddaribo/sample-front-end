import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.css']
})
export class AnimalListItemComponent implements OnInit {

  @Input() animal: any;
  @Input() animalIndex: number;
  animalPhoto: any;
  constructor() { }

  ngOnInit(): void {
    //var reader = new FileReader();
    this.animalPhoto = this.animal.photo;
    //reader.readAsDataURL(this.animalPhoto);
    //reader.onload = (_event) => {
      //this.animalPhoto = reader.result;
      //console.log(this.previewImage);
    }
  

}
