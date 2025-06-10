export interface MatchPhoto {
    altText: string;
    imageUrl: string;
    id: number; // Agregamos id para las rutas dinámicas
}

// Versión manual con id
export const matchPhotos: MatchPhoto[] = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    altText: `Foto del partido ${i + 1}`,
    imageUrl: `/images/matches/image${i + 1}.webp`,
}));

// Función para generar placeholders
export const generatePlaceholders = (count: number): MatchPhoto[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        altText: `Match Photo ${i + 1}`,
        imageUrl: `/placeholder.svg?width=400&height=300&text=Match+Photo+${i + 1}`,
    }));
};

// Para usar placeholders en desarrollo:
// export const matchPhotos = generatePlaceholders(14);