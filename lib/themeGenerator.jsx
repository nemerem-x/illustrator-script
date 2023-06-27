#target illustrator
#targetengine main
/// <reference types="types-for-adobe/Illustrator/2015.3"/>
var vintageBlue = [86, 102, 111, 160, 100, 123, 156, 176];
var vintageGreen = [67, 91, 111, 178, 122, 194, 216, 205];
var vintageRed = [45, 67, 167, 234, 64, 241, 255, 162];
var futuristicBlue = [45, 67, 36, 5, 64, 9, 255, 162];
var futuristicGreen = [67, 91, 0, 178, 122, 5, 25, 5];
var futuristicRed = [45, 2, 167, 56, 64, 0, 255, 0];
var minimalisticBlue = [30, 30, 30, 30, 0, 0, 0, 0];
var minimalisticGreen = [20, 20, 20, 20, 0, 0, 0, 0];
var minimalisticRed = [10, 10, 10, 10, 0, 0, 0, 0];
var getColors = function (number, selected) {
    var rgb = new RGBColor();
    if (selected === "Vintage") {
        rgb.red = vintageRed[number];
        rgb.green = vintageGreen[number];
        rgb.blue = vintageBlue[number];
    }
    else if (selected === "Futuristic") {
        rgb.red = futuristicRed[number];
        rgb.green = futuristicBlue[number];
        rgb.blue = futuristicGreen[number];
    }
    else {
        rgb.red = minimalisticBlue[number];
        rgb.green = futuristicBlue[number];
        rgb.blue = minimalisticGreen[number];
    }
    return rgb;
};
var runProcess = function(selection) {
    var selected = selection.text;
    //check if document is open or not
    if (app.documents.length == 0) {
        // var doc = app.documents.add(DocumentColorSpace.RGB, 1500, 1500);
        alert("Create or open a document!");
    }
    else {
        try {
            var activeDoc = app.activeDocument;
            var layerCount = activeDoc.layers.length;
            //check and delete "Theme" layer
            for (var ii = layerCount - 1; ii >= 0; ii--) {
                var targetLayer = activeDoc.layers[ii];
                var layerName = new String(targetLayer.name);
                if (layerName == "Generated Theme Layer") {
                    activeDoc.layers[ii].remove();
                }
            }
            //add new "Theme" layer
            var layer = activeDoc.layers.add();
            layer.name = "Generated Theme Layer";
            // activeDoc.textFrames.add();
            // coordinates (in points)
            var y = activeDoc.height / 5;
            var w = activeDoc.width / 6;
            var h = activeDoc.height / 6;
            //shuffle array for random numbers
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            var randnums = [0, 1, 2, 3, 4, 5, 6, 7];
            shuffleArray(randnums);
            //draw 5 color boxes
            for (var i = 0; i < 5; i++) {
                var rect = layer.pathItems.ellipse(y, (w + 50) * i, w, h);
                rect.fillColor = getColors(randnums[i], selected);
                rect.stroked = false;
            }
        }
        catch (e) {
            alert(e);
        }
    }
}
//ScriptUI
var window = new Window("palette", "Random Theme Generator Extension.", undefined, { closeButton: false });
window.orientation = "column";
var groupTwo = window.add("panel", undefined, "");
groupTwo.orientation = "row";
var myText = groupTwo.add("statictext", undefined, "Random Theme Generator by Nemerem");
var groupThree = window.add("group");
groupThree.orientation = "row";
var myText = groupThree.add("statictext", undefined, "Style:");
var options = groupThree.add("dropdownlist", undefined, ["Vintage", "Futuristic", "Minimalistic"]);
options.minimumSize.width = 200;
options.selection = options[0];
var groupFour = window.add("group");
groupFour.orientation = "row";
var generateButton = groupFour.add("button", undefined, "Generate");
var closeButton = groupFour.add("button", undefined, "Close");
function generate() {
    try {
        var btMsg = new BridgeTalk();
        btMsg.target = "illustrator";
        btMsg.body = "runProcess(options.selection)";
        btMsg.send();
    }
    catch (e) {
        alert(e);
    }
}
generateButton.onClick = generate;
closeButton.onClick = function () { window.close(); };
window.center();
window.show();
