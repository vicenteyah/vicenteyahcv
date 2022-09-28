

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
            ],
            languages: [
                {
                    id: 1,
                    name: 'JavaScript',
                    level: '80%',
                    icon: 'fab fa-js',
                    color: '#F7DF1E',
                    gap: '15px' 
                },
               
                {
                    id: 2,
                    name: 'React/Nextjs',
                    level: '80%',
                    icon: 'fab fa-react',
                    color: '#61DAFB',
                    gap: '13px'
                }, 
                {
                    id: 3,
                    name: 'Nodejs/express',
                    level: '70%',
                    icon: 'fab fa-node-js',
                    color: '#339933',
                    gap: '15px'
                },
                {
                    id: 4,
                    name: 'Python/django',
                    level: '60%',
                    icon: 'fab fa-python',
                    color: '#3776AB',
                    gap: '15px'             
                },
                {
                    id: 5,
                    name: 'Vue',
                    level: '40%',
                    icon: 'fab fa-vuejs',
                    color: '#4FC08D',
                    gap: '16px' 
                },
                {
                    id: 6,
                    name: 'PHP',
                    level: '30%',
                    icon: 'fab fa-php',
                    color: '#777BB4',
                    gap: '7px' 
                },
            ]
        }
    }
}).mount('#app')