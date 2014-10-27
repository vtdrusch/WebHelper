var aetn = aetn ? aetn : {};
aetn.biography = aetn.biography ? aetn.biography : {};

aetn.biography.videocontroller = function () {
	var pub = {}; //public namespace
    var priv = {}; //private namespace
    
    //------------------------------------------------------------------
    // Init Packages
    //------------------------------------------------------------------
    priv.display = {}
    priv.display.flash = {};
    priv.videoplayer = {}


    //------------------------------------------------------------------
    // Constants
    //------------------------------------------------------------------
    priv.display.flash.FLASH_DOWNLOAD_URL = "http://www.adobe.com/products/flashplayer/";
    priv.videoplayer.layoutUrl = '../data/AETN_basic_meta_glass.xml';

    
    //------------------------------------------------------------------
    // Init Variables
    //------------------------------------------------------------------
    var players = {},
        scopes = ["default", "javascript"];

    var currentPlayerID,
        currentPlayer,
        currentScope = [],
        currentPlaylist = {},
        currentIndex = 0;
     

    //------------------------------------------------------------------
    // Methods
    //------------------------------------------------------------------
    function setCurrentPlayer(pID) {
        currentPlayerID = pID;
        currentPlayer = players[currentPlayerID].player;
        currentPlaylist = players[currentPlayerID].playlist;
        currentIndex = players[currentPlayerID].playerIndex;
        currentScope = players[currentPlayerID].scope;
    }
    
    function getPlayerSettings(pdkBase, player, commonConfig) {
    	var embedPlayerUrl = pdkBase.substr(0, pdkBase.indexOf("/", 10)) 
    	    + "/pservice/embed-player/?siteId=bio&tPid={platformID}";
        
        var videoList = player.playlist;
        var index = player.playerIndex;
        
        var settings = {
            autoPlay: player.autoPlay,
        	shareConfig: {
        	    embedCode: '<iframe width="480" height="320" src="' + embedPlayerUrl +
        	        '" frameborder="0" scrolling="no" allowfullscreen></iframe>'
        	},
            layoutUrl: priv.videoplayer.layoutUrl,
            embed: {
                embedSite:  'bio'
            },
            releaseURL: videoList[index].videoURLs.releaseURL,
            adobePass_use_old: true
        };

        if (videoList[index].videoURLs.html5ReleaseURL) {
            settings.html5ReleaseURL = videoList[0].videoURLs.html5ReleaseURL;
        }
        
        $.extend(true, settings, commonConfig);
        
        return settings;
    }

    function getAdAnalyticConfigs(videoList, commonAdConfig) {
        var config = {
            adSwitch: 'FW', //this is needed to use freewheel ad
            comscore: {
                c2: '3005002',
                c4: '6357324'
            },
            omniture: {
                host: 'metrics.aetn.com',
                brandPrefix: 'BIO',
                enableTrackHeartbeat: 'false'
            },
            nielsen: {
                clientid: 'us-901285',
                vcid: 'c03'
            }
        };
        
        $.extend(true, config, commonAdConfig);
        return config;
    }

    function findItemById(vID, videoList) {
        var index = 0;
        for (var i = 0; i < videoList.length; i++) {
        	var id = videoList[i].videoTpID;
        	if(vID === currentVideo){
                index = i;
            }
        }
        
        return index;
    }
    
    function playerHandler(e) {
        var controlId = (e.originator) ? e.originator.controlId : this.scope.scopeIds[2];
        switch (e.type) {
            case "OnSetRelease":
            case "OnSetReleaseUrl":
                setCurrentPlayer(controlId);
                break;
            case "OnReleaseEnd":
                if (players[controlId].autoPlay !== "false") {
                    pub.nextVideo(controlId);
                }
                break;
            case "OnReleaseStart":
                updateMetadata(controlId);
                break;
            case "OnLoadReleaseUrl":
                //TODO: Should we handle preload?
                break;
            case "OnMediaUnpause":
                setCurrentPlayer(controlId);
                break;
        }
    }
    
    function updateMetadata(pID) {
        var playerElement = document.getElementById(pID);
        var playerEvent = new Event('PDK:OnReleaseStart');
        playerEvent.target = playerElement;

        playerElement.dispatchEvent(playerEvent);
    };
    
    function registerListeners(player) {
        player.bindListener("OnSetReleaseUrl", playerHandler, scopes);
        player.bindListener("OnSetRelease", playerHandler, scopes);
        
        player.bindListener("OnReleaseEnd", playerHandler, scopes);
        player.bindListener("OnReleaseStart", playerHandler, scopes);

        player.bindListener("OnLoadRelease", playerHandler, scopes);
        player.bindListener("OnLoadReleaseUrl", playerHandler, scopes);
        
        player.bindListener("OnMediaUnpause", playerHandler, scopes);
        player.bindListener("OnReleaseSelected", playerHandler, scopes);
    };
    
    function removePlayer(pID) {
        var deadIndex = scopes.indexOf(pID);
        scopes.splice(deadIndex, 1);
        
        delete players[pID];
    };


    //------------------------------------------------------------------
    // Public Methods
    //------------------------------------------------------------------
    pub.initPlayer = function(playerDiv, playlist, pdkBase, isAutoPlay, isAutoStart, commonAdCofig, adBoxes, commonConfig) {
    	
    	var autoPlay = isAutoPlay,
            autoStart = isAutoStart,
    	    player = undefined, 
    	    playerScope = [playerDiv],
            playlistData = playlist;

    	if (!commonConfig) commonConfig = {};
    	
    	priv.videoplayer.layoutUrl = pdkBase + '/../data/AETN_basic_meta_glass.xml';
        
        players[playerDiv] = {
            'autoPlay': autoPlay,
            'autoStart': autoStart,
            'playerIndex': 0,
            'playlist': playlist,
            'scope': [playerDiv]
        };
        players[playerDiv].player = player = aetn.videoplayer.init(playerDiv, pdkBase, 
            getPlayerSettings(pdkBase, players[playerDiv], commonConfig),
            getAdAnalyticConfigs(playlistData, commonAdCofig), adBoxes, {}
        );
        
        scopes.push(playerDiv);
        player.start();
        
        registerListeners(player);
    };

    pub.nextVideo = function(pID) {
        currentPlayerID = pID;
        currentPlaylist = players[currentPlayerID].playlist;
        currentIndex = players[currentPlayerID].playerIndex;
        currentScope = players[currentPlayerID].scope;
        currentPlayer = players[currentPlayerID].player;
        
        if (currentIndex < (currentPlaylist.length - 1)) {
            currentIndex++;
            players[currentPlayerID].playerIndex = currentIndex;
			currentPlayer.playVideo(currentPlaylist[currentIndex].videoURLs, false, currentScope);
        }
    };    
    
    pub.playVideo = function(videoURLs, player, scopes) {
    	aetn.videoplayer.playVideo(videoURLs, player);
    };
    
    pub.getPlayers = function () { 
        return players;
    };
    
    pub.getPlayerById = function (p_ID) { 
        return players[p_ID];
    };
    
    pub.getCurrentlyActivePlayer = function () { 
        if (currentPlayerID !== undefined &&
            players[currentPlayerID]) {
                return players[currentPlayerID];
        }
        else{
            return players[0];
        }
    };
    
    pub.removePlayer = function removePlayer(pID) {
        var deadIndex = scopes.indexOf(pID);
        scopes.splice(deadIndex, 1);
        
        delete players[pID];
    };
    
    return pub;
}();