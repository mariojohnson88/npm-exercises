const $ = require('jquery');

const sayHello = () => 'Hello';
console.log(sayHello());

$('h2').click(function () {
    $('body').css('background-color', '#42D2A9')
});