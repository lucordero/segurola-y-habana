export interface MatchPhoto {
    altText: string;
    imageUrl: string;
    id: number; // Agregamos id para las rutas dinámicas
}

// Versión manual con id
export const matchPhotos: MatchPhoto[] = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    altText: `Foto del partido ${i + 1}`,
    imageUrl: `src/data/matches/match1/image${i + 1}.webp`,
}));