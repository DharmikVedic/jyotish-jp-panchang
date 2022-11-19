import * as d3 from 'd3';

export function drawNorthChart(planetArr, signArr, configuration, chartId)
{

    var x, y;
    var xOffset, yOffset, mChartWidth, mChartHeight, mParentWidth, mHalfWidth, mHalfHeight, mQuarterHeight,mQurterWidth ;
    var xPoints = [];
    var yPoints = [];
    var x10pcOffset, y10pcOffset, x5pcOffset, y5pcOffset,planetStr;

    var config = {

        lineColor : 'black',
        planetColor : 'black',
        signColor : 'black',
        width : 350
    };

    var FIRST_STR = ["",""];
    var SECOND_STR = ["",""];
    var THIRD_STR = ["", "", "", ""];
    var FOURTH_STR = ["", ""];
    var FIFTH_STR = ["", "", "", ""];
    var SIXTH_STR = ["", ""];
    var SEVENTH_STR = ["", ""];
    var EIGHTH_STR = ["", ""];
    var NINTH_STR = ["", "", "", ""];
    var TENTH_STR = ["", ""];
    var ELEVENTH_STR = ["", "", "", ""];
    var TWELFTH_STR = ["", ""];

    var SIGN_ARR = ['','','','','','','','','','','',''];

    planetStr = [[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],['']];


    if(planetArr)
    {
        planetStr = planetArr;
    }
    if(signArr)
    {
        SIGN_ARR = signArr;
    }


    if(configuration)
    {
        if(configuration.width)
        {
            config.width = configuration.width;
        }
        if(configuration.lineColor)
        {
            config.lineColor = configuration.lineColor;
        }
        if(configuration.planetColor)
        {
            config.planetColor = configuration.planetColor;
        }
        if(configuration.signColor)
        {
            config.signColor = configuration.signColor;
        }
    }

    // window.onresize =updateWindow;

    function updateWindow(){
        x = window.innerWidth || document.documentElement.clientWidth || svg.clientWidth;
        y = window.innerHeight|| document.documentElement.clientHeight|| svg.clientHeight;
        //svg.attr("width", x).attr("height", y);
        console.log("w/h", x, y);
        calculateDimensions(x-100);
        redrawChart(mChartWidth, mChartHeight);
    }

    function calculateDimensions(width)
    {

        mParentWidth = width;

        xOffset = 0; //mParentWidth / 10;
        yOffset = 0; //mParentWidth / 20;

        mChartWidth = mParentWidth - 2 * xOffset;
        mChartHeight = mChartWidth - 2 * xOffset;

        mHalfWidth = mChartWidth / 2;
        mHalfHeight = mChartHeight / 2;

        mQuarterHeight = mHalfHeight / 2;
        mQurterWidth = mHalfWidth / 2;

        xPoints[0] = xOffset; // Top Left X-Coordinate
        yPoints[0] = yOffset; // Top Left Y-Coordinate

        xPoints[1] = xOffset + mChartWidth;
        yPoints[1] = yOffset;

        xPoints[2] = xOffset + mChartWidth;
        yPoints[2] = yOffset + mChartHeight;

        xPoints[3] = xOffset;
        yPoints[3] = yOffset + mChartHeight;

        xPoints[4] = xOffset + mHalfWidth;
        yPoints[4] = yOffset;

        xPoints[5] = xOffset + mChartWidth;
        yPoints[5] = yOffset + mHalfHeight;

        xPoints[6] = xOffset + mHalfWidth;
        yPoints[6] = yOffset + mChartHeight;

        xPoints[7] = xOffset;
        yPoints[7] = yOffset + mHalfHeight;

        x10pcOffset = ((xPoints[1] - xPoints[0]) + (yPoints[1] - yPoints[0])) / 10;
        y10pcOffset = ((xPoints[3] - xPoints[0]) + (yPoints[3] - yPoints[0])) / 10;

        x5pcOffset = ((xPoints[1] - xPoints[0]) + (yPoints[1] - yPoints[0])) / 20;
        y5pcOffset = ((xPoints[3] - xPoints[0]) + (yPoints[3] - yPoints[0])) / 20;
    }

    calculateDimensions(config.width);

    var width = mChartWidth;
    var height = mChartHeight;

    var lineFunction = d3.line()
        .x(function(d){ return d.x; })
        .y(function(d){ return d.y; })
        // .interpolate(d3.linear);

    var lineData = function(val)
    {
        var arr = [];
        switch(val)
        {
            case 1:
                arr.push({"x":0, "y":0});
                arr.push({"x":width/2, "y":0});
                arr.push({"x":width/4, "y":height/4});
                arr.push({"x":0, "y":0});
                break;
            case 2:
                arr.push({"x":width/2, "y":0});
                arr.push({"x":width, "y":0});
                arr.push({"x":width - width/4, "y":height/4});
                arr.push({"x":width/2, "y":0});
                break;
            case 3:
                arr.push({"x":0, "y":0});
                arr.push({"x":width/4, "y":height/4});
                arr.push({"x":0, "y":height/2});
                arr.push({"x":0, "y":0});
                break;
            case 4:
                arr.push({"x":width/2, "y":0});
                arr.push({"x":width/4, "y":height/4});
                arr.push({"x":width/2, "y":height/2});
                arr.push({"x":width - width/4, "y":height/4});
                arr.push({"x":width/2, "y":0});
                break;
            case 5:
                arr.push({"x":width, "y":0});
                arr.push({"x":width - width/4, "y":height/4});
                arr.push({"x":width, "y":height/2});
                arr.push({"x":width, "y":0});
                break;
            case 6:
                arr.push({"x":0, "y":height/2});
                arr.push({"x":width/4, "y":height/4});
                arr.push({"x":width/2, "y":height/2});
                arr.push({"x":width/4, "y":height - height/4});
                arr.push({"x":0, "y":height/2});
                break;
            case 7:
                arr.push({"x":width/2, "y":height/2});
                arr.push({"x":width - width/4, "y":height/4});
                arr.push({"x":width, "y":height/2});
                arr.push({"x":width - width/4, "y":height - height/4});
                arr.push({"x":width/2, "y":height/2});
                break;
            case 8:
                arr.push({"x":0, "y":height/2});
                arr.push({"x":width/4, "y":height - height/4});
                arr.push({"x":0, "y":height});
                arr.push({"x":0, "y":height/2});
                break;
            case 9:
                arr.push({"x":width/4, "y":height - height/4});
                arr.push({"x":width/2, "y":height/2});
                arr.push({"x":width - width/4, "y":height - height/4});
                arr.push({"x":width/2, "y":height});
                arr.push({"x":width/4, "y":height - height/4});
                break;
            case 10:
                arr.push({"x":width - width/4, "y":height - height/4});
                arr.push({"x":width, "y":height/2});
                arr.push({"x":width, "y":height});
                arr.push({"x":width - width/4, "y":height - height/4});
                break;
            case 11:
                arr.push({"x":0, "y":height});
                arr.push({"x":width/4, "y":height - height/4});
                arr.push({"x":width/2, "y":height});
                arr.push({"x":0, "y":height});
                break;
            case 12:
                arr.push({"x":width/2, "y":height});
                arr.push({"x":width - width/4, "y":height - height/4});
                arr.push({"x":width, "y":height});
                arr.push({"x":width/2, "y":height});
                break;
        }

        return arr;
    };


    var svg ;

    var chart;

    var redrawChart = function(w,h)
    {
        d3.select(chartId+" svg")
            .remove();

        svg = d3.select(chartId).append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "chartSvg")
            .append("g");

        width = w;
        height = h;
        chart = svg.append("path")
            .attr("d", lineFunction(lineData(1)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(2)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(3)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(4)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(5)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(6)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(7)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(8)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(9)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(10)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(11)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        chart = svg.append("path")
            .attr("d", lineFunction(lineData(12)))
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 2)
            .attr("fill", "none");


        var text = svg.append("text").text("Sun").attr("font-size", "20px");

        //console.log(text.node().getBBox().width);



        drawRashiNumbers(svg, SIGN_ARR);


        drawCenterHouse(svg, FIRST_STR[1], FIRST_STR[0], xPoints[4], yPoints[4]);
        drawCenterHouse(svg, FOURTH_STR[1], FOURTH_STR[0], xPoints[0] + mQurterWidth, yPoints[0] + mQuarterHeight);
        drawCenterHouse(svg, SEVENTH_STR[1], SEVENTH_STR[0], xPoints[4], yPoints[4] + mHalfHeight);
        drawCenterHouse(svg, TENTH_STR[1], TENTH_STR[0], xPoints[4] + mQurterWidth, yPoints[4] + mQuarterHeight);

        drawTrianeHouse(svg, SECOND_STR[0], SECOND_STR[1], xPoints[0], yPoints[0], true);
        drawTrianeHouse(svg, TWELFTH_STR[0], TWELFTH_STR[1], xPoints[4], yPoints[4], true);
        drawTrianeHouse(svg, SIXTH_STR[1], SIXTH_STR[0], xPoints[3], yPoints[3], false);
        drawTrianeHouse(svg, EIGHTH_STR[1], EIGHTH_STR[0], xPoints[6], yPoints[6], false);

        drawTrianeHouse2(svg, THIRD_STR[0], THIRD_STR[1], THIRD_STR[2], THIRD_STR[3], xPoints[0], yPoints[0], true);
        drawTrianeHouse2(svg, FIFTH_STR[0], FIFTH_STR[1], FIFTH_STR[2], FIFTH_STR[3], xPoints[7], yPoints[7], true);
        drawTrianeHouse2(svg, ELEVENTH_STR[0], ELEVENTH_STR[1], ELEVENTH_STR[2], ELEVENTH_STR[3], xPoints[1], yPoints[1], false);
        drawTrianeHouse2(svg, NINTH_STR[0], NINTH_STR[1], NINTH_STR[2], NINTH_STR[3], xPoints[5], yPoints[5], false);
    };


    function drawRashiNumbers(chart, rashiArr)
    {
        var fontSize = mChartWidth/28+"px";

        var textLength = chart.append("text").text("11").attr("font-size", fontSize).attr('id', 'chartRashiNumber');
        var topTextBounds = textLength.node().getBBox();
        var xc = topTextBounds.width / 2;
        var yc = topTextBounds.height / 2;

        chart.select("#chartRashiNumber").remove();

        chart.append("text").text("" + rashiArr[0]).attr("font-size", fontSize).attr("x" , xPoints[4] - xc).attr("y", yPoints[7] - y10pcOffset).style('fill', config.signColor); // for Lagna rashi
        chart.append("text").text("" + rashiArr[1]).attr("font-size", fontSize).attr("x" , (xPoints[4] - mQurterWidth) - xc).attr("y",  (yPoints[7] - mQuarterHeight) - y10pcOffset).style('fill', config.signColor); // for second house
        chart.append("text").text("" + rashiArr[2]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] - mQurterWidth) - x10pcOffset).attr("y",  (yPoints[7] - mQuarterHeight) - yc).style('fill', config.signColor); // for third house

        chart.append("text").text("" + rashiArr[3]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] - mQurterWidth) - xc).attr("y",  (yPoints[6] - mQuarterHeight) - y10pcOffset).style('fill', config.signColor); // for fourth house
        chart.append("text").text("" + rashiArr[4]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] - mQurterWidth) - x10pcOffset).attr("y",   (yPoints[6] - mQuarterHeight) - yc).style('fill', config.signColor); // for fifth house

        chart.append("text").text("" + rashiArr[5]).attr("font-size", fontSize).attr("x" ,  (xPoints[7] + mQurterWidth) - xc).attr("y",   (yPoints[6] - mQuarterHeight) + y10pcOffset).style('fill', config.signColor); // for sixth house
        chart.append("text").text("" + rashiArr[6]).attr("font-size", fontSize).attr("x" ,  (xPoints[4]) - xc).attr("y",   (yPoints[7]) + y10pcOffset).style('fill', config.signColor); // for seventh house

        chart.append("text").text("" + rashiArr[7]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] + mQurterWidth) - xc).attr("y",  (yPoints[6] - mQuarterHeight) + y10pcOffset).style('fill', config.signColor); // for eighth house
        chart.append("text").text("" + rashiArr[8]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] + mQurterWidth) + x5pcOffset * 1.5).attr("y",  (yPoints[7] + mQuarterHeight) - yc).style('fill', config.signColor); // for ninth house

        chart.append("text").text("" + rashiArr[9]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] + mQurterWidth) - xc).attr("y",  (yPoints[6] - mQuarterHeight) - y10pcOffset).style('fill', config.signColor); // for tenth house
        chart.append("text").text("" + rashiArr[10]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] + mQurterWidth) + x5pcOffset * 1.5).attr("y",  (yPoints[4] + mQuarterHeight) - yc).style('fill', config.signColor); // for eleventh house

        chart.append("text").text("" + rashiArr[11]).attr("font-size", fontSize).attr("x" ,  (xPoints[4] + mQurterWidth) - xc).attr("y",  (yPoints[4] + mQuarterHeight) - y10pcOffset).style('fill', config.signColor); // for twelfth house
    }

    function drawCenterHouse(canvas, topString, bottomString, topX, topY)
    {
        var tHeight, tWidth, bWidth;

        var fontSize = mChartWidth/30+"px";

        var topTextBounds = canvas.append("text").text(topString).attr("font-size", fontSize).attr('id', 'chartCenterHouse1').node().getBBox();
        var bottomTextBounds = canvas.append("text").text(topString).attr("font-size", fontSize).attr('id', 'chartCenterHouse2').node().getBBox();

        tHeight = topTextBounds.height;

        tWidth = topTextBounds.width / 2;
        bWidth = bottomTextBounds.width / 2;

        var  xCorrT = tWidth;
        var  yCorrT = 2 * y10pcOffset;

        var xCorrB = bWidth;
        var yCorrB = 2 * y10pcOffset + tHeight + x5pcOffset;

        canvas.select("#chartCenterHouse1").remove();
        canvas.select("#chartCenterHouse2").remove();

        if (bottomString.length > 1) {

            canvas.append("text").text(bottomString).attr("font-size", fontSize).attr("x" , topX - xCorrB).attr("y", topY + yCorrB).style('fill', config.planetColor);

            if (topString.length > 1) {

                canvas.append("text").text(topString).attr("font-size", fontSize).attr("x" ,topX - xCorrT).attr("y", topY + yCorrT).style('fill', config.planetColor);
            }
        }
    }

    function drawTrianeHouse(canvas, topString, bottomString, leftX, leftY, isTop)
    {
        var tHeight, tWidth, bWidth;

        var fontSize = mChartWidth/30+"px";

        var topTextBounds = canvas.append("text").text(topString).attr("font-size", fontSize).attr('id', 'chartTrineHouse1').node().getBBox();
        var bottomTextBounds = canvas.append("text").text(topString).attr("font-size", fontSize).attr('id', 'chartTrineHouse2').node().getBBox();

        tHeight = topTextBounds.height;

        tWidth = topTextBounds.width / 2;
        bWidth = bottomTextBounds.width / 2;

        var xCorrT = tWidth;
        var yCorrT = y5pcOffset;
        var xCorrB = bWidth;
        var yCorrB = x5pcOffset + tHeight;

        canvas.select("#chartTrineHouse1").remove();
        canvas.select("#chartTrineHouse2").remove();


        if (isTop) {
            if (topString.length > 1) {

                canvas.append("text").text(topString).attr("font-size", fontSize).attr("x" , leftX + mQurterWidth - xCorrT).attr("y", leftY + yCorrT).style('fill', config.planetColor);

                if (bottomString.length > 1)
                {
                    canvas.append("text").text(bottomString).attr("font-size", fontSize).attr("x" , leftX + mQurterWidth - xCorrB).attr("y", leftY + yCorrB).style('fill', config.planetColor);
                }
            }
        } else {
            if (bottomString.length > 1) {

                canvas.append("text").text(bottomString).attr("font-size", fontSize).attr("x" , leftX + mQurterWidth - xCorrB).attr("y", leftY - yCorrT).style('fill', config.planetColor);

                if (topString.length > 1) {
                    canvas.append("text").text(topString).attr("font-size", fontSize).attr("x" , leftX + mQurterWidth - xCorrT).attr("y", leftY - yCorrB).style('fill', config.planetColor);
                }
            }
        }
    }

    function drawTrianeHouse2(canvas, str1, str2, str3, str4, leftX, leftY,  isLeft)
    {

        var fontSize = mChartWidth/30+"px";
        var topTextBounds = canvas.append("text").text(str1).attr("font-size", fontSize).attr('id', 'chartTrineHouse3').node().getBBox();
        var tHeight = topTextBounds.height;
        var yCorrT = 3 * y5pcOffset;
        var xCorr = y5pcOffset / 2;
        var yCorrB = (x10pcOffset / 5) + tHeight;

        canvas.select("#chartTrineHouse3").remove();

        if (isLeft) {
            if (str1.length > 1) {

                canvas.append("text").text(str1).attr("font-size", fontSize).attr("x" , leftX + xCorr).attr("y", leftY + yCorrT + yCorrB).style('fill', config.planetColor);
                canvas.append("text").text(str2).attr("font-size", fontSize).attr("x" , leftX + xCorr).attr("y", leftY + yCorrT + 2 * yCorrB).style('fill', config.planetColor);
                canvas.append("text").text(str3).attr("font-size", fontSize).attr("x" , leftX + xCorr).attr("y", leftY + yCorrT + 3 * yCorrB).style('fill', config.planetColor);
                canvas.append("text").text(str4).attr("font-size", fontSize).attr("x" , leftX + xCorr).attr("y", leftY + yCorrT).style('fill', config.planetColor);

            }
        } else {
            if (str1.length > 1) {

                canvas.append("text").text(str1).attr("font-size", fontSize).attr("x" , leftX - xCorr).attr("y", leftY + yCorrT + yCorrB).attr("text-anchor", "end").style('fill', config.planetColor);
                canvas.append("text").text(str2).attr("font-size", fontSize).attr("x" , leftX - xCorr).attr("y", leftY + yCorrT + 2 * yCorrB).attr("text-anchor", "end").style('fill', config.planetColor);
                canvas.append("text").text(str3).attr("font-size", fontSize).attr("x" , leftX - xCorr).attr("y", leftY + yCorrT + 3 * yCorrB).attr("text-anchor", "end").style('fill', config.planetColor);
                canvas.append("text").text(str4).attr("font-size", fontSize).attr("x" , leftX - xCorr).attr("y", leftY + yCorrT).attr("text-anchor", "end").style('fill', config.planetColor);

            }
        }
    }






    function updatePlanetStrArrays()
    {

        for(var i=0; i<planetStr.length;i++){

            var  str = planetStr[i];

            if(!(null != str && str.length> 0)) {
                str = " ";
            }
            switch (i) {
                case 0:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        FIRST_STR[0] = part1;
                        FIRST_STR[1] = part2;
                    }else{
                        FIRST_STR[0] = str;
                        FIRST_STR[1] = "";
                    }

                    break;
                case 1:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        SECOND_STR[0] = part1;
                        SECOND_STR[1] = part2;
                    }else{
                        SECOND_STR[0] = str;
                        SECOND_STR[1] = "";
                    }
                    break;
                case 2:
                    partComplexArray(str,THIRD_STR);
                    break;
                case 3:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        FOURTH_STR[0] = part1;
                        FOURTH_STR[1] = part2;
                    }else{
                        FOURTH_STR[0] = str;
                        FOURTH_STR[1] = "";
                    }
                    break;
                case 4:
                    partComplexArray(str,FIFTH_STR);
                    break;
                case 5:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        SIXTH_STR[0] = part1;
                        SIXTH_STR[1] = part2;
                    }else{
                        SIXTH_STR[0] = str;
                        SIXTH_STR[1] = "";
                    }
                    break;
                case 6:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        SEVENTH_STR[0] = part1;
                        SEVENTH_STR[1] = part2;
                    }else{
                        SEVENTH_STR[0] = str;
                        SEVENTH_STR[1] = "";
                    }
                    break;
                case 7:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        EIGHTH_STR[0] = part1;
                        EIGHTH_STR[1] = part2;
                    }else{
                        EIGHTH_STR[0] = str;
                        EIGHTH_STR[1] = "";
                    }
                    break;
                case 8:
                    partComplexArray(str,NINTH_STR);
                    break;
                case 9:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        TENTH_STR[0] = part1;
                        TENTH_STR[1] = part2;
                    }else{
                        TENTH_STR[0] = str;
                        TENTH_STR[1] = "";
                    }
                    break;
                case 10:
                    partComplexArray(str,ELEVENTH_STR);
                    break;
                case 11:
                    if(str.length > 14){
                        var part1 = str.substring(0,14);
                        var part2 = str.substring(14,str.length);
                        TWELFTH_STR[0] = part1;
                        TWELFTH_STR[1] = part2;
                    }else{
                        TWELFTH_STR[0] = str;
                        TWELFTH_STR[1] = "";
                    }
                    break;
            }
        }

        redrawChart(width,height);
    }

    function partComplexArray(str, updateArr)
    {

        if(str.length > 8)
        {
            updateArr[0] = str.substring(0,8);
            try
            {
                updateArr[1] = str.substring(9, 17);
            }
            catch (error)
            {
                updateArr[1] = "";
                updateArr[2] = "";
                updateArr[3] = "";
                return;
            }
            try
            {
                updateArr[2] = str.substring(18, 20);
            }
            catch (error)
            {
                updateArr[2] = "";
                updateArr[3] = "";
            }
            try
            {
                updateArr[3] = str.substring(21, str.length);
            }
            catch (error)
            {
                updateArr[3] = "";
            }
        }
        else
        {
            updateArr[0] = str;
            updateArr[1] = "";
            updateArr[2] = "";
            updateArr[3] = "";
        }

    }


    /*draw the chart*/
    updatePlanetStrArrays();

}