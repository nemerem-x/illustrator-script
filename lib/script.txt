// #include "./lib/color.js"

// var width = 1000;
// var height = 1000;
// var presets = app.startupPresetsList;
// var preset = presets[0];

// var docPreset = new DocumentPreset();
// docPreset.title = "Color Pallete";
// docPreset.width = width;
// docPreset.height = height;
// docPreset.colorMode = DocumentColorSpace.RGB;
// docPreset.units = RulerUnits.Pixels;

// if(app.homeScreenVisible){
//   alert("create a file");
// } else {
//   var doc = app.activeDocument;
//   var layer = doc.layers.add();

//   // coordinates (in points)
//   var y = 0;
//   var x = 0;
//   var w = 100 * 1.333;
//   var h = 100 * 1.333;

//   //draw 5 color boxes
//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//   }
//   var randnums = [0, 1, 2, 3, 4, 5, 6, 7];
//   shuffleArray(randnums);

//   for (var i = 0; i < 5; i++) {
//     var rect = layer.pathItems.rectangle(y,i * w, w, h);
//     rect.fillColor = randomVintage(randnums[i]);
//     rect.stroked = false;
//   }
// }

// var file = new File(new File($.fileName).path + "/properties.txt");
//         file.open("w");
//         for (var property in style.selection) {
//           try {
//             file.writeln(property + ": " + style.selection[property]);
//           } catch (_) {
//             file.writeln(property + ": failed to get value");
//           }
//         }
//         file.close();
//         alert("File output");


// With Illustrator, you should use BridgeTalk in a palette Window, you function will be like this:

// function onClick(){
//   var btMsg = new BridgeTalk();
//   btMsg.target = "illustrator";
//   btMsg.body = "app.activeDocument.save();";//or do something else.
//   btMsg.onResult = function( resultMsg ) {
//     $.writeln("Result = " + resultMsg.body);
//   }
//   btMsg.onError = function( errorMsg ) {
//     $.writeln("Error = " + errorMsg.body);
//   }
//   btMsg.send(); 
// }



// so this will work:

// app.activeDocument.artboards.add([0 , 0, 200, -50]);
// app.activeDocument.artboards.add([-10 , -10, 200, -50]);
// app.activeDocument.artboards.add([10 , 10, 200, -50]);

// but this will not work:

// app.activeDocument.artboards.add([0 , 0, 200, 50])
// app.activeDocument.artboards.add([0 , 0, -200, -50])
// app.activeDocument.artboards.add([0 , 0, -200, 50])



// var activeDoc = app.activeDocument;

//       var firstArtBoard = activeDoc.artboards[0];
//       // alert(firstArtBoard.artboardRect);
//       var x1 = firstArtBoard.artboardRect[2] + 30;
//       var y1 = firstArtBoard.artboardRect[1];
//       var x2 = x1 + firstArtBoard.artboardRect[2];
//       var y2 = firstArtBoard.artboardRect[3];
//       // var width = activeDoc.width;
//       // var height = activeDoc.height;
//       // var margin = 20;
      
//       var newArtBoard = activeDoc.artboards.add([x1, y1, x2, y2]);
//       newArtBoard.name = "Theme";



// var vintage = [
//     { red: 45, green: 67, blue: 86 },
//     { red: 67, green: 91, blue: 102 },
//     { red: 167, green: 111, blue: 111 },
//     { red: 234, green: 178, blue: 160 },
//     { red: 64, green: 122, blue: 100 },
//     { red: 241, green: 194, blue: 123 },
//     { red: 255, green: 216, blue: 156 },
//     { red: 162, green: 205, blue: 176 },
//   ];

//   var col = vintage[number];