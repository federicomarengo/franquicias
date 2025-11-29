// Datos mock para el prototipo

const mockData = {
    // Datos para el dueño - vista consolidada
    dueño: {
        franquicias: [
            {
                id: 1,
                nombre: "Panadería Centro",
                ubicacion: "Av. Principal 123",
                estado: "activa",
                ventasHoy: 45000,
                ventasSemana: 280000,
                pedidosPendientes: 3,
                stockBajo: 2,
                tendencia: "sube",
                telefono: "+54 9 11 1234-5678",
                productosMasVendidos: ["Pan de Miga", "Facturas", "Medialunas"]
            },
            {
                id: 2,
                nombre: "Panadería Norte",
                ubicacion: "Calle Norte 456",
                estado: "activa",
                ventasHoy: 52000,
                ventasSemana: 320000,
                pedidosPendientes: 1,
                stockBajo: 0,
                tendencia: "sube",
                telefono: "+54 9 11 2345-6789",
                productosMasVendidos: ["Pan de Campo", "Tortas", "Facturas"]
            },
            {
                id: 3,
                nombre: "Panadería Sur",
                ubicacion: "Av. Sur 789",
                estado: "activa",
                ventasHoy: 38000,
                ventasSemana: 240000,
                pedidosPendientes: 5,
                stockBajo: 3,
                tendencia: "baja",
                telefono: "+54 9 11 3456-7890",
                productosMasVendidos: ["Pan Francés", "Facturas", "Sandwiches"]
            },
            {
                id: 4,
                nombre: "Panadería Este",
                ubicacion: "Boulevard Este 321",
                estado: "activa",
                ventasHoy: 61000,
                ventasSemana: 380000,
                pedidosPendientes: 2,
                stockBajo: 1,
                tendencia: "sube",
                telefono: "+54 9 11 4567-8901",
                productosMasVendidos: ["Pan de Miga", "Medialunas", "Tortas"]
            }
        ],
        ventasTotales: {
            hoy: 196000,
            semana: 1220000,
            mes: 4850000,
            crecimiento: 12.5
        },
        pedidosTotales: {
            pendientes: 11,
            enProceso: 8,
            completadosHoy: 15
        },
        productosTop: [
            { nombre: "Pan de Miga", cantidad: 450, ventas: 67500 },
            { nombre: "Facturas", cantidad: 320, ventas: 48000 },
            { nombre: "Medialunas", cantidad: 280, ventas: 56000 },
            { nombre: "Tortas", cantidad: 95, ventas: 71250 },
            { nombre: "Pan Francés", cantidad: 210, ventas: 31500 }
        ],
        promocionesActivas: [
            {
                id: 1,
                nombre: "2x1 en Facturas",
                descripcion: "Lleva 2 docenas y paga 1",
                fechaInicio: "2024-11-25",
                fechaFin: "2024-12-02",
                franquicias: ["Todas"],
                efectividad: 85
            },
            {
                id: 2,
                nombre: "Descuento Tortas",
                descripcion: "20% OFF en todas las tortas",
                fechaInicio: "2024-11-28",
                fechaFin: "2024-12-05",
                franquicias: ["Panadería Norte", "Panadería Este"],
                efectividad: 72
            }
        ]
    },
    
    // Datos para el franquiciado - vista individual
    franquiciado: {
        id: 1,
        nombre: "Panadería Centro",
        ubicacion: "Av. Principal 123",
        ventas: {
            hoy: 45000,
            ayer: 42000,
            semana: 280000,
            mes: 1120000,
            crecimiento: 7.1
        },
        pedidos: [
            {
                id: 1,
                fecha: "2024-11-29",
                estado: "pendiente",
                productos: [
                    { nombre: "Pan de Miga", cantidad: 50, precio: 150 },
                    { nombre: "Facturas", cantidad: 30, precio: 150 },
                    { nombre: "Medialunas", cantidad: 40, precio: 200 }
                ],
                total: 23500
            },
            {
                id: 2,
                fecha: "2024-11-28",
                estado: "en_camino",
                productos: [
                    { nombre: "Tortas", cantidad: 5, precio: 750 },
                    { nombre: "Pan Francés", cantidad: 30, precio: 150 }
                ],
                total: 8250
            },
            {
                id: 3,
                fecha: "2024-11-27",
                estado: "completado",
                productos: [
                    { nombre: "Pan de Miga", cantidad: 45, precio: 150 },
                    { nombre: "Facturas", cantidad: 25, precio: 150 }
                ],
                total: 10500
            }
        ],
        stock: [
            { id: 1, producto: "Pan de Miga", cantidad: 25, minimo: 30, estado: "bajo" },
            { id: 2, producto: "Facturas", cantidad: 45, minimo: 40, estado: "ok" },
            { id: 3, producto: "Medialunas", cantidad: 12, minimo: 25, estado: "bajo" },
            { id: 4, producto: "Tortas", cantidad: 8, minimo: 10, estado: "ok" },
            { id: 5, producto: "Pan Francés", cantidad: 35, minimo: 30, estado: "ok" },
            { id: 6, producto: "Sandwiches", cantidad: 5, minimo: 15, estado: "bajo" }
        ],
        ventasPorHorario: [
            { horario: "08:00-10:00", ventas: 12000, porcentaje: 27 },
            { horario: "10:00-12:00", ventas: 8000, porcentaje: 18 },
            { horario: "12:00-14:00", ventas: 10000, porcentaje: 22 },
            { horario: "14:00-16:00", ventas: 5000, porcentaje: 11 },
            { horario: "16:00-18:00", ventas: 6000, porcentaje: 13 },
            { horario: "18:00-20:00", ventas: 4000, porcentaje: 9 }
        ],
        ventasPorDia: [
            { dia: "Lunes", ventas: 38000 },
            { dia: "Martes", ventas: 42000 },
            { dia: "Miércoles", ventas: 45000 },
            { dia: "Jueves", ventas: 44000 },
            { dia: "Viernes", ventas: 48000 },
            { dia: "Sábado", ventas: 52000 },
            { dia: "Domingo", ventas: 19000 }
        ],
        productosMasVendidos: [
            { nombre: "Pan de Miga", cantidad: 120, ventas: 18000 },
            { nombre: "Facturas", cantidad: 85, ventas: 12750 },
            { nombre: "Medialunas", cantidad: 65, ventas: 13000 },
            { nombre: "Tortas", cantidad: 12, ventas: 9000 }
        ],
        mediosPago: [
            { metodo: "Efectivo", cantidad: 22000, porcentaje: 49 },
            { metodo: "Tarjeta Débito", cantidad: 13000, porcentaje: 29 },
            { metodo: "Tarjeta Crédito", cantidad: 8000, porcentaje: 18 },
            { metodo: "Transferencia", cantidad: 2000, porcentaje: 4 }
        ]
    },
    
    // Datos para el POS - Punto de Venta
    pos: {
        franquiciaId: 1,
        franquiciaNombre: "Panadería Centro",
        caja: {
            id: 1,
            estado: "abierta",
            fondoInicial: 50000,
            totalVentas: 45000,
            totalEgresos: 0,
            efectivoEsperado: 95000,
            efectivoActual: 0
        },
        categorias: [
            { id: 1, nombre: "Pan", icono: "🍞", color: "orange" },
            { id: 2, nombre: "Facturas", icono: "🥐", color: "yellow" },
            { id: 3, nombre: "Tortas", icono: "🎂", color: "pink" },
            { id: 4, nombre: "Sandwiches", icono: "🥪", color: "green" },
            { id: 5, nombre: "Bebidas", icono: "🥤", color: "blue" }
        ],
        productos: [
            // Pan
            { id: 1, nombre: "Pan de Miga", categoria: 1, precio: 150, stock: 25, disponible: true, favorito: true },
            { id: 2, nombre: "Pan Francés", categoria: 1, precio: 150, stock: 35, disponible: true, favorito: false },
            { id: 3, nombre: "Pan de Campo", categoria: 1, precio: 180, stock: 20, disponible: true, favorito: false },
            { id: 4, nombre: "Pan Integral", categoria: 1, precio: 200, stock: 15, disponible: true, favorito: false },
            // Facturas
            { id: 5, nombre: "Medialunas", categoria: 2, precio: 200, stock: 45, disponible: true, favorito: true },
            { id: 6, nombre: "Facturas", categoria: 2, precio: 150, stock: 50, disponible: true, favorito: true },
            { id: 7, nombre: "Tortitas Negras", categoria: 2, precio: 120, stock: 30, disponible: true, favorito: false },
            { id: 8, nombre: "Cañoncitos", categoria: 2, precio: 180, stock: 25, disponible: true, favorito: false },
            // Tortas
            { id: 9, nombre: "Torta de Chocolate", categoria: 3, precio: 750, stock: 8, disponible: true, favorito: true },
            { id: 10, nombre: "Torta de Frutilla", categoria: 3, precio: 800, stock: 6, disponible: true, favorito: false },
            { id: 11, nombre: "Torta de Ricota", categoria: 3, precio: 650, stock: 5, disponible: true, favorito: false },
            { id: 12, nombre: "Torta de Limón", categoria: 3, precio: 700, stock: 4, disponible: true, favorito: false },
            // Sandwiches
            { id: 13, nombre: "Sandwich de Jamón y Queso", categoria: 4, precio: 350, stock: 10, disponible: true, favorito: true },
            { id: 14, nombre: "Sandwich de Milanesa", categoria: 4, precio: 450, stock: 8, disponible: true, favorito: false },
            { id: 15, nombre: "Sandwich de Pollo", categoria: 4, precio: 400, stock: 12, disponible: true, favorito: false },
            // Bebidas
            { id: 16, nombre: "Café", categoria: 5, precio: 200, stock: 999, disponible: true, favorito: true },
            { id: 17, nombre: "Té", categoria: 5, precio: 150, stock: 999, disponible: true, favorito: false },
            { id: 18, nombre: "Agua Mineral", categoria: 5, precio: 250, stock: 50, disponible: true, favorito: false },
            { id: 19, nombre: "Gaseosa", categoria: 5, precio: 300, stock: 40, disponible: true, favorito: false }
        ],
        carrito: [],
        ventaActual: {
            items: [],
            subtotal: 0,
            descuento: 0,
            total: 0,
            cliente: null,
            medioPago: null
        },
        mediosPago: [
            { id: 1, nombre: "Efectivo", icono: "💵", disponible: true },
            { id: 2, nombre: "Tarjeta Débito", icono: "💳", disponible: true },
            { id: 3, nombre: "Tarjeta Crédito", icono: "💳", disponible: true },
            { id: 4, nombre: "Transferencia", icono: "📱", disponible: true },
            { id: 5, nombre: "QR", icono: "📲", disponible: true }
        ],
        usuarioActual: {
            id: 1,
            nombre: "Juan Pérez",
            rol: "Cajero",
            cajaId: 1
        },
        ventasHoy: [
            { id: 1, hora: "08:15", productos: 3, total: 450, medioPago: "Efectivo", cliente: "Cliente 1" },
            { id: 2, hora: "08:30", productos: 2, total: 300, medioPago: "Tarjeta Débito", cliente: null },
            { id: 3, hora: "09:00", productos: 5, total: 950, medioPago: "Efectivo", cliente: "Cliente 2" }
        ]
    }
};

// Funciones de utilidad para formatear números y fechas
const utils = {
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        }).format(amount);
    },
    
    formatNumber: (num) => {
        return new Intl.NumberFormat('es-AR').format(num);
    },
    
    getEstadoColor: (estado) => {
        const colores = {
            'activa': 'bg-green-100 text-green-800',
            'inactiva': 'bg-gray-100 text-gray-800',
            'pendiente': 'bg-yellow-100 text-yellow-800',
            'en_camino': 'bg-blue-100 text-blue-800',
            'completado': 'bg-green-100 text-green-800',
            'ok': 'bg-green-100 text-green-800',
            'bajo': 'bg-red-100 text-red-800'
        };
        return colores[estado] || 'bg-gray-100 text-gray-800';
    },
    
    getTendenciaIcon: (tendencia) => {
        if (tendencia === 'sube') {
            return '<svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>';
        } else if (tendencia === 'baja') {
            return '<svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>';
        }
        return '';
    }
};

