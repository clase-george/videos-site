export type Video = {
  etiqueta: 'programacion' | 'finanzas' | 'ia';
  titulo: string;
  descripcion: string;
  visualizaciones: number;
  duracion: string; // formato mm:ss o hh:mm:ss
  meGustas: number;
  imagenUrl?: string;
};

export const videosMock: Video[] = [
  {
    etiqueta: 'programacion',
    titulo: 'Introducción a TypeScript en 20 minutos',
    descripcion: 'Conceptos básicos de TypeScript: tipos, interfaces y configuración de proyecto.',
    visualizaciones: 124532,
    duracion: '18:42',
    meGustas: 8300,
    imagenUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a2c6b6b6b0d3f6f2a6d4a3d8b7c9e1a',
  },
  {
    etiqueta: 'programacion',
    titulo: 'Patrones de diseño para desarrolladores JavaScript',
    descripcion: 'Patrones comunes y cómo aplicarlos en aplicaciones modernas.',
    visualizaciones: 84521,
    duracion: '32:10',
    meGustas: 5400,
    imagenUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b5c7e3f8a1d4c6b7e8f9a0b1c2d3e4f',
  },
  {
    etiqueta: 'programacion',
    titulo: 'Testing con Jest y React Testing Library',
    descripcion: 'Cómo escribir tests unitarios y de integración para componentes React.',
    visualizaciones: 45230,
    duracion: '26:05',
    meGustas: 2600,
    imagenUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
  },
  {
    etiqueta: 'finanzas',
    titulo: 'Introducción a inversiones para principiantes',
    descripcion: 'Conceptos básicos: activos, riesgo, diversificación y cómo empezar.',
    visualizaciones: 201234,
    duracion: '21:45',
    meGustas: 11200,
    imagenUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a',
  },
  {
    etiqueta: 'finanzas',
    titulo: 'Análisis técnico vs análisis fundamental',
    descripcion: 'Diferencias, usos y ejemplos prácticos en el mercado de valores.',
    visualizaciones: 98234,
    duracion: '29:30',
    meGustas: 7200,
    imagenUrl: 'https://i.ytimg.com/vi/HhH-hXykfBM/maxresdefault.jpg',
  },
  {
    etiqueta: 'finanzas',
    titulo: 'Cómo crear un presupuesto mensual efectivamente',
    descripcion: 'Métodos y herramientas para controlar gastos y ahorrar más cada mes.',
    visualizaciones: 40321,
    duracion: '12:18',
    meGustas: 3400,
    imagenUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c',
  },
  {
    etiqueta: 'ia',
    titulo: 'Fundamentos de Machine Learning: regresión y clasificación',
    descripcion: 'Conceptos clave y ejemplos con scikit-learn y Python.',
    visualizaciones: 150987,
    duracion: '35:22',
    meGustas: 9200,
    imagenUrl: 'https://i.ytimg.com/vi/b920s9nXGao/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjS9LDRqaer03xq5d-CthSRTlRVA&days_since_epoch=20251',
  },
  {
    etiqueta: 'ia',
    titulo: 'Deploy de modelos ML en producción',
    descripcion: 'Buenas prácticas, contenedores y servicios para desplegar modelos.',
    visualizaciones: 65321,
    duracion: '22:05',
    meGustas: 4100,
    imagenUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4',
  },
  {
    etiqueta: 'programacion',
    titulo: 'Optimización de rendimiento en aplicaciones web',
    descripcion: 'Técnicas para mejorar la velocidad y experiencia de usuario.',
    visualizaciones: 77210,
    duracion: '19:40',
    meGustas: 4800,
    imagenUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5',
  },
  {
    etiqueta: 'ia',
    titulo: 'Generative AI: casos de uso y demostraciones',
    descripcion: 'Ejemplos prácticos de generación de texto, imágenes y código.',
    visualizaciones: 134210,
    duracion: '30:00',
    meGustas: 10120,
    imagenUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7',
  },
];

export default videosMock;
