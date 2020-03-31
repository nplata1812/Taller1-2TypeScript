export class Student {
    name: string;
    codigo: number;
    cedula: number;
    edad: string;
    direccion: string;
    telefono:number;
  
    constructor(name: string, codigo: number, cedula: number, edad: string,direccion:string,telefono:number) {
      this.name = name;
      this.codigo = codigo;
      this.cedula = cedula;
      this.edad = edad;
      this.direccion = direccion;
      this.telefono = telefono;
    }
  }