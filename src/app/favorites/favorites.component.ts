import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  favorites = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.favoriteSubject.subscribe(
      (favorites: any[]) => {
        this.favorites = favorites;
      }
    );

    this.storageService.emitFavorites();
  }

}
