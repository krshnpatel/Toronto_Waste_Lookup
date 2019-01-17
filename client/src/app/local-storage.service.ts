import { Injectable, Inject } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "angular-webstorage-service";

const STORAGE_KEY = "toronto_waste_favourites";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  store(item) {
    const storedFavourites = this.storage.get(STORAGE_KEY) || [];
    storedFavourites.push(item);
    this.storage.set(STORAGE_KEY, storedFavourites);
  }

  remove(item) {
    var storedFavourites = this.storage.get(STORAGE_KEY);
    for (var i = 0; i < storedFavourites.length; i++)
    {
      if (item.title === storedFavourites[i].title)
      {
        storedFavourites.splice(i, 1);
        break;
      }
    }
    this.storage.set(STORAGE_KEY, storedFavourites);
  }

  get() {
    return this.storage.get(STORAGE_KEY) || [];
  }
}
