import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { LocalStorageService } from "./local-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Toronto Waste Lookup";
  enableSearchResults = false;
  database: any;
  results = [];
  favourites = [];

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.favourites = this.localStorageService.get();
    this.apiService.getData().subscribe(data => {
      this.database = data;
    });
  }

  search(text) {
    this.enableSearchResults = true;
    text = text.toLowerCase();
    this.results = [];
    if (text.length > 0) {
      for (var i = 0; i < this.database.length; i++)
        if (this.database[i].keywords.toLowerCase().includes(text))
          this.results.push(this.database[i]);
    } else this.results = [];
  }

  onKey(event: any) {
    if (event.target.value == "") {
      this.enableSearchResults = false;
      this.results = [];
    }
  }

  check(item) {
    for (var i = 0; i < this.favourites.length; i++)
      if (item.title === this.favourites[i].title) return true;
    return false;
  }

  toggleFavourite(item) {
    var found = false;

    for (var i = 0; i < this.favourites.length; i++) {
      if (item.title === this.favourites[i].title) {
        found = true;
        this.localStorageService.remove(item);
        break;
      }
    }

    if (!found) this.localStorageService.store(item);

    this.favourites = this.localStorageService.get();
  }
}
