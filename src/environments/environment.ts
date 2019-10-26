// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCOaIKDAyr4jt0UsXgsWgGNUvQMzoRKtLI",
    authDomain: "sobji-mart-b9c6a.firebaseapp.com",
    databaseURL: "https://sobji-mart-b9c6a.firebaseio.com",
    projectId: "sobji-mart-b9c6a",
    storageBucket: "sobji-mart-b9c6a.appspot.com",
    messagingSenderId: "919500123149",
    appId: "1:919500123149:web:1c8c0c719de38197b53944",
    measurementId: "G-YFD8NLDBMG"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
