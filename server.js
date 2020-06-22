const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){

    const socials = {
        name: 'Tiago Vidal',
        description: 'Aluno de gradução em Engenharia Elétrica pela FEI',
        links:
        [ 
        {
            url: 'https://github.com/tiagod3p',
            icon: 'fa fa-github-square'
        },

        {
            url: 'https://twitter.com/tiagod3p',
            icon: 'fa fa-twitter-square'
        },

        {
            url: 'https://linkedin.com/in/tiagovidaldepaula',
            icon: 'fa fa-linkedin-square'
        }
        ]
}

    res.render('about', {socials})
})

server.get('/projetos', function(req, res){
    res.render('projects', {items: videos})
})

server.get('/video', function(req, res){
    const id = req.query.id

    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        return res.send('video not found.')
    }

    return res.render('video', {item: video})
})


server.listen(5000, function(){
    console.log('server is running...')
})
