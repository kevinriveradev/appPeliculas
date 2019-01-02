import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciopeliculasService {

  constructor(private peliculas: HttpClient) { }

  public obtenerPeliculasAnimadas(): Observable<any> {
    return this.peliculas.get('https://api.themoviedb.org/3/discover/movie?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES&with_genres=16');
  }

  public obtenerPeliculasComedia(): Observable<any> {
    return this.peliculas.get('https://api.themoviedb.org/3/discover/movie?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES&with_genres=35');
  }

  public obtenerPeliculasMiedo(): Observable<any> {
    return this.peliculas.get('https://api.themoviedb.org/3/discover/movie?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES&with_genres=27')
  }

  public obtenerPeliculasAccion(): Observable<any> {
    return this.peliculas.get('https://api.themoviedb.org/3/discover/movie?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES&with_genres=28');
  }

  public obtenerPeliculasCartelera(): Observable<any> {
    return this.peliculas.get('https://api.themoviedb.org/3/movie/popular?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES');
  }
}
