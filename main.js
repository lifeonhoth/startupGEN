$(function() {

    // Populate using an object literal

    WTF.init({
    "heading": [
        ""
    ],

    "response": [
        ""
    ],

    "template": [
        "@wordvow@conssuffix",
        "@wordcons@vowsuffix"

    ],

    "wordvow": [
        "Natura",
        "Form",
        "Inova",
        "Ino",
        "Agri",
        "Aero",
        "Ampli",
        "Archi",
        "Ardu",
        "Wiffle",
        "Bibbli",
        "Chroma",
        "Compu",
        "Forma",
        "Prime",
        "Chrono"
    ],

    "wordcons": [
        "Bit",
        "Gen",
        "Form",
        "Inov",
        "Box",
        "Vox",
        "Amp",
        "Alt",
        "Arc",
        "Box",
        "Cash",
        "Pocket",
        "Bibbl",
        "Vid",
        "Cloud",
        "Phlux",
        "Fab"
    ],

    "conssuffix": [
        ".ly",
        "sense",
        ".js",
        "dyn",
        "gen",
        "co",
        "ble",
        "hub"
    ],

    "vowsuffix": [
        "r",
        ".io",
        ".ly",
        ".js",
        "able",
        "r",
        ".tv"  
        
    ]
});


    // Populate using a JSON file
    //WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});