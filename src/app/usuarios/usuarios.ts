export interface Usuario {
  email:string,
  password:string,
  perfil:string
}

export const usuarios:Usuario[] = [{email:'admin@admin.com', password:'123456', perfil:'admin'},
{email:'empleado@empleado.com', password:'123456', perfil:'empleado'}]
