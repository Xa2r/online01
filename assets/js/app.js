if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../../online01/sw.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.log('service worker not registered', err));
  }