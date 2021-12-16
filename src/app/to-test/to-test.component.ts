import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-to-test',
  templateUrl: './to-test.component.html',
  styleUrls: ['./to-test.component.css']
})
export class ToTestComponent implements OnInit {

  toTest = []

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.toTestSubject.subscribe(
      (toTest: any[]) => {
        this.toTest = toTest;
      }
    );

    this.storageService.emitToTest();
  }

}
