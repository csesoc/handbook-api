const parse = require('node-html-parser').parse;
const restify = require('restify');

const server = restify.createServer();


server.get('/echo/:arg', (req, res, next) => {

    const example_object = {
        time: new Date().toLocaleString(),
        echo_msg: req.params.arg,
        parsed_html: parse('<ul id="list"><li>Hi there!</li></ul>')
                        .querySelector('li').innerHTML
    }

    res.send(example_object);
    return next();
});


server.listen(8098, () => {
    console.log('UNSW Handbook-API has successfully booted');
    console.log(`Listening on ${server.name}:${server.url}`);
});
