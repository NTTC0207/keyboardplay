const CACHE_NAME = "version-1"


const self = this;

self.addEventListener('install',(e)=>{
e.waitUntil(

    caches.open(CACHE_NAME)
    .then((cache)=>{
return cache.addAll([
    '/static/media/song2.5fd6f54de556b31cd08a.mp3',
    '/static/media/song1.b8c1973a0ef9348b3836.mp3',
    '/static/media/knockDoor.cd00a56814245f52bb9f.mp3',
    '/static/media/LoudKnock.f8aceb3e7abe50b1b300.mp3',
    '/static/js/bundle.js',
    '/index.html',
    '/'
]);
    })
)
})

self.addEventListener('fetch',(e)=>{
e.respondWith(
    caches.match(e.request)
    .then(()=>{
        return fetch(e.request)
        .catch(()=>(caches.match(e.request).then((res)=>{
            if(res){
                return res
            }
        })  ))
    })
)
})

// self.addEventListener('activate',(e)=>{
// const cacheWhiteList=[]
// cacheWhiteList.push(CACHE_NAME)

// e.waitUntil(
//     caches.keys()
//     .then((cacheNames)=>{Promise.all(cacheNames.map)})
// )
// })
