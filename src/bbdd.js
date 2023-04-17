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
                provider    : 'Prime Video',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide.jpg',
                bgSmall     : '/assets/movies/cards/bgCard.jpg',
                title       : 'Mandalorian',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 1,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/movies/slider/bgSlide2.jpg',
                bgSmall     : '/assets/movies/cards/bgCard2.jpg',
                title       : 'Mandalorian 2',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details' 
            },
            {   id          : 2,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/movies/slider/bgSlide3.jpg',
                bgSmall     : '/assets/movies/cards/bgCard3.jpg',
                title       : 'Mandalorian 3',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 90%',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 3,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide4.jpg',
                bgSmall     : '/assets/movies/cards/bgCard4.jpg',
                title       : 'Mandalorian 4',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 92%',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 4,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/starplus.svg',
                bgSlide     : '/assets/movies/slider/bgSlide5.jpg',
                bgSmall     : '/assets/movies/cards/bgCard5.jpg',
                title       : 'Mandalorian 5',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 90%',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 5,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide6.jpg',
                bgSmall     : '/assets/movies/cards/bgCard5.jpg',
                title       : 'Mandalorian 5',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 6,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide7.jpg',
                bgSmall     : '/assets/movies/cards/bgCard7.jpg',
                title       : 'Mandalorian 7',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 7,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide8.jpg',
                bgSmall     : '/assets/movies/cards/bgCard8.jpg',
                title       : 'Mandalorian 8',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 8,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide8.jpg',
                bgSmall     : '/assets/movies/cards/bgCard8.jpg',
                title       : 'Mandalorian 8',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 9,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide9.jpg',
                bgSmall     : '/assets/movies/cards/bgCard9.jpg',
                title       : 'Mandalorian 9',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            }
        ],
        series : [
            {   id          : 0,
                provider    : 'Prime Video',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide.jpg',
                bgSmall     : '/assets/movies/cards/bgCard.jpg',
                title       : 'Mandalorian',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 1,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/movies/slider/bgSlide2.jpg',
                bgSmall     : '/assets/movies/cards/bgCard2.jpg',
                title       : 'Mandalorian 2',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details' 
            },
            {   id          : 2,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/hbomax.svg',
                bgSlide     : '/assets/movies/slider/bgSlide3.jpg',
                bgSmall     : '/assets/movies/cards/bgCard3.jpg',
                title       : 'Mandalorian 3',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 90%',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 3,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide4.jpg',
                bgSmall     : '/assets/movies/cards/bgCard4.jpg',
                title       : 'Mandalorian 4',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 92%',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 4,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/starplus.svg',
                bgSlide     : '/assets/movies/slider/bgSlide5.jpg',
                bgSmall     : '/assets/movies/cards/bgCard5.jpg',
                title       : 'Mandalorian 5',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 90%',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 5,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide6.jpg',
                bgSmall     : '/assets/movies/cards/bgCard5.jpg',
                title       : 'Mandalorian 5',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 6,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide7.jpg',
                bgSmall     : '/assets/movies/cards/bgCard7.jpg',
                title       : 'Mandalorian 7',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 7,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide8.jpg',
                bgSmall     : '/assets/movies/cards/bgCard8.jpg',
                title       : 'Mandalorian 8',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 8,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide8.jpg',
                bgSmall     : '/assets/movies/cards/bgCard8.jpg',
                title       : 'Mandalorian 8',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            },
            {   id          : 9,
                provider    : 'HBO',
                alt         : 'HBO',
                logoProvider: '/assets/providers/primevideo.svg',
                bgSlide     : '/assets/movies/slider/bgSlide9.jpg',
                bgSmall     : '/assets/movies/cards/bgCard9.jpg',
                title       : 'Mandalorian 9',
                summary     : 'The Mandalorian is an American space Western web television series created by Jon Favreau. The series is set after the...',
                btnText     : 'Watch on',
                rating      : '🍅 98%',
                restriction : '16',
                category    : 'Comedy-drama series',
                years       : '2019 - Present',
                watchlisted : 'y',
                watched     : 'y',
                href        : 'movie-details'
            }
        ],
        apps : [
            {   id          : 0,
                appName     : 'YouTube',
                logoApp     : '/assets/providers/youtube.svg',
                appColor    : '#FF0000',
                href        : 'youtube'
            },
            {   id          : 1,
                appName     : 'Spotify',
                logoApp     : '/assets/providers/spotify.svg',
                appColor    : '#2EBD59',
                href        : 'spotify'
            },
            { id            : 2,
                appName     : 'Prime Video',
                logoApp     : '/assets/providers/primevideo.svg',
                appColor    : '#00A8E1',
                href        : 'prime-video'
            },
            {   id          : 3,
                appName     : 'Plex',
                logoApp     : '/assets/providers/plex.svg',
                appColor    : '#272A2D',
                href        : 'plex'
            },
            {   id          : 4,
                appName     : 'Netflix',
                logoApp     : '/assets/providers/netflix.svg',
                appColor    : '#E50914',
                href        : 'netflix'
            },
            {   id          : 5,
                appName     : 'Twitch',
                logoApp     : '/assets/providers/twitch.svg',
                appColor    : '#65459B',
                href        : 'twitch'
            },
            {   id          : 6,
                appName     : 'Hulu',
                logoApp     : '/assets/providers/hulu.svg',
                appColor    : '#1CE783',
                href        : 'hulu'
            },
            {   id          : 7,
                appName     : 'HBO max',
                logoApp     : '/assets/providers/hbomax.svg',
                appColor    : '#991EEB',
                href        : 'hbo-max'
            },
            {   id          : 8,
                appName     : 'Disney+',
                logoApp     : '/assets/providers/disneyplus.svg',
                appColor    : '#1A1D29',
                href        : 'disneyplus'
            },
            {   id          : 9,
                appName     : 'Star+',
                logoApp     : '/assets/providers/starplus.svg',
                appColor    : '#271F44',
                href        : 'starplus'
            }
        ],
        searchSuggestions : [
            {   id          : 0,
                txt         : 'Show me meat recipes',
                image       : '/assets/suggestions/meat.svg',
                alt         : 'Search suggestions img',
                href        : ''
            },
            {   id          : 1,
                txt         : 'How to play poker?',
                image       : '/assets/suggestions/poker.svg',
                alt         : 'Search suggestions img',
                href        : ''
            },
            {   id          : 2,
                txt         : 'Who won best acress last year?',
                image       : '/assets/suggestions/trophy.svg',
                alt         : 'Search suggestions img',
                href        : ''
            },
            {   id          : 3,
                txt         : 'Directions to work',
                image       : '/assets/suggestions/directions.svg',
                alt         : 'Search suggestions img',
                href        : ''
            },
            {   id          : 4,
                txt         : 'Tell me a random number',
                image       : '/assets/suggestions/random.svg',
                alt         : 'Search suggestions img',
                href        : ''
            },
            {   id          : 5,
                txt         : 'Have I got new mails?',
                image       : '/assets/suggestions/mail.svg',
                alt         : 'Search suggestions img',
                href        : ''
            },
            {   id          : 6,
                txt         : 'Open YouTube',
                image       : '/assets/suggestions/youtube.svg',
                alt         : 'Search suggestions img',
                href        : ''
            },
            {   id          : 7,
                txt         : 'Show me yoga exercises',
                image       : '/assets/suggestions/yoga.svg',
                alt         : 'Search suggestions img',
                href        : ''
            }
        ]
    }
}