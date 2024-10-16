// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://portal.pantheondevelopment.ae/backend/public/', // This represents the base URL for running our frontend project. 
  // apiBaseUrl: 'http://127.0.0.1:8000/',
  apiUrlPrefix: 'api/v1/', // Change only the domain part, keeping "/api" intact
  encryptionKey: 'mCWHgB4ME2fx2IOUA6DOpCAvtJGIR9IotbJHQ7UeXv4'
};