

const {createApp} = Vue

createApp({
    data() {
        return{
            name: "Eliud Vicente Yah Dzul",
            degree: "Software Engineer",
            currentYear: new Date().getFullYear(),
            props:[
                {
                    id: 1,
                    tag:'Nodejs'
                },
                {
                    id: 2,
                    tag:'Gitflow workflow'
                },
                {
                    id: 3,
                    tag:'Vuejs'
                },
                {
                    id: 4,
                    tag:'TypeScript'
                },
                {
                    id: 5,
                    tag:'React/Redux'
                },
                {
                    id: 6,
                    tag:'Nextjs'
                },
                {
                    id: 7,
                    tag:'Django rest framework'
                },
                {
                    id: 8,
                    tag:'Docker & Docker-compose'
                },
                {
                    id: 9,
                    tag:'PostgreSQL'
                },
                {
                    id: 10,
                    tag:'MySql'
                },
                {
                    id: 11,
                    tag:'PHP/Laravel'
                },
                {
                    id: 12,
                    tag:'Atomic Design'
                },
                {
                    id: 13,
                    tag:'Scrum'
                },
                {
                    id: 14,
                    tag:'Flexbox/Grid'
                },
                {
                    id: 15,
                    tag:'JavaScript'
                },
                {
                    id: 16,
                    tag:'MaterialUi'
                },
                {
                    id: 17,
                    tag:'Hapijs/Express'
                },
            ],
            headerProps: [
                {
                    id: 1,
                    icon: 'fab fa-linkedin',
                    path: 'https://www.linkedin.com/in/eliud-vicente-yah-dzul-7103901bb/'
                },
                {
                    id: 2,
                    icon: 'fab fa-facebook',
                    path: 'https://www.facebook.com/vicente.yah'
                },
                {
                    id: 3,
                    icon: 'fab fa-github',
                    path: 'https://github.com/vicenteyah'
                }
            ]
        }
    }
}).mount('#app')