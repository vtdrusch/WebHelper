/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['inika, sans-serif']='<script src=\"http://use.edgefonts.net/inika:n7,n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'adaptiveContainer',
                type: 'rect',
                rect: ['0px', '62px','100%','70.2%','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: '__SAY_adChoices2',
                type: 'rect',
                rect: ['auto', '0px','auto','auto','0px', 'auto']
            }],
            symbolInstances: [
            {
                id: '__SAY_adChoices2',
                symbolName: '__SAY_adChoices',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_adaptiveContainer}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${___SAY_adChoices2}": [
                ["style", "top", '0px'],
                ["style", "right", '0px'],
                ["style", "left", 'auto']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"layout760": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'center',
                    type: 'rect',
                    rect: ['50%', '50%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'center',
                symbolName: 'largeCenter',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_center}": [
                ["style", "left", '50%'],
                ["style", "top", '50%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"layout0": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'smallCenter',
                    type: 'rect',
                    rect: ['50%', '50%', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'smallCenter',
                symbolName: 'smallCenter',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_smallCenter}": [
                ["style", "top", '50%'],
                ["style", "left", '50%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"largeCenter": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'tagLine_1',
                    type: 'rect',
                    rect: ['-195px', '-155px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'phone',
                    type: 'rect',
                    rect: ['-316', '-183', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'orange_bar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-50%', '175px', '100%', '73px', 'auto', 'auto'],
                    fill: ['rgba(212,130,11,1.00)', [50, 15, 'true', 'farthest-corner', [['rgba(222,112,31,1.00)', 0], ['rgba(171,76,19,1.00)', 95]]]]
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    rect: ['-116px', '-2px', '562px', '22px', 'auto', 'auto'],
                    id: 'ADAPTIVE_LARGE_copy',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_copy.jpg', '0px', '0px']
                },
                {
                    id: 'logoWink',
                    type: 'rect',
                    rect: ['22', '-86', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logoHD',
                    type: 'rect',
                    rect: ['55', '121', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'learnMoreBtn',
                    type: 'rect',
                    rect: ['170px', '44px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'videoBtn',
                    type: 'rect',
                    rect: ['24px', '44px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cta_HDlogo',
                    type: 'rect',
                    rect: ['50px', '122px', '318px', '68px', 'auto', 'auto']
                },
                {
                    id: 'cta_learnMore',
                    type: 'rect',
                    rect: ['167px', '40px', '146px', '40px', 'auto', 'auto'],
                    opacity: 1
                },
                {
                    id: 'cta_wink',
                    type: 'rect',
                    rect: ['2.6%', '-89px', '212px', '77px', 'auto', 'auto'],
                    opacity: 1
                },
                {
                    id: 'play_largeVideo',
                    type: 'rect',
                    rect: ['18px', '46px', '146px', '29px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'cta_HDlogo',
                symbolName: 'cta_logo',
                autoPlay: {

               }
            },
            {
                id: 'learnMoreBtn',
                symbolName: 'btn_learnMore',
                autoPlay: {

               }
            },
            {
                id: 'phone',
                symbolName: 'phone',
                autoPlay: {

               }
            },
            {
                id: 'cta_wink',
                symbolName: 'cta_getShowtimes',
                autoPlay: {

               }
            },
            {
                id: 'logoWink',
                symbolName: 'logoWink',
                autoPlay: {

               }
            },
            {
                id: 'videoBtn',
                symbolName: 'btn_playVideo',
                autoPlay: {

               }
            },
            {
                id: 'tagLine_1',
                symbolName: 'tagLine_1',
                autoPlay: {

               }
            },
            {
                id: 'cta_learnMore',
                symbolName: 'cta_getShowtimes',
                autoPlay: {

               }
            },
            {
                id: 'logoHD',
                symbolName: 'logoHD',
                autoPlay: {

               }
            },
            {
                id: 'play_largeVideo',
                symbolName: 'largeVideo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_ADAPTIVE_LARGE_copy}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-116px']
            ],
            "${_orange_bar}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '150px'],
                ["color", "background-color", 'rgba(212,130,11,1.00)'],
                ["style", "bottom", 'auto'],
                ["style", "height", '73px'],
                ["gradient", "background-image", [50,15,true,'farthest-corner',[['rgba(222,112,31,1.00)',0],['rgba(171,76,19,1.00)',95]]]],
                ["style", "left", '-50%'],
                ["style", "width", '100%']
            ],
            "${_play_largeVideo}": [
                ["style", "top", '46px'],
                ["transform", "scaleY", '1.38554'],
                ["style", "height", '29px'],
                ["style", "left", '18px'],
                ["style", "width", '146px']
            ],
            "${_cta_HDlogo}": [
                ["style", "height", '68px'],
                ["style", "top", '122px'],
                ["style", "left", '50px'],
                ["style", "width", '318px']
            ],
            "${_learnMoreBtn}": [
                ["style", "top", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '170px']
            ],
            "${_logoWink}": [
                ["style", "opacity", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_cta_learnMore}": [
                ["style", "top", '40px'],
                ["style", "height", '40px'],
                ["style", "opacity", '1'],
                ["style", "left", '167px'],
                ["style", "width", '146px']
            ],
            "${_tagLine_1}": [
                ["style", "left", '-195px'],
                ["style", "top", '-155px']
            ],
            "${_videoBtn}": [
                ["style", "top", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '24px']
            ],
            "${_cta_wink}": [
                ["style", "top", '-89px'],
                ["style", "height", '77px'],
                ["style", "opacity", '1'],
                ["style", "left", '2.64%'],
                ["style", "width", '212px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid365", tween: [ "style", "${_orange_bar}", "top", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
                { id: "eid444", tween: [ "style", "${_learnMoreBtn}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid443", tween: [ "style", "${_videoBtn}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid448", tween: [ "style", "${_ADAPTIVE_LARGE_copy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750 },
                { id: "eid389", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_phone}', [] ], ""], position: 0 },
                { id: "eid495", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_tagLine_1}', [] ], ""], position: 1000 }            ]
        }
    }
},
"smallCenter": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'phone_1Copy',
                    type: 'rect',
                    rect: ['-379px', '-44px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'tagLineCopy',
                    type: 'rect',
                    transform: [[0, 0], [], [], ['0.87', '0.87']],
                    rect: ['-296px', '-205px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-50%', '165px', '100%', '73px', 'auto', 'auto'],
                    id: 'orange_barCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(212,130,11,1.00)', [50, 15, 'true', 'farthest-corner', [['rgba(222,112,31,1.00)', 0], ['rgba(171,76,19,1.00)', 95]]]]
                },
                {
                    type: 'image',
                    id: 'ADAPTIVE_SMALL_logoHDCopy',
                    rect: ['-273px', '109px', '544px', '116px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_logoHD.png', '0px', '0px']
                },
                {
                    id: 'smlogoWink',
                    type: 'rect',
                    rect: ['-62', '-152px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'copy',
                    rect: ['-253px', '-107px', '506px', '26px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_copy.jpg', '0px', '0px']
                },
                {
                    id: 'btnLearnMore',
                    type: 'rect',
                    rect: ['4', '-72px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btnSmallVideo',
                    type: 'rect',
                    rect: ['-126', '-72px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cta_HDlogoCopy',
                    type: 'rect',
                    rect: ['-139px', '136px', '276px', '61px', 'auto', 'auto']
                },
                {
                    id: 'cta_winkCopy',
                    type: 'rect',
                    opacity: 1,
                    rect: ['-9.3%', '-157px', '147px', '55px', 'auto', 'auto']
                },
                {
                    id: 'cta_learnMoreCopy',
                    type: 'rect',
                    opacity: 1,
                    rect: ['0%', '-78px', '138px', '40px', 'auto', 'auto']
                },
                {
                    id: 'smallVideo',
                    type: 'rect',
                    rect: ['-132px', '-78px', '130px', '40px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'btnSmallVideo',
                symbolName: 'btnSmallVideo',
                autoPlay: {

               }
            },
            {
                id: 'phone_1Copy',
                symbolName: 'phone_1',
                autoPlay: {

               }
            },
            {
                id: 'tagLineCopy',
                symbolName: 'tagLine',
                autoPlay: {

               }
            },
            {
                id: 'btnLearnMore',
                symbolName: 'btnSmallLearnMore',
                autoPlay: {

               }
            },
            {
                id: 'cta_learnMoreCopy',
                symbolName: 'cta_getShowtimes',
                autoPlay: {

               }
            },
            {
                id: 'smallVideo',
                symbolName: 'smallVideo',
                autoPlay: {

               }
            },
            {
                id: 'cta_winkCopy',
                symbolName: 'cta_getShowtimes',
                autoPlay: {

               }
            },
            {
                id: 'smlogoWink',
                symbolName: 'smlogoWink',
                autoPlay: {

               }
            },
            {
                id: 'cta_HDlogoCopy',
                symbolName: 'cta_logo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_orange_barCopy}": [
                ["style", "top", '165px'],
                ["color", "background-color", 'rgba(212,130,11,1)'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "bottom", 'auto'],
                ["style", "height", '73px'],
                ["gradient", "background-image", [50,15,true,'farthest-corner',[['rgba(222,112,31,1.00)',0],['rgba(171,76,19,1.00)',95]]]],
                ["style", "left", '-50%'],
                ["style", "width", '100%']
            ],
            "${_smallVideo}": [
                ["style", "top", '-78px'],
                ["style", "height", '40px'],
                ["style", "left", '-132px'],
                ["style", "width", '130px']
            ],
            "${_cta_winkCopy}": [
                ["style", "top", '-157px'],
                ["style", "height", '55px'],
                ["style", "opacity", '1'],
                ["style", "left", '-9.34%'],
                ["style", "width", '147px']
            ],
            "${_tagLineCopy}": [
                ["transform", "scaleX", '0.87'],
                ["style", "left", '-296px'],
                ["transform", "scaleY", '0.87'],
                ["style", "top", '-205px']
            ],
            "${_phone_1Copy}": [
                ["style", "left", '-379px'],
                ["style", "top", '-44px']
            ],
            "${_smlogoWink}": [
                ["style", "top", '-152px']
            ],
            "${_copy}": [
                ["style", "top", '-107px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-253px']
            ],
            "${_ADAPTIVE_SMALL_logoHDCopy}": [
                ["style", "top", '109px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-273px'],
                ["transform", "scaleY", '0.5']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_cta_learnMoreCopy}": [
                ["style", "top", '-78px'],
                ["style", "height", '40px'],
                ["style", "opacity", '1'],
                ["style", "left", '0%'],
                ["style", "width", '138px']
            ],
            "${_btnLearnMore}": [
                ["style", "top", '-72px'],
                ["style", "opacity", '0']
            ],
            "${_cta_HDlogoCopy}": [
                ["style", "height", '61px'],
                ["style", "top", '136px'],
                ["style", "left", '-139px'],
                ["style", "width", '276px']
            ],
            "${_btnSmallVideo}": [
                ["style", "top", '-72px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid480", tween: [ "style", "${_copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid475", tween: [ "style", "${_btnSmallVideo}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid474", tween: [ "style", "${_btnLearnMore}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid481", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_phone_1Copy}', [] ], ""], position: 0 },
                { id: "eid482", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_smlogoWink}', [] ], ""], position: 500 },
                { id: "eid483", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_tagLineCopy}', [] ], ""], position: 1000 }            ]
        }
    }
},
"__SAY_videoHolder": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    opacity: 1,
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(185,19,19,0.50)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '160px'],
                ["style", "width", '240px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(185,19,19,0.50)'],
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"__SAY_adChoices": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'group',
                    id: 'adChoices_outer',
                    cursor: ['pointer'],
                    rect: ['auto', '0px', '16px', '15px', '0px', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'adChoices_open',
                        rect: ['auto', '0px', '154px', '30px', '-77px', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/stubs/adChoices_open2.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_adChoices_outer}": [
                ["style", "top", '0px'],
                ["style", "left", 'auto'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '15px'],
                ["style", "right", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '16px']
            ],
            "${_adChoices_open}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "right", '-77px'],
                ["style", "left", 'auto'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '15px'],
                ["style", "width", '77px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid168", tween: [ "style", "${_adChoices_outer}", "width", '77px', { fromValue: '16px'}], position: 0, duration: 250 }            ]
        }
    }
},
"__SAY_inlineVideo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Placeholder',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,34,255,0.50)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Placeholder}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(0,34,255,0.50)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"__SAY_lightboxVideo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '101.5%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,255,34,0.50)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '150px']
            ],
            "${_Button}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(0,255,34,0.50)'],
                ["style", "left", '0px'],
                ["style", "width", '101.5%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"__SAY_svg": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'image',
                    tag: 'img',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/stubs/sayLogo.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_image}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '205px'],
                ["style", "width", '556px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"__SAY_CTA": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    type: 'rect',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    userClass: 'transparent',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'clicker',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(12,21,29,0.7461)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_clicker}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '81px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"__SAY_max_vert": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Guide',
                    type: 'group',
                    rect: ['0', '0', '682', '355', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '682px', '355px', 'auto', 'auto'],
                        id: 'Rectangle',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(95,163,209,1.00)']
                    },
                    {
                        rect: ['128px', '103px', '425px', '149px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text6',
                        text: 'This container will grow to the full height of the viewport, up to a maximum size. To use it, make a copy and then edit the creationComplete handler. You should position the top of this at -50%.',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text6}": [
                ["style", "top", '103px'],
                ["style", "height", '149px'],
                ["style", "left", '128px'],
                ["style", "width", '425px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '355px'],
                ["color", "background-color", 'rgba(95,163,209,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '682px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"__SAY_max_hor": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Guide',
                    type: 'group',
                    rect: ['0', '0', '682', '355', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '682px', '355px', 'auto', 'auto'],
                        id: 'Rectangle',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(95,163,209,1.00)']
                    },
                    {
                        rect: ['128px', '103px', '425px', '149px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text6',
                        text: 'This container will grow to the full width of the viewport, up to a maximum size. To use it, make a copy and then edit the creationComplete handler. You should position the left of this at -50%.',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text6}": [
                ["style", "height", '149px'],
                ["style", "top", '103px'],
                ["style", "left", '128px'],
                ["style", "width", '425px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '355px'],
                ["color", "background-color", 'rgba(95,163,209,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '682px']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"btn_playVideo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ADAPTIVE_LARGE_videoBtnOff',
                    rect: ['-68px', '-16px', '276px', '64px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_videoBtnOff.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'ADAPTIVE_LARGE_videoBtnOn2',
                    rect: ['-68px', '-16px', '276px', '64px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_videoBtnOn.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ADAPTIVE_LARGE_videoBtnOn2}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-68px']
            ],
            "${_ADAPTIVE_LARGE_videoBtnOff}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-68px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '125px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 375,
            autoPlay: false,
            timeline: [
                { id: "eid367", tween: [ "style", "${_ADAPTIVE_LARGE_videoBtnOff}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 375 },
                { id: "eid366", tween: [ "style", "${_ADAPTIVE_LARGE_videoBtnOn2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 375 }            ]
        }
    }
},
"getShowtimes": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'cta_off2',
                    type: 'image',
                    rect: ['-62px', '-34px', '250px', '136px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cta_off.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'cta_on2',
                    type: 'image',
                    rect: ['-62px', '-34px', '250px', '136px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cta_on.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cta_off2}": [
                ["style", "top", '-34px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-62px']
            ],
            "${_cta_on2}": [
                ["style", "top", '-34px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-62px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '125px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid365", tween: [ "style", "${_cta_on2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid423", tween: [ "style", "${_cta_off2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInCubic" }            ]
        }
    }
},
"btn_learnMore": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-69px', '-16px', '276px', '64px', 'auto', 'auto'],
                    id: 'ADAPTIVE_LARGE_learnBtnOff',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_learnBtnOff.jpg', '0px', '0px']
                },
                {
                    rect: ['-69px', '-16px', '276px', '64px', 'auto', 'auto'],
                    id: 'ADAPTIVE_LARGE_learnBtnOn2',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_learnBtnOn.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ADAPTIVE_LARGE_learnBtnOn2}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-69px']
            ],
            "${_ADAPTIVE_LARGE_learnBtnOff}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-69px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 375,
            autoPlay: false,
            timeline: [
                { id: "eid368", tween: [ "style", "${_ADAPTIVE_LARGE_learnBtnOn2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 375 },
                { id: "eid369", tween: [ "style", "${_ADAPTIVE_LARGE_learnBtnOff}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 375 }            ]
        }
    }
},
"logo_mc": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'logo2',
                    rect: ['-26px', '-15px', '103px', '60px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo2}": [
                ["style", "top", '-15px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-26px']
            ],
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '52px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid445", tween: [ "style", "${_logo2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000 }            ]
        }
    }
},
"logoHD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ADAPTIVE_LARGE_logo',
                    rect: ['-155px', '-34px', '620px', '134px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_logo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '310px']
            ],
            "${_ADAPTIVE_LARGE_logo}": [
                ["style", "top", '-34px'],
                ["style", "left", '-155px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"tagLine": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sloganOuter',
                    type: 'group',
                    rect: ['-256px', '1', '0px', '45px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'slogan_sm',
                        rect: ['-350px', '-19px', '1400px', '74px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/slogan_sm.jpg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sloganOuter}": [
                ["style", "height", '45px'],
                ["style", "overflow", 'hidden'],
                ["style", "left", '-256px'],
                ["style", "width", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '449px']
            ],
            "${_slogan_sm}": [
                ["style", "top", '-19px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-350px'],
                ["transform", "scaleY", '0.5']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid387", tween: [ "style", "${_sloganOuter}", "width", '698px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"logoWink": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ADAPTIVE_LARGE_wink',
                    rect: ['-105px', '-37px', '420px', '148px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_wink.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ADAPTIVE_LARGE_wink}": [
                ["style", "top", '-37px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-105px']
            ],
            "${symbolSelector}": [
                ["style", "height", '74px'],
                ["style", "width", '210px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid437", tween: [ "style", "${_ADAPTIVE_LARGE_wink}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInCubic" }            ]
        }
    }
},
"cta_getShowtimes": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    type: 'rect',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    userClass: 'transparent',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'clicker',
                    opacity: 1,
                    cursor: ['pointer'],
                    fill: ['rgba(12,21,29,0.7461)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_clicker}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '81px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"cta_logo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    userClass: 'transparent',
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    type: 'rect',
                    opacity: 1,
                    id: 'clicker',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(12,21,29,0.7461)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_clicker}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '81px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"phone": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'ADAPTIVE_LARGE_tab22',
                    type: 'image',
                    rect: ['-105px', '-157px', '420px', '630px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_tab2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/ADAPTIVE_LARGE_phone.png', '0px', '0px'],
                    id: 'ADAPTIVE_LARGE_phone2',
                    type: 'image',
                    rect: ['121px', '20px', '180px', '390px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ADAPTIVE_LARGE_phone2}": [
                ["subproperty", "boxShadow.blur", '0px'],
                ["transform", "scaleX", '0.55'],
                ["style", "opacity", '0'],
                ["style", "left", '196px'],
                ["style", "top", '25px'],
                ["transform", "scaleY", '0.55'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_ADAPTIVE_LARGE_tab22}": [
                ["style", "top", '-157px'],
                ["transform", "scaleY", '0.55'],
                ["transform", "scaleX", '0.55'],
                ["style", "opacity", '0'],
                ["style", "left", '-325px']
            ],
            "${symbolSelector}": [
                ["style", "height", '315px'],
                ["style", "width", '256px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid490", tween: [ "transform", "${_ADAPTIVE_LARGE_phone2}", "scaleY", '0.5', { fromValue: '0.55'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid492", tween: [ "style", "${_ADAPTIVE_LARGE_phone2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid484", tween: [ "style", "${_ADAPTIVE_LARGE_tab22}", "top", '-157px', { fromValue: '-157px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid486", tween: [ "transform", "${_ADAPTIVE_LARGE_tab22}", "scaleX", '0.5', { fromValue: '0.55'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid487", tween: [ "style", "${_ADAPTIVE_LARGE_tab22}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid485", tween: [ "transform", "${_ADAPTIVE_LARGE_tab22}", "scaleY", '0.5', { fromValue: '0.55'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid488", tween: [ "style", "${_ADAPTIVE_LARGE_tab22}", "left", '-105px', { fromValue: '-325px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid493", tween: [ "style", "${_ADAPTIVE_LARGE_phone2}", "left", '121px', { fromValue: '196px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid489", tween: [ "style", "${_ADAPTIVE_LARGE_phone2}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid491", tween: [ "transform", "${_ADAPTIVE_LARGE_phone2}", "scaleX", '0.5', { fromValue: '0.55'}], position: 0, duration: 1000, easing: "easeInCubic" }            ]
        }
    }
},
"largeVideo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '101.5%', '100%', 'auto', 'auto'],
                    id: 'Button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,255,34,0.50)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Button}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(0,255,34,0.50)'],
                ["style", "left", '0px'],
                ["style", "width", '101.5%']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"phone_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    rect: ['256px', '-68px', '223px', '336px', 'auto', 'auto'],
                    id: 'ADAPTIVE_SMALL_tabletCopy',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_tablet.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'ADAPTIVE_SMALL_phoneCopy',
                    rect: ['375px', '28px', '95px', '208px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_phone.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ADAPTIVE_SMALL_tabletCopy}": [
                ["style", "top", '-68px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '36px']
            ],
            "${_ADAPTIVE_SMALL_phoneCopy}": [
                ["style", "top", '28px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '450px']
            ],
            "${symbolSelector}": [
                ["style", "height", '315px'],
                ["style", "width", '256px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid451", tween: [ "style", "${_ADAPTIVE_SMALL_phoneCopy}", "left", '375px', { fromValue: '450px'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid459", tween: [ "style", "${_ADAPTIVE_SMALL_tabletCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInCubic" },
                { id: "eid452", tween: [ "style", "${_ADAPTIVE_SMALL_tabletCopy}", "left", '256px', { fromValue: '36px'}], position: 0, duration: 1000, easing: "easeInQuad" },
                { id: "eid462", tween: [ "style", "${_ADAPTIVE_SMALL_phoneCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInCubic" }            ]
        }
    }
},
"btnSmallVideo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'btnSmallVideo',
                    type: 'image',
                    rect: ['-60px', '-14px', '240px', '58px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_videoOFF.jpg', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'ADAPTIVE_SMALL_videoON2',
                    type: 'image',
                    rect: ['-60px', '-14px', '240px', '58px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_videoON.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnSmallVideo}": [
                ["style", "top", '-14px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '120px']
            ],
            "${_ADAPTIVE_SMALL_videoON2}": [
                ["style", "top", '-14px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 375,
            autoPlay: false,
            timeline: [
                { id: "eid468", tween: [ "style", "${_btnSmallVideo}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 375 },
                { id: "eid465", tween: [ "style", "${_ADAPTIVE_SMALL_videoON2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 375 }            ]
        }
    }
},
"btnSmallLearnMore": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'btnLearnMore',
                    rect: ['-62px', '-14px', '250px', '58px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_ctaOFF.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'ADAPTIVE_SMALL_ctaON2',
                    rect: ['-62px', '-14px', '250px', '58px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_ctaON.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnLearnMore}": [
                ["style", "top", '-14px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-62px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '125px']
            ],
            "${_ADAPTIVE_SMALL_ctaON2}": [
                ["style", "top", '-14px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-62px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 375,
            autoPlay: false,
            timeline: [
                { id: "eid473", tween: [ "style", "${_btnLearnMore}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 375 },
                { id: "eid470", tween: [ "style", "${_ADAPTIVE_SMALL_ctaON2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 375 }            ]
        }
    }
},
"smlogoWink": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ADAPTIVE_SMALL_logoWCopy',
                    rect: ['-64px', '-23px', '256px', '92px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/ADAPTIVE_SMALL_logoW.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ADAPTIVE_SMALL_logoWCopy}": [
                ["style", "top", '-23px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-64px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '128px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid479", tween: [ "style", "${_ADAPTIVE_SMALL_logoWCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInCubic" }            ]
        }
    }
},
"smallVideo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '101.5%', '100%', 'auto', 'auto'],
                    id: 'Button',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,255,34,0.50)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Button}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(0,255,34,0.50)'],
                ["style", "left", '0px'],
                ["style", "width", '101.5%']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"tagLine_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sloganOuter',
                    type: 'group',
                    rect: ['-10px', '1', '0px', '45px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'slogan_sm',
                        rect: ['-592px', '-19px', '1400px', '74px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/slogan_sm.jpg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sloganOuter}": [
                ["style", "height", '45px'],
                ["style", "width", '0px'],
                ["style", "left", '-10px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slogan_sm}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-592px'],
                ["style", "top", '-19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '449px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid387", tween: [ "style", "${_sloganOuter}", "width", '698px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"tagLine_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sloganOuter',
                    type: 'group',
                    rect: ['-256px', '1', '0px', '45px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'slogan_sm',
                        rect: ['-350px', '-19px', '1400px', '74px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/slogan_sm.jpg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sloganOuter}": [
                ["style", "height", '45px'],
                ["style", "width", '0px'],
                ["style", "left", '-256px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slogan_sm}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-350px'],
                ["style", "top", '-19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '449px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid387", tween: [ "style", "${_sloganOuter}", "width", '698px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"tagLine_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sloganOuter',
                    type: 'group',
                    rect: ['-256px', '1', '0px', '45px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'slogan_sm',
                        rect: ['-350px', '-19px', '1400px', '74px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/slogan_sm.jpg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sloganOuter}": [
                ["style", "height", '45px'],
                ["style", "width", '0px'],
                ["style", "left", '-256px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slogan_sm}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-350px'],
                ["style", "top", '-19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '449px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid387", tween: [ "style", "${_sloganOuter}", "width", '698px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"tagLine_4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sloganOuter',
                    type: 'group',
                    rect: ['-256px', '1', '0px', '45px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'slogan_sm',
                        rect: ['-350px', '-19px', '1400px', '74px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/slogan_sm.jpg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sloganOuter}": [
                ["style", "height", '45px'],
                ["style", "width", '0px'],
                ["style", "left", '-256px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slogan_sm}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-350px'],
                ["style", "top", '-19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '449px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid387", tween: [ "style", "${_sloganOuter}", "width", '698px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"__SAY_inlineVideo_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Placeholder',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,34,255,0.50)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Placeholder}": [
                ["style", "top", '0px'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(0,34,255,0.50)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"tagLine_5": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sloganOuter',
                    type: 'group',
                    rect: ['-256px', '1', '0px', '45px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'slogan_sm',
                        rect: ['-350px', '-19px', '1400px', '74px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/slogan_sm.jpg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sloganOuter}": [
                ["style", "height", '45px'],
                ["style", "width", '0px'],
                ["style", "left", '-256px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slogan_sm}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-350px'],
                ["style", "top", '-19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '449px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid387", tween: [ "style", "${_sloganOuter}", "width", '698px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"tagLine_6": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sloganOuter',
                    type: 'group',
                    rect: ['-256px', '1', '0px', '45px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'slogan_sm',
                        rect: ['-350px', '-19px', '1400px', '74px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.5', '0.5']],
                        fill: ['rgba(0,0,0,0)', 'images/Adaptive_SM_imgs/slogan_sm.jpg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sloganOuter}": [
                ["style", "height", '45px'],
                ["style", "width", '0px'],
                ["style", "left", '-256px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slogan_sm}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-350px'],
                ["style", "top", '-19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '449px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid387", tween: [ "style", "${_sloganOuter}", "width", '698px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-179427669");
