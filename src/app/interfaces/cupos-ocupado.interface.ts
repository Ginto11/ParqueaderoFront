export interface CupoOcupado {
    id: number;
    placa: string | null;
    nombreUsuario: string | null;
    duracion: number | null;
    estadoDescripcion: string | null;
    fechaIngresoEstipulada: Date | null;
    fechaIngresoReal: Date | null;
    costo: number | null;
}