angular.module('acato.service.image', [])

/**
 * Acato image
 *
 */
    .factory('$acatoImage', function ($q, $window) {

        function getImageData(url) {
            var q = $q.defer();
            var canvas, context, imageData;
            var img = new Image();
            img.onload = function() {
                canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);
                try {
                    imageData = canvas.toDataURL();
                    q.resolve(imageData);
                }
                catch(e) {
                    q.reject(e.message);
                }
            };
            try {
                img.src = url;
            } catch(e) {
                q.reject(e.message);
            }
            return q.promise;
        }

        return {
            getPictures: function(options) {

                var q = $q.defer();
                var imagesData = [];
                var defaultOptions = {
                    maximumImagesCount: 1,
                    width: 100,
                    height: 100,
                    quality: 100
                };

                angular.extend(defaultOptions, options);

                $window.imagePicker.getPictures(function (results) {
                    q.resolve(results);
                }, function (error) {
                    q.reject(error);
                }, options);

                return q.promise;
            }
        }
    });