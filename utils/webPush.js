import 'firebase/messaging'
import firebase from 'firebase/app'
import localforage from 'localforage'

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token')
  },

  init: async function() {
    firebase.initializeApp({
      apiKey: "AIzaSyAue0Vxzk4yVKMMNnPJkGBgBQ_aWd9GZ5w",
    projectId: "portfolio-ad3c8",
    messagingSenderId: "630392712127",
    appId: "1:630392712127:web:65ae3805d24160ee"
    })

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return await this.tokenInlocalforage()
      }

      const messaging = firebase.messaging()
      await messaging.requestPermission()
      // const token = await messaging.getToken()
      const token = await messaging.getToken()

      localforage.setItem('fcm_token', token)
      console.log('fcm_token', token)
      return token
    } catch (error) {
      console.error(error)
      return "s"
    }
  },
}

export { firebaseCloudMessaging }
