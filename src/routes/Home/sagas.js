import { call, put, takeLatest, all, take } from 'redux-saga/effects' //eslint-disable-line
import { eventChannel } from 'redux-saga'
import actionSpreader from '../../utils/actionspreader'

import firebase from 'firebase'

export function * fireListener (action) {
  const messaging = yield firebase.messaging()
  yield messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.')
      return messaging.getToken()
    })
    .catch(err => {
      console.log('Unable to get permission to notify.', err)
    })
    .then(currentToken => {
      alert('Check console for token')
      console.log(currentToken)
    })
    .catch(err => {
      console.log('An error occurred while retrieving token. ', err)
    })
  const channel = eventChannel(emitter => {
    messaging.onMessage(function (payload) {
      emitter({ payload })
    })
    return () => {
      console.log('end')
    }
  })
  const { payload } = yield take(channel)
  yield firebase.database().ref('/').set({
    'data': payload.data
  })
  yield put(actionSpreader('FIREDB', {
    database: payload.data
  }))
  yield put(actionSpreader('SHOW'))
}

export function * fireSaga () {
  yield takeLatest('CONNECTDB', fireListener)
}

export default [fireSaga]
/*
curl -X POST -H "Authorization: key=AIzaSyA7Kn6seVimb8P-sVTCLFnw9VmXuS2mohY" -H "Content-Type: application/json" -d '{
  "data": {
  "message": {
     "attachment": {
       "type": "template",
       "payload": {
         "template_type": "multi_selection_cards",
         "send_button_function": "xyz-function",
         "elements": [
           {
             "image_url": "https://lh6.googleusercontent.com/-iwsr3yM64sU/Vu_Td4V1p_I/AAAAAAAAACQ/RvJamzMto9MF0T8cC-_4IUY8t7H5Al1igCLIB/s1600-w400/ jahsdkjhaskdjhasjh askdjh kashdkjasd askjh asdaskjh ",
             "subtitle": "154, Trinity Church Complex Trinity Circle M.G. Road Opposite 1MG Mall, Be jashkjh dakjhksjadh sakjh sakjh sdakjhasd asdkjhas kjhda askjh asdjhsakjd as sdakjhjk sadhsdakjh asdhksadkj ",
             "title": "Ridgetop Dental International M G Road \u2b50\u2b50\u2b50\u2b50\u2b50",
             "buttons": [
               {
                 "type": "postback",
                 "payload": {
                   "type": "bookappointment",
                   "attributes": {
                     "place_id": "ChIJs9jUwJwWrjsR8UFZcB7KUkQ"
                   }
                 },
                 "title": "Book Appointment"
               },
               {
                 "type": "postback",
                 "payload": {
                   "type": "moreinfo",
                   "attributes": {
                     "place_id": "ChIJs9jUwJwWrjsR8UFZcB7KUkQ"
                   }
                 },
                 "title": "More Info"
               }
             ],
             "item_url": "None"
           },
           {
             "image_url": "https://tranquil-tor-47635.herokuapp.com/static/images/dental-clinic.jpg",
             "subtitle": "22, Jaya Mansion, Marriappa Road, Near-Lido Mall, Ulsoor, Bengalura Road, Near-Lido Mall, Ulsoor, Bengalura Road, Near-Lido Mall, Ulsoor, Bengalur",
             "title": "Cosmetic Dental Center smetic Dental Cesmetic Dental Cesmetic Dental Cesmetic Dental Cesmetic Dental Cesmetic Dental Cesmetic Dental Cesmetic Dental Cesmetic Dental Ce",
             "buttons": [
               {
                 "type": "postback",
                 "payload": {
                   "type": "bookappointment",
                   "attributes": {
                     "place_id": "ChIJuaYzwJwWrjsRJRf2t80sXEw"
                   }
                 },
                 "title": "Book Appointment"
               },
               {
                 "type": "postback",
                 "payload": {
                   "type": "moreinfo",
                   "attributes": {
                     "place_id": "ChIJuaYzwJwWrjsRJRf2t80sXEw"
                   }
                 },
                 "title": "More Info"
               }
             ],
             "item_url": "None"
           }
         ]
       }
     }
  }
  },
  "to": "csdFwxSV9Lg:APA91bFKLMgZhK6l0OlLOL1h-omv0V6ieBBjFsP0onc2W1Kmk6_bEx-WrlE-O4mYB3WSK4kuErpyZkdVzHGfVQl5QJfYjRZd0My6gwVqp8rGHlmlPM2vB3Ra_cZPv50Nx8RI0NpKW9N0"
}' "https://fcm.googleapis.com/fcm/send"
*/
