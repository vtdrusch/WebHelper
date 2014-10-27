/**
 * $Id: aetn.videoplayer.js 1765 2013-03-04 13:18:27Z npatel $
 * aetn.videoplayer.js
 * Global javascript for instantiating the A&E Network PDK Player
 *
 */

/*
 * Copied from http://www.aetv.com/js/browserdetect.js
 * 
 */
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an_unknown_OS";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {   string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {       // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {       // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
               string: navigator.userAgent,
               subString: "iPhone",
               identity: "iPhone_iPod"
            },
        {
               string: navigator.userAgent,
               subString: "iPad",
               identity: "iPad"
            },
        {
               string: navigator.userAgent,
               subString: "Android",
               identity: "Android"
            },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
BrowserDetect.init();

if (!aetn) {
    // init aetn namespace
    var aetn = {};
}

aetn.videoplayer = function() {

    /** Use for versioning increment on updates to bust cache* */
    var ver = "1_1_11";
    var pub = {};


    /**
     * PDKVideoPlayer - create a PDKVideoPlayer
     *
     * @param {string}
     *            playerDiv - the div where player is created, the same value
     *            would be used as this player's scope value.
     * @param {string}
     *            pdkBaseUrl - pdk kit installation path (access path)
     *
     * @param {object}
     *            playerSettings - settings to override player display and
     *            function { autoplay : 'false', overlayImageURL:
     *            '../images/icon_overlay_history.gif', layoutUrl:
     *            "../../data/AETN_basic_meta_glass.xml"; releaseUrl: '',
     *            htmlReleaseUrl: //this is optional, if htmlReleaseUrl exists,
     *            html5 player would use this url adobePass: {ae: aeSwfUrl} //ae
     *            parameter should be
     *            "https://entitlement.auth-staging.adobe.com/entitlement/AccessEnabler.swf"
     *            //or https://entitlement.auth.adobe.com ... }
     * @param {object}
     *            adAnalyticConfigs - ad and analytic configuration settings {
     *            shareConfig:
     *            {emailService:'test',embedCode:'http://hft.history.com/cypress/share/embed.txt'},
     *            freewheel: {networkId:'171213',
     *            siteSectionId:'test.hist.video',
     *            siteSectionNetworkId:'171212',
     *            serverUrl:'http://29ccc.v.fwmrm.net/ad/g/1',
     *            playerProfile:'171212:AETN_HTML5_test_v2',
     *            videoAssetNetworkId:'171212'}, comscore: {c2:'3005002',
     *            c4:'6357323'}, omniture: {brandPrefix:'HIS',
     *            enableTrackHeartbeat:'true'}, acudeo: {progId:'4be439734f222',
     *            site:'test.hist.shows',zone:'topguns',s1:'topguns',s2:'group',sid:'History_Top_Guns_101_Military_Rifles_LF',form:'long'},
     *            html5Omniture: {brandPrefix:'HIS',
     *            enableTrackHeartbeat:'true'},
     *            nielsen:{clientid:'us-901285',vcid:'vc,c04'} }
     * @params {array} companions -- arrays of div element(s) where companion ad
     *         is playing. div id, width, heights, settings (parameter for
     *         freewheel ad) hideAfterVideoAdEnd: hide companion ad box when
     *         video finish playing, default is false -- optional
     *         [{adId:'ad-box', width: '300', height: '250',
     *         hideAfterVideoAdEnd: 'true',
     *         settings:'ptgt=s&envp=g_js&slau=300x250&w=300&h=250&cd=300,250|300,600'}]
     * @params {object} callbacks -- callbacks to handle non-flash error, and
     *         wrong flash version error {nonFlashHandler: nonFlashErrorDisplay,
     *         badFlashVersionHandler: badFlashVersionErrorDisplay}
     * @params {boolean} secondaryPlayer //this parameter is optional, only add
     *         "true" when this player is secondary player
     */
    function PDKVideoPlayer(inPlayerDiv, inPdkBaseURL, inPlayerSettings, inAdAnalyticConfigs, inCompanions, inCallbacks) {
        
        var self = this;
        var scopes = [inPlayerDiv];
        var companionAdElements = (inCompanions) ? inCompanions : null;
        var playerSettings = inPlayerSettings;
        var adAnalyticConfigs = inAdAnalyticConfigs;
        var playerDiv = inPlayerDiv;
        var pdkBaseURL = inPdkBaseURL;
        var companionOn = false;
        var companionBanners = {
            // '728x90' : {id: 'top-leaderboard', settings :
            // 'ptgt=s&envp=g_js&slau=728x90&w=728&h=90'},
            '300x250' : {
                id : 'ad-box',
                settings : 'ptgt=s&envp=g_js&slau=300x250&w=300&h=250&cd=300,250|300,600'
            }
        };


        //// Default Params
        var freewheelParams = {
                flash_live: {
                    networkId: 171213,
                    playerProfile: "171213:AETN_flash_live",
                    serverUrl: "http://29ccd.v.fwmrm.net/ad/p",
                    siteSectionNetworkId: 171213,
                    videoAssetNetworkId: 171213,
                    callback: 'fwCallback',
                    keyValues: encodeURIComponent('vindico_dv_type='+BrowserDetect.OS) 
                },
                flash_test: {
                    networkId: 171212,
                    playerProfile: "171212:AETN_flash_test",
                    serverUrl: "http://29ccc.v.fwmrm.net/ad/p",
                    siteSectionNetworkId: 171212,
                    videoAssetNetworkId: 171212,
                    callback: 'fwCallback',
                    keyValues: encodeURIComponent('vindico_dv_type='+BrowserDetect.OS)
                },
                html5_live : {
                    networkId: 171213,
                    playerProfile: "171213:AETN_html5_live",
                    serverUrl: "http://29ccd.v.fwmrm.net/ad/g",
                    siteSectionNetworkId: 171213,
                    videoAssetNetworkId: 171213,
                    callback: 'fwCallback',
                    keyValues: encodeURIComponent('vindico_dv_type='+BrowserDetect.OS)
                },
                html5_test :{
                    networkId: 171212,
                    playerProfile: "171212:AETN_html5_test",
                    serverUrl: "http://29ccc.v.fwmrm.net/ad/g",
                    siteSectionNetworkId: 171212,
                    videoAssetNetworkId: 171212,
                    callback: 'fwCallback',
                    keyValues: encodeURIComponent('vindico_dv_type='+BrowserDetect.OS)
                }
        };

        var nielsenParams = {
            censuscategory : "seriesNameGlobal",
            subcategory : "season",
            title       : "title"
        };

		var convivaParams = {
            viewerId : "",
            serviceUrl : "http://livepass.conviva.com",
            cdnName : "AKAMAI",
            deviceType : "PC",
            playerName : "PDK Flash 5.1.3",
			customerId : "c3.TP-AE", // dev value: "c3.AETN"
            metadataKeys : "network,thePlatformId,programID,isLongForm,title,episode,mrssCategory,availableDate,premierDate,season,isBehindWall,duration",
            "playerTag.syndicator" : "Synacor",
            "playerTag.streamProtocol" : "hds",
            "playerTag.playParameters" : "mbr=true&switch=hds&assetTypes=medium_video_s3&manifest=true",
            "playerTag.player" : "PDK",
            "playerTag.playerVersion" : "1.0.1",
            "playerTag.accessType" : "Free",
            "playerTag.mvpd" : "" //i.e. "Comcast"

        };
        
        var adobePassParams = {
                'assetTypes': "medium_video_s3",
                'mbr': "true",
                'metafile': "false",
                'switch': "hds",
                'aetnPass' : 'aetn.video.adobePass'                  
        };
        
        var html5UrlParams = {
                'assetTypes': "medium_video_s3",
                'mbr': "true",
                'metafile': "false",
                'switch': "hls"         
        };

        var defaultOmnitureParams = "|brandPrefix=HIS|enableTrackHeartbeat=false";

        var callbacks = {
            nonFlashHandler : false,
            badFlashVersionHandler : false
        };
        jQuery.extend(callbacks, inCallbacks);


        //// Methods
        function initVideoPlayer() {
            var adTest = false;
            // check if the page is nonFlash, only initialize PDK player if the
            // page is not non-Flash
            if (aetn.videoplayer.runtime() == 'non-Flash') {
                if (callbacks.nonFlashHandler)
                    callbacks.nonFlashHandler();
                return;
            } else if (aetn.videoplayer.runtime() == 'bad-Flash') {
                if (callbacks.badFlashVersionHandler)
                    callbacks.badFlashVersionHandler();
                return;
            }

            /*******************************************************************
             * FLASH player specific settings
             ******************************************************************/
            // instance of new player object
            var player = new Player(inPlayerDiv);
            player.runtime = aetn.videoplayer.runtime();

            // player flash settings
            player.fp.bgcolor = "0x000000";
            player.fp.wmode = "opaque";
            player.logLevel = (document.location.toString().indexOf("debug=true") > -1) ?
                "debug" : "error";
            
            if (document.location.toString().indexOf("test=on") > -1){
                adTest = true;
            }
            player.allowFullScreen = "true";
            player.allowScriptAccess = "always";

            // color selections for the ui/controls/etc
            player.backgroundColor = "0x131313";
            player.controlBackgroundColor = "0x131313";
            player.controlColor = "0xBEBEBE";
            player.controlFrameColor = "0x545759";
            player.controlHoverColor = "0xFF0000";
            player.controlSelectedColor = "0xFFFFFF";
            player.frameColor = "0x545759";
            player.loadProgressColor = "0x444444";
            player.pageBackgroundColor = "0x131313";
            player.playProgressColor = "0xFF0000";
            player.scrubberColor = "0xBEBEBE";
            player.scrubberFrameColor = "0x444444";
            player.scrubTrackColor = "0xBEBEBE";
            player.textBackgroundColor = "0x383838";
            player.textColor = "0xBEBEBE";
            player.previewImageAssetType = "Video Still";

            // custom player settings
            player.autoPlay = "false";
            //player.scopes = scopes;

            player.layoutUrl = ((pdkBaseURL.charAt(pdkBaseURL.length - 1) != "/") ?
                    pdkBaseURL + "/" : pdkBaseURL)
                    + "../data/AETN_basic_meta_glass.xml?x=asdf";

            // ////////////////////////////////
            // /// authentication plugins /////
            // ////////////////////////////////
            player.pluginAkamaiHD = "type=auth|priority=0|URL=" + pdkBaseURL
                    + "/swf/akamaiHD.swf?v=" + ver + "|hosts=hdaks3.aetndigital.com";


            player.pluginAETNPersistentOverlay = "type=auth|priority=2|URL=" + pdkBaseURL
            + "/swf/aetn/AETNPersistentOverlay.swf?v=" + ver
            + formatParams(playerSettings.persistentOverlay);
            //+ "|defaultimage=http://hft.history.com/static/jerry/po/lt_overlay_3.png|bottom=7.5|right=7.86";

            if (playerSettings.adobePass_use_old){
                player.pluginAETNPass = "jkvar=HelloWorld|type=url|priority=1|URL=" + pdkBaseURL
                + "/swf/aetn/aetnPass.swf?v=" + ver
                //+ "|aetnPass=aetn.video.adobePass"
                + mergeParams(adobePassParams, playerSettings.adobePass)
            }else {
                player.pluginAETNPass = "jkvar=HelloWorld|type=url|priority=1|URL=" + pdkBaseURL
                + "/swf/aetn/AETNPass2.swf?v=" + ver
                //+ "/swf/aetn/aetnPass2_pdk4.swf?v=" + ver
			    //+ "|aetnPass=aetn.video.adobePass"
                + mergeParams(adobePassParams, playerSettings.adobePass)
                ;
            }


            // ////////////////////////////////
            // ///////// ad plugins ///////////
            // ////////////////////////////////
            player.pluginFreewheel = "type=ads|priority=10|"
                    // +
                    // "url=http://adm.fwmrm.net/p/aetn_live/ThePlatformPDKPlugin.swf|"
                    + "url="
                    + pdkBaseURL
                    + "/swf/freewheel.swf?v=" + ver
                    + "|adManagerUrl=http://adm.fwmrm.net/p/aetn_live/AdManager.swf|"
                    + "enablePrerollsAndPostrolls=false|"
                    + "preloadSlots=false|"
                    + "customIdField=thePlatformID"
                    + (adTest ? mergeParams(adAnalyticConfigs.freewheelFlash,
                            freewheelParams.flash_test) : mergeParams(
                            freewheelParams.flash_live,
                            adAnalyticConfigs.freewheelFlash));

            // ////////////////////////////////
            // ////// tracking plugins ////////
            // ////////////////////////////////
            player.pluginComScore = "type=tracking|priority=12|URL="
                    + pdkBaseURL + "/swf/comScore.swf?v=" + ver + "|trackEachChapter=true"
                    + formatParams(adAnalyticConfigs.comscore);
            player.pluginNielsen = "type=tracking|priority=14|URL="
                    + pdkBaseURL + "/swf/ggtp397.swf?v=" + ver + ""
                    + mergeParams(nielsenParams, adAnalyticConfigs.nielsen);
            // player.pluginAETNOmniture = "type=tracking|priority=16|URL=" +
            // pdkBaseURL + "/swf/AETNOmniture.swf?v=" + ver + "" +
            // formatParams(adAnalyticConfigs.omniture, defaultOmnitureParams);

            player.pluginAETNOmniture = "type=tracking|priority=16|URL="
                    + pdkBaseURL
                    + "/swf/aetn/AETNOmniture.swf?v=" + ver + "|host=metrics.aetn.com|enableTrackHeartbeat=false"
                    + formatParams(adAnalyticConfigs.omniture);


			player.pluginConviva="type=|priority=17|"
                + "URL=http://livepassdl.conviva.com/thePlatform/ConvivaThePlatformPlugin_5_1_2.swf"
			    + mergeParams(convivaParams, adAnalyticConfigs.conviva);
            
            
            // ////////////////////////////////
            // ////// custom UI plugins ///////
            // ////////////////////////////////
            player.pluginAETNMCustomBasic = "type=overlay|priority=20|URL="
                    + pdkBaseURL
                    + "/swf/aetn/AETNCustomBasic.swf?v=" + ver + "|mbr=true|switch=m3u|assetType=Flash_Video";
            player.pluginAETNMButtonShare = "type=overlay|priority=22|URL="
                    + pdkBaseURL + "/swf/aetn/AETNButtonShare.swf?v=" + ver + "";
            player.pluginAETNShareScreen = "type=overlay|priority=24|URL="
                    + pdkBaseURL + "/swf/aetn/AETNShareScreen.swf?v=" + ver + ""
                    + formatParams(playerSettings.shareConfig);

            
            if (playerSettings.hotmoments) {
                player.pluginAETVHotMoments = "type=" + playerSettings.hotmoments.type
                    + "|priority=" + playerSettings.hotmoments.priority
                    + "|URL=" + playerSettings.hotmoments.URL
                    + (playerSettings.hotmoments.callback ? ("|callback=" + playerSettings.hotmoments.callback) : "")
            }
            
            /*******************************************************************
             * HTML5 player specific settings
             ******************************************************************/
            player.overrideNativeControls = "true";
            
            if (!playerSettings.showPDKControlsInHTML5){
            	player.pluginHtml5AETNControls = "type=overlay|URL=" + pdkBaseURL
            	+ "/js/plugins/aetn/AETNControlsPlugIn.js?v=" + ver + "";
            }
            
            player.pluginHtml5UrlSigning = "type=rewrite|URL=" + pdkBaseURL
                    + "/js/plugins/aetn/AETNUrlSigningPlugIn.js?v=" + ver + "|priority=1";
            
            if (playerSettings.adobePass && playerSettings.adobePass.policy){
                html5UrlParams.policy = playerSettings.adobePass.policy;                
            }
            
            player.pluginHtml5LinkUrlMod = "type=player|URL=" + pdkBaseURL
                    + "/js/plugins/aetn/AETNLinkUrlModPlugIn.js?v=" + ver + "|priority=2"
                    + mergeParams(html5UrlParams, playerSettings.html5UrlParams);
                            
            player.pluginHtml5ShareCard = "type=overlay|URL=" + pdkBaseURL
                    + "/js/plugins/aetn/AETNShareCardPlugIn.js?v=" + ver + "";
            player.pluginHtml5ErrorCard = "type=error|videoLandingPageUrl=http://www.history.com|URL="
                    + pdkBaseURL + "/js/plugins/aetn/AETNErrorCardPlugIn.js?v=" + ver + "";
            player.pluginHtml5ComScore = "type=tracking|URL=" + pdkBaseURL
                    + "/js/plugins/comScore.js?v=" + ver + "|trackEachChapter=true"
                    + formatParams(adAnalyticConfigs.comscore);

            // Omniture plugin: requires s_visitorNamespace var to be globally
            // defined.
            player.pluginHtml5Omniture = "type=tracking|URL="
                    + pdkBaseURL
                    + "/js/plugins/aetn/AETNOmnitureMediaPlugIn.js?v=" + ver + "|host=metrics.aetn.com"
                    + formatParams(adAnalyticConfigs.omniture,
                            defaultOmnitureParams);

            player.pluginHtml5Freewheel = "type=adcomponent|"
                //+ "URL=http://adm.fwmrm.net/p/aetn_live/ThePlatformPDKPlugin.js"
                + "URL=" + pdkBaseURL + "/js/plugins/freewheel.js|"
                + "|adManagerUrl=http://adm.fwmrm.net/p/aetn_live/AdManager.js"
                + "|customIdField=thePlatformID"
                + (adTest? mergeParams(adAnalyticConfigs.freewheel, freewheelParams.html5_test) :
                    mergeParams(freewheelParams.html5_live, adAnalyticConfigs.freewheel) );

            // apply custom setting
            if (playerSettings) {
                jQuery.extend(true, player, playerSettings);
            }

            // override releaseURL if runtime is HTML5 and the url is different
            if (player.runtime == 'HTML5' && player.html5ReleaseURL) {
                player.releaseURL = player.html5ReleaseURL;
                player.showControls = playerSettings.showPDKControlsInHTML5? true : false; 
            }

            player.bind(inPlayerDiv);            
            //tpController.setVolume(0);
        }

        function formatParams(data, defaultData) {
            var params = '';
            if (data) {
                jQuery.each(data, function(k, v) {
                    params += ("|" + k + "=" + v)
                });
            } else if (defaultData)
                params = defaultData;
            return params;
        }

        function mergeParams(defaultData, customData) {
            var merged = {};
            jQuery.extend(merged, defaultData, customData);
            var params = '';
            jQuery.each(merged, function(k, v) {
                params += ("|" + k + "=" + v)
            });
            return params;
        }

        function hideShowCompanionWrapper(e) {
            for ( var i = 0; i < companionAdElements.length; i++) {
                if (companionAdElements[i].width == '300'
                        && companionAdElements[i].height == '250') {
                    if (e.data.baseClip.isAd === true) {
                        if (companionAdElements[i].swapElement) {
                            companionAdElements[i].swapElement.children(':not(#' + companionAdElements[i].adId + ')')
                                    .hide();
                        }
                        jQuery('#' + companionAdElements[i].adId).show();
                    } else {
                        // swap back what was there before companion ad played.
                        if (companionAdElements[i].swapElement) {
                            companionAdElements[i].swapElement.children()
                                    .show();
                        }
                        jQuery('#' + companionAdElements[i].adId).hide();
                    }
                    break;
                }
            }
        }

        function removeCompanionAd(e) {
            if (!companionOn && aetn.videoplayer.runtime() == 'Flash')
                return;

            for ( var i = 0; i < companionAdElements.length; i++) {
                if (companionAdElements[i].width == '300'
                        && companionAdElements[i].height == '250') {
                    // swap back what was there before companion ad played.
                    if (companionAdElements[i].swapElement) {
                        companionAdElements[i].swapElement.children().show();
                    }
                    jQuery('#' + companionAdElements[i].adId).hide();
                    companionOn = false;
                    break;
                }
            }
        }
        
        function isExists() {
            var p = jQuery(document).find('#' + playerDiv),
                exists = false;
            
            if (p.length > 0){
                exists = true;
            }
            
            return exists;
        }

        this.bindListener = function(eventName, methodName, scopes) {
            tpController.addEventListener(eventName, methodName, scopes);
        };
        
        this.unbindListener = function(eventName, methodName) {
            tpController.removeEventListener(eventName, methodName, '*');
        };

        this.playVideo = function(videoURLs, noPlayback, scopes) {
            var releaseURL = (aetn.videoplayer.runtime() == 'Flash') ? videoURLs.releaseURL
                    : ((videoURLs.html5ReleaseURL) ? videoURLs.html5ReleaseURL
                            : videoURLs.releaseURL);

            if (noPlayback) {
                tpController.loadReleaseURL(releaseURL, true, scopes);
            } else {
                tpController.setReleaseURL(releaseURL, true, scopes);
            }
        };

        this.pauseVideo = function(paused, scopes) {
            if (isExists()) {
                tpController.pause(paused, ["aeplayer"], true);
            }
        };
        
        this.displayAcudeoCompanionAd = function(banners) {
            if (!companionAdElements)
                return;

            for (i = 0; i < companionAdElements.length; i++) {
                var ad = companionAdElements[i];
                // find the right companion ad element for the banners
                for (j = 0; j < banners.length; j++) {
                    if (ad.width == banners[j].width
                            && ad.height == banners[j].height) {
                        // if need to swap existing element with companion ad,
                        // hide the other element first
                        if (ad.swapElement) {
                            ad.swapElement.children(':not(#' + ad.adId + ')')
                                    .hide();
                        }
                        if (ad.staticAdId) {
                            jQuery('#' + ad.staticAdId).hide();
                        }

                        if (!jQuery('#' + ad.adId).is(":visible"))
                            jQuery('#' + ad.adId).show();

                        tmDisplayBanner(banners, ad.adId, ad.width, ad.height);
                        companionOn = true;
                        if (ad.hideAfterVideoAdEnd == 'true')
                            tpController.addEventListener("OnMediaEnd", removeCompanionAd, scopes);
                        break;
                    }
                }
            }
        };

        // this function set up companion ad for freewheel video ad
        this.wrapCompanionMarkup = function(index) {
            var divId = companionAdElements[index].adId;
            var adDiv = jQuery('#' + companionAdElements[index].adId);
            if (adDiv.length != 1) {
                return;
            }
            if (jQuery("._fwph", adDiv).length > 0) {
                return;
            }

            jQuery('script', adDiv).remove();
            var spanId = divId + '_fw_ad';
            var adContainerId = "_fw_container_" + spanId;

            var adContainer = jQuery("<span>").attr("id", adContainerId);

            adDiv.wrapInner(adContainer);
            adContainer = jQuery("#" + "_fw_container_" + spanId, adDiv);

            var fwSpan = jQuery('<span>').attr('id', spanId).addClass('_fwph');
            fwSpan = adContainer.wrap(fwSpan).parent();

            var form = jQuery('<form>').attr('id', "_fw_form_" + spanId).css(
                    "display", "none");
            form.append(jQuery("<input>").attr({
                'type' : 'hidden',
                'name' : "_fw_input_" + spanId,
                'id' : "_fw_input_" + spanId,
                value : companionAdElements[index].settings
            }));
            fwSpan.append(form);

            if (companionAdElements[index].hideAfterVideoAdEnd == 'true') {
                tpController.addEventListener("OnMediaStart", hideShowCompanionWrapper, scopes);
            }
        };
        
        this.start = function() {
            initVideoPlayer();
        };

        if (aetn.videoplayer.runtime() == 'HTML5' || adAnalyticConfigs.adSwitch == 'FW') {
            var playerHeight = jQuery("#" + inPlayerDiv).height(), 
                playerWidth = jQuery("#" + inPlayerDiv).width();
            
            jQuery.each(companionAdElements, function(index, value) {
                if (value.settings)
                    self.wrapCompanionMarkup(index);
            });
            
            jQuery("<style type='text/css'> #fw-pdk-plugin-video-display-base{height: "
                + playerHeight + "px; width: " + playerWidth + "px} </style>").appendTo("head");
        }
    }


    //// Public Methods
    pub.init = function(playerDiv, pdkBaseURL, playerSettings, adAnalyticConfigs, companions, inCallbacks) {
        var player = new PDKVideoPlayer(playerDiv, pdkBaseURL, playerSettings, 
            adAnalyticConfigs, companions, inCallbacks);
        return player;
    };

    //when pass noPlayback=true to this function, player will load the releaseURL, 
    //but no playback until user click the play button
    //noPlayback is optional, default is false.
    pub.playVideo = function(videoURLs, noPlayback, player) {
        player.playVideo(videoURLs, noPlayback, scopes);
    };

    pub.pauseVideo = function(paused, player) {
        player.pauseVideo(paused, scopes);
    };

    pub.wrapCompanionMarkup = function(index, player) {
        player.wrapCompanionMarkup(index);
    };

    pub.bindListener = function(eventName, methodName, scopes) {
        player.bindListener(eventName, methodName, scopes);
    };
    
    pub.unbindListener = function(eventName, methodName, scopes) {
        player.unbindListener(eventName, methodName, scopes);
    };

    pub.runtime = function() {
        // navigator.userAgent navigator.platform appVersion
        // only use HTML5 when it is iphone or ipad
        var value = navigator.userAgent.toLowerCase();
        if (value.indexOf("iphone") > -1 || value.indexOf("ipad") > -1 || value.indexOf("android") > -1)
            return "HTML5";
        else {
            if (swfobject.hasFlashPlayerVersion("10.1.0")) {
                if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
                    var playerVersion = swfobject.getFlashPlayerVersion();
                    
                    if (playerVersion.major == '11' && playerVersion.minor == '3') {
                        return "bad-Flash";
                    }
                }
                return "Flash";
            } else {
                return "non-Flash";
            }
        }
    };

    return pub;
}();
