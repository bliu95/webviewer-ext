# Thunkable Web Viewer Extensions

Send a message between your Thunkable app and your website in a Web Viewer.

## Examples

### Basic message passing
Project: https://x.thunkable.com/copy/5b28688450b735c49fd0dcd9e03db8ba

Website code: https://github.com/thunkable/webviewer-extension/blob/master/examples/simple.html

### Simple graph
Project: https://x.thunkable.com/copy/25f2795fa24771425ca0408f3fa039c3

Website code: https://github.com/thunkable/webviewer-extension/blob/master/examples/graph.html

## Setup

In the <head> tag of your website, include the script tag below

```
<script src="https://thunkable.github.io/webviewer-extension/thunkableWebviewerExtension.js" type="text/javascript"></script>
```
  
## Send a message from Thunkable to your website

Use these blocks to send a message to your website
![Send message blocks](https://thunkable.github.io/digital-asset/webviewer-extension/sendMessage.png)

On your website, receive the message using the code below:
```
// when we get a message from the app, display it on the page
ThunkableWebviewerExtension.receiveMessage(function(message) {
  // Do something with your message
  alert(message)
});
```


## Send a message from your website to Thunkable

Use these blocks to receive a message from your website
![Receive message blocks](https://thunkable.github.io/digital-asset/webviewer-extension/receiveMessage.png)

On your website, send a message using the code below:
```
ThunkableWebviewerExtension.postMessage('hello world');
```

## Transmitting large amounts of information back and forth

Only strings and JSONs are able to be transferred back and forth between Thunkable blocks and code.

To send a massive amount of information from Thunkable to code, it is recommended to create an object, turn it into a JSON, and then pass that in as the message.

There is an example below. While the data can be structured in multiple ways, it is recommended to have a key that dictates what function is called in the code. In this example, I am using "type". 

<img width="819" alt="Screenshot 2024-04-23 at 5 00 58 PM" src="https://github.com/bliu95/webviewer-ext/assets/113050722/3643154b-3d77-49e1-ac26-5eab2554460d">

In the code, to access the data, first parse the message. Then any of the values passed through can be accessed by msgFromApp.NAMEOFKEY

<img width="500" alt="Screenshot 2024-04-23 at 5 03 27 PM" src="https://github.com/bliu95/webviewer-ext/assets/113050722/3d95162c-4147-47cb-80d8-27490fb1de75">

## Running a function on screen start/open

The web viewer runs the code after the screen opens in Thunkable, so any functions won't work if it require external information. The best way to have the web viewer run a function or some code when it is first available is by using the following combinations. 

By having the following code in the script, once the web viewer starts and starts executing all the code, it will send an message to Thunkable.

<img width="440" alt="Screenshot 2024-04-23 at 5 22 13 PM" src="https://github.com/bliu95/webviewer-ext/assets/113050722/c013ec38-3c37-44a8-afe1-adf3db15b3c7">

In Thunkable, you can then capture exactly when the message is sent. This will give you an indication of when the web viewer is ready to operate.

<img width="812" alt="Screenshot 2024-04-23 at 5 25 11 PM" src="https://github.com/bliu95/webviewer-ext/assets/113050722/6abe2742-e5b2-480b-970a-9de81e8e548a">


