export interface UsuarioLogueado {
    id: number;
    nombreCompleto: string;
    identificadorUsuario: string;
    numeroTelefono: string | null;
    rol: string;
    token:string;
}