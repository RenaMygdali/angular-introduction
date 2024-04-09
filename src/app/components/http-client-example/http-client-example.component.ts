import { Component, OnInit, inject } from '@angular/core';
import { ChuckNorrisJoke, DadJoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokeService = inject(JokesService);
  dadJoke = '';
  chuchNorrisJoke = '';

  //να είναι έτοιμα τα data πριν την εμφάνιση του template
  ngOnInit(): void {

    this.refreshDadJoke();

    this.refreshChuchNorrisJoke();
  };

  refreshDadJoke() {
    this.jokeService
    .getDadJoke()
    .subscribe((data: DadJoke) => {
      this.dadJoke = data.joke;
    });
  };

  refreshChuchNorrisJoke() {
    this.jokeService
    .getChuckNorrisJoke()
    .subscribe((data: ChuckNorrisJoke) => {
      this.chuchNorrisJoke = data.value;
    })
  };

}
