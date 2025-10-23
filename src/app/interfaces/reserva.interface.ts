export interface Reserva {
    id: number;
    vehiculoId: number | null;
    cupoId: number | null;
    fechaReserva: Date | null;
    fechaIngreso: Date | null;
    fechaSalida: Date | null;
    costo: number | null;
    duracion: number | null;
    estado: boolean | null;
    cupo: any | null;
    vehiculo: any | null;
    estadoDescripcion: string | null;
}