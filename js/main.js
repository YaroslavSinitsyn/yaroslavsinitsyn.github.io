// function OnHundred() {
//             var svg = d3.select("svg");
//             svg.selectAll("*").remove();
//             d3.select("svg").remove();
//             document.getElementById('#name').textContent = 100;
//             ShowSvg("data/tree.json");
//         }

//         function OnOneThousand() {
//             var svg = d3.select("svg");
//             svg.selectAll("*").remove();
//             d3.select("svg").remove();
//             document.getElementById('#name').textContent = 1280;
//             ShowSvg("data/tree1.json");
//         }

//         function OnFiveThousand() {
//             var svg = d3.select("svg");
//             svg.selectAll("*").remove();
//             d3.select("svg").remove();
//             document.getElementById('#name').textContent = 5120;
//             ShowSvg("data/tree2.json");
//         }

//         function OnTenThousand() {
//             var svg = d3.select("svg");
//             svg.selectAll("*").remove();
//             d3.select("svg").remove();
//             document.getElementById('#name').textContent = 10240;
//             ShowSvg("data/tree3.json");
//         }

//         //var arrayLeters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1', 'S1', 'T1', 'U1', 'V1', 'W1', 'X1', 'Y1', 'Z1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2', 'K2', 'L2', 'M2', 'N2', 'O2', 'P2', 'Q2', 'R2', 'S2', 'T2', 'U2', 'V2', 'W2', 'X2', 'Y2', 'Z2', 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'L3', 'M3', 'N3', 'O3', 'P3', 'Q3', 'R3', 'S3', 'T3', 'U3', 'V3', 'W3', 'X3', 'Y3', 'Z3', 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4', 'K4', 'L4', 'M4', 'N4', 'O4', 'P4', 'Q4', 'R4', 'S4', 'T4', 'U4', 'V4', 'W4', 'X4', 'Y4', 'Z4', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5', 'K5', 'L5', 'M5', 'N5', 'O5', 'P5', 'Q5', 'R5', 'S5', 'T5', 'U5', 'V5', 'W5', 'X5', 'Y5', 'Z5'];

//         //var arrayNew = []

//         //for (var i = 0; i < arrayLeters.length; i++) {
//         //    for (var j = 0; j < arrayLeters.length; j++) {
//         //        var temp = arrayLeters[i] + arrayLeters[j];
//         //        arrayNew.push(temp);
//         //    }
//         //}

//         //var s = 2;
//         //var item = 0;
//         //var objT = {
//         //}

//         //Test(objT, 10);
        
//         //function Test(obj1, n) {
//         //    if (n == 0) {
//         //        return
//         //    }
//         //    if (n == 1) {
//         //        s = 10;
//         //    }
//         //    obj1.children = []
//         //    for (var i = 0; i < s; i++) {
//         //        var obj = {};
//         //        if (s !== 10)
//         //            obj.offset = Math.random() * (10 - 1) + 1;
//         //        else
//         //            obj.offset = 0;
//         //        obj.name = arrayNew[item];
//         //        obj1.children.push(obj);
//         //        item = item + 1;
//         //    }
//         //    s = 2;

//         //    n--;
//         //    for (var i = 0; i < obj1.children.length; i++) {
//         //        Test(obj1.children[i], n);
//         //    }
//         //}
//         //var t = JSON.stringify(objT);
//         //console.log(t);

//         ShowSvg("data/tree.json");
//         function ShowSvg(name) {
//             d3.json(name, function (error, root) {

//                 var flag = false;
//                 var width = 800, height = 550;
//                 var tree = d3.layout.tree()
//                         .size([height - 40, width - 80]);

//                 var svg = d3.select(".svgDiv").append("svg")
//                     .attr("width", width)
//                     .attr("height", height)
//                     .append("g")
//                     .attr("transform", "translate(40,40)")

//                 var example = d3.select("svg").append("filter")
//                     .attr('x', 0)
//                     .attr('y', 0)
//                     .attr("width", 1)
//                     .attr("height", 1)
//                     .attr('id', 'solid');

//                 example.append("feFlood")
//                     .attr('flood-color', '#0094ff');

//                 example.append("feComposite")
//                     .attr('in', 'SourceGraphic');


//                 svg.append("line")
//                     .style("stroke", "black")
//                     .attr("x1", 0)
//                     .attr("y1", 0)
//                     .attr("x2", 720)
//                     .attr("y2", 0)
//                     .style("user-select", "none");

//                 var rect = svg.append("rect")
//                     .attr("x", -5)
//                     .attr("y", -10)
//                     .attr("width", 10)
//                     .attr("height", 20)
//                     .attr("class", 'slider')
//                     .style("cursor", "pointer");

//                 var svgDiv = d3.select("body");

//                 rect.on("mousedown", function () {
//                     flag = true;
//                 });

//                 svgDiv.on("mousemove", function () {
//                     if (flag) {
//                         var x = d3.mouse(this)[0];
//                         if (x > 40 && x < 765) {
//                             d3.select(".slider").attr("transform", function () {
//                                 return "translate(" + (x - 40) + ",0)"
//                             });
//                             var a = line.attr("transform", function () {
//                                 return "translate(" + (x - 40) + ",0)"
//                             });

//                             Line.xS = (x - 40);
//                             Line.yS = 0;
//                             Line.xE = (x - 40);
//                             Line.yE = height;
//                         }
//                     }
//                 });

//                 var Line = {
//                     xS: 0,
//                     yS: 0,
//                     xE: 0,
//                     yE: height,
//                     name: ''
//                 };

//                 svgDiv.on("mouseup", function () {
//                     if (flag)
//                         showPoint();

//                     flag = false;
//                 })

//                 arrayRect = [];
//                 arrayText = [];
//                 arrayPoint = [];

//                 function showPoint() {
//                     var cout = 0;
                    
//                     arrayRect.forEach(function (r) {
//                         d3.select('.' + r).remove();
//                     })

//                     arrayText.forEach(function (t) {
//                         d3.select('.' + t).remove();
//                     })

//                     arrayPoint.forEach(function (p) {
//                         svg.select('.' + p)
//                                     .style("visibility", "hidden"); //d3.select('.' + p).remove();
//                     })

//                     arrFilter.forEach(function (a) {

//                         if (a.offset === 0) {
//                             result = false;
//                         }
//                         else {
//                             var result = lineIntersect(Math.round(Line.xS), Math.round(Line.yS), Math.round(Line.xE), Math.round(Line.yE), Math.round(a.xS), Math.round(a.yS), Math.round(a.xE), Math.round(a.yE));
//                         }

//                         var name = a.name + "a";

//                         if (result === true) {
//                             node.select('.' + a.name).style("visibility", "visible")
                            
//                             arrayPoint.push(a.name);

//                             var t = d3.select('.' + name)[0];


//                                 if (t[0] == null && a.rect.y - 2 > 0) {
//                                     if (cout % 2) {
//                                         var rect = d3.select("svg")
//                                             .append("rect")
//                                             .attr("x", 0)
//                                             .attr("y", a.rect.y + 38)
//                                             .attr("width", a.rect.width)
//                                             .attr("height", a.rect.height + 2)
//                                             .attr("fill", '#9ed3f8')
//                                             .attr("fill-opacity", 0.4)
//                                             .attr("class", name);
//                                     }
//                                     else {
//                                         var rect = d3.select("svg")
//                                             .append("rect")
//                                             .attr("x", 0)
//                                             .attr("y", a.rect.y + 38)
//                                             .attr("width", a.rect.width)
//                                             .attr("height", a.rect.height + 2)
//                                             .attr("fill", '#ffffff')
//                                             .attr("fill-opacity", 0.4)
//                                             .attr("class", name);
//                                     }

//                                     arrayRect.push(name);
//                                     d3.select('.' + name).moveToBack();
//                                 }

//                                 if (t[0] == null) {
//                                     svg.append("text")
//                                         .attr("x", function (d) { return 0 })
//                                         .attr("y", function (d) { return a.yS })
//                                         .attr("class", name + '1')
//                                         .style("user-select", "none")
//                                         .text(function (d) { return arrayLeters[cout]; });

//                                     arrayText.push(name + '1');
//                                     cout += 1;
//                                 }

//                             }
//                         //else {
//                         //    svg.select('.' + a.name)
//                         //            .style("visibility", "hidden");
//                         //}
//                     })
//                 }

//                 d3.selection.prototype.moveToFront = function () {
//                     return this.each(function () {
//                         this.parentNode.appendChild(this);
//                     });
//                 };

//                 d3.selection.prototype.moveToBack = function () {
//                     return this.each(function () {
//                         var firstChild = this.parentNode.firstChild;
//                         if (firstChild) {
//                             this.parentNode.insertBefore(this, firstChild);
//                         }
//                     });
//                 };

//                 function shallowCopy(original) {
//                     // First create an empty object with
//                     // same prototype of our original source
//                     var clone = Object.create(Object.getPrototypeOf(original));

//                     var i, keys = Object.getOwnPropertyNames(original);

//                     for (i = 0 ; i < keys.length ; i++) {
//                         // copy each property into the clone
//                         Object.defineProperty(clone, keys[i],
//                             Object.getOwnPropertyDescriptor(original, keys[i])
//                         );
//                     }

//                     return clone;
//                 }

//                 function elbow(d, i) {
//                     return "M" + d.source.y + "," + d.source.x
//                          + "V" + (d.target.x) + "H" + d.target.y;
//                 }

//                 var nodes = tree.nodes(root);

//                 var n = offset(nodes);

//                 function offset(nodeArray) {
//                     nodeArray.forEach(function (node) {
//                         if (node.offset !== undefined) {
//                             if (node.offset === 0 && node.y !== 720) {
//                                 node.y += 720 - node.y;
//                             }
//                             else {
//                                 node.y += node.offset;
//                             }

//                         }
//                     });
//                 }

//                 var links = tree.links(nodes);

//                 var tempArray = [];

//                 //console.log(tempArray);
//                 function findNodeChild(obj) {
//                     //console.log(obj);
//                     for (var i = 0; i < obj.length; i++) {
//                         if (Array.isArray(obj)) {
//                             if (Array.isArray(obj[i].children))
//                                 findNodeChild(obj[i].children);
//                             else {
//                                 var point = {
//                                     x: 0,
//                                     y: 0,
//                                     name: ''
//                                 }

//                                 point.x = obj[i].x;
//                                 point.y = obj[i].y;
//                                 point.name = obj[i].name;

//                                 tempArray.push(point);
//                             }
//                         }

//                     }
//                 }

//                 function rectObj(tempArray) {
//                     var xMin = 0;
//                     var xMax = 0;

//                     tempArray.forEach(function (a) {
//                         if (xMin === 0 && xMax === 0) {
//                             xMin = a.x;
//                             xMax = a.x;
//                         }

//                         if (xMin > a.x) {
//                             xMin = a.x;
//                         }

//                         if (xMax < a.x) {
//                             xMax = a.x;
//                         }
//                     });

//                     return {
//                         x: 0,
//                         y: xMin,
//                         width: 800,
//                         height: (xMax - xMin)
//                     }
//                 }

//                 var arr = [];

//                 links.forEach(function (l) {
//                     var coordinatLine = {
//                         xS: 0,
//                         yS: 0,
//                         xE: 0,
//                         yE: 0,
//                         name: '',
//                         offset: 0,
//                         rect: {
//                             x: 0,
//                             y: 0,
//                             width: 0,
//                             height: 0
//                         }
//                     };

//                     tempArray = [];

//                     if (Array.isArray(l.target.children))
//                         findNodeChild(l.target.children);

//                     coordinatLine.xS = l.source.y;
//                     coordinatLine.yS = l.target.x;
//                     coordinatLine.xE = l.target.y;
//                     coordinatLine.yE = l.target.x;
//                     coordinatLine.offset = l.target.offset;
//                     coordinatLine.name = l.target.name;


//                     coordinatLine.rect = rectObj(tempArray);


//                     arr.push(coordinatLine);
//                 });


//                 function isNotNZero(value) {
//                     return value.offset !== 0;
//                 }
//                 var arrFilter = arr.filter(isNotNZero);

//                 var link = svg.selectAll(".link")
//                   .data(links)
//                   .enter().append("path")
//                   .attr("class", "link")
//                   .attr("d", elbow);

//                 var node = svg.selectAll(".node")
//                    .data(nodes)
//                    .enter().append("g")
//                    .attr("class", "node")
//                    .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

//                 var t = node.append("circle")
//                   .attr("r", 5)
//                   .style("visibility", "hidden")
//                   .attr("class", function (d) { return d.name });

//                 t.on("mousedown", function () {
//                     //console.log('click');


//                 })

//                 var nameLast;
//                 t.on("mouseover", function () {
//                     d3.select(this).style("cursor", "pointer");
//                     nameLast = this.className.animVal + 'a1';
//                     d3.select('.' + nameLast).attr('filter', "url(#solid)").attr('fill', "white");
//                 })

//                 t.on("mouseleave", function () {
//                     d3.select('.' + nameLast).attr('filter', 'none').attr('fill', "black");
//                 })

//                 var arrayLeters = ['A:', 'B:', 'C:', 'D:', 'E:', 'F:', 'G:', 'H:', 'I:', 'J:', 'K:', 'L:', 'M:', 'N:', 'O:', 'P:', 'Q:', 'R:', 'S:', 'T:', 'U:', 'V:', 'W:', 'X:', 'Y:', 'Z:', 'AA:', 'AB:', 'AC:', 'AD:', 'AE:', 'AF:', 'AG:', 'AH:', 'AI:', 'AJ:', 'AK:', 'AL:', 'AM:', 'AN:', 'AO:', 'AP:', 'AQ:', 'AR:', 'AS:', 'AT:', 'AU:', 'AV:', 'AX:', 'AY:', 'AZ:', 'BA:', 'BB:', 'BC:', 'BD:', 'BE:', 'BF:', 'BG:', 'BH:', 'BI:', 'BJ:', 'BK:', 'BL:', 'BM:', 'BN:', 'BO:', 'BP:', 'BQ:', 'BR:', 'BS:', 'BT:', 'BU:', 'BV:', 'BW:', 'BX:', 'BY:', 'BZ:'];

//                 showPoint();

//                 function lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
//                     var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
//                     var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
//                     if (isNaN(x) || isNaN(y)) {
//                         return false;
//                     } else {
//                         if (x1 >= x2) {
//                             if (!(x2 <= x && x <= x1)) { return false; }
//                         } else {
//                             if (!(x1 <= x && x <= x2)) { return false; }
//                         }
//                         if (y1 >= y2) {
//                             if (!(y2 <= y && y <= y1)) { return false; }
//                         } else {
//                             if (!(y1 <= y && y <= y2)) { return false; }
//                         }
//                         if (x3 >= x4) {
//                             if (!(x4 <= x && x <= x3)) { return false; }
//                         } else {
//                             if (!(x3 <= x && x <= x4)) { return false; }
//                         }
//                         if (y3 >= y4) {
//                             if (!(y4 <= y && y <= y3)) { return false; }
//                         } else {
//                             if (!(y3 <= y && y <= y4)) { return false; }
//                         }
//                     }
//                     return true;
//                 }

//                 var line = svg.append("line")
//                     .style("stroke", "black")
//                     .attr("x1", 0)
//                     .attr("y1", 0)
//                     .attr("x2", 0)
//                     .attr("y2", height)
//                     .attr("id", "lineID");
//             })
//         };

import "treeSvg.js";
let svg = new SvgArea();
console.log(svg)