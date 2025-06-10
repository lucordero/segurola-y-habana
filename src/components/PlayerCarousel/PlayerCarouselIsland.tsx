import { useEffect, useRef, useState } from 'preact/hooks';

export interface Player {
    id: number;
    name: string;
    nickname: string | null;
    position: string;
    age: number;
    number: number;
    imageUrl: string;
}

interface Props {
    players: Player[];
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function PlayerCarouselIsland({ players }: Props) {
    const [shuffledPlayers, setShuffledPlayers] = useState<Player[] | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const shuffled = shuffleArray(players);
        const timer = setTimeout(() => {
            setShuffledPlayers(shuffled);
        }, 0);
        return () => clearTimeout(timer);
    }, [players]);

    // Auto-scroll logic
    useEffect(() => {
        if (!shuffledPlayers || !carouselRef.current) return;

        const carousel = carouselRef.current;
        const scrollAmount = 268; // pixels to scroll each step
        const interval = 2000; // time between scrolls (ms)

        const autoScroll = setInterval(() => {
            if (!carousel) return;

            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

            if (carousel.scrollLeft >= maxScrollLeft) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, interval);

        return () => clearInterval(autoScroll);
    }, [shuffledPlayers]);

    if (!shuffledPlayers) {
        return (
            <div className="text-center text-gray-400 py-8 animate-pulse">
                Cargando jugadores...
            </div>
        );
    }

    return (
        <div
            ref={carouselRef}
            className="carousel flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scroll-smooth"
        >
            {shuffledPlayers.map((player) => (
                <div
                    key={player.id}
                    className="flex-shrink-0 w-64 bg-team-black rounded-lg shadow-xl p-6 snap-center transform hover:scale-105 transition-transform duration-300"
                >
                    <img
                        src={player.imageUrl || '/placeholder.svg'}
                        alt={player.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold text-team-yellow">
                        {player.name} #{player.number}
                    </h3>
                    {player.nickname && (
                        <h3 className="text-gray-400 italic">"{player.nickname}"</h3>
                    )}
                    <p className="text-gray-400">{player.position}</p>
                    <p>{player.age} años</p>
                </div>
            ))}
        </div>
    );
}
