import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cars} from "./cars";

@Injectable()
export class CarsService {
    private carsUrl = "http://localhost:8080/cars";

    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Cars[]> {
        return this.http.get<Cars[]>(this.carsUrl);
    }

    public save(cars: Cars): Observable<Cars> {
        return this.http.post<Cars>(this.carsUrl, cars);
    }

    public delete(id: number) {
        return this.http.delete(`${this.carsUrl}/${id}`);
    }

    public edit(id: number, cars: Cars) {
        return this.http.patch(`${this.carsUrl}/${id}`, cars);
    }

    public findById(id: number): Observable<Cars> {
        return this.http.get<Cars>(`${this.carsUrl}/${id}`);
    }
}