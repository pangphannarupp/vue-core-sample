var core = {};
// var callback = null;
var callbackList = [];
var eventList = [];

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
core.onEventListener = function(eventType, status) {
    for(var i = 0; i < eventList.length; i++) {
        if(eventList[i].eventType == eventType) {
            if(eventType == "onNetworkChange") {
                eventList[i].function(status);
            } else {
                eventList[i].function();
            }
        }
    }
}

/**
* Add Event Listener
* used to add event at client
*/
core.addEventListener = function(eventType, func) {
    eventList.push({
        eventType: eventType,
        function: func
    });
}

/**
* Callback Listener
* used to listen response from Native
*/
core.callback = function(result, scf) {
    // if(callback != null) {
    //     callback(result);
    // }
    for(var i = 0; i < callbackList.length; i++) {
        if(callbackList[i].scf == scf) {
            callbackList[i].function(result);
        }
    }
}

core.generateCallback = function(param) {
    var functionName = 'scf' + Date.now();
    var callback = param.callback || null;
    callbackList.push({scf: functionName, function: callback});
    param['scf'] = functionName;
}

//Vungle Ads
//Initialize
core.vungleads = {}
core.vungleads.initialize = function(param) {
    core.generateCallback(param);
    param['type'] = 'initialize';
    execute('VUNGLE_ADS_PLUGIN', param);
}
//showInterstitial
core.vungleads.showInterstitial = function(param) {
    core.generateCallback(param);
    param['type'] = 'showInterstitial';
    execute('VUNGLE_ADS_PLUGIN', param);
}
//showRewardedVideo
core.vungleads.showRewarded = function(param) {
    core.generateCallback(param);
    param['type'] = 'showRewarded';
    execute('VUNGLE_ADS_PLUGIN', param);
}
//showBanner
core.vungleads.showBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'showBanner';
    execute('VUNGLE_ADS_PLUGIN', param);
}
//hideBanner
core.vungleads.hideBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'hideBanner';
    execute('VUNGLE_ADS_PLUGIN', param);
}

//Facebook Ads
//Initialize
core.facebookads = {}
core.facebookads.initialize = function(param) {
    core.generateCallback(param);
    param['type'] = 'initialize';
    execute('FACEBOOK_ADS_PLUGIN', param);
}
//showInterstitial
core.facebookads.showInterstitial = function(param) {
    core.generateCallback(param);
    param['type'] = 'showInterstitial';
    execute('FACEBOOK_ADS_PLUGIN', param);
}
//showRewardedVideo
core.facebookads.showRewarded = function(param) {
    core.generateCallback(param);
    param['type'] = 'showRewarded';
    execute('FACEBOOK_ADS_PLUGIN', param);
}
//showBanner
core.facebookads.showBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'showBanner';
    execute('FACEBOOK_ADS_PLUGIN', param);
}
//hideBanner
core.facebookads.hideBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'hideBanner';
    execute('FACEBOOK_ADS_PLUGIN', param);
}

//Admob Ads
//Initialize
core.admob = {}
core.admob.initialize = function(param) {
    core.generateCallback(param);
    param['type'] = 'initialize';
    execute('ADMOB_PLUGIN', param);
}
//showInterstitial
core.admob.showInterstitial = function(param) {
    core.generateCallback(param);
    param['type'] = 'showInterstitial';
    execute('ADMOB_PLUGIN', param);
}
//showRewardedVideo
core.admob.showRewarded = function(param) {
    core.generateCallback(param);
    param['type'] = 'showRewarded';
    execute('ADMOB_PLUGIN', param);
}
//showBanner
core.admob.showBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'showBanner';
    execute('ADMOB_PLUGIN', param);
}
//hideBanner
core.admob.hideBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'hideBanner';
    execute('ADMOB_PLUGIN', param);
}

//IronSource Ads
//Initialize
core.ironsourceads = {}
core.ironsourceads.initialize = function(param) {
    core.generateCallback(param);
    param['type'] = 'initialize';
    execute('IRON_SOURCE_ADS_PLUGIN', param);
}
//loadInterstitial
core.ironsourceads.loadInterstitial = function(param) {
    core.generateCallback(param);
    param['type'] = 'loadInterstitial';
    execute('IRON_SOURCE_ADS_PLUGIN', param);
}
//showInterstitial
core.ironsourceads.showInterstitial = function(param) {
    core.generateCallback(param);
    param['type'] = 'showInterstitial';
    execute('IRON_SOURCE_ADS_PLUGIN', param);
}
//loadRewardedVideo
core.ironsourceads.loadRewardedVideo = function(param) {
    core.generateCallback(param);
    param['type'] = 'loadRewardedVideo';
    execute('IRON_SOURCE_ADS_PLUGIN', param);
}
//showRewardedVideo
core.ironsourceads.showRewardedVideo = function(param) {
    core.generateCallback(param);
    param['type'] = 'showInterstitial';
    execute('IRON_SOURCE_ADS_PLUGIN', param);
}
//showBanner
core.ironsourceads.showBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'showBanner';
    execute('IRON_SOURCE_ADS_PLUGIN', param);
}
//hideBanner
core.ironsourceads.hideBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'hideBanner';
    execute('IRON_SOURCE_ADS_PLUGIN', param);
}

//Unity Ads
//Initialize
core.unityads = {}
core.unityads.initialize = function(param) {
    core.generateCallback(param);
    param['type'] = 'initialize';
    execute('UNITY_ADS_PLUGIN', param);
}
//showInterstitial
core.unityads.showInterstitial = function(param) {
    core.generateCallback(param);
    param['type'] = 'showInterstitial';
    execute('UNITY_ADS_PLUGIN', param);
}
//showRewardedVideo
core.unityads.showRewardedVideo = function(param) {
    core.generateCallback(param);
    param['type'] = 'showRewardedVideo';
    execute('UNITY_ADS_PLUGIN', param);
}
//showBanner
core.unityads.showBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'showBanner';
    execute('UNITY_ADS_PLUGIN', param);
}
//hideBanner
core.unityads.hideBanner = function(param) {
    core.generateCallback(param);
    param['type'] = 'hideBanner';
    execute('UNITY_ADS_PLUGIN', param);
}

//APPLICATION_PLUGIN
core.appInfo = function(param) {
    core.generateCallback(param);
    param['type'] = 'app_info';
    execute('APPLICATION_PLUGIN', param);
}

core.exitApp = function() {
    var param = {};
    core.generateCallback(param);
    param['type'] = 'exit';
    param['status'] = 0;
    execute('APPLICATION_PLUGIN', param);
}

//BIOMETRIC_PLUGIN
core.biometricAuthentication = function(param) {
    core.generateCallback(param);
    execute('BIOMETRIC_PLUGIN', param);
}

//DATE_PICKER_PLUGIN
core.showDatePicker = function(param) {
    core.generateCallback(param);
    execute('DATE_PICKER_PLUGIN', param);
}

//EXTERNAL_BROWSER_PLUGIN
core.externalBrowser = function(param) {
    execute('EXTERNAL_BROWSER_PLUGIN', param);
}

core.dialog = function(param) {
    core.generateCallback(param);
    execute('DIALOG_PLUGIN', param);
}

core.showToast = function(param) {
    core.generateCallback(param);
    execute('TOAST_MESSAGE_PLUGIN', param);
}

core.showCamera = function(param) {
    core.generateCallback(param);
    execute('CAMERA_PLUGIN', param);
}

core.speechToText = function(param) {
    core.generateCallback(param);
    execute('SPEECH_TO_TEXT_PLUGIN', param);
}

core.scanQRCode = function(param) {
    core.generateCallback(param);
    param['is_custom_ui'] = false;
    param['type'] = 'scan';
    execute('QR_CODE_PLUGIN', param);
}

core.browseQRCode = function(param) {
    core.generateCallback(param);
    param['type'] = 'browse';
    execute('QR_CODE_PLUGIN', param);
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
