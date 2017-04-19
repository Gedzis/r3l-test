import express from 'express';
import bodyParser from 'body-parser';

import logger from './logger';
import conf from './conf';
import models from './models';
import api from './api';

import promise from 'bluebird';
logger.info(`initializing app with NODE_ENV=${process.env.NODE_ENV}`);

const app = express();
promise.config({
    warnings: false
});

app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json());

//used for tests
if (conf.get('serve_static_files')) {
    app.use('/static', express.static('/static'));
}

//compile a list of css & js files to load on page
const STATIC_ASSETS = {
    js: [],
    css: []
};

app.use('/api', api);

//config to be passed to frontend
const BOOTSTRAP_CONFIG = {};

app.get('*', function(req, res) {
    res.render('index', {
        STATIC_ASSETS,
        BOOTSTRAP_CONFIG: JSON.stringify(BOOTSTRAP_CONFIG)
    });

});


export default app;
