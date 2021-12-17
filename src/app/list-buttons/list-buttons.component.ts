import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.css']
})
export class ListButtonsComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  @Input()
  recipe: any;

  faStar = faStar;
  farStar = farStar;
  faCheckCircle = faCheckCircle;
  farCheckCircle = farCheckCircle;

  ngOnInit(): void {
  }

  toggleFavorite(){
    this.storageService.toggleFavorite(this.recipe);
  }

  toggleToTest(){
    this.storageService.toggleToTest(this.recipe);
  }
}
