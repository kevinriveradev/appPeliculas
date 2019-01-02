import { Component, OnInit } from '@angular/core';
import { ServiciopeliculasService } from '../serviciopeliculas.service';

@Component({
  selector: 'listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.css']
})
export class ListapeliculasComponent implements OnInit {

  public cartelera: Array<any>;
  public accion: Array<any>;
  public terror: Array<any>;
  public comedia: Array<any>;
  public animadas: Array<any>;
  constructor(private serviciopeliculas: ServiciopeliculasService) { }

  async ngOnInit() {
    //Obtener todas las peliculas.
    this.obtenerPeliculasCartelera();
    this.obtenerPeliculasAccion();
    this.obtenerPeliculasTerror();
    this.obtenerPeliculasComedia();
    this.obtenerPeliculasAnimadas();
  }

  obtenerPeliculasAnimadas() {
    this.serviciopeliculas.obtenerPeliculasAnimadas().subscribe(
      respuesta => {
        this.animadas = [];
        for (var i = 0; i < respuesta.results.length; i++) {
          if (i < 8) {
            this.animadas.push(respuesta.results[i]);
          }
        }
      },
      error => {}
    );
  }

  obtenerPeliculasComedia() {
    this.serviciopeliculas.obtenerPeliculasComedia().subscribe(
      respuesta => {
        this.comedia = [];
        for (var i = 0; i < respuesta.results.length; i++) {
          if (i < 8) {
            this.comedia.push(respuesta.results[i]);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerPeliculasTerror() {
    this.serviciopeliculas.obtenerPeliculasMiedo().subscribe(
      respuesta => {
        this.terror = [];
        for (var i = 0; i < respuesta.results.length; i++) {
          if (i < 8) {
            this.terror.push(respuesta.results[i]);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerPeliculasAccion() {

    this.serviciopeliculas.obtenerPeliculasAccion().subscribe(
      respuesta => {
        this.accion = [];
        for (var i = 8; i < respuesta.results.length; i++) {
          if (i < 16) {
            this.accion.push(respuesta.results[i]);
          }
        }
      },
      error => {
        console.log(error);
      }
    )
  }
  obtenerPeliculasCartelera() {
          this.serviciopeliculas.obtenerPeliculasCartelera().subscribe(
            (respuesta) => {
              this.cartelera = [];
              for (var i = 0; i < respuesta.results.length; i++) {
                if (i < 8) {
                  this.cartelera.push(respuesta.results[i]);
                }
              }
          },
          (error) => {
            console.log(error);
          }
      );
  }


}
