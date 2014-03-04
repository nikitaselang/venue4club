var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) // ...
        console.log('meow');
});