import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiUrl =
    "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }
}
