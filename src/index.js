/* eslint-disable */
var path = require( "path" );
var electron = require( "electron" );
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on( "window-all-closed", function() {
  if ( process.platform !== "darwin" ) {
    app.quit();
  }
} );

app.on( "ready", function() {
  const indexPath = path.join( __dirname, "index.html" );

  mainWindow = new BrowserWindow( { height: 768, width: 1024 } );
  mainWindow.loadURL( "file://" + indexPath );
  mainWindow.openDevTools();
  mainWindow.on( "closed", function() {
    mainWindow = null;
  } );
} );
/* eslint-enable */
