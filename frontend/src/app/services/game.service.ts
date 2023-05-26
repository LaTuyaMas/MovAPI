import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../common/game";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseURL = 'https://movcatalog-9d20f-default-rtdb.europe-west1.firebasedatabase.app/games.json';
  private gamesRef: AngularFireList<any>;
  constructor(private http: HttpClient, private database: AngularFireDatabase) {
    this.gamesRef = database.list('games');
  }

  getGamesList(): Observable<Game[]> {
    return this.gamesRef.valueChanges();
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
