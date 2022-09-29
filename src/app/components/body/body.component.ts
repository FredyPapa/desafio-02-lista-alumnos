import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  listaAlumnos:Alumno[]=[
    {nombre:'Fredy', apellido:'Papa',correo:'fpapa@gmail.com',sexo:'Masculinio', urlFoto:'https://w7.pngwing.com/pngs/560/891/png-transparent-chicken-coloring-book-infant-child-drawing-chick-s-child-chicken-color.png', estado:true},
    {nombre:'Magda', apellido:'Vera',correo:'mvera@gmail.com',sexo:'Femenino', urlFoto:'https://w7.pngwing.com/pngs/560/891/png-transparent-chicken-coloring-book-infant-child-drawing-chick-s-child-chicken-color.png', estado:true},
    {nombre:'Pablo', apellido:'Meza',correo:'pmeza@gmail.com',sexo:'Masculinio', urlFoto:'https://w7.pngwing.com/pngs/560/891/png-transparent-chicken-coloring-book-infant-child-drawing-chick-s-child-chicken-color.png', estado:true},
    {nombre:'Tula', apellido:'Díaz',correo:'tdiaz@gmail.com',sexo:'Masculinio', urlFoto:'https://w7.pngwing.com/pngs/560/891/png-transparent-chicken-coloring-book-infant-child-drawing-chick-s-child-chicken-color.png', estado:false},
    {nombre:'Kevin', apellido:'Mendez',correo:'kmendez@gmail.com',sexo:'Masculinio', urlFoto:'https://w7.pngwing.com/pngs/560/891/png-transparent-chicken-coloring-book-infant-child-drawing-chick-s-child-chicken-color.png', estado:true},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
