import { useState, useEffect } from 'preact/hooks';
import type {MatchPhoto} from '../../data/matchPhotos.ts';

interface ModalPhotoViewerProps {
    photos: MatchPhoto[];
    initialIndex: number;
    onClose: () => void;
}

export default function ModalPhotoViewer({ photos, initialIndex, onClose }: ModalPhotoViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowRight') {
                nextPhoto();
            } else if (e.key === 'ArrowLeft') {
                prevPhoto();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.classList.add('overflow-hidden');

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('overflow-hidden');
        };
    }, [currentIndex]);

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const currentPhoto = photos[currentIndex];

    if (!currentPhoto) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-6xl mx-4">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-yellow-400 transition"
                >
                    &times;
                </button>

                <div className="relative">
                    <img
                        src={currentPhoto.imageUrl}
                        alt={currentPhoto.altText}
                        className="max-h-[80vh] w-auto mx-auto object-contain"
                    />

                    <button
                        onClick={prevPhoto}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="mt-6 text-center text-white">
                    <h2 className="text-2xl font-bold">{currentPhoto.altText}</h2>
                </div>

                <div className="mt-8 flex justify-center space-x-2">
                    {photos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'}`}
                            aria-label={`Ir a la foto ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}