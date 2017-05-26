This is an example of use https://github.com/jeduan/cordova-plugin-facebook4 based on https://github.com/danyalzia/ionic2-facebook-play source code.

## How to do from scratch:

Follow IONIC 2 docs in https://ionicframework.com/docs/native/facebook/

run:
```bash
$ ionic cordova start MyApp blank
$ ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
$ npm install --save @ionic-native/facebook
```

*in app.modules.ts insert lines below:*
```javascript
import { Facebook } from '@ionic-native/facebook';

providers: [
...
	[Facebook]
]
```

Check the source code in pages:
home/home.ts login, logout


## How to use this template:

Update your environment(npm, ionic, cordova, etc)

download this example using git clone or download button

change package.json:

```javascript
"plugins": {
            "cordova-plugin-facebook4": {
                "APP_ID": "YOUR APP ID",
                "APP_NAME": "YOUR APP NAME"
            },
```

and plugins/fetch.json:

```javascript
"cordova-plugin-facebook4": {
        "source": {
            "type": "registry",
            "id": "cordova-plugin-facebook4"
        },
        "is_top_level": true,
        "variables": {
            "APP_ID": "123456789",
            "APP_NAME": "APP NAME"
        }
    },
```

run in project folder:
```bash
$ ionic cordova platform add <ios or android>
$ ionic cordova prepare
$ ionic cordova build <PLATFORM>
```

