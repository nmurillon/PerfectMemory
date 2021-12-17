import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-to-test',
  templateUrl: './to-test.component.html',
  styleUrls: ['./to-test.component.css']
})
export class ToTestComponent implements OnInit, OnDestroy {

  toTest = []
  toTestSubscription: Subscription;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.toTestSubscription = this.storageService.toTestSubject.subscribe(
      (toTest: any[]) => {
        this.toTest = toTest;
      }
    );

    this.storageService.emitToTest();
  }

  ngOnDestroy(): void {
      this.toTestSubscription.unsubscribe();
  }
}
