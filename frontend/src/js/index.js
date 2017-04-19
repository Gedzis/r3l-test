import '../style/index.styl';
import angular from 'angular';
import 'angular-ui-router';
import configRouter from './config.js';
import './tasks';

angular.module('app', ['ui.router','app.tasks'])
    .config(configRouter);
