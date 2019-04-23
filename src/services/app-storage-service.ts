import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AppStorageService {

  constructor(private storage: Storage) {}

  set(title: string, value: string): void {
    this.storage.set(title, value);
  }

  get(value: string): any {
    return new Promise((resolve, reject) => {
      this.storage.get(value).then(val => {
        console.log('val', val);
        resolve(val);
      })
    });
    //return promise;
  }

  remove(): void {
    this.storage.clear();
  }
}
