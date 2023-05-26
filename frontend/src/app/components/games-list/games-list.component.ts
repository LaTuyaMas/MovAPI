import { Component, OnInit } from '@angular/core';
import {Game} from "../../common/game";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[] = [];

  formGame: FormGroup = this.formBuilder.group({
    id: [''],
    name: [''],
    icon: [''],
    banner: [''],
    images: this.formBuilder.array([]),
    price: [0],
    developers: this.formBuilder.array([]),
    publishers: this.formBuilder.array([]),
    genres: this.formBuilder.array([]),
    consoles: this.formBuilder.array([]),
    release_date: this.formBuilder.group({
      day: [0],
      month: [0],
      year: [0]
    }),
    post_date: this.formBuilder.group({
      day: [0],
      month: [0],
      year: [0]
    }),
    comments: this.formBuilder.array([])
  });

  edit = false;
  constructor(private gameService: GameService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listGames();
  }

  get images() : FormArray {return this.formGame.controls["images"] as FormArray;}
  addImage() {this.images.push(new FormControl(''));}

  get developers() : FormArray {return this.formGame.controls["developers"] as FormArray;}
  addDeveloper() {this.developers.push(new FormControl(''));}

  get publishers() : FormArray {return this.formGame.controls["publishers"] as FormArray;}
  addPublisher() {this.publishers.push(new FormControl(''));}

  get genres() : FormArray {return this.formGame.controls["genres"] as FormArray;}
  addGenres() {this.genres.push(new FormControl(''));}

  get consoles() : FormArray {return this.formGame.controls["consoles"] as FormArray;}
  addConsole() {this.consoles.push(new FormControl(''));}

  get comments() : FormArray {return this.formGame.get("comments") as FormArray;}

  listGames(): void {
    this.gameService.getGamesList().subscribe(
      (data: any) => {
        this.games = data;
        console.log(data);
      }
    );
  }

  getScore(game: Game): number {
    let total = 0;
    game.comments!.forEach((comment) => {
      total += comment.score;
    });
    let media = total / game.comments!.length;
    return Math.round(media * 10) / 10;
  }

  onSubmit() {
    if (this.edit) {
      const id = this.formGame.getRawValue()._id;
      this.gameService.updateGame(id,
        this.formGame.getRawValue()).subscribe(
        (data:any) => {
          this.listGames();
        }
      );
    }
    else {
      const game: Game = this.formGame.getRawValue();
      delete game.comments;
      console.log(game);
      this.gameService.createGame(game).subscribe(
        (data:any) => {
          console.log(data);
          this.listGames();
        }
      );
    }
  }

  loadGame(game: Game) {
    this.formGame.reset();
    this.images.clear();
    this.developers.clear();
    this.publishers.clear();
    this.genres.clear();
    this.consoles.clear();
    this.comments.clear();
    this.edit = true;
    console.log(game);

    for (let i = 0; i < game.images.length; i++) {this.images.push(new FormControl(''));}
    for (let i = 0; i < game.developers.length; i++) {this.developers.push(new FormControl(''));}
    for (let i = 0; i < game.publishers.length; i++) {this.publishers.push(new FormControl(''));}
    for (let i = 0; i < game.genres.length; i++) {this.genres.push(new FormControl(''));}
    for (let i = 0; i < game.consoles.length; i++) {this.consoles.push(new FormControl(''));}

    // for (let i = 0; i < serie.user_score!.length; i++) {
    //   this.user_scores.push(
    //     this.formBuilder.group({
    //       email: serie.user_score![i].email,
    //       score: serie.user_score![i].score
    //     })
    //   );
    // }

    this.formGame.setValue(game);
    console.log(this.formGame);
  }

  newGame() {
    this.formGame.reset();
    this.images.clear();
    this.developers.clear();
    this.publishers.clear();
    this.genres.clear();
    this.consoles.clear();
    this.edit = false;

    for (let i = 0; i < 4; i++) {this.images.push(new FormControl(''));}
    this.developers.push(new FormControl(''));
    this.publishers.push(new FormControl(''));
    for (let i = 0; i < 2; i++) {this.genres.push(new FormControl(''));}
    this.consoles.push(new FormControl(''));
  }

  removeGame(game: Game) {
    if (this.games.length <= 1) {
      alert('You cannot leave the collection without any games');
    } else {
      if (confirm('¿Are you sure about deleting '+game.name+'?')) {
        this.gameService.removeGame(game.id).subscribe(
          data => {
            console.log(data);
            this.listGames();
          }
        );
      }
    }
  }
}
