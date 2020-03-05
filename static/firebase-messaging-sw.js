/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyAue0Vxzk4yVKMMNnPJkGBgBQ_aWd9GZ5w",
  projectId: "portfolio-ad3c8",
  messagingSenderId: "630392712127",
  appId: "1:630392712127:web:65ae3805d24160ee"
})

firebase.messaging()
