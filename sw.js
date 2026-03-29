importScripts('gym_data.js'); 

const CACHE_NAME = 'gym-app-v3'; 
const IMAGE_FOLDER = 'images/';

const extractAllImages = () => {
    const images = new Set();
    if (typeof gymData !== 'undefined') {
        gymData.forEach(item => {
            if (item.media && item.media.face) images.add(IMAGE_FOLDER + item.media.face);
            if (item.media && item.media.profil) images.add(IMAGE_FOLDER + item.media.profil);
            if (item.img_dispo) images.add(IMAGE_FOLDER + item.img_dispo);
        });
    }
    return Array.from(images);
};

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './gym_data.js',
    './libs/tailwindcss.js',
    './libs/vue.global.js',
    './libs/fontawesome/css/all.min.css',
    './libs/fontawesome/webfonts/fa-solid-900.woff2',
    './libs/fontawesome/webfonts/fa-regular-400.woff2',
    ...extractAllImages()
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((names) => {
            return Promise.all(names.map((n) => {
                if (n !== CACHE_NAME) return caches.delete(n);
            }));
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => res || fetch(event.request))
    );
});