import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit, OnDestroy {

  favorites = [];
  favoritesSubscription: Subscription;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.favoritesSubscription = this.storageService.favoriteSubject.subscribe(
      (favorites: any[]) => {
        this.favorites = favorites;
      }
    );

    this.storageService.emitFavorites();
  }

  ngOnDestroy(): void {
    this.favoritesSubscription.unsubscribe();
  }
}
