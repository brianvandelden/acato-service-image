# acato-service-image

Cordova Plugin For Multiple Image Selection - implemented for iOS and Android 4.0 and above.
cordova plugin add https://github.com/wymsee/cordova-imagePicker.git

## Option 1:
```
var options = {
    maximumImagesCount: 1,
    width: 100,
    height: 100,
    quality: 100
};

$acatoImage.getPictures(options).then(function(results) {
    // loop true results
}, function(error) {
    alert(error);
});
```

## Option 2:
Send image data to server
```
var options = {
    maximumImagesCount: 1,
    width: 100,
    height: 100,
    quality: 100
};

$acatoImage.getPictures(options).then(function(results) {
    // loop true results
    for(var i = 0; i < results.length; i++){
        $acatoImage.getImageData(results[i]).then(function(imageData) {
            console.log(imageData, 'imageData');
            // send imageData to server X
        }, function(error) {
            alert(error, 'Error sending imageData to server');
        });
    }
}, function(error) {
    alert(error, 'Error getting pictures');
});
```

Get a list of pictures, with options to limit number, quality, and size of images.
