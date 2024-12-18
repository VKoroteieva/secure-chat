const express = require('express');
const path = require('path');
const {randomUUID} = require("crypto");

const secretKey = 'aelwfhlaef';
const secretIV = 'aifjaoeifjo';
const encMethod = 'aes-256-cbc';


const app = express();

