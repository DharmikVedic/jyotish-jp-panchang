/**
 * Created by Ajeet Kanojia on 5/3/2016.
 */

var planet_abbr = {

    SUN : 'Su',
    MOON : 'Mo',
    MARS : 'Ma',
    MERCURY :'Me',
    JUPITER : 'Ju',
    VENUS : 'Ve',
    SATURN : 'Sa',
    RAHU : 'Ra',
    KETU : 'Ke',
    URANUS : 'Ur',
    NEPTUNE : 'Ne',
    PLUTO : 'pl',
    "सूर्य":"सूर्य","चन्द्र":"चन्द्र","मंगल":"मंगल","बुध":"बुध","बुध ":"बुध","गुरु":"गुरु","शुक्र":"शुक्र","शनि":"शनि","राहु":"राहु","केतु":"केतु","प्लूटो;":"प्लूटो","यूरेनस":"यूरेनस","नेप्चून":"नेप्चून"

};

export function getSignArray(data)
{
    var resp = [];

    for (var i =0; i<data.length; i++)
    {
        resp.push(data[i].sign);
    }

    return resp;
}

export function getSignPlanetArray(data)
{

    var resp = ['','','','','','','','','','','',''];

    for (var i = 0; i< data.length; i++)
    {
        for (var j = 0; j<data[i]['planet_small'].length; j++)
        {
            resp[data[i]['sign']-1]+= data[i]['planet_small'][j] +' ';
        }

    }

    return resp;
}

export function getPlanetArray(data)
{
    var resp = ['','','','','','','','','','','',''];

    for (var i =0; i<data.length; i++)
    {
        for (var j = 0; j<data[i]['planet_small'].length;j++)
        {
            resp[i]+= data[i]['planet_small'][j] +' ';
        }
    }

    return resp;
}
