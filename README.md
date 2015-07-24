# acato-service-image

Cordova Plugin For Multiple Image Selection - implemented for iOS and Android 4.0 and above.
cordova plugin add https://github.com/wymsee/cordova-imagePicker.git

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

Get a list of pictures, with options to limit number, quality, and size of images.
