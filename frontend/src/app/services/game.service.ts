import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../common/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseURL = 'http://localhost:3678/api/games';
  constructor(private http: HttpClient) { }

  getGamesList(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseURL+"/");
  }

  getGame(id : string): Observable<Game> {
    return this.http.get<Game>(this.baseURL+"/game/"+id);
  }

  createGame(game: Game) {
    return this.http.post(this.baseURL+"/", game);
  }

  updateGame(id: string, game: Game) {
    return this.http.put(this.baseURL+"/"+id, game);
  }

  removeGame(id: string) {
    return this.http.delete(this.baseURL+"/"+id);
  }
}
