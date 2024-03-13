import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Garage} from "./garage";
import {Observable} from "rxjs";

@Injectable()
export class GarageService {
    private garageUrl = "http://localhost:8080/garages";

    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Garage[]> {
        return this.http.get<Garage[]>(this.garageUrl);
    }

    public save(user: Garage) {
        return this.http.post<Garage>(this.garageUrl, user);
    }

    public delete(id: number) {
        return this.http.delete(`${this.garageUrl}/${id}`);
    }

    public edit(id: number) {
        return this.http.put(`${this.garageUrl}/${id}`, id);
    }
}
