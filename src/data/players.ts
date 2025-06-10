// players.ts
export interface Player {
    id: number;
    name: string;
    nickname: string | null;
    position: string;
    age: number;
    number: number;
    imageUrl: string;
}

// Función para calcular la edad con formato AAAA/MM/DD
function calculateAge(birthDate: string): number {
    const [year, month, day] = birthDate.split('/').map(Number);
    const birthDateObj = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age;
}


export const players: Player[] = [
    {
        id: 1,
        name: 'Brem Gastón',
        nickname: 'Tonchi',
        position: 'Mediocampista',
        age: calculateAge('1995/07/17'),
        number: 8,
        imageUrl: 'placeholder.png',
    },
    {
        id: 2,
        name: 'Cordero Lucas',
        nickname: 'Negro',
        position: 'Defensor',
        age: calculateAge('1997/12/08'),
        number: 42,
        imageUrl: 'placeholder.png',
    },
    {
        id: 3,
        name: 'Cossio Pablo',
        nickname: 'El Pibe',
        position: 'Mediocampista',
        age: calculateAge('1996/09/06'),
        number: 9,
        imageUrl: 'placeholder.png',
    },
    {
        id: 4,
        name: 'Fernández Franco',
        nickname: null,
        position: 'Arquero',
        age: calculateAge('1999/03/21'),
        number: 1,
        imageUrl: 'placeholder.png',
    },
    {
        id: 5,
        name: 'Flores Manuel',
        nickname: null,
        position: 'Defensor',
        age: calculateAge('1994/09/20'),
        number: 20,
        imageUrl: 'placeholder.png',
    },
    {
        id: 6,
        name: 'Gonzalez Emiliano',
        nickname: 'El diez',
        position: 'Mediocampista',
        age: calculateAge('1998/05/20'),
        number: 10,
        imageUrl: 'placeholder.png',
    },
    {
        id: 7,
        name: 'Gonzalez Ezequiel',
        nickname: 'El Gonzalez Bueno',
        position: 'Mediocampista',
        age: calculateAge('1992/08/27'),
        number: 16,
        imageUrl: 'placeholder.png',
    },
    {
        id: 8,
        name: 'Gornati Luciano',
        nickname: null,
        position: 'Mediocampista',
        age: calculateAge('1997/05/08'),
        number: 4,
        imageUrl: 'placeholder.png',
    },
    {
        id: 9,
        name: 'Leiva Estanislao',
        nickname: null,
        position: 'Defensor',
        age: calculateAge('1996/07/02'),
        number: 6,
        imageUrl: 'placeholder.png',
    },
    {
        id: 10,
        name: 'Moyano Eloy',
        nickname: null,
        position: 'Delantero',
        age: calculateAge('2004/06/10'),
        number: 7,
        imageUrl: 'placeholder.png',
    },
    {
        id: 11,
        name: 'Perrone Matías',
        nickname: null,
        position: 'Delantero',
        age: calculateAge('1997/10/25'),
        number: 11,
        imageUrl: 'placeholder.png',
    },
    {
        id: 12,
        name: 'Pueyo Alejo',
        nickname: null,
        position: 'Mediocampista',
        age: calculateAge('1997/09/18'),
        number: 37,
        imageUrl: 'placeholder.png',
    },
    {
        id: 13,
        name: 'Radaelli Walter',
        nickname: null,
        position: 'Defensor',
        age: calculateAge('1995/09/11'),
        number: 5,
        imageUrl: 'placeholder.png',
    },
    {
        id: 14,
        name: 'Silva Bruno',
        nickname: null,
        position: 'Mediocampista',
        age: calculateAge('1997/08/29'),
        number: 87,
        imageUrl: 'placeholder.png',
    },
    {
        id: 15,
        name: 'Tassara Gastón',
        nickname: null,
        position: 'Defensor',
        age: calculateAge('1997/07/22'),
        number: 2,
        imageUrl: 'placeholder.png',
    },
];