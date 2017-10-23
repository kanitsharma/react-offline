importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')
importScripts('https://www.gstatic.com/firebasejs/4.6.0/firebase.js')

const config = {
  apiKey: 'AIzaSyCOz9mOrW6yrJsH7Eit7H2zAfY4pjmc7is',
  authDomain: 'assignment2-594f7.firebaseapp.com',
  databaseURL: 'https://assignment2-594f7.firebaseio.com',
  projectId: 'assignment2-594f7',
  storageBucket: 'assignment2-594f7.appspot.com',
  messagingSenderId: '225726515474'
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
  const { data } = payload
  firebase.database().ref('/').set({
    'data': JSON.stringify(data)
  })

  const notificationTitle = 'New Notifications'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  var promise = new Promise(function (resolve) {
    resolve()
  }).then(function () {
    return clients.openWindow('http://localhost:3000')
  })
  event.waitUntil(promise)
})
