export const googleClone = {
    header : {
        h1 : { 
            src : '/assets/clone-logo-header.svg', 
            alt : 'Clone TV'
        },
        menu : [
            { id : 0, icono : '/assets/search.svg', alt: 'icon', title : 'Go to Search',  texto : 'Search',  href : 'main/search'},
            { id : 1, icono : '',                   alt: 'icon', title : 'Go to For you', texto : 'For you', href : 'main/foryou'},
            { id : 2, icono : '',                   alt: 'icon', title : 'Go to Movies',  texto : 'Movies',  href : 'main/movies'},
            { id : 3, icono : '',                   alt: 'icon', title : 'Go to Shows',   texto : 'Shows',   href : 'main/shows'},
            { id : 4, icono : '',                   alt: 'icon', title : 'Go to Apps',    texto : 'Apps',    href : 'main/apps'},
            { id : 5, icono : '',                   alt: 'icon', title : 'Go to Library', texto : 'Library', href : 'main/library'}
        ],
        avatar : {
            id : 0, img : '/assets/imgs/user@2x.jpg', alt : 'Avatar', title : 'Go to Profile', href : 'login/select-profile'
        }
    },
    main : {
        movies : [
            {   id          : 0,
                provider    : 'Netflix',
                alt         : 'Netflix',
                logoProvider: '/assets/providers/netflix.svg',
                bgSlide     : '/assets/movies/slider/bgSlide.jpg',
                bgSmall     : '/assets/movies/cards/bgCard.jpg',
                title       : 'Power Rangers: Once & Always',
                summary     : 'Special celebrating the 30th anniversary of the “Mighty Morphin Power Rangers” franchise.',
                btnText     : 'Watch on',
                rating      : '🍅 91%',
                restriction : '12',
                category    : 'Comedy Action',
                years       : '2023',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 1,
                provider    : 'HBO Max',
                alt         : 'HBO Max',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/movies/slider/bgSlide1.jpg',
                bgSmall     : '/assets/movies/cards/bgCard1.jpg',
                title       : 'Dune',
                summary     : 'A lone gunfighter makes his way through the outer reaches of the galaxy.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Drama',
                years       : '2022',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details' 
            },
            {   id          : 2,
                provider    : 'Prime Video',
                alt         : 'Prime Video',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide2.jpg',
                bgSmall     : '/assets/movies/cards/bgCard2.jpg',
                title       : 'Everything Everywhere All at Once',
                summary     : 'A middle-aged Chinese immigrant is swept up into an insane adventure.',
                btnText     : 'Watch on',
                rating      : '🍅 90%',
                restriction : '16',
                category    : 'Action Sci-Fi',
                years       : '2022',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details' 
            },
            {   id          : 3,
                provider    : 'HBO Max',
                alt         : 'HBO Max',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/movies/slider/bgSlide3.jpg',
                bgSmall     : '/assets/movies/cards/bgCard3.jpg',
                title       : 'The Whale',
                summary     : 'A reclusive English teacher suffering from severe obesity attempts to get his life together.',
                btnText     : 'Watch on',
                rating      : '🍅 94%',
                restriction : '18',
                category    : 'Drama',
                years       : '2023',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 4,
                provider    : 'Apple TV+',
                alt         : 'Apple TV+',
                logoProvider: '/assets/providers/appletv.svg',
                bgSlide     : '/assets/movies/slider/bgSlide4.jpg',
                bgSmall     : '/assets/movies/cards/bgCard4.jpg',
                title       : 'Avatar: The Way of Water',
                summary     : 'Jake Sully and Ney’tiri have formed a family and are doing everything to stay together.',
                btnText     : 'Watch on',
                rating      : '🍅 93%',
                restriction : '18',
                category    : 'Sci-Fi',
                years       : '2022',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 5,
                provider    : 'Netflix',
                alt         : 'Netflix',
                logoProvider: '/assets/providers/netflix.svg',
                bgSlide     : '/assets/movies/slider/bgSlide5.jpg',
                bgSmall     : '/assets/movies/cards/bgCard5.jpg',
                title       : 'Murder Mystery 2',
                summary     : 'Now private detectives Nick and Audrey Spitz land at the centre of an international investigation.',
                btnText     : 'Watch on',
                rating      : '🍅 91%',
                restriction : '18',
                category    : 'Action Comedy',
                years       : '2023',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 6,
                provider    : 'Star+',
                alt         : 'Star+',
                logoProvider: '/assets/providers/starplus.svg',
                bgSlide     : '/assets/movies/slider/bgSlide6.jpg',
                bgSmall     : '/assets/movies/cards/bgCard6.jpg',
                title       : 'Cocaine Bear',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🤢 34%',
                restriction : '21',
                category    : 'Comedy',
                years       : '2023',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 7,
                provider    : 'Star+',
                alt         : 'Star+',
                logoProvider: '/assets/providers/starplus.svg',
                bgSlide     : '/assets/movies/slider/bgSlide7.jpg',
                bgSmall     : '/assets/movies/cards/bgCard7.jpg',
                title       : 'Creed III',
                summary     : 'After dominating the boxing world, Creed thrives both his career and family life.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '18',
                category    : 'Action Drama',
                years       : '2022',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 8,
                provider    : 'Hulu',
                alt         : 'Hulu',
                logoProvider: '/assets/providers/hulu.svg',
                bgSlide     : '/assets/movies/slider/bgSlide8.jpg',
                bgSmall     : '/assets/movies/cards/bgCard8.jpg',
                title       : 'Shazam! Fury of the Gods',
                summary     : 'The film continues the story of teenage Billy Batson, transformed into his alter ego, Shazam.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Action Comedy',
                years       : '2022',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 9,
                provider    : 'Disney+',
                alt         : 'Disney+',
                logoProvider: '/assets/providers/disneyplus.svg',
                bgSlide     : '/assets/movies/slider/bgSlide9.jpg',
                bgSmall     : '/assets/movies/cards/bgCard9.jpg',
                title       : 'Mummies',
                summary     : 'The fun adventures of three ancient Egyptian mummies who live in ancient Egypt.',
                btnText     : 'Watch on',
                rating      : '🍅 94%',
                restriction : '16',
                category    : 'Animation',
                years       : '2022',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            }
        ],
        series : [
            {   id          : 0,
                provider    : 'HBOMax',
                alt         : 'HBOMax',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/series/slider/bgSlide.jpg',
                bgSmall     : '/assets/series/cards/bgCard.jpg',
                title       : 'Friends',
                summary     : 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 1,
                provider    : 'Disney+',
                alt         : 'Disney+',
                logoProvider: '/assets/providers/disneyplus.svg',
                bgSlide     : '/assets/series/slider/bgSlide1.jpg',
                bgSmall     : '/assets/series/cards/bgCard1.jpg',
                title       : 'How I Met Your Mother',
                summary     : 'Ted Mosby, an architect, recounts to his children the events that led him to meet their mother.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details' 
            },
            {   id          : 2,
                provider    : 'HBOMax',
                alt         : 'HBOMax',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/series/slider/bgSlide2.jpg',
                bgSmall     : '/assets/series/cards/bgCard2.jpg',
                title       : 'The Last Of Us',
                summary     : 'Joel and Ellie, a pair connected through the harshness of the world, are forced to endure brutal circumstances on a trek across a post-outbreak America.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 3,
                provider    : 'AppleTV+',
                alt         : 'AppleTV+',
                logoProvider: '/assets/providers/appletv.svg',
                bgSlide     : '/assets/series/slider/bgSlide3.jpg',
                bgSmall     : '/assets/series/cards/bgCard3.jpg',
                title       : 'Ted Lasso',
                summary     : 'An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 4,
                provider    : 'HBOMax',
                alt         : 'HBOMax',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/series/slider/bgSlide4.jpg',
                bgSmall     : '/assets/series/cards/bgCard4.jpg',
                title       : 'True Detective',
                summary     : 'Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 5,
                provider    : 'Disney+',
                alt         : 'Disney+',
                logoProvider: '/assets/providers/disneyplus.svg',
                bgSlide     : '/assets/series/slider/bgSlide5.jpg',
                bgSmall     : '/assets/series/cards/bgCard5.jpg',
                title       : 'The Mandalorian',
                summary     : 'A lone gunfighter makes his way through the outer reaches of the galaxy.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 6,
                provider    : 'Netflix',
                alt         : 'Netflix',
                logoProvider: '/assets/providers/netflix.svg',
                bgSlide     : '/assets/series/slider/bgSlide6.jpg',
                bgSmall     : '/assets/series/cards/bgCard6.jpg',
                title       : 'Beef',
                summary     : 'Two strangers get into a road rage incident that brings chaos into their lives.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 7,
                provider    : 'HBO Max',
                alt         : 'HBO Max',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/series/slider/bgSlide7.jpg',
                bgSmall     : '/assets/series/cards/bgCard7.jpg',
                title       : 'Succession',
                summary     : 'The Logan family is known for controlling the biggest media and entertainment company in the world.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 8,
                provider    : 'Netflix',
                alt         : 'Netflix',
                logoProvider: '/assets/providers/netflix.svg',
                bgSlide     : '/assets/series/slider/bgSlide8.jpg',
                bgSmall     : '/assets/series/cards/bgCard8.jpg',
                title       : 'Breaking Bad',
                summary     : 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business. His priorities begin to change.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            },
            {   id          : 9,
                provider    : 'Prime Video',
                alt         : 'Prime Video',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/series/slider/bgSlide9.jpg',
                bgSmall     : '/assets/series/cards/bgCard9.jpg',
                title       : 'This Is Us',
                summary     : 'The series follows the lives of siblings Kevin, Kate, and Randall (known as the “big three”), and their parents Jack and Rebecca Pearson.',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'serie-details'
            }
        ],
        apps : [
            {   id          : 0,
                appName     : 'YouTube',
                logoApp     : '/assets/providers/youtube.svg',
                appColor    : '#FF0000',
                type        : 'Installed',
                href        : 'youtube'
            },
            {   id          : 1,
                appName     : 'Spotify',
                logoApp     : '/assets/providers/spotify.svg',
                appColor    : '#2EBD59',
                type        : 'Installed',
                href        : 'spotify'
            },
            { id            : 2,
                appName     : 'Prime Video',
                logoApp     : '/assets/providers/primevideo.svg',
                appColor    : '#00A8E1',
                type        : 'Installed',
                href        : 'prime-video'
            },
            {   id          : 3,
                appName     : 'Plex',
                logoApp     : '/assets/providers/plex.svg',
                appColor    : '#272A2D',
                type        : 'Installed',
                href        : 'plex'
            },
            {   id          : 4,
                appName     : 'Netflix',
                logoApp     : '/assets/providers/netflix.svg',
                appColor    : '#E50914',
                type        : 'Installed',
                href        : 'netflix'
            },
            {   id          : 5,
                appName     : 'Twitch',
                logoApp     : '/assets/providers/twitch.svg',
                appColor    : '#65459B',
                type        : 'Installed',
                href        : 'twitch'
            },
            {   id          : 6,
                appName     : 'Hulu',
                logoApp     : '/assets/providers/hulu.svg',
                appColor    : '#1CE783',
                type        : 'Installed',
                href        : 'hulu'
            },
            {   id          : 7,
                appName     : 'HBO Max',
                logoApp     : '/assets/providers/hbomax.svg',
                appColor    : '#991EEB',
                type        : 'Installed',
                href        : 'hbo-max'
            },
            {   id          : 8,
                appName     : 'Disney+',
                logoApp     : '/assets/providers/disneyplus.svg',
                appColor    : '#1A1D29',
                type        : 'Installed',
                href        : 'disneyplus'
            },
            {   id          : 9,
                appName     : 'Star+',
                logoApp     : '/assets/providers/starplus.svg',
                appColor    : '#271F44',
                type        : 'Installed',
                href        : 'starplus'
            },
            {   id          : 10,
                appName     : 'Apple TV+',
                logoApp     : '/assets/providers/appletv.svg',
                appColor    : '#333333',
                type        : 'Featured',
                href        : 'appletv'
            },
            {   id          : 11,
                appName     : 'ATRESPlayer',
                logoApp     : '/assets/providers/atresplayer.svg',
                appColor    : '#060829',
                type        : 'Featured',
                href        : 'atresplayer'
            },
            {   id          : 12,
                appName     : 'Crunchyroll',
                logoApp     : '/assets/providers/crunchyroll.svg',
                appColor    : '#F4752A',
                type        : 'Featured',
                href        : 'crunchyroll'
            },
            {   id          : 13,
                appName     : 'Paramount+',
                logoApp     : '/assets/providers/paramount.svg',
                appColor    : '#1264F7',
                type        : 'Featured',
                href        : 'paramount'
            },
            {   id          : 14,
                appName     : 'TuneIn',
                logoApp     : '/assets/providers/tunein.svg',
                appColor    : '#36B4A7',
                type        : 'Featured',
                href        : 'tunein'
            },
            {   id          : 15,
                appName     : 'Soundcloud',
                logoApp     : '/assets/providers/soundcloud.svg',
                appColor    : '#FC882D',
                type        : 'Featured',
                href        : 'soundcloud'
            }
        ],
        searchSuggestions : [
            {   id          : 0,
                txt         : 'Show me meat recipes',
                image       : '/assets/suggestions/meat.svg',
                alt         : 'Show me meat recipes img',
                href        : '#'
            },
            {   id          : 1,
                txt         : 'How to play poker?',
                image       : '/assets/suggestions/poker.svg',
                alt         : 'How to play poker? img',
                href        : '#'
            },
            {   id          : 2,
                txt         : 'Who won best acress last year?',
                image       : '/assets/suggestions/trophy.svg',
                alt         : 'Who won best acress last year? img',
                href        : '#'
            },
            {   id          : 3,
                txt         : 'Directions to work',
                image       : '/assets/suggestions/directions.svg',
                alt         : 'Directions to work img',
                href        : '#'
            },
            {   id          : 4,
                txt         : 'Tell me a random number',
                image       : '/assets/suggestions/random.svg',
                alt         : 'Tell me a random number img',
                href        : '#'
            },
            {   id          : 5,
                txt         : 'Have I got new mails?',
                image       : '/assets/suggestions/mail.svg',
                alt         : 'Have I got new mails? img',
                href        : '#'
            },
            {   id          : 6,
                txt         : 'Open YouTube',
                image       : '/assets/suggestions/youtube.svg',
                alt         : 'Open YouTube img',
                href        : '#'
            },
            {   id          : 7,
                txt         : 'Show me yoga exercises',
                image       : '/assets/suggestions/yoga.svg',
                alt         : 'Show me yoga exercises img',
                href        : '#'
            }
        ]
    }
}