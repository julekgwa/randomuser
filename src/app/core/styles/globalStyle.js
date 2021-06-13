import {
  createGlobalStyle
} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .c-btn {
    border: 2px solid transparent;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    padding: 6px 8px;
    text-decoration: none;
    vertical-align: middle;
    background-position: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
.c-btn:focus {
    outline: 0;
}
.c-btn[disabled] {
    background-color: #fff;
    border-color: #dbdbdb;
    color: #dbdbdb;
    box-shadow: none;
    opacity: 0.5;
    cursor: not-allowed;
}
.c-input__checkbox input[type="checkbox"],
.c-input__radiobox input[type="radio"] {
    outline: 0;
    visibility: hidden;
    width: 1.5em;
    margin: 0;
    display: block;
    float: left;
    font-size: inherit;
}
.c-input__checkbox__text,
.c-input__radiobox__text {
    display: flex;
    word-break: break-word;
    padding-left: 0.5em;
}
.c-card {
    background-color: #fff;
    border: 1px solid #ced9e1;
    color: #262626;
    max-width: 100%;
}
@font-face {
    font-family: InterFaceCorp-Regular;
    src: url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Regular.eot);
    src: url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Regular.eot?#iefix) format("embedded-opentype"), url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Regular.woff) format("woff"),
        url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Regular.ttf) format("truetype"), url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Regular.svg#InterFaceCorp-Regular) format("svg");
}
@font-face {
    font-family: InterFaceCorp-Black;
    src: url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Black.eot);
    src: url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Black.eot?#iefix) format("embedded-opentype"), url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Black.woff) format("woff"),
        url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Black.ttf) format("truetype"), url(https://cdn.gmgamingsystems.com/Global/fonts/interface/InterFaceCorp-Black.svg#InterFaceCorp-Black) format("svg");
}
*,
::after,
::before {
    box-sizing: border-box;
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
}
body,
html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
}
[tabindex="-1"]:focus {
    outline: 0 !important;
}
hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}
img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
}
svg {
    overflow: hidden;
    vertical-align: middle;
}
a:not([href]):not([tabindex]):focus,
button:focus,
input[type="color"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus,
input[type="text"]:focus,
input[type="time"]:focus,
input[type="url"]:focus,
select:focus,
textarea:focus {
    outline: 0;
}
[role="button"],
a,
area,
button,
input:not([type="range"]),
label,
select,
summary,
textarea {
    touch-action: manipulation;
}
button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button,
input {
    overflow: visible;
}
button,
select {
    text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
    -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
    padding: 0;
    border-style: none;
}
body {
    margin: 0;
    background: #fff;
    text-align: left;
    font-family: 'InterFaceCorp-Regular', Arial, "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
    color: #333;
}
dl,
ol,
ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
input[type="color"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type="tel"],
input[type="text"],
input[type="time"],
input[type="url"],
select,
textarea {
    display: block;
    resize: none;
}
progress {
    vertical-align: baseline;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}
::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
}
ol ol,
ol ul,
ul ol,
ul ul {
    margin-bottom: 0;
}
article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
label,
main,
nav,
section {
    display: block;
}
code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em;
}
pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
    white-space: pre-wrap;
}
figure {
    margin: 0 0 1rem;
}
a {
    color: #000;
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    font-weight: 400;
}
a:hover {
    color: #000;
    text-decoration: none;
}
a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}
a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none;
}
table {
    border-collapse: collapse;
}
[hidden] {
    display: none !important;
}
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
}
select::-ms-expand {
    display: none;
}
textarea {
    padding: 0.625rem;
    line-height: 1.5;
}
:-moz-placeholder {
    color: #ced9e1;
}
::-moz-placeholder {
    color: #ced9e1;
}
:-ms-input-placeholder {
    color: #ced9e1;
}
::-webkit-input-placeholder {
    color: #ced9e1;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    text-transform: none;
    text-rendering: optimizeLegibility;
}
h1 {
    font-size: 1.5rem;
}
@media screen and (min-width: 45em) {
    h1 {
        font-size: 1.7rem;
    }
}
h2,
h3 {
    font-size: 1.25rem;
}
@media screen and (min-width: 45em) {
    h2 {
        font-size: 1.3rem;
    }
    h3 {
        font-size: 1.25rem;
    }
}
h4,
h5 {
    font-size: 1rem;
}
@media screen and (min-width: 45em) {
    h4 {
        font-size: 1.1rem;
    }
    h5 {
        font-size: 1rem;
    }
}
h6 {
    font-size: 0.875rem;
}
.l-container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 576px) {
    .l-container {
        max-width: 540px;
    }
}
@media (min-width: 768px) {
    .l-container {
        max-width: 720px;
    }
}
@media (min-width: 992px) {
    .l-container {
        max-width: 960px;
    }
}
@media (min-width: 1200px) {
    .l-container {
        max-width: 1140px;
    }
}
.l-container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.l-row {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.l-col,
.l-col-1,
.l-col-10,
.l-col-11,
.l-col-12,
.l-col-2,
.l-col-3,
.l-col-4,
.l-col-5,
.l-col-6,
.l-col-7,
.l-col-8,
.l-col-9,
.l-col-auto,
.l-col-lg,
.l-col-lg-1,
.l-col-lg-10,
.l-col-lg-11,
.l-col-lg-12,
.l-col-lg-2,
.l-col-lg-3,
.l-col-lg-4,
.l-col-lg-5,
.l-col-lg-6,
.l-col-lg-7,
.l-col-lg-8,
.l-col-lg-9,
.l-col-lg-auto,
.l-col-md,
.l-col-md-1,
.l-col-md-10,
.l-col-md-11,
.l-col-md-12,
.l-col-md-2,
.l-col-md-3,
.l-col-md-4,
.l-col-md-5,
.l-col-md-6,
.l-col-md-7,
.l-col-md-8,
.l-col-md-9,
.l-col-md-auto,
.l-col-sm,
.l-col-sm-1,
.l-col-sm-10,
.l-col-sm-11,
.l-col-sm-12,
.l-col-sm-2,
.l-col-sm-3,
.l-col-sm-4,
.l-col-sm-5,
.l-col-sm-6,
.l-col-sm-7,
.l-col-sm-8,
.l-col-sm-9,
.l-col-sm-auto,
.l-col-xl,
.l-col-xl-1,
.l-col-xl-10,
.l-col-xl-11,
.l-col-xl-12,
.l-col-xl-2,
.l-col-xl-3,
.l-col-xl-4,
.l-col-xl-5,
.l-col-xl-6,
.l-col-xl-7,
.l-col-xl-8,
.l-col-xl-9,
.l-col-xl-auto {
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.l-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
.l-col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
}
.l-col-1 {
    flex-basis: 8.33333333%;
    float: left;
    max-width: 8.33333333%;
}
.l-col-2 {
    flex-basis: 16.66666667%;
    float: left;
    max-width: 16.66666667%;
}
.l-col-3 {
    flex-basis: 25%;
    float: left;
    max-width: 25%;
}
.l-col-4 {
    flex-basis: 33.33333333%;
    float: left;
    max-width: 33.33333333%;
}
.l-col-5 {
    flex-basis: 41.66666667%;
    float: left;
    max-width: 41.66666667%;
}
.l-col-6 {
    flex-basis: 50%;
    float: left;
    max-width: 50%;
}
.l-col-7 {
    flex-basis: 58.33333333%;
    float: left;
    max-width: 58.33333333%;
}
.l-col-8 {
    flex-basis: 66.66666667%;
    float: left;
    max-width: 66.66666667%;
}
.l-col-9 {
    flex-basis: 75%;
    float: left;
    max-width: 75%;
}
.l-col-10 {
    flex-basis: 83.33333333%;
    float: left;
    max-width: 83.33333333%;
}
.l-col-11 {
    flex-basis: 91.66666667%;
    float: left;
    max-width: 91.66666667%;
}
.l-col-12 {
    flex-basis: 100%;
    float: left;
    max-width: 100%;
}
.order-first {
    order: -1;
}
.order-last {
    order: 13;
}
.order-0 {
    order: 0;
}
.order-1 {
    order: 1;
}
.order-2 {
    order: 2;
}
.order-3 {
    order: 3;
}
.order-4 {
    order: 4;
}
.order-5 {
    order: 5;
}
.order-6 {
    order: 6;
}
.order-7 {
    order: 7;
}
.order-8 {
    order: 8;
}
.order-9 {
    order: 9;
}
.order-10 {
    order: 10;
}
.order-11 {
    order: 11;
}
.order-12 {
    order: 12;
}
@media (min-width: 576px) {
    .l-col-sm {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .l-col-sm-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .l-col-sm-1 {
        flex-basis: 8.33333333%;
        float: left;
        max-width: 8.33333333%;
    }
    .l-col-sm-2 {
        flex-basis: 16.66666667%;
        float: left;
        max-width: 16.66666667%;
    }
    .l-col-sm-3 {
        flex-basis: 25%;
        float: left;
        max-width: 25%;
    }
    .l-col-sm-4 {
        flex-basis: 33.33333333%;
        float: left;
        max-width: 33.33333333%;
    }
    .l-col-sm-5 {
        flex-basis: 41.66666667%;
        float: left;
        max-width: 41.66666667%;
    }
    .l-col-sm-6 {
        flex-basis: 50%;
        float: left;
        max-width: 50%;
    }
    .l-col-sm-7 {
        flex-basis: 58.33333333%;
        float: left;
        max-width: 58.33333333%;
    }
    .l-col-sm-8 {
        flex-basis: 66.66666667%;
        float: left;
        max-width: 66.66666667%;
    }
    .l-col-sm-9 {
        flex-basis: 75%;
        float: left;
        max-width: 75%;
    }
    .l-col-sm-10 {
        flex-basis: 83.33333333%;
        float: left;
        max-width: 83.33333333%;
    }
    .l-col-sm-11 {
        flex-basis: 91.66666667%;
        float: left;
        max-width: 91.66666667%;
    }
    .l-col-sm-12 {
        flex-basis: 100%;
        float: left;
        max-width: 100%;
    }
    .order-sm-first {
        order: -1;
    }
    .order-sm-last {
        order: 13;
    }
    .order-sm-0 {
        order: 0;
    }
    .order-sm-1 {
        order: 1;
    }
    .order-sm-2 {
        order: 2;
    }
    .order-sm-3 {
        order: 3;
    }
    .order-sm-4 {
        order: 4;
    }
    .order-sm-5 {
        order: 5;
    }
    .order-sm-6 {
        order: 6;
    }
    .order-sm-7 {
        order: 7;
    }
    .order-sm-8 {
        order: 8;
    }
    .order-sm-9 {
        order: 9;
    }
    .order-sm-10 {
        order: 10;
    }
    .order-sm-11 {
        order: 11;
    }
    .order-sm-12 {
        order: 12;
    }
}
@media (min-width: 768px) {
    .l-col-md {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .l-col-md-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .l-col-md-1 {
        flex-basis: 8.33333333%;
        float: left;
        max-width: 8.33333333%;
    }
    .l-col-md-2 {
        flex-basis: 16.66666667%;
        float: left;
        max-width: 16.66666667%;
    }
    .l-col-md-3 {
        flex-basis: 25%;
        float: left;
        max-width: 25%;
    }
    .l-col-md-4 {
        flex-basis: 33.33333333%;
        float: left;
        max-width: 33.33333333%;
    }
    .l-col-md-5 {
        flex-basis: 41.66666667%;
        float: left;
        max-width: 41.66666667%;
    }
    .l-col-md-6 {
        flex-basis: 50%;
        float: left;
        max-width: 50%;
    }
    .l-col-md-7 {
        flex-basis: 58.33333333%;
        float: left;
        max-width: 58.33333333%;
    }
    .l-col-md-8 {
        flex-basis: 66.66666667%;
        float: left;
        max-width: 66.66666667%;
    }
    .l-col-md-9 {
        flex-basis: 75%;
        float: left;
        max-width: 75%;
    }
    .l-col-md-10 {
        flex-basis: 83.33333333%;
        float: left;
        max-width: 83.33333333%;
    }
    .l-col-md-11 {
        flex-basis: 91.66666667%;
        float: left;
        max-width: 91.66666667%;
    }
    .l-col-md-12 {
        flex-basis: 100%;
        float: left;
        max-width: 100%;
    }
    .order-md-first {
        order: -1;
    }
    .order-md-last {
        order: 13;
    }
    .order-md-0 {
        order: 0;
    }
    .order-md-1 {
        order: 1;
    }
    .order-md-2 {
        order: 2;
    }
    .order-md-3 {
        order: 3;
    }
    .order-md-4 {
        order: 4;
    }
    .order-md-5 {
        order: 5;
    }
    .order-md-6 {
        order: 6;
    }
    .order-md-7 {
        order: 7;
    }
    .order-md-8 {
        order: 8;
    }
    .order-md-9 {
        order: 9;
    }
    .order-md-10 {
        order: 10;
    }
    .order-md-11 {
        order: 11;
    }
    .order-md-12 {
        order: 12;
    }
}
@media (min-width: 992px) {
    .l-col-lg {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .l-col-lg-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .l-col-lg-1 {
        flex-basis: 8.33333333%;
        float: left;
        max-width: 8.33333333%;
    }
    .l-col-lg-2 {
        flex-basis: 16.66666667%;
        float: left;
        max-width: 16.66666667%;
    }
    .l-col-lg-3 {
        flex-basis: 25%;
        float: left;
        max-width: 25%;
    }
    .l-col-lg-4 {
        flex-basis: 33.33333333%;
        float: left;
        max-width: 33.33333333%;
    }
    .l-col-lg-5 {
        flex-basis: 41.66666667%;
        float: left;
        max-width: 41.66666667%;
    }
    .l-col-lg-6 {
        flex-basis: 50%;
        float: left;
        max-width: 50%;
    }
    .l-col-lg-7 {
        flex-basis: 58.33333333%;
        float: left;
        max-width: 58.33333333%;
    }
    .l-col-lg-8 {
        flex-basis: 66.66666667%;
        float: left;
        max-width: 66.66666667%;
    }
    .l-col-lg-9 {
        flex-basis: 75%;
        float: left;
        max-width: 75%;
    }
    .l-col-lg-10 {
        flex-basis: 83.33333333%;
        float: left;
        max-width: 83.33333333%;
    }
    .l-col-lg-11 {
        flex-basis: 91.66666667%;
        float: left;
        max-width: 91.66666667%;
    }
    .l-col-lg-12 {
        flex-basis: 100%;
        float: left;
        max-width: 100%;
    }
    .order-lg-first {
        order: -1;
    }
    .order-lg-last {
        order: 13;
    }
    .order-lg-0 {
        order: 0;
    }
    .order-lg-1 {
        order: 1;
    }
    .order-lg-2 {
        order: 2;
    }
    .order-lg-3 {
        order: 3;
    }
    .order-lg-4 {
        order: 4;
    }
    .order-lg-5 {
        order: 5;
    }
    .order-lg-6 {
        order: 6;
    }
    .order-lg-7 {
        order: 7;
    }
    .order-lg-8 {
        order: 8;
    }
    .order-lg-9 {
        order: 9;
    }
    .order-lg-10 {
        order: 10;
    }
    .order-lg-11 {
        order: 11;
    }
    .order-lg-12 {
        order: 12;
    }
}
@media (min-width: 1200px) {
    .l-col-xl {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    .l-col-xl-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .l-col-xl-1 {
        flex-basis: 8.33333333%;
        float: left;
        max-width: 8.33333333%;
    }
    .l-col-xl-2 {
        flex-basis: 16.66666667%;
        float: left;
        max-width: 16.66666667%;
    }
    .l-col-xl-3 {
        flex-basis: 25%;
        float: left;
        max-width: 25%;
    }
    .l-col-xl-4 {
        flex-basis: 33.33333333%;
        float: left;
        max-width: 33.33333333%;
    }
    .l-col-xl-5 {
        flex-basis: 41.66666667%;
        float: left;
        max-width: 41.66666667%;
    }
    .l-col-xl-6 {
        flex-basis: 50%;
        float: left;
        max-width: 50%;
    }
    .l-col-xl-7 {
        flex-basis: 58.33333333%;
        float: left;
        max-width: 58.33333333%;
    }
    .l-col-xl-8 {
        flex-basis: 66.66666667%;
        float: left;
        max-width: 66.66666667%;
    }
    .l-col-xl-9 {
        flex-basis: 75%;
        float: left;
        max-width: 75%;
    }
    .l-col-xl-10 {
        flex-basis: 83.33333333%;
        float: left;
        max-width: 83.33333333%;
    }
    .l-col-xl-11 {
        flex-basis: 91.66666667%;
        float: left;
        max-width: 91.66666667%;
    }
    .l-col-xl-12 {
        flex-basis: 100%;
        float: left;
        max-width: 100%;
    }
    .order-xl-first {
        order: -1;
    }
    .order-xl-last {
        order: 13;
    }
    .order-xl-0 {
        order: 0;
    }
    .order-xl-1 {
        order: 1;
    }
    .order-xl-2 {
        order: 2;
    }
    .order-xl-3 {
        order: 3;
    }
    .order-xl-4 {
        order: 4;
    }
    .order-xl-5 {
        order: 5;
    }
    .order-xl-6 {
        order: 6;
    }
    .order-xl-7 {
        order: 7;
    }
    .order-xl-8 {
        order: 8;
    }
    .order-xl-9 {
        order: 9;
    }
    .order-xl-10 {
        order: 10;
    }
    .order-xl-11 {
        order: 11;
    }
    .order-xl-12 {
        order: 12;
    }
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
    padding-right: 0;
    padding-left: 0;
}
.no-gutters > .l-col,
.no-gutters > [class*="l-col-"] {
    padding-right: 0;
    padding-left: 0;
}
.c-accordion__heading {
    padding: 1rem;
    transition: 0.25s ease-out;
    cursor: pointer;
}
.c-accordion__heading:hover {
    color: #8c8a8a;
}
.c-accordion__heading::after {
    content: " ";
    display: flow-root;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    vertical-align: middle;
    float: right;
    will-change: transform;
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
    transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
}
.c-accordion__heading--opened::after {
    -webkit-transform: rotate(90deg) translateX(4px);
    transform: rotate(90deg) translateX(4px);
}
.c-accordion__content {
    max-height: 0;
    padding: 0;
    overflow: hidden;
}
.c-accordion__content--opened {
    max-height: 500px;
    display: table;
    padding: 1rem;
}
.c-btn {
    transition: 0.3s ease-out;
}
.c-btn:not(.c-btn__generic):not(.c-btn__link):hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
    outline: 0;
}
.c-btn:not(.c-btn__generic):not(.c-btn__link):active {
    background-color: #fff;
    background-size: 100%;
    transition: background;
}
.c-btn__generic {
    font-weight: 700;
    line-height: 1.5;
    color: #000;
    opacity: 0.9;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    font-size: 1.5rem;
    cursor: pointer;
}
@media screen and (min-width: 45em) {
    .c-btn__generic {
        font-size: 1.7rem;
    }
}
.c-btn__default {
    background-color: #ced9e1;
    color: #000;
}
.c-btn__default:hover {
    background: radial-gradient(circle, transparent 1%, #e9ecef 1%) center/15000% #e9ecef;
    border-color: #ced9e1;
    background-color: #fff;
    color: #ced9e1;
}
.c-btn__primary {
    background-color: #439539;
    color: #fff;
}
.c-btn__primary:hover {
    background: radial-gradient(circle, transparent 1%, #e9ecef 1%) center/15000% #e9ecef;
    border-color: #439539;
    background-color: #fff;
    color: #439539;
}
.c-btn__secondary {
    background-color: #194484;
    color: #fff;
}
.c-btn__secondary:hover {
    background: radial-gradient(circle, transparent 1%, #e9ecef 1%) center/15000% #e9ecef;
    border-color: #194484;
    background-color: #fff;
    color: #194484;
}
.c-btn__success {
    background-color: #439539;
    color: #000;
}
.c-btn__success:hover {
    background: radial-gradient(circle, transparent 1%, #e9ecef 1%) center/15000% #e9ecef;
    border-color: #439539;
    background-color: #fff;
    color: #439539;
}
.c-btn__warning {
    background-color: #f39c12;
    color: #000;
}
.c-btn__warning:hover {
    background: radial-gradient(circle, transparent 1%, #e9ecef 1%) center/15000% #e9ecef;
    border-color: #f39c12;
    background-color: #fff;
    color: #f39c12;
}
.c-btn__danger {
    background-color: #cb0a15;
    color: #fff;
}
.c-btn__danger:hover {
    background: radial-gradient(circle, transparent 1%, #e9ecef 1%) center/15000% #e9ecef;
    border-color: #cb0a15;
    background-color: #fff;
    color: #cb0a15;
}
.c-btn__link {
    background: 0 0;
    border: 0;
    text-decoration: none;
}
.c-btn__link:hover {
    color: #333;
    text-decoration: underline;
}
.c-btn__link:focus {
    color: #333;
}
.c-btn__input {
    top: -30px;
    float: right;
    padding: 3px 16px;
    margin-right: 0.2em;
}
.c-btn__input--absolute {
    position: absolute;
    right: 3px;
    top: 3px;
    height: 27px;
    padding: 0 5px;
}
.c-btn--full {
    display: block;
    width: 100%;
    clear: both;
}
.c-btn--sm {
    padding: 6px 15px;
    font-size: 0.875rem;
}
.c-btn--md {
    padding: 8px 30px;
    font-size: 1.125rem;
}
.c-btn--lg {
    padding: 12px 35px;
    font-size: 1.25rem;
}
@media screen and (min-width: 45em) {
    .c-btn--lg {
        padding: 12px 40px;
        font-size: 1.5rem;
    }
}
.c-card__header {
    padding: 0.75rem;
}
.c-card__title {
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0;
}
.c-card__subtitle {
    font-weight: 400;
    font-size: 0.875rem;
    color: #8fa8ba;
}
.c-card__image {
    display: block;
}
.c-card__content {
    padding: 0.75rem;
    border-top: 1px solid #ced9e1;
}
.c-card__footer {
    border-top: 1px solid #ced9e1;
    padding: 0.75rem;
}
.c-card__media:not(:last-child) {
    margin-bottom: 0.75rem;
}
.c-card--shadowed {
    box-shadow: 0 2px 3px 0 #bbb, 0 0 1px 0 #bbb;
    border: 0;
}
.c-icon {
    display: inline-block;
    height: 16px;
    width: 16px;
    padding: 5px;
}
.c-icon--sm {
    width: 32px;
    height: 32px;
}
.c-icon--md {
    width: 64px;
    height: 64px;
}
.c-icon--lg {
    width: 128px;
    height: 128px;
}
.c-icon--xlg {
    width: 256px;
    height: 256px;
}
.c-input {
    display: block;
    width: 100%;
    min-height: 40px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: transparent;
    color: inherit;
    outline: 0;
    margin: 0;
    box-shadow: 0, 1px, 2px, 0 rgba(51, 51, 51, 0.1) inset 0 #bbb;
    transition: 0.3s ease-out;
}
.c-input:focus {
    outline: 0;
}
.c-input__group {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
}
.c-input__group > .c-input {
    width: 1%;
    flex: 1 1 auto;
}
.c-input__group > .c-input--success:focus {
    border-color: rgba(67, 149, 57, 0.9);
}
.c-input__group--append {
    margin-left: -1px;
}
.c-input__group--prepend {
    margin-right: -1px;
}
.c-input__group__text {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.5;
    min-height: 40px;
    color: #333;
    text-align: center;
    white-space: nowrap;
    background-color: #ced9e1;
    border: 1px solid #ccc;
}
.c-input__text {
    min-height: 40px;
}
.c-input__textarea {
    min-height: 100px;
}
.c-input__checkbox {
    position: relative;
    margin: 1em 0;
    text-align: left;
}
.c-input__checkbox label {
    cursor: pointer;
    display: inline;
    line-height: 1.25em;
    vertical-align: top;
    clear: both;
    margin: 0;
}
.c-input__checkbox label:after,
.c-input__checkbox label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
}
.c-input__checkbox label:before {
    width: 1.25em;
    height: 1.25em;
    background: #fff;
    border: 0.06em solid rgba(0, 0, 0, 0.54);
    border-radius: 0.125em;
    cursor: pointer;
    transition: background 0.3s;
}
.c-input__checkbox input[type="checkbox"]:checked + label::before {
    background: #439539;
    border: none;
}
.c-input__checkbox input[type="checkbox"]:checked + label::after {
    -webkit-transform: translate(0.25em, 0.33653846em) rotate(-45deg);
    transform: translate(0.25em, 0.33653846em) rotate(-45deg);
    width: 0.75em;
    height: 0.375em;
    border: 0.125em solid #fff;
    border-top-style: none;
    border-right-style: none;
}
.c-input__radiobox {
    position: relative;
    margin: 1em 0;
    text-align: left;
}
.c-input__radiobox label {
    cursor: pointer;
    display: inline;
    line-height: 1.25em;
    vertical-align: top;
    clear: both;
    margin: 0;
}
.c-input__radiobox label:after,
.c-input__radiobox label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
}
.c-input__radiobox label:before {
    background: #fff;
    border: 0.12em solid rgba(0, 0, 0, 0.54);
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    width: 1.25em;
    height: 1.25em;
    content: "";
    display: inline-block;
    will-change: background-color, border-color;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 0.625em;
    vertical-align: middle;
}
.c-input__radiobox label:after {
    top: 50%;
    left: 0.6375em;
    width: 0.625em;
    height: 0.625em;
    position: absolute;
    -webkit-transform: translate(-50%, -50%) scale(0, 0) translateZ(0);
    transform: translate(-50%, -50%) scale(0, 0) translateZ(0);
    transition: 0.2s;
    will-change: transform;
    border-radius: 50%;
}
.c-input__radiobox input[type="radio"]:checked + label::before {
    border-color: #439539;
}
.c-input__radiobox input[type="radio"]:checked + label::after {
    -webkit-transform: translate(-50%, -50%) scale(1, 1) translateZ(0);
    transform: translate(-50%, -50%) scale(1, 1) translateZ(0);
    background-color: #439539;
}
.c-input__select {
    max-width: 100%;
    position: relative;
    vertical-align: top;
}
.c-input__select::after {
    border: 0.18em solid #ccc;
    border-radius: 0.12em;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    width: 0.625em;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: center;
    transform-origin: center;
    right: 1.126em;
}
.c-input__control {
    position: relative;
}
.c-input__control label ~ span {
    top: 70%;
}
.c-input__control--left > input {
    padding-left: 2.502em;
}
.c-input__control--left > span {
    left: 1.563em;
}
.c-input__control--right > input {
    padding-right: 5em;
}
.c-input__control--right > span {
    right: 1.563em;
}
.c-input__control__box {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.c-input__control__box button {
    padding: 0 8px;
}
.c-input--success {
    border-color: rgba(67, 149, 57, 0.9);
    caret-color: #439539;
}
.c-input--error {
    border-color: rgba(203, 10, 21, 0.9);
    caret-color: #cb0a15;
}
.c-input--warning {
    border-color: rgba(243, 156, 18, 0.9);
    caret-color: #f39c12;
}
.c-input--disabled {
    background-color: rgba(238, 238, 238, 0.9);
    border: none;
    box-shadow: none;
}
.c-label {
    display: inline;
    line-height: 1.5;
    font-size: 1rem;
    color: #ced9e1;
    border: 1px solid #ced9e1;
    text-align: center;
    white-space: nowrap;
    padding: 3px 4px;
    border-radius: 4px;
}
.c-label__primary,
.c-label__success {
    color: #439539;
    border: 1px solid #439539;
}
.c-label__warning {
    color: #f39c12;
    border: 1px solid #f39c12;
}
.c-label__danger {
    color: #cb0a15;
    border: 1px solid #cb0a15;
}
.c-label__info {
    color: #3498db;
    border: 1px solid #3498db;
}
.c-label--no-b-color {
    border: 1px solid transparent;
}
.c-modal {
    position: fixed;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1050;
    overflow: hidden;
    outline: 0;
}
.c-modal__dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
}
.c-modal.fade .c-modal__dialog {
    -webkit-transform: translate(0, -50px);
    transform: translate(0, -50px);
}
.c-modal.show .c-modal__dialog {
    -webkit-transform: none;
    transform: none;
}
.c-modal__dialog--center {
    display: flex;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
}
@media screen and (min-width: 45em) {
    .c-modal__dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
    .c-modal__dialog--center {
        min-height: calc(100% - (1.75rem * 2));
    }
    .c-modal__dialog--center::before {
        height: calc(100vh - (1.75rem * 2));
    }
}
.c-modal__dialog--center::before {
    display: block;
    height: calc(100vh - (0.5rem * 2));
    content: "";
}
.c-modal__content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: 0;
}
.c-modal__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #f8f9fa;
}
.c-modal__header--title {
    margin-bottom: 0;
    line-height: 1.5;
}
.c-modal__header .close {
    padding: 1rem;
    margin: -1rem;
}
.c-modal__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #f8f9fa;
}
.c-modal__footer > :not(:first-child) {
    margin-left: 0.25rem;
}
.c-modal__footer > :not(:last-child) {
    margin-right: 0.25rem;
}
.c-modal__body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
}
.c-modal__background {
    position: fixed;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    background-color: #fff;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
}
.c-modal__background.fade {
    opacity: 0;
}
.c-modal__background.show {
    opacity: 0.5;
}
.c-modal--open {
    overflow: hidden;
}
.c-modal--open .c-modal {
    overflow-x: hidden;
    overflow-y: auto;
}
@media screen and (min-width: 45em) {
    .c-modal__body--expose-bg {
        margin: 2.5rem;
    }
    .c-modal__background {
        background-color: rgba(10, 10, 10, 0.86);
    }
    .c-modal--small {
        max-width: 300px;
    }
    .c-modal--large {
        max-width: 800px;
    }
    .c-modal--xlarge {
        max-width: 1140px;
    }
}
.c-modal--full {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
}
.c-panel {
    padding: 10px 15px;
    margin: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.c-panel__primary {
    background-color: #3498db;
}
.c-panel__success {
    background-color: #439539;
}
.c-panel__warning {
    background-color: #f39c12;
}
.c-panel__danger {
    background-color: #cb0a15;
}
.c-panel--round {
    border-radius: 4px;
}
.c-panel--left {
    left: 0;
}
.c-panel--right {
    right: 0;
}
.c-tabs {
    list-style: none;
    margin: 0;
}
.c-tabs__item {
    background: #f8f9fa;
}
.c-tabs__link {
    display: block;
    text-decoration: none;
}
.c-tabs__link:hover {
    background: 0 0;
    color: inherit;
    text-decoration: none;
}
.c-tabs__list {
    position: relative;
}
.c-tabs__list:hover {
    background: #439539;
    color: inherit;
    text-decoration: none;
}
.c-tabs .active {
    background: rgba(67, 149, 57, 0.75);
    color: inherit;
}
@media screen and (max-width: 44.9375em) {
    .c-tabs-wrapper {
        position: relative;
    }
    .c-tabs-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
}
.c-tabs-content .back-arrow {
    display: inline;
}
.c-table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
}
.c-table td,
.c-table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.c-table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.c-table tbody + tbody {
    border-top: 2px solid rgba(0, 0, 0, 0.1);
}
.c-table--bordered,
.c-table--bordered td,
.c-table--bordered th {
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.c-table--bordered thead td,
.c-table--bordered thead th {
    border-bottom-width: 2px;
}
.c-caret {
    position: absolute;
    left: 0;
    right: 0;
    margin-top: -0.75rem;
    width: 0;
    height: 0;
    margin-left: auto;
    margin-right: auto;
}
.c-caret__down {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #439539;
}
.c-caret__up {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #439539;
}
.c-caret__left {
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #439539;
}
.c-caret__right {
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #439539;
}
.c-hamburger {
    position: relative;
    display: block;
    width: 1.75em;
    padding: 0.025em;
}
.c-hamburger__layer {
    display: block;
    border: 0.055em solid #fff;
    background: #fff;
    height: 0.055em;
    margin-bottom: 5px;
    border-radius: 0;
    will-change: transform;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
}
.c-hamburger__layer:last-child {
    margin-bottom: 0;
}
.c-hamburger.open .c-hamburger__layer {
    width: 100%;
}
.c-hamburger.open .c-hamburger__layer:first-child {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 0;
}
.c-hamburger.open .c-hamburger__layer:nth-child(2) {
    visibility: hidden;
}
.c-hamburger.open .c-hamburger__layer:last-child {
    position: absolute;
    top: 0;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
}
.u-display--left {
    float: left;
}
.u-display--right {
    float: right;
}
@media (min-width: 576px) {
    .u-hidden-sm {
        display: none;
    }
}
@media (min-width: 768px) {
    .u-hidden-md {
        display: none;
    }
}
@media (min-width: 992px) {
    .u-hidden-lg {
        display: none;
    }
}
@media (min-width: 1200px) {
    .u-hidden-xl {
        display: none;
    }
}
.u-display--inline {
    display: inline;
}
.u-display--inline-block {
    display: inline-block;
}
.u-display--block {
    display: block;
}
.u-display--table,
.u-list--table {
    display: table;
}
.u-display--flex {
    display: flex;
}
@media (min-width: 576px) {
    .u-display-sm--inline {
        display: inline;
    }
    .u-display-sm--inline-block {
        display: inline-block;
    }
    .u-display-sm--block {
        display: block;
    }
    .u-display-sm--table {
        display: table;
    }
    .u-display-sm--flex {
        display: flex;
    }
}
@media (min-width: 768px) {
    .u-display-md--inline {
        display: inline;
    }
    .u-display-md--inline-block {
        display: inline-block;
    }
    .u-display-md--block {
        display: block;
    }
    .u-display-md--table {
        display: table;
    }
    .u-display-md--flex {
        display: flex;
    }
}
@media (min-width: 992px) {
    .u-display-lg--inline {
        display: inline;
    }
    .u-display-lg--inline-block {
        display: inline-block;
    }
    .u-display-lg--block {
        display: block;
    }
    .u-display-lg--table {
        display: table;
    }
    .u-display-lg--flex {
        display: flex;
    }
}
@media (min-width: 1200px) {
    .u-display-xl--inline {
        display: inline;
    }
    .u-display-xl--inline-block {
        display: inline-block;
    }
    .u-display-xl--block {
        display: block;
    }
    .u-display-xl--table {
        display: table;
    }
    .u-display-xl--flex {
        display: flex;
    }
}
.u-clearfix {
    content: "";
    display: block;
    clear: both;
}
.u-overflow--auto {
    overflow: auto;
}
.u-overflow--hidden {
    overflow: hidden;
}
.u-overflow--scroll {
    overflow: scroll;
}
.u-overflow--visible {
    overflow: visible;
}
.u-overflow-x--auto {
    overflow-x: auto;
}
.u-overflow-x--hidden {
    overflow-x: hidden;
}
.u-overflow-x--scroll {
    overflow-x: scroll;
}
.u-overflow-x--visible {
    overflow-x: visible;
}
.u-overflow-y--auto {
    overflow-y: auto;
}
.u-overflow-y--hidden {
    overflow-y: hidden;
}
.u-overflow-y--scroll {
    overflow-y: scroll;
}
.u-overflow-y--visible {
    overflow-y: visible;
}
@media (min-width: 576px) {
    .u-overflow-sm--auto {
        overflow: auto;
    }
    .u-overflow-sm--hidden {
        overflow: hidden;
    }
    .u-overflow-sm--scroll {
        overflow: scroll;
    }
    .u-overflow-sm--visible {
        overflow: visible;
    }
    .u-overflow-x-sm--auto {
        overflow-x: auto;
    }
    .u-overflow-x-sm--hidden {
        overflow-x: hidden;
    }
    .u-overflow-x-sm--scroll {
        overflow-x: scroll;
    }
    .u-overflow-x-sm--visible {
        overflow-x: visible;
    }
    .u-overflow-y-sm--auto {
        overflow-y: auto;
    }
    .u-overflow-y-sm--hidden {
        overflow-y: hidden;
    }
    .u-overflow-y-sm--scroll {
        overflow-y: scroll;
    }
    .u-overflow-y-sm--visible {
        overflow-y: visible;
    }
}
@media (min-width: 768px) {
    .u-overflow-md--auto {
        overflow: auto;
    }
    .u-overflow-md--hidden {
        overflow: hidden;
    }
    .u-overflow-md--scroll {
        overflow: scroll;
    }
    .u-overflow-md--visible {
        overflow: visible;
    }
    .u-overflow-x-md--auto {
        overflow-x: auto;
    }
    .u-overflow-x-md--hidden {
        overflow-x: hidden;
    }
    .u-overflow-x-md--scroll {
        overflow-x: scroll;
    }
    .u-overflow-x-md--visible {
        overflow-x: visible;
    }
    .u-overflow-y-md--auto {
        overflow-y: auto;
    }
    .u-overflow-y-md--hidden {
        overflow-y: hidden;
    }
    .u-overflow-y-md--scroll {
        overflow-y: scroll;
    }
    .u-overflow-y-md--visible {
        overflow-y: visible;
    }
}
@media (min-width: 992px) {
    .u-overflow-lg--auto {
        overflow: auto;
    }
    .u-overflow-lg--hidden {
        overflow: hidden;
    }
    .u-overflow-lg--scroll {
        overflow: scroll;
    }
    .u-overflow-lg--visible {
        overflow: visible;
    }
    .u-overflow-x-lg--auto {
        overflow-x: auto;
    }
    .u-overflow-x-lg--hidden {
        overflow-x: hidden;
    }
    .u-overflow-x-lg--scroll {
        overflow-x: scroll;
    }
    .u-overflow-x-lg--visible {
        overflow-x: visible;
    }
    .u-overflow-y-lg--auto {
        overflow-y: auto;
    }
    .u-overflow-y-lg--hidden {
        overflow-y: hidden;
    }
    .u-overflow-y-lg--scroll {
        overflow-y: scroll;
    }
    .u-overflow-y-lg--visible {
        overflow-y: visible;
    }
}
@media (min-width: 1200px) {
    .u-overflow-xl--auto {
        overflow: auto;
    }
    .u-overflow-xl--hidden {
        overflow: hidden;
    }
    .u-overflow-xl--scroll {
        overflow: scroll;
    }
    .u-overflow-xl--visible {
        overflow: visible;
    }
    .u-overflow-x-xl--auto {
        overflow-x: auto;
    }
    .u-overflow-x-xl--hidden {
        overflow-x: hidden;
    }
    .u-overflow-x-xl--scroll {
        overflow-x: scroll;
    }
    .u-overflow-x-xl--visible {
        overflow-x: visible;
    }
    .u-overflow-y-xl--auto {
        overflow-y: auto;
    }
    .u-overflow-y-xl--hidden {
        overflow-y: hidden;
    }
    .u-overflow-y-xl--scroll {
        overflow-y: scroll;
    }
    .u-overflow-y-xl--visible {
        overflow-y: visible;
    }
}
.u-index--1 {
    z-index: 1;
}
.u-index--2 {
    z-index: 2;
}
.u-index--3 {
    z-index: 3;
}
.u-index--4 {
    z-index: 4;
}
.u-index--5 {
    z-index: 5;
}
.u-index--6 {
    z-index: 6;
}
.u-index--7 {
    z-index: 7;
}
.u-index--8 {
    z-index: 8;
}
.u-index--9 {
    z-index: 9;
}
.u-index--10 {
    z-index: 10;
}
.u-flex-wrap--nowrap {
    flex-wrap: nowrap;
}
.u-flex-wrap--wrap {
    flex-wrap: wrap;
}
.u-position--static {
    position: static !important;
}
.u-position--relative {
    position: relative !important;
}
.u-position--absolute {
    position: absolute !important;
}
.u-position--fixed {
    position: fixed !important;
}
.u-position--sticky {
    position: -webkit-sticky !important;
    position: sticky !important;
}
.u-absolute-zero {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.u-fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}
.u-fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
}
.u-border {
    border: 1px solid #ccc;
}
.u-border--top {
    border-top: 1px solid #ccc;
}
.u-border--top-none {
    border-top: none;
}
.u-border--right {
    border-right: 1px solid #ccc;
}
.u-border--right-none {
    border-right: none;
}
.u-border--bottom {
    border-bottom: 1px solid #ccc;
}
.u-border--bottom-none {
    border-bottom: none;
}
.u-border--left {
    border-left: 1px solid #ccc;
}
.u-border--left-none {
    border-left: none;
}
.u-border--none {
    border: none;
}
.u-shadow {
    box-shadow: 1px 1px 1px 0 #bbb, 0 0 1px 0 #bbb;
}
.u-shadow--top {
    box-shadow: 0 -1px 1px 0 #bbb, 0 0 1px 0 #bbb;
}
.u-shadow--right {
    box-shadow: 1px 0 1px 0 #bbb, 0 0 1px 0 #bbb;
}
.u-shadow--bottom {
    box-shadow: 0 1px 1px 0 #bbb, 0 0 1px 0 #bbb;
}
.u-shadow--left {
    box-shadow: -1px 0 1px 0 #bbb, 0 0 1px 0 #bbb;
}
.u-full {
    display: block;
    width: 100%;
    height: 100%;
}
.u-hidden {
    display: none;
}
@media screen and (min-width: 45em) {
    .c-tabs-content .back-arrow,
    .u-hidden--desktop {
        display: none;
    }
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
.u-grid-justify--center {
    justify-content: center;
}
.u-grid-justify--left {
    justify-content: flex-start;
}
.u-grid-justify--right {
    justify-content: flex-end;
}
.u-grid-justify--around {
    justify-content: space-around;
}
.u-grid-justify--between {
    justify-content: space-between;
}
.u-grid-justify--evenly {
    justify-content: space-evenly;
}
.u-grid-align--center {
    align-items: center;
}
.u-grid-align--top {
    align-items: flex-start;
}
.u-grid-align--bottom {
    align-items: flex-end;
}
.u-grid-align--stretch {
    align-items: stretch;
}
.u-content--center {
    margin: 0 auto;
}
.u-content--left {
    margin-left: 0;
}
.u-content--right {
    margin-right: 0;
}
.u-text {
    font-weight: 400;
}
.u-text--centered {
    text-align: center;
}
@media screen and (max-width: 44.9375em) {
    .u-hidden--mobile {
        display: none;
    }
    .u-text--centered__mobile {
        text-align: center;
    }
}
@media screen and (min-width: 45em) and (max-width: 63.9375em) {
    .u-text--centered__tablet {
        text-align: center;
    }
}
@media screen and (min-width: 63.9375em) {
    .u-text--centered__desktop {
        text-align: center;
    }
    .u-text--justified__desktop {
        text-align: justify;
    }
}
.u-text--justified {
    text-align: justify;
}
@media screen and (max-width: 44.9375em) {
    .u-text--justified__mobile {
        text-align: justify;
    }
}
@media screen and (min-width: 45em) and (max-width: 63.9375em) {
    .u-text--justified__tablet {
        text-align: justify;
    }
    .u-text--left__tablet {
        text-align: left;
    }
}
.u-text--left {
    text-align: left;
}
@media screen and (max-width: 44.9375em) {
    .u-text--left__mobile {
        text-align: left;
    }
}
@media screen and (min-width: 63.9375em) {
    .u-text--left__desktop {
        text-align: left;
    }
    .u-text--right__desktop {
        text-align: right;
    }
}
.u-text--right {
    text-align: right;
}
@media screen and (min-width: 45em) and (max-width: 63.9375em) {
    .u-text--right__tablet {
        text-align: right;
    }
}
.u-text--light {
    font-weight: 400;
}
.u-text--bold {
    font-weight: 700;
}
.u-text--bolder {
    font-weight: bolder;
}
.u-text--uppercase {
    text-transform: uppercase;
}
.u-text--capitalised {
    text-transform: capitalize;
}
.u-text--lowercase {
    text-transform: lowercase;
}
.u-text--italic {
    font-style: italic;
}
.u-text--sm {
    font-size: 0.625rem;
}
.u-text--md {
    font-size: 1.25rem;
}
.u-text--lg {
    font-size: 1.875rem;
}
.u-text--xlg {
    font-size: 2.5rem;
}
.u-list--item {
    display: inline;
}
.u-list__no-type {
    list-style-type: none;
}
.u-list--table {
    padding: 0;
}
.u-image--rounded {
    border-radius: 290486px;
}
.u-image--responsive {
    display: block;
    max-width: 100%;
    height: auto;
}
.u-image--full {
    width: 100%;
}
.u-image--16 {
    width: 16px;
    height: 16px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-image--24 {
    width: 24px;
    height: 24px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-image--32 {
    width: 32px;
    height: 32px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-image--48 {
    width: 48px;
    height: 48px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-image--64 {
    width: 64px;
    height: 64px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-image--96 {
    width: 96px;
    height: 96px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-image--128 {
    width: 128px;
    height: 128px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-image--256 {
    width: 256px;
    height: 256px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
}
.u-padding--none {
    padding: 0;
}
.c-card--no-gutters,
.c-card--no-gutters > [class*="card__"],
.u-padding--h-none {
    padding-left: 0;
    padding-right: 0;
}
.u-padding--v-none {
    padding-top: 0;
    padding-bottom: 0;
}
@media screen and (min-width: 45em) {
    .u-padding--sm {
        padding: 12px;
    }
    .u-padding--md {
        padding: 24px;
    }
    .u-padding--lg {
        padding: 48px;
    }
    .u-padding--xlg {
        padding: 192px;
    }
}
@media screen and (max-width: 44.9375em) {
    .u-text--right__mobile {
        text-align: right;
    }
    .u-padding--sm {
        padding: 6px;
    }
    .u-padding--md {
        padding: 12px;
    }
    .u-padding--lg {
        padding: 24px;
    }
    .u-padding--xlg {
        padding: 48px;
    }
}
@media screen and (min-width: 45em) {
    .u-padding--h-sm {
        padding-left: 12px;
        padding-right: 12px;
    }
    .u-padding--h-md {
        padding-left: 24px;
        padding-right: 24px;
    }
    .u-padding--h-lg {
        padding-left: 48px;
        padding-right: 48px;
    }
    .u-padding--h-xlg {
        padding-left: 192px;
        padding-right: 192px;
    }
    .u-padding--v-sm {
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .u-padding--v-md {
        padding-top: 24px;
        padding-bottom: 24px;
    }
    .u-padding--v-lg {
        padding-top: 48px;
        padding-bottom: 48px;
    }
    .u-padding--v-xlg {
        padding-top: 192px;
        padding-bottom: 192px;
    }
}
@media screen and (max-width: 44.9375em) {
    .u-padding--h-sm {
        padding-left: 6px;
        padding-right: 6px;
    }
    .u-padding--h-md {
        padding-left: 12px;
        padding-right: 12px;
    }
    .u-padding--h-lg {
        padding-left: 24px;
        padding-right: 24px;
    }
    .u-padding--h-xlg {
        padding-left: 48px;
        padding-right: 48px;
    }
    .u-padding--v-sm {
        padding-top: 6px;
        padding-bottom: 6px;
    }
    .u-padding--v-md {
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .u-padding--v-lg {
        padding-top: 24px;
        padding-bottom: 24px;
    }
    .u-padding--v-xlg {
        padding-top: 48px;
        padding-bottom: 48px;
    }
}
@media screen and (min-width: 45em) {
    .u-padding--lft-none {
        padding-left: 0;
    }
    .u-padding--lft-sm {
        padding-left: 12px;
    }
    .u-padding--lft-md {
        padding-left: 24px;
    }
    .u-padding--lft-lg {
        padding-left: 48px;
    }
    .u-padding--lft-xlg {
        padding-left: 192px;
    }
    .u-padding--rgt-none {
        padding-right: 0;
    }
    .u-padding--rgt-sm {
        padding-right: 12px;
    }
    .u-padding--rgt-md {
        padding-right: 24px;
    }
    .u-padding--rgt-lg {
        padding-right: 192px;
    }
}
@media screen and (min-width: 45em) {
    .u-padding--tp-none {
        padding-top: 0;
    }
    .u-padding--tp-xs {
        padding-top: 6px;
    }
    .u-padding--tp-sm {
        padding-top: 12px;
    }
    .u-padding--tp-md {
        padding-top: 24px;
    }
    .u-padding--tp-lg {
        padding-top: 48px;
    }
    .u-padding--tp-xlg {
        padding-top: 192px;
    }
    .u-padding--btm-none {
        padding-bottom: 0;
    }
    .u-padding--btm-xs {
        padding-bottom: 6px;
    }
    .u-padding--btm-sm {
        padding-bottom: 12px;
    }
    .u-padding--btm-md {
        padding-bottom: 24px;
    }
    .u-padding--btm-lg {
        padding-bottom: 48px;
    }
    .u-padding--btm-xlg {
        padding-bottom: 192px;
    }
}
.u-margin--none {
    margin: 0;
}
.u-margin--h-none {
    margin-left: 0;
    margin-right: 0;
}
.u-margin--v-none {
    margin-top: 0;
    margin-bottom: 0;
}
@media screen and (min-width: 45em) {
    .u-margin--sm {
        margin: 12px;
    }
    .u-margin--md {
        margin: 24px;
    }
    .u-margin--lg {
        margin: 48px;
    }
}
@media screen and (max-width: 44.9375em) {
    .u-padding--lft-sm {
        padding-left: 6px;
    }
    .u-padding--lft-md {
        padding-left: 12px;
    }
    .u-padding--lft-lg {
        padding-left: 24px;
    }
    .u-padding--lft-xlg {
        padding-left: 48px;
    }
    .u-padding--rgt-sm {
        padding-right: 6px;
    }
    .u-padding--rgt-md {
        padding-right: 12px;
    }
    .u-padding--rgt-lg {
        padding-right: 48px;
    }
    .u-padding--tp-xs {
        padding-top: 3px;
    }
    .u-padding--tp-sm {
        padding-top: 6px;
    }
    .u-padding--tp-md {
        padding-top: 12px;
    }
    .u-padding--tp-lg {
        padding-top: 24px;
    }
    .u-padding--tp-xlg {
        padding-top: 48px;
    }
    .u-padding--btm-xs {
        padding-bottom: 3px;
    }
    .u-padding--btm-sm {
        padding-bottom: 6px;
    }
    .u-padding--btm-md {
        padding-bottom: 12px;
    }
    .u-padding--btm-lg {
        padding-bottom: 24px;
    }
    .u-padding--btm-xlg {
        padding-bottom: 48px;
    }
    .u-margin--sm {
        margin: 6px;
    }
    .u-margin--md {
        margin: 12px;
    }
    .u-margin--lg {
        margin: 24px;
    }
}
@media screen and (min-width: 45em) {
    .u-margin--h-sm {
        margin-left: 12px;
        margin-right: 12px;
    }
    .u-margin--h-md {
        margin-left: 24px;
        margin-right: 24px;
    }
    .u-margin--h-lg {
        margin-left: 48px;
        margin-right: 48px;
    }
    .u-margin--v-sm {
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .u-margin--v-md {
        margin-top: 24px;
        margin-bottom: 24px;
    }
    .u-margin--v-lg {
        margin-top: 48px;
        margin-bottom: 48px;
    }
}
@media screen and (max-width: 44.9375em) {
    .u-margin--h-sm {
        margin-left: 6px;
        margin-right: 6px;
    }
    .u-margin--h-md {
        margin-left: 12px;
        margin-right: 12px;
    }
    .u-margin--h-lg {
        margin-left: 24px;
        margin-right: 24px;
    }
    .u-margin--v-sm {
        margin-top: 6px;
        margin-bottom: 6px;
    }
    .u-margin--v-md {
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .u-margin--v-lg {
        margin-top: 24px;
        margin-bottom: 24px;
    }
}
@media screen and (min-width: 45em) {
    .u-margin--lft-none {
        margin-left: 0;
    }
    .u-margin--lft-sm {
        margin-left: 12px;
    }
    .u-margin--lft-md {
        margin-left: 24px;
    }
    .u-margin--lft-lg {
        margin-left: 48px;
    }
    .u-margin--rgt-none {
        margin-right: 0;
    }
    .u-margin--rgt-sm {
        margin-right: 12px;
    }
    .u-margin--rgt-md {
        margin-right: 24px;
    }
    .u-margin--rgt-lg {
        margin-right: 48px;
    }
}
@media screen and (min-width: 45em) {
    .u-margin--tp-none {
        margin-top: 0;
    }
    .u-margin--tp-xs {
        margin-top: 6px;
    }
    .u-margin--tp-sm {
        margin-top: 12px;
    }
    .u-margin--tp-md {
        margin-top: 24px;
    }
    .u-margin--tp-lg {
        margin-top: 48px;
    }
    .u-margin--btm-none {
        margin-bottom: 0;
    }
    .u-margin--btm-xs {
        margin-bottom: 6px;
    }
    .u-margin--btm-sm {
        margin-bottom: 12px;
    }
    .u-margin--btm-md {
        margin-bottom: 24px;
    }
    .u-margin--btm-lg {
        margin-bottom: 48px;
    }
}
@media screen and (max-width: 44.9375em) {
    .u-margin--lft-sm {
        margin-left: 6px;
    }
    .u-margin--lft-md {
        margin-left: 12px;
    }
    .u-margin--lft-lg {
        margin-left: 24px;
    }
    .u-margin--rgt-sm {
        margin-right: 6px;
    }
    .u-margin--rgt-md {
        margin-right: 12px;
    }
    .u-margin--rgt-lg {
        margin-right: 24px;
    }
    .u-margin--tp-xs {
        margin-top: 3px;
    }
    .u-margin--tp-sm {
        margin-top: 6px;
    }
    .u-margin--tp-md {
        margin-top: 12px;
    }
    .u-margin--tp-lg {
        margin-top: 24px;
    }
    .u-margin--btm-xs {
        margin-bottom: 3px;
    }
    .u-margin--btm-sm {
        margin-bottom: 6px;
    }
    .u-margin--btm-md {
        margin-bottom: 12px;
    }
    .u-margin--btm-lg {
        margin-bottom: 24px;
    }
}
.u-height--10 {
    height: 10%;
}
.u-width--10 {
    width: 10%;
}
.u-height--20 {
    height: 20%;
}
.u-width--20 {
    width: 20%;
}
.u-height--30 {
    height: 30%;
}
.u-width--30 {
    width: 30%;
}
.u-height--40 {
    height: 40%;
}
.u-width--40 {
    width: 40%;
}
.u-height--50 {
    height: 50%;
}
.u-width--50 {
    width: 50%;
}
.u-height--60 {
    height: 60%;
}
.u-width--60 {
    width: 60%;
}
.u-height--70 {
    height: 70%;
}
.u-width--70 {
    width: 70%;
}
.u-height--80 {
    height: 80%;
}
.u-width--80 {
    width: 80%;
}
.u-height--90 {
    height: 90%;
}
.u-width--90 {
    width: 90%;
}
.u-height--100 {
    height: 100%;
}
.u-width--100 {
    width: 100%;
}
.u-bg-secondary {
    background-color: #6c757d !important;
}
.u-bg-secondary-trans {
    background-color: rgba(108, 117, 125, 0.2) !important;
}
.u-text-secondary {
    color: #6c757d;
}
.u-text-secondary--lighten {
    color: #afb5ba;
}
.u-text-secondary--darken {
    color: #313539;
}
.u-bg-inplay {
    background-color: #acc540 !important;
}
.u-bg-inplay-trans {
    background-color: rgba(172, 197, 64, 0.2) !important;
}
.u-text-inplay {
    color: #acc540;
}
.u-text-inplay--lighten {
    color: #d7e3a2;
}
.u-text-inplay--darken {
    color: #59661f;
}
.u-bg-sports {
    background-color: #439539 !important;
}
.u-bg-sports-trans {
    background-color: rgba(67, 149, 57, 0.2) !important;
}
.u-text-sports {
    color: #439539;
}
.u-text-sports--lighten {
    color: #88ce7f;
}
.u-text-sports--darken {
    color: #1a3916;
}
.u-bg-casino {
    background-color: #0054a4 !important;
}
.u-bg-casino-trans {
    background-color: rgba(0, 84, 164, 0.2) !important;
}
.u-text-casino {
    color: #0054a4;
}
.u-text-casino--lighten {
    color: #2594ff;
}
.u-text-casino--darken {
    color: #001325;
}
.u-bg-lcasino {
    background-color: #66cae0 !important;
}
.u-bg-lcasino-trans {
    background-color: rgba(102, 202, 224, 0.2) !important;
}
.u-text-lcasino {
    color: #66cae0;
}
.u-text-lcasino--lighten {
    color: #d0eff5;
}
.u-text-lcasino--darken {
    color: #218da5;
}
.u-bg-vegas {
    background-color: #ed1c24 !important;
}
.u-bg-vegas-trans {
    background-color: rgba(237, 28, 36, 0.2) !important;
}
.u-text-vegas {
    color: #ed1c24;
}
.u-text-vegas--lighten {
    color: #f69296;
}
.u-text-vegas--darken {
    color: #7f0a0f;
}
.u-bg-success {
    background-color: #439539 !important;
}
.u-bg-success-trans {
    background-color: rgba(67, 149, 57, 0.2) !important;
}
.u-text-success {
    color: #439539;
}
.u-text-success--lighten {
    color: #88ce7f;
}
.u-text-success--darken {
    color: #1a3916;
}
.u-bg-danger {
    background-color: #cb0a15 !important;
}
.u-bg-danger-trans {
    background-color: rgba(203, 10, 21, 0.2) !important;
}
.u-text-danger {
    color: #cb0a15;
}
.u-text-danger--lighten {
    color: #f75d66;
}
.u-text-danger--darken {
    color: #510408;
}
.u-bg-warning {
    background-color: #f39c12 !important;
}
.u-bg-warning-trans {
    background-color: rgba(243, 156, 18, 0.2) !important;
}
.u-text-warning {
    color: #f39c12;
}
.u-text-warning--lighten {
    color: #f9cf8b;
}
.u-text-warning--darken {
    color: #7f5006;
}
.u-bg-info {
    background-color: #3498db !important;
}
.u-bg-info-trans {
    background-color: rgba(52, 152, 219, 0.2) !important;
}
.u-text-info {
    color: #3498db;
}
.u-text-info--lighten {
    color: #a0cfee;
}
.u-text-info--darken {
    color: #16527a;
}
.u-bg-wtrans {
    background-color: rgba(255, 255, 255, 0.4) !important;
}
.u-bg-wtrans-trans {
    background-color: rgba(255, 255, 255, 0.2) !important;
}
.u-text-wtrans,
.u-text-wtrans--lighten {
    color: rgba(255, 255, 255, 0.4);
}
.u-text-wtrans--darken {
    color: rgba(191, 191, 191, 0.4);
}
.u-bg-white {
    background-color: #fff !important;
}
.u-bg-white-trans {
    background-color: rgba(255, 255, 255, 0.2) !important;
}
.u-text-white,
.u-text-white--lighten {
    color: #fff;
}
.u-text-white--darken {
    color: #bfbfbf;
}
.u-bg-black {
    background-color: #000 !important;
}
.u-bg-black-trans {
    background-color: rgba(0, 0, 0, 0.2) !important;
}
.u-text-black {
    color: #000;
}
.u-text-black--lighten {
    color: #404040;
}
.u-text-black--darken {
    color: #000;
}
.u-bg-primary {
    background-color: #439539 !important;
}
.u-bg-primary-trans {
    background-color: rgba(67, 149, 57, 0.2) !important;
}
.u-text-primary {
    color: #439539;
}
.u-text-primary--lighten {
    color: #88ce7f;
}
.u-text-primary--darken {
    color: #1a3916;
}
.u-bg-casino-nav {
    background-color: #505050 !important;
}
.u-bg-casino-nav-trans {
    background-color: rgba(80, 80, 80, 0.2) !important;
}
.u-text-casino-nav {
    color: #505050;
}
.u-text-casino-nav--lighten {
    color: #909090;
}
.u-text-casino-nav--darken {
    color: #101010;
}
.active {
    background: rgba(67, 149, 57, 0.5);
}
.highlight {
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #f8f9fa;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}
.jumbotron {
    background: 0 0;
    box-shadow: none;
}
@media screen and (min-width: 45em) {
    .jumbotron {
        background: #e9ecef;
        box-shadow: 1px 1px 1px 0 #bbb, 0 0 1px 0 #bbb;
    }
}
`;
