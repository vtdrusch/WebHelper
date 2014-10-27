/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    // aliases for commonly used Edge classes
    var Composition = Edge.Composition, Symbol = Edge.Symbol;

    //Edge symbol: 'stage'
    (function (symbolName) {
        
        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
            // This is the default destination for your clickouts. You can override this for individual clickouts though.
            sym.clickoutDestination = 'http://ad.doubleclick.net/ddm/clk/284669804;110039101;y';
            sym.destroyOnResize = [];
            sym.supervisorListeners = [];
        
            // Drop opacity on everything with a "transparent" class
            $('head').append('<style>.transparent{opacity:0!important;}</style>');
        
            // refer to this variable when you need to do stuff depending on if
            // we are a touch device or not
            sym.device = false;
            if (navigator.userAgent.match(/(iPhone|iPod)/i))
                sym.device = 'iPhone'
            if (navigator.userAgent.match(/iPad/i))
                sym.device = 'iPad'
            if (navigator.userAgent.match(/Android/i))
                sym.device = 'Android'
        
            // Default handler for scroll information from supervisor. You can override this from your
            // largeCenter, etc.. like this:
            // sym.getComposition().getStage().scrollHandler = function(e){...};
        
            sym.defaultScrollHandler = function (e) {
                if (sym.debug) {
                    console.log('Default scroll event');
                    console.dir(e);
                }
            };
            sym.scrollHandler = sym.defaultScrollHandler;
        
            // Debug. This lets you pass debug=true on the query string to enable debug mode on this symbol.
            // You can also pass debugServer=host, where host is the host to your weinre debug server, including
            // the port. So, debugServer=127.0.0.1:8080.
        
            // get the query string as an object
            function queryObj() {
                var result = {}, keyValuePairs = location.search.slice(1).split('&');
                keyValuePairs.forEach(function (keyValuePair) {
                    keyValuePair = keyValuePair.split('=');
                    result[keyValuePair[0]] = keyValuePair[1] || '';
                });
                return result;
            }
            sym.debug = queryObj()['debug'];
            var debugServer = queryObj()['debugServer'];
        
            // connect the weinre.
            if (debugServer) {
                yepnope({
                    load: 'http://' + debugServer + '/target/target-script-min.js#anonymous'
                });
            }
        
            // load edge commons and Say's supervisor (for beacons)
            yepnope([{
                load: "http://adcontent.saymedia.com/lyra_ads/EdgeCommons-0.7.1.js",
                callback: function () {
                    //     EC.setAdaptiveLayouts( [0,600,900], sym, "adaptiveContainer" );
                    var ecTimer = setInterval(function (e) {
                        if (EC) {
                            clearInterval(ecTimer);
                            EC.setAdaptiveLayouts( [0,760], sym, "adaptiveContainer" );
                        }
                    }, 50);
                }
            },{
                test: window.supervisor,
                load:"http://adcontent.saymedia.com/lyra/supervisor.js",
                complete: function () {
        
                    // Anything that wants to register a listener needs a
                    // registerSupervisorListener so behavior can be tailored
                    // to the symbol.
                    sym.supervisorListeners.forEach(function(item, index) {
                        item.registerSupervisorListener(window.supervisor);
                    });
        
                    window.supervisor.addEventListener("loader", "visiblechanged", function (e) {
                        sym.scrollHandler(e);
                    });
        
                    if (sym.debug) {
                        window.supervisor.dispatchEventOG = window.supervisor.dispatchEvent;
                        window.supervisor.dispatchEvent = function (type, event) {
                            window.supervisor.dispatchEventOG(type,event);
                        }
                    }
                }
            }]);
        
            sym.beforeSwitching = function () {
                for (var i in sym.destroyOnResize) {
                    try {
                        sym.destroyOnResize[i].destroy();
                    } catch(e) {
                        1;
                    }
                }
                sym.destroyOnResize = [];
                sym.scrollHandler = sym.defaultScrollHandler;
            };
        
            sym.afterSwitching = function () {
                // We now know what size we are, thanks to
                // sym.getComposition().getStage().currentLayout
                1;
            };
        
            // Lyra. Don't touch.
            sym.setContainerSize = function (h) {
                console.log(h);
                window.parent.postMessage({action:'setContainerSize',value:h}, '*');
            };
        
            // reposition the max containers
            window.addEventListener('resize', function () {
                $('.maxVert').each(function(idx, item){
                    $(item).css('top', ($(item).height()/2)*-1 + 'px');
                });
                $('.maxHor').each(function(idx, item){
                    $(item).css('left', ($(item).width()/2)*-1 + 'px');
                });
            }, false);
        
        });
        //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'layout400'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // insert code to be run when the symbol is created here
            //sym.$("center").css("margin-left", "-"+(sym.$("center").width()/2)+"px";
            sym.getComposition().getStage().setContainerSize(400);
            sym.getComposition().getStage().currentLayout = 'large';
        });
        //Edge binding end

    })("layout760");
   //Edge symbol end:'layout760'

    //=========================================================

    //Edge symbol: 'layout400_1'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // insert code to be run when the symbol is created here
            sym.getComposition().getStage().setContainerSize(400);
            sym.getComposition().getStage().currentLayout = 'small';
        });
        //Edge binding end

    })("layout0");
   //Edge symbol end:'layout0'

    //=========================================================

    //Edge symbol: 'mediumCenter'
    (function (symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${_cta_learnMore}", "mouseenter", function(sym, e) {
         
         
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('learnMoreBtn').play();
         
         
         
         // LONG WAY
         // This refers back tot the root of the edge camapign
         //var Composition = sym.getComposition();
         //var Stage = sym.getStage();
         //var devise = sym.devise();
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cta_learnMore}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('learnMoreBtn').playReverse();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play_largeVideo}", "mouseenter", function(sym, e) {
         
         
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('videoBtn').play();
         
         
         
         // LONG WAY
         // This refers back tot the root of the edge camapign
         //var Composition = sym.getComposition();
         //var Stage = sym.getStage();
         //var devise = sym.devise();
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play_largeVideo}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('videoBtn').playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.startAnimation = function(){
         	sym.play();
         }
         
         
         sym.getComposition().getStage().scrollHandler = function(e){
         	if (e.value == 1){
         		sym.startAnimation();
         	}
         }

      });
      //Edge binding end

      

    })("largeCenter");
   //Edge symbol end:'largeCenter'

    //=========================================================

    //Edge symbol: 'smallCenter'
    (function (symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${_cta_learnMoreCopy}", "mouseenter", function(sym, e) {
         
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('btnLearnMore').play();
         
         
         
         // LONG WAY
         // This refers back tot the root of the edge camapign
         //var Composition = sym.getComposition();
         //var Stage = sym.getStage();
         //var devise = sym.devise();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cta_learnMoreCopy}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('btnLearnMore').playReverse();

      });
      //Edge binding end

      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.startAnimation = function(){
         	sym.play();
         }
         
         
         sym.getComposition().getStage().scrollHandler = function(e){
         	if (e.value == 1){
         		sym.startAnimation();
         	}
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_smallVideo}", "mouseenter", function(sym, e) {
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('btnSmallVideo').play();
         
         
         
         // LONG WAY
         // This refers back tot the root of the edge camapign
         //var Composition = sym.getComposition();
         //var Stage = sym.getStage();
         //var devise = sym.devise();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_smallVideo}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         if (sym.getComposition().getStage().device){
         	return;
         }
         
         sym.getSymbol('btnSmallVideo').playReverse();
         
         

      });
      //Edge binding end

    })("smallCenter");
   //Edge symbol end:'smallCenter'

    //=========================================================

    //Edge symbol: 'Preloader'
    (function (symbolName) {

    })("Preloader");
   //Edge symbol end:'Preloader'

    //=========================================================

    //=========================================================

    //=========================================================

    //=========================================================

    //Edge symbol: 'videoHolder'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            var mySelector = sym.getVariable("symbolSelector"),
            myElem = sym.$(mySelector),
            isChrome = false,
            isMobile = false,
            isIOS = false,
            isAndroid = false,
            isTablet = false;

            var rectangle = sym.lookupSelector("Rectangle");
            $(rectangle).css("background", "transparent");

            if ((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
                isMobile = true;
                isIOS = true;
            }
            else if (navigator.userAgent.match(/iPad/i)) {
                isMobile = true;
                isTablet = true;
                isIOS = true;
            }
            else if (navigator.userAgent.match(/android/i)) {
                isMobile = true;
                isAndroid = true;
                if (!navigator.userAgent.match(/mobile/i)) {
                    isTablet = true;
                }
            }

            if (navigator.userAgent.match(/chrome/i)) {
                isChrome = true;
            }

            // Sane defaults
            sym.setVariable("displayControls", true);
            sym.setVariable("visibilityCutoff", 0.9);
            sym.setVariable("posterUrl", "");
            sym.setVariable("videoId", false); // Force generation

            sym.registerSupervisorListener = function () {
                window.supervisor.addEventListener("loader", "visiblechanged", function (e) {
                    if (e.value !== undefined && e.value < sym.getVariable("visibilityCutoff")) {
                        sym.stopVideo();
                    }
                });
            };

            if (window.supervisor) {
                sym.registerSupervisorListener();
            }
            else {
                // supervisor.js has not been loaded yet; let's push it
                // to a list to be loaded when it's ready.
                sym.getComposition().getStage().supervisorListeners.push(sym);
            }

            // Bookkeeping stuff -- don't edit these.
            sym.fired = [];
            sym.videoRep = 1;

            // build a video element
            // id = id for the video element. required
            //  sources = array of source objects (required), which look like this:
            //  {
            //      url: 'http://url.to.source',
            //      type: 'mp4'
            //  }

            sym.loadVideo = function (id, sources) {
                var el = sym.getSymbolElement();
                var displayControls = typeof (sym.getVariable("displayControls")) === undefined ?
                    true : sym.getVariable("displayControls");
                var id;

                if (!sym.getVariable("videoId")) {
                    var id = sym.getVariable("symbolSelector");
                    id = id.substring(1); // Remove leading hashmark
                    id = id + '-video';
                    sym.setVariable("videoId", id);
                }
                else {
                    var id = sym.getVariable("videoId");
                }

                if (displayControls) {
                    displayControls = 'controls="controls" ';
                }
                else {
                    displayControls = '';
                }

                if (sym.getVariable("prefersNativePlayer") !== undefined) {
                    var prefersNativePlayer = isMobile && !isTablet;
                }
                else {
                    var prefersNativePlayer = sym.getVariable("prefersNativePlayer");
                }

                var posterUrl = sym.getVariable("posterUrl") ? sym.getVariable("posterUrl") : '';

                var videoEl = '<video ' + displayControls + 'id="' + id +
                    '" style="position:absolute;width:100%;height:100%" ' +
                    (prefersNativePlayer ? '' : 'webkit-playsinline ') +
                    'preload="auto" poster="' + posterUrl + '">\n';
                var sourceTemplate = '  <source src="SOURCEURL" type="video/SOURCETYPE">';

                for (i = 0; i < sources.length; i++) {
                    var source = sources[i];
                    var sourceUrl = source.url + "?" + Math.floor(Math.random() * (new Date().getTime()));
                    videoEl += sourceTemplate.replace('SOURCEURL', sourceUrl).replace('SOURCETYPE', source.type);
                }
                videoEl += '</video>\n';
                el.html(videoEl);

                var videoEl = sym.$('#' + id);

                // can't go fullscreen until metadata is loaded
                videoEl.bind('loadedmetadata', function (e) {
                    videoEl.get(0).metadataloaded = true;
                });
                // Dispatch an event to the document root when we start to play
                videoEl.bind('playing', function (e) {
                    $.event.trigger({
                        type: 'sayVideoPlaying',
                        videoSymbolSource: sym.getVariable("symbolSelector")
                    });
                });

                // Dispatch an event to the document root when we finish
                videoEl.bind('ended', function (e) {
                    $.event.trigger({
                        type: 'sayVideoEnded',
                        videoSymbolSource: sym.getVariable("symbolSelector")
                    });
                });

                // Dispatch an event to the document root when we pause,
                // manually or otherwise
                videoEl.bind('pause', function (e) {
                    $.event.trigger({
                        type: 'sayVideoPause',
                        videoSymbolSource: sym.getVariable("symbolSelector")
                    });
                });

                //if browser is chrome (on desktop) once video has ended, you cannot replay it w/o first reloading it
                //so adding conditional check
                //this will send the playhead back to the beginning
                if (isChrome) {
                    videoEl.bind('ended', function (e) {
                        videoEl.load();
                    });
                }

                sym.setVariable('videoEl', videoEl);

                var supervisorTimer = setInterval(function () {
                    if (window.supervisor) {
                        clearInterval(supervisorTimer);
                        window.supervisor.trackVideo(videoEl[0]);
                    }
                }, 100);
            };

            sym.reload = function () {
                sym.destroy();
                sym.getComposition().getStage().destroyOnResize.push(sym);
                sym.loadVideo(sym.getVariable("videoId"), sym.getVariable("videos"));
            };

            sym.destroy = function () {
                try {
                    if (window.supervisor) {
                        window.supervisor.untrackVideo(videoEl[0]);
                    }
                    var vidSelector = $('#'+sym.getVariable("videoId"));
                    // Rewrite all the src values to prevent connection pool leaks
                    // in Chrome
                    $('#'+sym.getVariable("videoId") + ' source').each(
                        function(i, tag) {
                            tag.src = "";
                        }
                    );
                    // Disengage all listeners
                    vidSelector.unbind();
                    vidSelector.remove();
                }
                catch (e) {
                    1; // No-op
                }
            };

            sym.stopVideo = function () {
                // Allows us to distinguish between calling stopVideo()
                // and clicking the controls or allowing the video to
                // finish
                $.event.trigger({
                    type: 'sayVideoStoppedInCode',
                    videoSymbolSource: sym.getVariable("symbolSelector")
                });
                var videoEl = $('#' + sym.getVariable("videoId"));
                if (videoEl && videoEl[0]) {
                    videoEl[0].pause();
                }
            };

            sym.playVideo = function () {
                var videoEl = $('#' + sym.getVariable("videoId"));
                if (videoEl && videoEl[0]) {
                    videoEl[0].play();
                }
            };

            // if this is an iPhone, it's going to put it's own play button there whether you want it or not
            if ((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
                $('.videoPlayButton').css('visibility', 'hidden');
                //display:none doesn't seem to work. WHY??
            }

            $(document).on("sayVideoPlaying", videoPlayingHandler);
            $(document).on("sayVideoPause", videoPauseHandler);
            $(document).on("sayVideoEnded", videoEndedHandler);
            $(document).on("sayResize", resizeHandler);
            $(document).on("sayCtaClicked", ctaClickedHandler);

            function eventReferencesThisSymbol(e) {
                return mySelector === e.videoSymbolSource;
            }

            function videoPlayingHandler(e) {
                if (!eventReferencesThisSymbol(e)) {
                    sym.stopVideo();
                }
            };

            function videoPauseHandler(e) {
                1;
            };

            function videoEndedHandler(e) {
                1;
            };

            function resizeHandler(e) {
                sym.stopVideo();
            };

            function ctaClickedHandler(e) {
                sym.stopVideo();
            };

            if (!sym.getVariable("videoId")) {
                var id = sym.getVariable("symbolSelector");
                id = id.substring(1); // Remove leading hashmark
                id = id + '-video';
                sym.setVariable("videoId", id);
            }

            // BELOW HERE IS SETUP OPTIONS -- UNCOMMENT AND FILL IN
            // Note that this puts a <video> tag on your page directly,
            // which is probably not what you want.
            /*
            sym.setVariable("visibilityCutoff", 0.9); // 10% off screen pauses
            sym.setVariable("posterUrl", "images/video/myVideoStartCard.jpeg");
            sym.setVariable("videos", [
                {"url": "images/video/myVideo.mp4", "type": "mp4"},
                {"url": "images/video/myVideo.webm", "type": "webm"}
            ]);

             sym.reload();
             */

        });
        //Edge binding end

    })("__SAY_videoHolder");
   //Edge symbol end:'__SAY_videoHolder'

    //=========================================================

    //=========================================================

    //=========================================================

    //Edge symbol: '_SAY_adChoices'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${_adChoices_outer}", "mouseenter", function (sym, e) {
            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/i))
                sym.play();
        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_adChoices_outer}", "mouseleave", function (sym, e) {
            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/i))
                sym.playReverse();
        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_adChoices_outer}", "click", function (sym, e) {
            window.open('http://www.saymedia.com/fine-print', '_blank');
            window.supervisor.dispatchEvent('privacyclicked', {
                'ctx' : sym.getComposition().getStage().currentLayout
            });
        });
        //Edge binding end

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/i))
                sym.play();

            // On a Nexus 7, this is what gets this element to be visible for some reason
            setTimeout(function(){sym.getSymbolElement().css('webkitTransformStyle','flat');}, 1000);
        });
        //Edge binding end

    })("__SAY_adChoices");
   //Edge symbol end:'__SAY_adChoices'

    //=========================================================

    //=========================================================

    //=========================================================

    //=========================================================

    //Edge symbol: 'inlineVideo'
    (function (symbolName) {
        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // insert code to be run when the symbol is created here
            sym.createChildSymbol("__SAY_videoHolder", "Stage");
            var mySelector = sym.getVariable("symbolSelector"),
            myElem = sym.$(mySelector),
            videoSym = sym.getChildSymbols()[0],
            videoSelector = videoSym.getVariable("symbolSelector"),
            placeholder = myElem.children()[0],
            offset = $(myElem).offset(),
            h = $(placeholder).css("height"),
            w = $(placeholder).css("width");

            $(placeholder).remove();
            $(videoSelector).hide();
            var startCard = document.createElement('div');
            var endCard = document.createElement('div');

            sym.setup = function (videoSym) {
                $(startCard).css({
                    height: h,
                    width: w,
                    position: "absolute",
                    cursor: "pointer",
                    backgroundImage: "url('" + sym.getVariable("startCardUrl") + "')",
                    backgroundSize: "cover"
                });
                videoSym.reload();
            };

            $(startCard).click(function () {
                var videoId = videoSym.getVariable("videoId"),
                videoEl = $('#' + videoId);
                videoEl.css("height", h);
                videoEl.css("width", w);
                videoEl.css("position", "relative");
                $(videoSelector).show();
                $(startCard).hide();
                $(startCard).css("background-image", "url('" + sym.getVariable("endCardUrl") + "')");
                videoSym.playVideo();
            });

            function displayCard() {
                $(startCard).show();
                $(videoSelector).hide();
            }

            $(document).on("sayVideoEnded", function (e) {
                if (e.videoSymbolSource == '#'+videoSym.element[0].id)
                    displayCard();
            });

            $(myElem).prepend(startCard);

            // BELOW HERE IS SETUP OPTIONS -- FILL IN WITH YOUR VALUES

            videoSym.setVariable("visibilityCutoff", 0.9); // 10% off screen pauses
            videoSym.setVariable("displayControls", true);
            videoSym.setVariable("videos", [
                {
                    "url": "images/video/myVideo.mp4",
                    "type": "mp4"
                },
                {
                    "url": "images/video/myVideo.webm",
                    "type": "webm"
                }
            ]);
            sym.setVariable("startCardUrl", "images/video/myVideoStartCard.jpeg");
            sym.setVariable("endCardUrl", "images/video/myVideoEndCard.jpeg");

            // Load and position video -- do not alter below this line
            sym.setup(videoSym);

        });
        //Edge binding end

    })("__SAY_inlineVideo");
   //Edge symbol end:'__SAY_inlineVideo'

    //=========================================================

    //=========================================================

    //=========================================================

    //Edge symbol: 'lightboxVideo'
    (function (symbolName) {
        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // insert code to be run when the symbol is created here

            sym.createChildSymbol("__SAY_videoHolder", "Stage");

            var isMobile, isAndroid, isIOS, isIE, isTablet;
            if ((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
                isMobile = true;
                isIOS = true;
            }
            else if (navigator.userAgent.match(/iPad/i)) {
                isMobile = true;
                isIOS = true;
                isTablet = true;
            }
            else if (navigator.userAgent.match(/trident/i)) {
                isIE = true;
            }
            else if (navigator.userAgent.match(/android/i)) {
                isMobile = true;
                isAndroid = true;
                if (navigator.userAgent.match(/mobile/i)) {
                    isTablet = true;
                }
            }

            var button = sym.lookupSelector("Button");
            if (isIE) {
                // Using "transparent" confuses IE9 about z-levels
                // and prevents click detection
                $(button).css({
                    backgroundColor: "white",
                    opacity: 0,
                    filter: "alpha(opacity=0)"
                });
            }
            else {
                $(button).css("background", "transparent");
            }
            $(button).css("cursor", "pointer");

            var origButtonHeight = $(button).css("height"),
            origButtonWidth = $(button).css("width");

            var videoSym = sym.getChildSymbols()[0];
            videoSym.setVariable("prefersNativePlayer", true);
            var stageDiv = sym.getComposition().getStage().element[0]
            var videoHolder = videoSym.element[0];
            $(stageDiv).prepend($(videoHolder).detach());

            $(videoHolder).css("left", "-999999px");

            var closeButton = document.createElement('img');
            $(closeButton).css({
                cursor: "pointer",
                position: "absolute",
                zIndex: 16777271,
            });

            $(closeButton).click(function () {
                sym.getVariable("stopVideo")();
            });

            $(document).on("sayVideoEnded", function (e) {
                sym.getVariable("stopVideo")();
            });

            sym.setVariable("stopVideo", function () {
                var parent = sym.element[0];
                if (isIOS && !isTablet) {
                    videoSym.stopVideo();
                }
                else {
                    videoSym.stopVideo();
                    $(videoHolder).animate({
                            opacity: 0
                        },
                        250,
                        function () {
                            $(videoHolder).css("left", "-999999px");
                        }
                    );
                }
            });

            sym.positionVideo = function (videoSym) {
                var parent = sym.element[0];
                $(button).css("height", origButtonHeight);
                $(button).css("width", origButtonWidth);
                closeButton.src = sym.getVariable("closeButtonImage");
                $(closeButton).css(sym.getVariable("closeButtonPositioning"));
                $(parent).css({
                    width: "100%",
                    height: "100%"
                });
                $(videoHolder).css({
                    width: "100%",
                    height: "100%",
                });
                videoSym.reload();
                var videoEl = $('#' + videoSym.getVariable("videoId"));
                videoEl.css({
                    display: "block",
                    position: "absolute",
                    width: sym.getVariable("videoWidth"),
                    height: sym.getVariable("videoHeight"),
                    margin: "auto",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                });
            };

            sym.setVariable("startVideo", function () {
                // On iPhone, we're going to kick out to the native
                // player, so just play the video, nothing else.
                if ((isIOS && isTablet) || isIE || isAndroid || (!isMobile)) {
                    // On Android and IE, suppress the animation, because it leads to
                    // a transparent video. On iPad, the animation works perfectly, but
                    // because of the iPad's rules about activating videos directly
                    // from a user event, a second tap is required to play it.
                    $(parent).css({
                        width: "100%",
                        height: "100%"
                    });
                    var parent = sym.element[0];
                    $(videoHolder).css({
                        left: 0,
                        top: 0,
                        zIndex: 100, // Required to show above layout BG
                        margin: "auto",
                        backgroundColor: sym.getVariable("lightboxColor"),
                    });
                    $(videoHolder).prepend(closeButton);
                    if ( !isIE && !isMobile ) {
                        // Desktop, non-IE; animate our transition
                        $(videoHolder).css({opacity: 0});
                        $(videoHolder).animate({
                            "opacity": "1"
                        },
                        250,
                        function () {
                            videoSym.playVideo();
                        }
                        );
                    }
                    else {
                        // IE or a non-animated mobile device
                        $(videoHolder).css({opacity: 1});
                        videoSym.playVideo();
                    }
                }
                else {
                    // iPhone
                    videoSym.playVideo();
                }
            });

            // BELOW HERE IS SETUP OPTIONS -- FILL IN WITH YOUR VALUES

            sym.setVariable("closeButtonImage", "images/video/m_retina_vidCloseBtn.png");
            sym.setVariable("closeButtonPositioning", {
                top: "20px",
                right: "20px"
            });
            sym.setVariable("lightboxColor", "rgba(255,255,255,.8)");
            sym.setVariable("videoWidth", 500);
            sym.setVariable("videoHeight", 250);
            videoSym.setVariable("visibilityCutoff", 0.9); // 10% off screen pauses
            videoSym.setVariable("displayControls", true);
            videoSym.setVariable("videos", [{
                    "url": "images/video/myVideo.mp4",
                    "type": "mp4"
                }, {
                    "url": "images/video/myVideo.webm",
                    "type": "webm"
                }
            ]);

            // Load and position video -- do not alter below this line
            sym.positionVideo(videoSym);

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_Button}", "click", function (sym, e) {
            // insert code for mouse click here
            sym.getVariable("startVideo")();
        });
        //Edge binding end

    })("__SAY_lightboxVideo");
   //Edge symbol end:'__SAY_lightboxVideo'

    //=========================================================

    //=========================================================

    //=========================================================

    //Edge symbol: '_SAY_svg'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // You should duplicate this symbol to use it.

            // After you call loadSVG, you can manipulate this SVG's document via jQuery.
            // To get a handle to it, do something like this:
            //
            //     var svgDoc = (sym.getSymbolElement().find('object').get(0).getSVGDocument());
            //
            // or from the parent symbol:
            //
            //     var svgDoc = (sym.$('STAGE NAME FOR THIS SYMBOL').find('object').get(0).getSVGDocument());
            //
            // Then you can access stuff in the DOM the normal way:
            //     $(svgDoc).find('polygon').css('fill', 'red');

            // Call loadSVG from your parent symbol to convert this to an SVG object
            sym.loadSVG = function () {
                try {
                    var src = sym.$('image').attr('src');
                    var objectEl = document.createElement('object');
                    objectEl.data = src;
                    objectEl.type = 'image/svg+xml';

                    // You can define a callback from the parent symbol before loading.
                    // This will get called after the image is converted to an object and loaded
                    if (sym.callback) {
                        objectEl.onload = sym.callback;
                    }

                    sym.$('image').replaceWith(objectEl);
                }
                catch (e) {
                    console.log(e);
                }
            };

        });
        //Edge binding end

    })("__SAY_svg");
   //Edge symbol end:'__SAY_svg'

    //=========================================================

    //=========================================================

    //=========================================================

    //=========================================================

    //=========================================================

    //=========================================================

    //=========================================================

    //Edge symbol: 'CTA'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // USAGE: Use this symbol to define an area that you want to click out. By default,
            // it will click out to the default destination defined by sym.clickoutDestination in
            // document.compositionReady on Stage. Additionally, it will fire a beacon with an ID of
            // everything after the last underscore in the name of the symbol instance. So, if you
            // name the instance "cta_LearnMore", then the ID will be "LearnMore". The beacon's context
            // will be whatever the current layout (small, medium, large) is.
            //
            // You can override any of these variables from this symbol instance's parent symbol (i.e. largeCenter)
            // like this:
            //
            // sym.getSymbol('cta_LearnMore').dest = 'http://google.com';
            // sym.getSymbol('cta_LearnMore').id = 'myCustomId';
            // sym.getSymbol('cta_LearnMore').ctx  = 'myCustomCTX';


            //sym.$('clicker').css('opacity',0);

            sym.clickOut = function () {
                var id = sym.id ? sym.id : sym.getSymbolElement()[0].id.split('_').pop();
                var ctx = sym.ctx ? sym.ctx : sym.getComposition().getStage().currentLayout;
                var dest = sym.dest ? sym.dest : sym.getComposition().getStage().clickoutDestination;

                window.supervisor.dispatchEvent('ctaclicked', {
                    tgt : dest,
                    context : ctx,
                    ctaid : id
                });
                $.event.trigger({type: "sayCtaClicked"});
                window.open(dest, '_blank');
            };

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_clicker}", "click", function(sym, e) {
            sym.clickOut();
        });
        //Edge binding end

    })("__SAY_CTA");
   //Edge symbol end:'__SAY_CTA'

    //=========================================================

    //Edge symbol: '__SAY_max_vert'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            //change this to however many px this should max out at
            var maxHeight = 900;

            sym.getSymbolElement().addClass('maxVert').css('max-height',maxHeight + 'px')
            setTimeout(function () {
                sym.getSymbolElement().css('top', (sym.getSymbolElement().height()/2)*-1 + 'px');
            }, 10);

        });
        //Edge binding end

    })("__SAY_max_vert");
   //Edge symbol end:'__SAY_max_vert'

    //=========================================================

    //Edge symbol: '__SAY_max_vert_1'
    (function (symbolName) {

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            //change this to however many px this should max out at
            var maxWidth = 1000;

            sym.getSymbolElement().addClass('maxHor').css('max-width',maxWidth + 'px')
            setTimeout(function () {
                sym.getSymbolElement().css('left', (sym.getSymbolElement().width()/2)*-1 + 'px');
            }, 10);

        });
        //Edge binding end

    })("__SAY_max_hor");
   //Edge symbol end:'__SAY_max_hor'

   //=========================================================
   
   //Edge symbol: 'videoThumb'
   (function(symbolName) {   
   
   })("btn_playVideo");
   //Edge symbol end:'btn_playVideo'

   //=========================================================
   
   //Edge symbol: 'getShowtimes'
   (function(symbolName) {   
   
   })("getShowtimes");
   //Edge symbol end:'getShowtimes'

   //=========================================================
   
   //Edge symbol: 'twitter_mc'
   (function(symbolName) {   
   
   })("btn_learnMore");
   //Edge symbol end:'btn_learnMore'

   //=========================================================
   
   //Edge symbol: 'logo_mc'
   (function(symbolName) {   
   
   })("logo_mc");
   //Edge symbol end:'logo_mc'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
   })("logoHD");
   //Edge symbol end:'logoHD'

   //=========================================================
   
   //Edge symbol: 'tagLine'
   (function(symbolName) {   
   
   })("tagLine");
   //Edge symbol end:'tagLine'

   //=========================================================
   
   //Edge symbol: 'logoWink'
   (function(symbolName) {   
   
   })("logoWink");
   //Edge symbol end:'logoWink'

   //=========================================================
   
   //Edge symbol: 'cta_getShowtimes'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         	// USAGE: Use this symbol to define an area that you want to click out. By default, 
         	// it will click out to the default destination defined by sym.clickoutDestination in
         	// document.compositionReady on Stage. Additionally, it will fire a beacon with an ID of
         	// everything after the last underscore in the name of the symbol instance. So, if you 
         	// name the instance "cta_LearnMore", then the ID will be "LearnMore". The beacon's context
         	// will be whatever the current layout (small, medium, large) is. 
         	//
         	// You can override any of these variables from this symbol instance's parent symbol (i.e. largeCenter) 
         	// like this: 
         	//
         	// sym.getSymbol('cta_LearnMore').dest = 'http://google.com';
         	// sym.getSymbol('cta_LearnMore').id = 'myCustomId';
         	// sym.getSymbol('cta_LearnMore').ctx  = 'myCustomCTX';
         	
         	
         	//sym.$('clicker').css('opacity',0);
         	
         	sym.clickOut = function(){
         		var id = sym.id ? sym.id : sym.getSymbolElement()[0].id.split('_').pop();
         		var ctx = sym.ctx ? sym.ctx : sym.getComposition().getStage().currentLayout;
         		var dest = sym.dest ? sym.dest : sym.getComposition().getStage().clickoutDestination;
         	
         		window.supervisor.dispatchEvent('ctaclicked', {
         			 tgt : dest,
         			 context : ctx,
         			 ctaid : id
         		});
         		$.event.trigger({type: "sayCtaClicked"});
         		window.open(dest, '_blank');		
         	};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clicker}", "click", function(sym, e) {
         sym.clickOut();

      });
      //Edge binding end

   })("cta_getShowtimes");
   //Edge symbol end:'cta_getShowtimes'

   //=========================================================
   
   //Edge symbol: 'cta_logo'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         	// USAGE: Use this symbol to define an area that you want to click out. By default, 
         	// it will click out to the default destination defined by sym.clickoutDestination in
         	// document.compositionReady on Stage. Additionally, it will fire a beacon with an ID of
         	// everything after the last underscore in the name of the symbol instance. So, if you 
         	// name the instance "cta_LearnMore", then the ID will be "LearnMore". The beacon's context
         	// will be whatever the current layout (small, medium, large) is. 
         	//
         	// You can override any of these variables from this symbol instance's parent symbol (i.e. largeCenter) 
         	// like this: 
         	//
         	// sym.getSymbol('cta_LearnMore').dest = 'http://google.com';
         	// sym.getSymbol('cta_LearnMore').id = 'myCustomId';
         	// sym.getSymbol('cta_LearnMore').ctx  = 'myCustomCTX';
         	
         	
         	//sym.$('clicker').css('opacity',0);
         	
         	sym.clickOut = function(){
         		var id = sym.id ? sym.id : sym.getSymbolElement()[0].id.split('_').pop();
         		var ctx = sym.ctx ? sym.ctx : sym.getComposition().getStage().currentLayout;
         		var dest = sym.dest ? sym.dest : sym.getComposition().getStage().clickoutDestination;
         	
         		window.supervisor.dispatchEvent('ctaclicked', {
         			 tgt : dest,
         			 context : ctx,
         			 ctaid : id
         		});
         		$.event.trigger({type: "sayCtaClicked"});
         		window.open(dest, '_blank');		
         	};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clicker}", "click", function(sym, e) {
         sym.clickOut();

      });
      //Edge binding end

   })("cta_logo");
   //Edge symbol end:'cta_logo'

   //=========================================================
   
   //Edge symbol: 'phone'
   (function(symbolName) {   
   
   })("phone");
   //Edge symbol end:'phone'

   //=========================================================
   
   //Edge symbol: 'lucy_largeVideo'
   (function(symbolName) {   
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
      	// insert code to be run when the symbol is created here
      
      	sym.createChildSymbol("__SAY_videoHolder", "Stage");
      
      	var isMobile, isAndroid, isIOS, isIE, isTablet;
      	if ((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
      		isMobile = true;
      		isIOS = true;
      	} else if (navigator.userAgent.match(/iPad/i)) {
      		isMobile = true;
      		isIOS = true;
      		isTablet = true;
      	} else if (navigator.userAgent.match(/trident/i)) {
      		isIE = true;
      	} else if (navigator.userAgent.match(/android/i)) {
      		isMobile = true;
      		isAndroid = true;
      		if (navigator.userAgent.match(/mobile/i)) {
      			isTablet = true;
      		}
      	}
      
      	var button = sym.lookupSelector("Button");
      	if (isIE) {
      		// Using "transparent" confuses IE9 about z-levels
      		// and prevents click detection
      		$(button).css({
      			backgroundColor: "white",
      			opacity: 0,
      			filter: "alpha(opacity=0)"
      		});
      	} else {
      		$(button).css("background", "transparent");
      	}
      	$(button).css("cursor", "pointer");
      
      	var origButtonHeight = $(button).css("height"),
      		origButtonWidth = $(button).css("width");
      
      	var videoSym = sym.getChildSymbols()[0];
      	videoSym.setVariable("prefersNativePlayer", true);
      	var stageDiv = sym.getComposition().getStage().element[0]
      	var videoHolder = videoSym.element[0];
      	$(stageDiv).prepend($(videoHolder).detach());
      
      	$(videoHolder).css("left", "-999999px");
      
      	var closeButton = document.createElement('img');
      	$(closeButton).css({
      		cursor: "pointer",
      		position: "absolute",
      		zIndex: 16777271,
      	});
      
      	$(closeButton).click(function () {
      		sym.getVariable("stopVideo")();
      	});
      
      	$(document).on("sayVideoEnded", function (e) {
      		sym.getVariable("stopVideo")();
      	});
      
      	sym.setVariable("stopVideo", function () {
      		var parent = sym.element[0];
      		if (isIOS && !isTablet) {
      			videoSym.stopVideo();
      		} else {
      			videoSym.stopVideo();
      			$(videoHolder).animate({
      					opacity: 0
      				},
      				250,
      				function () {
      					$(videoHolder).css("left", "-999999px");
      				}
      			);
      		}
      	});
      
      	sym.positionVideo = function (videoSym) {
      		var parent = sym.element[0];
      		$(button).css("height", origButtonHeight);
      		$(button).css("width", origButtonWidth);
      		closeButton.src = sym.getVariable("closeButtonImage");
      		$(closeButton).css(sym.getVariable("closeButtonPositioning"));
      		$(parent).css({
      			width: "100%",
      			height: "100%"
      		});
      		$(videoHolder).css({
      			width: "100%",
      			height: "100%",
      		});
      		videoSym.reload();
      		var videoEl = $('#' + videoSym.getVariable("videoId"));
      		videoEl.css({
      			display: "block",
      			position: "absolute",
      			width: sym.getVariable("videoWidth"),
      			height: sym.getVariable("videoHeight"),
      			margin: "auto",
      			top: 0,
      			bottom: 0,
      			left: 0,
      			right: 0
      		});
      	}
      
      	sym.setVariable("startVideo", function () {
      		// On iPhone, we're going to kick out to the native
      		// player, so just play the video, nothing else.
      		if ((isIOS && isTablet) || isIE || isAndroid || (!isMobile)) {
      			// On Android and IE, suppress the animation, because it leads to
      			// a transparent video. On iPad, the animation works perfectly, but
      			// because of the iPad's rules about activating videos directly
      			// from a user event, a second tap is required to play it.
      			$(parent).css({
      				width: "100%",
      				height: "100%"
      			});
      			var parent = sym.element[0];
      			$(videoHolder).css({
      				left: 0,
      				top: 0,
      				zIndex: 100, // Required to show above layout BG
      				margin: "auto",
      				backgroundColor: sym.getVariable("lightboxColor"),
      			});
      			$(videoHolder).prepend(closeButton);
      			if ( !isIE && !isMobile ) {
      				// Desktop, non-IE; animate our transition
      				$(videoHolder).css({opacity: 0});
      				$(videoHolder).animate({
      						"opacity": "1"
      					},
      					250,
      					function () {
      						videoSym.playVideo();
      					}
      				);
      			} else {
      				// IE or a non-animated mobile device
      				$(videoHolder).css({opacity: 1});
      				videoSym.playVideo();
      			}
      		} else {
      			// iPhone
      			videoSym.playVideo();
      		}
      	});
      
      	// BELOW HERE IS SETUP OPTIONS -- FILL IN WITH YOUR VALUES
      
      	sym.setVariable("closeButtonImage", "images/video/m_retina_vidCloseBtn.png");
      	sym.setVariable("closeButtonPositioning", {
      		top: "20px",
      		right: "20px"
      	});
      	sym.setVariable("lightboxColor", "rgba(230,120,30,.8)");
      	sym.setVariable("videoWidth", 704);
      	sym.setVariable("videoHeight", 352);
      	videoSym.setVariable("visibilityCutoff", 0.9); // 10% off screen pauses
      	videoSym.setVariable("displayControls", true);
      	videoSym.setVariable("videos", [{
      		"url": "images/video/large704x352.mp4",
      		"type": "mp4"
      	}, {
      		"url": "images/video/large704x352.webm",
      		"type": "webm"
      	}]);
      
      	// Load and position video -- do not alter below this line
      	sym.positionVideo(videoSym);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_Button}", "click", function (sym, e) {
      	// insert code for mouse click here
      	sym.getVariable("startVideo")();
      
      });
      //Edge binding end

   })("largeVideo");
   //Edge symbol end:'largeVideo'

   //=========================================================
   
   //Edge symbol: 'phone_1'
   (function(symbolName) {   
   
      })("phone_1");
   //Edge symbol end:'phone_1'

   //=========================================================
   
   //Edge symbol: 'btnSmallVideo'
   (function(symbolName) {   
   
   })("btnSmallVideo");
   //Edge symbol end:'btnSmallVideo'

   //=========================================================
   
   //Edge symbol: 'btnSmallLearnMore'
   (function(symbolName) {   
   
   })("btnSmallLearnMore");
   //Edge symbol end:'btnSmallLearnMore'

   //=========================================================
   
   //Edge symbol: 'smlogoWink'
   (function(symbolName) {   
   
   })("smlogoWink");
   //Edge symbol end:'smlogoWink'

   //=========================================================
   
   //Edge symbol: 'largeVideo_1'
   (function(symbolName) {   
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
      	// insert code to be run when the symbol is created here
      
      	sym.createChildSymbol("__SAY_videoHolder", "Stage");
      
      	var isMobile, isAndroid, isIOS, isIE, isTablet;
      	if ((navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
      		isMobile = true;
      		isIOS = true;
      	} else if (navigator.userAgent.match(/iPad/i)) {
      		isMobile = true;
      		isIOS = true;
      		isTablet = true;
      	} else if (navigator.userAgent.match(/trident/i)) {
      		isIE = true;
      	} else if (navigator.userAgent.match(/android/i)) {
      		isMobile = true;
      		isAndroid = true;
      		if (navigator.userAgent.match(/mobile/i)) {
      			isTablet = true;
      		}
      	}
      
      	var button = sym.lookupSelector("Button");
      	if (isIE) {
      		// Using "transparent" confuses IE9 about z-levels
      		// and prevents click detection
      		$(button).css({
      			backgroundColor: "white",
      			opacity: 0,
      			filter: "alpha(opacity=0)"
      		});
      	} else {
      		$(button).css("background", "transparent");
      	}
      	$(button).css("cursor", "pointer");
      
      	var origButtonHeight = $(button).css("height"),
      		origButtonWidth = $(button).css("width");
      
      	var videoSym = sym.getChildSymbols()[0];
      	videoSym.setVariable("prefersNativePlayer", true);
      	var stageDiv = sym.getComposition().getStage().element[0]
      	var videoHolder = videoSym.element[0];
      	$(stageDiv).prepend($(videoHolder).detach());
      
      	$(videoHolder).css("left", "-999999px");
      
      	var closeButton = document.createElement('img');
      	$(closeButton).css({
      		cursor: "pointer",
      		position: "absolute",
      		zIndex: 16777271,
      	});
      
      	$(closeButton).click(function () {
      		sym.getVariable("stopVideo")();
      	});
      
      	$(document).on("sayVideoEnded", function (e) {
      		sym.getVariable("stopVideo")();
      	});
      
      	sym.setVariable("stopVideo", function () {
      		var parent = sym.element[0];
      		if (isIOS && !isTablet) {
      			videoSym.stopVideo();
      		} else {
      			videoSym.stopVideo();
      			$(videoHolder).animate({
      					opacity: 0
      				},
      				250,
      				function () {
      					$(videoHolder).css("left", "-999999px");
      				}
      			);
      		}
      	});
      
      	sym.positionVideo = function (videoSym) {
      		var parent = sym.element[0];
      		$(button).css("height", origButtonHeight);
      		$(button).css("width", origButtonWidth);
      		closeButton.src = sym.getVariable("closeButtonImage");
      		$(closeButton).css(sym.getVariable("closeButtonPositioning"));
      		$(parent).css({
      			width: "100%",
      			height: "100%"
      		});
      		$(videoHolder).css({
      			width: "100%",
      			height: "100%",
      		});
      		videoSym.reload();
      		var videoEl = $('#' + videoSym.getVariable("videoId"));
      		videoEl.css({
      			display: "block",
      			position: "absolute",
      			width: sym.getVariable("videoWidth"),
      			height: sym.getVariable("videoHeight"),
      			margin: "auto",
      			top: 0,
      			bottom: 0,
      			left: 0,
      			right: 0
      		});
      	}
      
      	sym.setVariable("startVideo", function () {
      		// On iPhone, we're going to kick out to the native
      		// player, so just play the video, nothing else.
      		if ((isIOS && isTablet) || isIE || isAndroid || (!isMobile)) {
      			// On Android and IE, suppress the animation, because it leads to
      			// a transparent video. On iPad, the animation works perfectly, but
      			// because of the iPad's rules about activating videos directly
      			// from a user event, a second tap is required to play it.
      			$(parent).css({
      				width: "100%",
      				height: "100%"
      			});
      			var parent = sym.element[0];
      			$(videoHolder).css({
      				left: 0,
      				top: 0,
      				zIndex: 100, // Required to show above layout BG
      				margin: "auto",
      				backgroundColor: sym.getVariable("lightboxColor"),
      			});
      			$(videoHolder).prepend(closeButton);
      			if ( !isIE && !isMobile ) {
      				// Desktop, non-IE; animate our transition
      				$(videoHolder).css({opacity: 0});
      				$(videoHolder).animate({
      						"opacity": "1"
      					},
      					250,
      					function () {
      						videoSym.playVideo();
      					}
      				);
      			} else {
      				// IE or a non-animated mobile device
      				$(videoHolder).css({opacity: 1});
      				videoSym.playVideo();
      			}
      		} else {
      			// iPhone
      			videoSym.playVideo();
      		}
      	});
      
      	// BELOW HERE IS SETUP OPTIONS -- FILL IN WITH YOUR VALUES
      
      	sym.setVariable("closeButtonImage", "images/video/m_retina_vidCloseBtn_sm.png");
      	sym.setVariable("closeButtonPositioning", {
      		top: "20px",
      		right: "20px"
      	});
      	sym.setVariable("lightboxColor", "rgba(230,120,30,.8)");
      	sym.setVariable("videoWidth", 290);
      	sym.setVariable("videoHeight", 174);
      	videoSym.setVariable("visibilityCutoff", 0.9); // 10% off screen pauses
      	videoSym.setVariable("displayControls", true);
      	videoSym.setVariable("videos", [{
      		"url": "images/video/small588x352.mp4",
      		"type": "mp4"
      	}, {
      		"url": "images/video/small588x352.webm",
      		"type": "webm"
      	}]);
      
      	// Load and position video -- do not alter below this line
      	sym.positionVideo(videoSym);
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_Button}", "click", function (sym, e) {
      	// insert code for mouse click here
      	sym.getVariable("startVideo")();
      
      });
         //Edge binding end

      })("smallVideo");
   //Edge symbol end:'smallVideo'

   //=========================================================
   
   //Edge symbol: 'tagLine_1'
   (function(symbolName) {   
   
      })("tagLine_1");
   //Edge symbol end:'tagLine_1'

   //=========================================================
   
   //Edge symbol: 'tagLine_2'
   (function(symbolName) {   
   
      })("tagLine_2");
   //Edge symbol end:'tagLine_2'

   //=========================================================
   
   //Edge symbol: 'tagLine_3'
   (function(symbolName) {   
   
      })("tagLine_3");
   //Edge symbol end:'tagLine_3'

   //=========================================================
   
   //Edge symbol: 'tagLine_4'
   (function(symbolName) {   
   
      })("tagLine_4");
   //Edge symbol end:'tagLine_4'

   //=========================================================
   
   //Edge symbol: '__SAY_inlineVideo_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // insert code to be run when the symbol is created here
            sym.createChildSymbol("__SAY_videoHolder", "Stage");
            var mySelector = sym.getVariable("symbolSelector"),
            myElem = sym.$(mySelector),
            videoSym = sym.getChildSymbols()[0],
            videoSelector = videoSym.getVariable("symbolSelector"),
            placeholder = myElem.children()[0],
            offset = $(myElem).offset(),
            h = $(placeholder).css("height"),
            w = $(placeholder).css("width");

            $(placeholder).remove();
            $(videoSelector).hide();
            var startCard = document.createElement('div');
            var endCard = document.createElement('div');

            sym.setup = function (videoSym) {
                $(startCard).css({
                    height: h,
                    width: w,
                    position: "absolute",
                    cursor: "pointer",
                    backgroundImage: "url('" + sym.getVariable("startCardUrl") + "')",
                    backgroundSize: "cover"
                });
                videoSym.reload();
            };

            $(startCard).click(function () {
                var videoId = videoSym.getVariable("videoId"),
                videoEl = $('#' + videoId);
                videoEl.css("height", h);
                videoEl.css("width", w);
                videoEl.css("position", "relative");
                $(videoSelector).show();
                $(startCard).hide();
                $(startCard).css("background-image", "url('" + sym.getVariable("endCardUrl") + "')");
                videoSym.playVideo();
            });

            function displayCard() {
                $(startCard).show();
                $(videoSelector).hide();
            }

            $(document).on("sayVideoEnded", function (e) {
                if (e.videoSymbolSource == '#'+videoSym.element[0].id)
                    displayCard();
            });

            $(myElem).prepend(startCard);

            // BELOW HERE IS SETUP OPTIONS -- FILL IN WITH YOUR VALUES

            videoSym.setVariable("visibilityCutoff", 0.9); // 10% off screen pauses
            videoSym.setVariable("displayControls", true);
            videoSym.setVariable("videos", [
                {
                    "url": "images/video/myVideo.mp4",
                    "type": "mp4"
                },
                {
                    "url": "images/video/myVideo.webm",
                    "type": "webm"
                }
            ]);
            sym.setVariable("startCardUrl", "images/video/myVideoStartCard.jpeg");
            sym.setVariable("endCardUrl", "images/video/myVideoEndCard.jpeg");

            // Load and position video -- do not alter below this line
            sym.setup(videoSym);

        });
           //Edge binding end

       })("__SAY_inlineVideo_1");
   //Edge symbol end:'__SAY_inlineVideo_1'

   //=========================================================
   
   //Edge symbol: 'tagLine_5'
   (function(symbolName) {   
   
      })("tagLine_5");
   //Edge symbol end:'tagLine_5'

   //=========================================================
   
   //Edge symbol: 'tagLine_6'
   (function(symbolName) {   
   
      })("tagLine_6");
   //Edge symbol end:'tagLine_6'

})(jQuery, AdobeEdge, "EDGE-179427669");
