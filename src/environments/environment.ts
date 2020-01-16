/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  collectionFirebase: {
    lesson: 'lesson',
    book: 'book',
    user: 'user',
    report: 'report',
  },
  firebase: {
    apiKey: 'AIzaSyB56QbLKjsU1hsyKxRDaKUKruFQF9lFrEY',
    authDomain: 'superbrainsvn.firebaseapp.com',
    databaseURL: 'https://superbrainsvn.firebaseio.com',
    projectId: 'superbrainsvn',
    storageBucket: 'superbrainsvn.appspot.com',
    messagingSenderId: '123494147327',
    appId: '1:123494147327:web:1390951fda5393dd2e98ca',
    measurementId: 'G-G86MLL9HYE'
  },
  config: {
    auth_key: 'AUTH',
    language_key: 'LANGUAGE'
  },
  baseHref: '/'
};
