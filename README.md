# React-offline

## POST request

## Remember your IID token will logged in the console

### HTTP
```
POST /fcm/send HTTP/1.1
Host: fcm.googleapis.com
Authorization: key=AIzaSyA7Kn6seVimb8P-sVTCLFnw9VmXuS2mohY
Content-Type: application/json

{
  "data": {
      //your data
  },
  "to": "YOUR-IID-TOKEN"
}
```

### Fetch
```js
var key = 'AIzaSyA7Kn6seVimb8P-sVTCLFnw9VmXuS2mohY';
var to = 'YOUR-IID-TOKEN';
var data = {
  //your data
};

fetch('https://fcm.googleapis.com/fcm/send', {
  'method': 'POST',
  'headers': {
    'Authorization': 'key=' + key,
    'Content-Type': 'application/json'
  },
  'body': JSON.stringify({
    'data': data,
    'to': to
  })
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.error(error);
})
```

### cURL
```
curl -X POST -H "Authorization: key=AIzaSyA7Kn6seVimb8P-sVTCLFnw9VmXuS2mohY" -H "Content-Type: application/json" -d '{
  "data": {
    //your data
  },
  "to": "YOUR-IID-TOKEN"
}' "https://fcm.googleapis.com/fcm/send"
```

### example
```
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
  "to": "YOUR-IID-TOKEN"
}' "https://fcm.googleapis.com/fcm/send"
```

## If you find any errors related to tokens please unregister the service worker and refresh the page
