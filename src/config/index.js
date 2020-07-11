module.exports = {

    author: "FranSolares",
    siteTitle: "Francisco Solares Portafolio",
    siteShortTitle: "Francisco Solares", // Used as logo text in header, footer, and splash screen
    siteDescription: "Portafolio",
    siteUrl: "https://ToDo.com",
    siteLanguage: "es_ES",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "",
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/francisco-solares-1b77681a1/"
        },
        {
            name: "Github",
            url: "https://github.com/JSolares2016515"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/francisco-solares-1b77681a1/"
        },
        {
            name: "Github",
            url: "https://github.com/JSolares2016515"
        },
    ]
}