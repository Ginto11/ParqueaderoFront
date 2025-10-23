import { Routes } from '@angular/router';
import LayoutPublicoComponent from './pages/publico/layout-publico/layout-publico.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutPublicoComponent,
        children: [
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            },
            {
                path: 'inicio',
                loadComponent: () => import('./pages/publico/inicio/inicio.component')
            },
            {
                path: 'servicios',
                loadComponent: () => import('./pages/publico/servicios/servicios.component')
            },
            {
                path: 'nosotros',
                loadComponent: () => import('./pages/publico/nosotros/nosotros.component')
            },
            {
                path: 'contacto',
                loadComponent: () => import('./pages/publico/contacto/contacto.component')
            },
            {
                path: 'ingresar',
                loadComponent: () => import('./pages/publico/ingresar/ingresar.component')
            },
            {
                path: 'registrarse',
                loadComponent: () => import('./pages/publico/registrarse/registrarse.component')
            }
        ]
    },
    {
        path: 'dashboard-admin',
        loadComponent: () => import('./pages/dashboards/dashboard-admin/dashboard-admin.component')
    },
    {
        path: 'dashboard-cliente',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/dashboards/dashboard-cliente/dashboard-cliente.component')
            },
            {
                path: 'registrar-vehiculo',
                loadComponent: () => import('./pages/dashboards/dashboard-cliente/registrar-vehiculo/registrar-vehiculo.component')
            },
            {
                path: 'nueva-reserva',
                loadComponent: () => import('./pages/dashboards/dashboard-cliente/nueva-reserva/nueva-reserva.component')
            },
            {
                path: 'historial-reservas',
                loadComponent: () => import('./pages/dashboards/dashboard-cliente/historial-reservas/historial-reservas.component')
            },
            {
                path: 'ayuda',
                loadComponent: () => import('./pages/dashboards/dashboard-cliente/soporte-ayuda/soporte-ayuda.component')
            }
        ]
    }
];
