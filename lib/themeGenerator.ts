/// <reference types="types-for-adobe/Illustrator/2015.3"/>

var vintageRed = [45, 67, 167, 234, 64, 241, 255, 162, 76, 231, 64];
var vintageGreen = [67, 91, 111, 178, 122, 194, 216, 205, 75, 177, 216];
var vintageBlue = [86, 102, 111, 160, 100, 123, 156, 176, 22, 10, 102];

var futuristicRed = [0, 0, 246, 56, 147, 232, 243, 246, 233, 43, 246];
var futuristicGreen = [121, 223, 250, 0, 118, 147, 188, 255, 102, 39, 147];
var futuristicBlue = [255, 135, 112, 96, 224, 207, 200, 166, 160, 48, 200];

var retroRed = [154, 225, 255, 245, 233, 43, 101, 149, 34, 242, 43];
var retroGreen = [32, 18, 234, 198, 102, 39, 84, 117, 166, 190, 18];
var retroBlue = [140, 153, 234, 236, 160, 48, 175, 222, 153, 34, 48];
var holdRgb: RGBColor[] = [];

//get rgb colors
const getColors = (number: number, selected: string) => {
  var rgb = new RGBColor();

  if (selected === "Vintage") {
    rgb.red = vintageRed[number];
    rgb.green = vintageGreen[number];
    rgb.blue = vintageBlue[number];
  } else if (selected === "Futuristic") {
    rgb.red = futuristicRed[number];
    rgb.green = futuristicBlue[number];
    rgb.blue = futuristicGreen[number];
  } else {
    rgb.red = retroRed[number];
    rgb.green = retroGreen[number];
    rgb.blue = retroBlue[number];
  }
  holdRgb.push(rgb);
  return rgb;
};

//shuffle array for random numbers
function shuffleArray(array: number[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//random theme generator
function generateTheme(selection: ListItem) {
  var selected = selection.text;
  var activeDoc: Document;
  var layerCount: number;
  var layer: Layer;
  holdRgb = [];

  //check if document is open or not
  if (app.documents.length == 0) {
    alert("Create or open a document!");
  } else {
    try {
      activeDoc = app.activeDocument;
      layerCount = activeDoc.layers.length;

      //check and delete "Theme" layer
      for (var ii = layerCount - 1; ii >= 0; ii--) {
        var targetLayer = activeDoc.layers[ii];
        var layerName = new String(targetLayer.name);
        if (layerName == "Generated Theme Layer") {
          activeDoc.layers[ii].remove();
        }
      }

      //add new "Theme" layer
      layer = activeDoc.layers.add();
      layer.name = "Generated Theme Layer";

      // coordinates (in points)
      var y = activeDoc.height / 5;
      var w = activeDoc.width / 6;
      var h = activeDoc.height / 6;

      var randnums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      shuffleArray(randnums);

      //draw 5 color boxes
      for (var i = 0; i < 5; i++) {
        var rect = layer.pathItems.ellipse(y, (w + 50) * i + w / 4, w, h);
        rect.fillColor = getColors(randnums[i], selected);
        rect.stroked = false;
      }
    } catch (e: any) {
      alert(e);
    }
  }
}

function saveToSwatches(){
  if(holdRgb.length > 0){
    try {
        var activeDoc = app.activeDocument;

        var swatchGroup = activeDoc.swatchGroups.add();
        swatchGroup.name = "Generated Theme";
        
        for(var i = 0; i < holdRgb.length; i++){
            var swatch = activeDoc.swatches[i];
            swatch.color = holdRgb[i];
            swatch.name = "swatch" + i + 1;
            swatchGroup.addSwatch(swatch);
        }
    } catch (e: any) {
        alert(e);
    }
  } else {
    alert("No Generated Theme")
  }
};

//ScriptUI
var window: Window;
var groupTwo: Panel;
var groupThree: Group;
var groupFour: Group;
var groupFive: Group;
var myText: StaticText;
var options: DropDownList;
var generateButton: Button;
var closeButton: Button;
var save:Button;

window = new Window("palette", "Random Theme Generator Extension.", undefined, {
  closeButton: true,
});
window.orientation = "column";

groupTwo = window.add("panel", undefined, "");
groupTwo.orientation = "row";
myText = groupTwo.add(
  "statictext",
  undefined,
  "Random Theme Generator by Nemerem"
);

groupThree = window.add("group");
groupThree.orientation = "row";
myText = groupThree.add("statictext", undefined, "Style:");
options = groupThree.add("dropdownlist", undefined, [
  "Vintage",
  "Futuristic",
  "Retro",
]);
options.minimumSize.width = 200;
options.selection = 0;

groupFour = window.add("group");
groupFour.orientation = "row";
generateButton = groupFour.add("button", undefined, "Generate");
save = groupFour.add("button", undefined, "Save");

function runGenerateTheme() {
  try {
    var btMsg = new BridgeTalk();
    btMsg.target = "illustrator";
    btMsg.body = "generateTheme(options.selection)";
    btMsg.send();
  } catch (e: any) {
    alert(e);
  }
}

function runSaveToSwatches() {
    try {
        var btMsg = new BridgeTalk();
        btMsg.target = "illustrator";
        btMsg.body = "saveToSwatches()";
        btMsg.send();
    }
    catch (e: any) {
        alert(e);
    }
};

generateButton.onClick = runGenerateTheme;
save.onClick = runSaveToSwatches;

window.center();
window.show();
