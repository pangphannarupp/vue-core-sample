var core = {};
var callback = null;

/**
* JavascriptInterface
* used to call function execute in Native Code
*/
var execute = function(key, param) {
    JavascriptInterface.execute(JSON.stringify({
        'key': key,
        'param': param
    }));
}

/**
* Event Listener
* used to listen response from Native
*/
core.callback = function(result) {
    if(callback != null) {
        callback(result);
    }
}

//APPLICATION_PLUGIN
core.appInfo = function(param) {
    callback = param['callback'] || null;
    execute('APPLICATION_PLUGIN', {
        type: 'app_info'
    });
}

core.exitApp = function() {
    execute('APPLICATION_PLUGIN', {
        type: 'exit',
        status: 0,
    });
}

//BIOMETRIC_PLUGIN
core.biometricAuthentication = function(param) {
    callback = param['callback'] || null;
    execute('BIOMETRIC_PLUGIN', param);
}

//DATE_PICKER_PLUGIN
core.showDatePicker = function(param) {
    callback = param['callback'] || null;
    execute('DATE_PICKER_PLUGIN', param);
}

//EXTERNAL_BROWSER_PLUGIN
core.externalBrowser = function(param) {
    execute('EXTERNAL_BROWSER_PLUGIN', param);
}

core.dialog = function(param) {
    callback = param['callback'] || null;
    execute('DIALOG_PLUGIN', param);
}

core.showToast = function(param) {
    callback = param['callback'] || null;
    execute('TOAST_MESSAGE_PLUGIN', param);
}

core.showCamera = function(param) {
    callback = param['callback'] || null;
    execute('CAMERA_PLUGIN', param);
}

core.speechToText = function(param) {
    callback = param['callback'] || null;
    execute('SPEECH_TO_TEXT_PLUGIN', param);
}

core.scanQRCode = function(param) {
    callback = param['callback'] || null;
    execute('QR_CODE_PLUGIN', {
        is_custom_ui: false,
        type: 'scan'
    });
}

core.browseQRCode = function(param) {
    callback = param['callback'] || null;
    execute('QR_CODE_PLUGIN', {
        type: 'browse'
    });
}

// Alert Result
core.alertDialog = function(message) {
    core.dialog({
        type: 'alert',
        text_title: 'Result',
        text_message: message,
        text_ok: 'OK',
    });
}
