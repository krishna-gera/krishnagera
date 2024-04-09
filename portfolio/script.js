function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var url = 'mailto:krishnagera.work@gmai.com?subject=Client%20Details&body=' +
        'Name: ' + encodeURIComponent(name) + '%0A' +
        'Email: ' + encodeURIComponent(email) + '%0A' +
        'Message: ' + encodeURIComponent(message);

    window.location.href = url;
}

{
    "name": "swiper-autoplay",
    "version": "1.0.0",
    "description": "Static template for Swiper Autoplay",
    "main": "index.html",
    "scripts": {
        "build": "echo 'This is a static template, there is no bundler or bundling involved!'",
        "start": "serve"
    },
    "devDependencies": {
        "serve": "^11.2.0"
    },
    "keywords": [
        "swiper"
    ],
    "template": "static"
}
}

