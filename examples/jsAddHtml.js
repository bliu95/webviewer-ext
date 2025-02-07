<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://thunkable.github.io/webviewer-extension/thunkableWebviewerExtension.js" type="text/javascript"></script>
  </head>
  <body>
    <span id="text" style="background-color: transparent"></span>
  </body>

  <script type="text/javascript">
    // when we get a message from the app, display it on the page
    ThunkableWebviewerExtension.receiveMessage(function(message) {
      if(message.type === 'op-window-direct-response' || message.type === 'op-window-direct-request') {
        return;
      }

      try {
        const msgFromApp = JSON.parse(message);

        if(msgFromApp.type === 'setText') {
          document.getElementById("text").innerHTML = msgFromApp.text;
        }
      } catch (e) {
        console.error(e);
      }
    });
  </script>
</html>
