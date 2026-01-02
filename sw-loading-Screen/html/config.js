
//  .d8888.  .d8b.  db   d8b   db db   d8b   db d888888b db   dD 
//  88'  YP d8' `8b 88   I8I   88 88   I8I   88   `88'   88 ,8P' 
//  `8bo.   88ooo88 88   I8I   88 88   I8I   88    88    88,8P   
//    `Y8b. 88~~~88 Y8   I8I   88 Y8   I8I   88    88    88`8b   
//  db   8D 88   88 `8b d8'8b d8' `8b d8'8b d8'   .88.   88 `88. 
//  `8888Y' YP   YP  `8b8' `8d8'   `8b8' `8d8'  Y888888P YP   YD  

const config = {
    musicVolume: 0.05, // Default volume level (0 = 0%; 0.5 = 50%; 1 = 100%)
    displayTime: 6000, // Time each background image is displayed (in milliseconds)
    
    showStaffTeam: true, // Show staff team members on loading screen

    Notify: true, // Enable/Disable notifications
    NotifyIcon: '', // https://fontawesome.com/search for icons, example: 'fa-solid fa-circle-info'
    RandomNotify: true, // Show notifications in random order

    images: [
        'assets/loading/bg1.webp',
        'assets/loading/bg2.webp',
        'assets/loading/bg3.webp'
        // You can add more images here (highly recommended to use 1920x1080 resolution and .webp format for better performance)
    ],

    songs: [
        {
            title: 'Roll Too Deep',
            artist: 'Sub Focus, Subsonic',
            src: 'assets/music/roll.mp3',
            img: 'assets/images/roll.webp'
        },
        {
            title: 'You Want Me',
            artist: 'Dirtyphonics, Circadian',
            src: 'assets/music/you.mp3',
            img: 'assets/images/you.webp'
        }
        // You can add more songs here
        // If you add more songs, make sure to also add their images in the assets/images/ folder and assets/music/ folder
    ],

    staff_members: [
        {
            "name":"Sawwik",
            "image":"https://cdn.discordapp.com/avatars/540227898297155624/52ded3ea182b4981659eb983f988fd77.webp?size=128",
            "rank":"Owner/Developer"
        },
        {
            "name":"Uknown",
            "image":"https://cdn.discordapp.com/avatars/626826574716731422/9931905a33f8091936a0ff482595f6a8.webp?size=128",
            "rank":"Uknown"
        },
        {
            "name":"Uknown",
            "image":"https://cdn.discordapp.com/avatars/626826574716731422/9931905a33f8091936a0ff482595f6a8.webp?size=128",
            "rank":"Uknown"
        },
        {
            "name":"Uknown",
            "image":"https://cdn.discordapp.com/avatars/626826574716731422/9931905a33f8091936a0ff482595f6a8.webp?size=128",
            "rank":"Uknown"
        },
        {
            "name":"Uknown",
            "image":"https://cdn.discordapp.com/avatars/626826574716731422/9931905a33f8091936a0ff482595f6a8.webp?size=128",
            "rank":"Uknown"
        },
        {
            "name":"Uknown",
            "image":"https://cdn.discordapp.com/avatars/626826574716731422/9931905a33f8091936a0ff482595f6a8.webp?size=128",
            "rank":"Uknown"
        },
        {
            "name":"Uknown",
            "image":"https://cdn.discordapp.com/avatars/626826574716731422/9931905a33f8091936a0ff482595f6a8.webp?size=128",
            "rank":"Uknown"
        },
        // You can add more members
    ],

    Messages: [
            {
                title: "Discord",
                message: "Připoj se na náš Discord: discord.gg/tvujserver",
                // icon: '<i class="fa-brands fa-discord"></i>' // Speciální ikona pro tuto zprávu
            },
            {
                title: "Pravidla",
                message: "Neznalost pravidel neomlouvá! Přečti si je na F1.",
                // Zde není ikona, použije se DefaultIcon
            },
            {
                title: "Restart",
                message: "Pravidelný restart serveru je v 12:00 a 00:00.",
                // icon: '<i class="fa-solid fa-clock"></i>'
            }
    ]


};
