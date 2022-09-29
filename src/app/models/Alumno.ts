export class Alumno{
  nombre:string;
  apellido:string;
  sexo:string;
  correo:string;
  urlFoto:string;
  estado:boolean;

  constructor(nombre:string, apellido:string, sexo:string, correo:string, urlFoto:string, estado:boolean){
      this.nombre=nombre;
      this.apellido=apellido;
      this.sexo=sexo;
      this.correo=correo;
      this.urlFoto=urlFoto;
      this.estado=estado;
  }
}
