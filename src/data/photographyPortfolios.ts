export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    link: string;
    date: string;
    category: string;
    color: string;
}

export const photographyPortfolios: PortfolioItem[] = [
    {
        id: 'urban-exploration',
        title: 'Urban Exploration',
        description: 'Capturing the geometric beauty and raw energy of city life.',
        coverImage: '/images/photography/urban-cover.jpg', // Placeholder
        link: '#',
        date: '2025',
        category: 'Street',
        color: '#F44336' // Red
    },
    {
        id: 'nature-landscapes',
        title: 'Nature & Landscapes',
        description: 'The serenity of the natural world, from mountains to oceans.',
        coverImage: '/images/photography/nature-cover.jpg', // Placeholder
        link: '#',
        date: '2024',
        category: 'Landscape',
        color: '#4CAF50' // Green
    },
    {
        id: 'portraits',
        title: 'Portraits',
        description: 'Focusing on the human element and emotional depth.',
        coverImage: '/images/photography/portrait-cover.jpg', // Placeholder
        link: '#',
        date: '2024',
        category: 'Portrait',
        color: '#2196F3' // Blue
    },
    {
        id: 'film-analog',
        title: 'Analog Memories',
        description: 'Shot on 35mm film, embracing grain and imperfection.',
        coverImage: '/images/photography/film-cover.jpg', // Placeholder
        link: '#',
        date: '2023',
        category: 'Film',
        color: '#FFC107' // Amber
    }
];
