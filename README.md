#React-offline

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
