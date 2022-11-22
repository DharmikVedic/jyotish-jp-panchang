import * as d3 from 'd3';

export function drawSouthChart(planetArr, ascSign, configuration, chartId)
{

    var x, y;
    var xOffset, yOffset, mChartWidth, mChartHeight, mParentWidth, mHalfWidth, mHalfHeight, mQuarterHeight,mQurterWidth ;
    var xPoints = [];
    var yPoints = [];
    var x10pcOffset, y10pcOffset, x5pcOffset, y5pcOffset,planetStr;

    var config = {

        lineColor : 'black',
        planetColor : 'black',
        ascendantColor : 'blue',
        width : 350

    };

    var FIRST_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var SECOND_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var THIRD_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var FOURTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var FIFTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var SIXTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var SEVENTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var EIGHTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var NINTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var TENTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var ELEVENTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];
    var TWELFTH_STR = ["Su Mo Ve Ma", "Sa Ju Ra Ke", "Ne Pl"];

    var ascendantHouse = 4;

    planetStr = [['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke'],['Su Mo Me Ma Ju Sa Ra Ke']];


    if(planetArr)
    {
        planetStr = planetArr;
    }
    if(ascSign)
    {
        ascendantHouse = ascSign;
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
        if(configuration.ascendantColor)
        {
            config.ascendantColor = configuration.ascendantColor;
        }

    }


    window.onresize = updateWindow;


    function updateWindow(){
        x = window.innerWidth || document.documentElement.clientWidth || svg1.clientWidth;
        y = window.innerHeight|| document.documentElement.clientHeight|| svg1.clientHeight;
        //svg1.attr("width", x).attr("height", y);
        console.log("w/h", x, y);
        calculateDimensions(x-100);
        drawSouthChart(mChartWidth, mChartHeight);
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


    var svg1 ;


    function drawSouthChart(width, height)
    {
        d3.select(chartId+" svg")
            .remove();

        svg1 = d3.select(chartId).append("svg:svg")
            .attr("width", width)
            .attr("height", height)
            .attr("id", "chartSvg")
            .append("g");

        var rectangle = svg1.append("rect")
            .attr("x", xOffset)
            .attr("y", yOffset)
            .attr("width", width)
            .attr("height", height)
            .attr("stroke", config.lineColor)
            .attr("stroke-width", 3)
            .attr("fill", "none");


        svg1.append("line").attr("x1", xOffset + mQurterWidth).attr("y1", yOffset)
            .attr("x2", xOffset + mQurterWidth).attr("y2", yOffset+mChartHeight)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);

        svg1.append("line").attr("x1", xOffset + mQurterWidth * 3).attr("y1", yOffset)
            .attr("x2", xOffset + mQurterWidth * 3).attr("y2", yOffset+mChartHeight)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);

        svg1.append("line").attr("x1", xOffset).attr("y1", yOffset + mQuarterHeight)
            .attr("x2", xOffset + mChartWidth ).attr("y2", yOffset + mQuarterHeight)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);

        svg1.append("line").attr("x1", xOffset).attr("y1", yOffset + mQuarterHeight * 3)
            .attr("x2", xOffset + mChartWidth ).attr("y2", yOffset + mQuarterHeight * 3)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);

        svg1.append("line").attr("x1", xOffset).attr("y1", yOffset + mQuarterHeight * 2)
            .attr("x2", xOffset + mQurterWidth ).attr("y2", yOffset + mQuarterHeight * 2)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);

        svg1.append("line").attr("x1", xOffset + mQurterWidth * 3).attr("y1", yOffset + mQuarterHeight * 2)
            .attr("x2", xOffset + mChartWidth ).attr("y2", yOffset + mQuarterHeight * 2)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);

        svg1.append("line").attr("x1", xOffset + mQurterWidth * 2).attr("y1", yOffset)
            .attr("x2", xOffset + mQurterWidth * 2).attr("y2", yOffset + mQuarterHeight)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);

        svg1.append("line").attr("x1", xOffset + mQurterWidth * 2).attr("y1", yOffset + mQuarterHeight * 3)
            .attr("x2", xOffset + mQurterWidth * 2).attr("y2", yOffset + mChartHeight)
            .attr("stroke-width", 2).attr("stroke", config.lineColor);


        /*First House*/
        drawCenterHouse(svg1, FIRST_STR[0], FIRST_STR[1], FIRST_STR[2], xOffset + mQurterWidth, yOffset, isAscendantHouse(1));

        /*Second House*/
        drawCenterHouse(svg1, SECOND_STR[0], SECOND_STR[1], SECOND_STR[2], xOffset + mQurterWidth *2, yOffset, isAscendantHouse(2));

        /*Third House*/
        drawCenterHouse(svg1, THIRD_STR[0], THIRD_STR[1], THIRD_STR[2], xOffset + mQurterWidth *3, yOffset, isAscendantHouse(3));

        /*Forth House*/
        drawCenterHouse(svg1, FOURTH_STR[0], FOURTH_STR[1], FOURTH_STR[2], xOffset + mQuarterHeight * 3, yOffset + mQurterWidth, isAscendantHouse(4));

        /*Fifth House*/
        drawCenterHouse(svg1, FIFTH_STR[0], FIFTH_STR[1], FIFTH_STR[2], xOffset + mQuarterHeight * 3, yOffset + mQurterWidth * 2, isAscendantHouse(5));

        /*Sixth House*/
        drawCenterHouse(svg1, SIXTH_STR[0], SIXTH_STR[1], SIXTH_STR[2], xOffset + mQuarterHeight * 3, yOffset + mQurterWidth * 3, isAscendantHouse(6));

        /*Seventh House*/
        drawCenterHouse(svg1, SEVENTH_STR[0], SEVENTH_STR[1], SEVENTH_STR[2], xOffset + mQuarterHeight * 2, yOffset + mQurterWidth * 3, isAscendantHouse(7));

        /*Eighth House*/
        drawCenterHouse(svg1, EIGHTH_STR[0], EIGHTH_STR[1], EIGHTH_STR[2], xOffset + mQuarterHeight, yOffset + mQurterWidth * 3, isAscendantHouse(8));

        /*Ninth House*/
        drawCenterHouse(svg1, NINTH_STR[0], NINTH_STR[1], NINTH_STR[2], xOffset, yOffset + mQurterWidth * 3, isAscendantHouse(9));

        /*Tenth House*/
        drawCenterHouse(svg1, TENTH_STR[0], TENTH_STR[1], TENTH_STR[2], xOffset, yOffset + mQurterWidth * 2, isAscendantHouse(10));

        /*Eleventh House*/
        drawCenterHouse(svg1, ELEVENTH_STR[0], ELEVENTH_STR[1], ELEVENTH_STR[2], xOffset, yOffset + mQurterWidth, isAscendantHouse(11));

        /*Twelfth House*/
        drawCenterHouse(svg1, TWELFTH_STR[0], TWELFTH_STR[1], TWELFTH_STR[2], xOffset , yOffset, isAscendantHouse(12));


    }

    function drawCenterHouse(canvas, topString, middleString, bottomString, topX, topY, isAscendant)
    {
        var tHeight, tWidth, bWidth;

        var fontSize = mChartWidth/30+"px",
            ascFontSize = mChartWidth/24+"px";

        var topTextBounds = canvas.append("text").text("").attr("font-size", fontSize).attr('id', 'drawCenterHouse').node().getBBox();

        tHeight = topTextBounds.height;

        var  xCorrT = topX + mQurterWidth * .10;
        var  yCorrT = topY + mQuarterHeight * .25;

        var xCorrM = xCorrT;
        var yCorrM = yCorrT + tHeight + mQuarterHeight * .10;

        var  xCorrB = xCorrT;
        var  yCorrB = yCorrM + mQuarterHeight * .25;

        canvas.select("#drawCenterHouse").remove();

        if(topString.length > 1)
        {
            canvas.append("text").text(topString).attr("font-size", fontSize).attr("x" , xCorrT).attr("y", yCorrT).style('fill', config.planetColor);
        }
        if(middleString.length > 1)
        {
            canvas.append("text").text(middleString).attr("font-size", fontSize).attr("x" , xCorrM).attr("y", yCorrM).style('fill', config.planetColor);
        }
        if(bottomString.length > 1)
        {
            canvas.append("text").text(bottomString).attr("font-size", fontSize).attr("x" , xCorrB).attr("y", yCorrB).style('fill', config.planetColor);
        }
        if(isAscendant)
        {
            if(isAscendant && bottomString.length > 1)
            {
                canvas.append("text").text(bottomString + " Asc").attr("font-size", fontSize).attr("x" , xCorrB).attr("y", yCorrB).style('fill', config.ascendantColor);
            }
            else
            {
                canvas.append("text").text('Asc').attr("font-size", ascFontSize).attr("x" , xCorrB).attr("y", yCorrB).style('fill', config.ascendantColor);
            }
        }

    }

    function isAscendantHouse(house)
    {
        return house == ascendantHouse;
    }

    function updateSouthChartPlanetStrArrays()
    {

        for(var i=0; i<planetStr.length;i++){

            var  str = planetStr[i];

            if(!(null != str && str.length> 0)) {
                str = " ";
            }
            switch (i) {
                case 0:

                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        FIRST_STR[0] = part1;
                        FIRST_STR[1] = part2;
                    }else{
                        FIRST_STR[0] = str;
                        FIRST_STR[1] = "";
                        FIRST_STR[2] = "";
                    }

                    break;
                case 1:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        SECOND_STR[0] = part1;
                        SECOND_STR[1] = part2;
                        SECOND_STR[2] = part3;
                    }else{
                        SECOND_STR[0] = str;
                        SECOND_STR[1] = "";
                        SECOND_STR[2] = "";
                    }
                    break;
                case 2:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        THIRD_STR[0] = part1;
                        THIRD_STR[1] = part2;
                        THIRD_STR[2] = part3;
                    }else{
                        THIRD_STR[0] = str;
                        THIRD_STR[1] = "";
                        THIRD_STR[2] = "";
                    }
                    break;
                case 3:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        FOURTH_STR[0] = part1;
                        FOURTH_STR[1] = part2;
                        FOURTH_STR[2] = part3;
                    }else{
                        FOURTH_STR[0] = str;
                        FOURTH_STR[1] = "";
                        FOURTH_STR[2] = "";
                    }
                    break;
                case 4:

                    if(str.length > 14){

                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        FIFTH_STR[0] = part1;
                        FIFTH_STR[1] = part2;
                        FIFTH_STR[2] = part3;
                    }else{
                        FIFTH_STR[0] = str;
                        FIFTH_STR[1] = "";
                        FIFTH_STR[2] = "";
                    }
                    break;
                case 5:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        SIXTH_STR[0] = part1;
                        SIXTH_STR[1] = part2;
                        SIXTH_STR[2] = part3;
                    }else{
                        SIXTH_STR[0] = str;
                        SIXTH_STR[1] = "";
                        SIXTH_STR[2] = "";
                    }
                    break;
                case 6:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        SEVENTH_STR[0] = part1;
                        SEVENTH_STR[1] = part2;
                        SEVENTH_STR[2] = part3;
                    }else{
                        SEVENTH_STR[0] = str;
                        SEVENTH_STR[1] = "";
                        SEVENTH_STR[2] = "";
                    }
                    break;
                case 7:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        EIGHTH_STR[0] = part1;
                        EIGHTH_STR[1] = part2;
                        EIGHTH_STR[2] = part3;
                    }else{
                        EIGHTH_STR[0] = str;
                        EIGHTH_STR[1] = "";
                        EIGHTH_STR[2] = "";
                    }
                    break;
                case 8:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        NINTH_STR[0] = part1;
                        NINTH_STR[1] = part2;
                        NINTH_STR[2] = part3;
                    }else{
                        NINTH_STR[0] = str;
                        NINTH_STR[1] = "";
                        NINTH_STR[2] = "";
                    }
                    break;
                case 9:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        TENTH_STR[0] = part1;
                        TENTH_STR[1] = part2;
                        TENTH_STR[2] = part3;
                    }else{
                        TENTH_STR[0] = str;
                        TENTH_STR[1] = "";
                        TENTH_STR[2] = "";
                    }
                    break;
                case 10:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        ELEVENTH_STR[0] = part1;
                        ELEVENTH_STR[1] = part2;
                        ELEVENTH_STR[2] = part3;
                    }else{
                        ELEVENTH_STR[0] = str;
                        ELEVENTH_STR[1] = "";
                        ELEVENTH_STR[2] = "";
                    }
                    break;
                case 11:
                    if(str.length > 14){
                        var part1 = str.substring(0,12);
                        var part2 = str.substring(12,26);
                        var part3 = str.substring(26,str.length);
                        TWELFTH_STR[0] = part1;
                        TWELFTH_STR[1] = part2;
                        TWELFTH_STR[2] = part3;
                    }else{
                        TWELFTH_STR[0] = str;
                        TWELFTH_STR[1] = "";
                        TWELFTH_STR[2] = "";
                    }
                    break;
            }
        }

        drawSouthChart(width,height);
    }


    /*draw the chart*/
    updateSouthChartPlanetStrArrays();


}


