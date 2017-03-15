/*
This is the entry point to the JavaScript of our application.  Here we are importing
the functions we need from first.js and second.js.

But why on earth are we
importing a css and html file within our JavaScript?  That doesn't seem like it
would work...  The reason why this is needed is because webpack starts at our
entry point(s) and follows links from there.  Without these imports, webpack
wouldn't know that you wanted your html and css in the resulting build.
*/

import { test1 } from './first';
import { test3 } from './second';
import './style.css';
import './index.html';

test1();
test3();
