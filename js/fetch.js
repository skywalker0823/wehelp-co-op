/** fetch weather API  section  */
async function fetchWeather(county){
    const API_KEY = "CWB-5D18B5E4-3042-4DA2-9029-61060F781595";
    const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${API_KEY}&locationName=${county}`
    try{
        let response = await fetch(url); 
        if(response.ok){
            let weatherData = await response.json();
            return weatherData;
        }else{
            throw "weather fetching fail";
        };                              
    }catch(error){
        console.log(error)
    };
};

let weather = fetchWeather("臺北市");

weather.
then((weatherData)=>{
    /**這邊做資料處理&畫面render*/


    /** interact with user section */

    //資料狀態
    ok=weatherData.success
    console.log(ok)

    //資料內容
    dataDescription=weatherData.records.datasetDescription
    console.log(dataDescription)

    //地點
    location = weatherData.records.location[0].locationName

    //資料類型有五種
    let wx = weatherData.records.location[0].weatherElement[0];
    let pop = weatherData.records.location[0].weatherElement[1];
    let mint = weatherData.records.location[0].weatherElement[2];
    let ci = weatherData.records.location[0].weatherElement[3];
    let maxt = weatherData.records.location[0].weatherElement[4];

    //Wx section 天氣現象
    //Wx-start time1 今日18:00~
    wxStartTime1 = wx.time[0].startTime;
    //Wx-end time1 ~隔日06:00
    wxEndTime1 = wx.time[0].endTime;
    //Wx-parameterName1
    wxParameterName1 = wx.time[0].parameter.parameterName;
    //Wx-parameterValue1
    wxParameterValue1=wx.time[0].parameter.parameterValue;

    //Wx-start time2 隔日06:00~
    wxStartTime2 = wx.time[1].startTime;
    //Wx-end time2 ~隔日18:00
    wxEndTime2 = wx.time[1].endTime;
    //Wx-parameterName2
    wxParameterName2 = wx.time[1].parameter.parameterName;
    //Wx-parameterValue2
    wxParameterValue2 = wx.time[1].parameter.parameterValue;

    //Wx-start time3 隔日18:00~
    wxStartTime3 = wx.time[2].startTime;
    //Wx-end time3 ~後天06:00
    wxEndTime3 = wx.time[2].endTime;
    //Wx-parameterName3
    wxParameterName3 = wx.time[2].parameter.parameterName;
    //Wx-parameterValue3
    wxParameterValue3 = wx.time[2].parameter.parameterValue;



    //PoP section 降雨機率 
    //pop-start time1 今日18:00~
    popStartTime1 = pop.time[0].startTime;
    //pop-end time1 ~隔日06:00
    popEndTime1 = pop.time[0].endTime;
    //pop-parameterName1
    popParameterName1 = pop.time[0].parameter.parameterName;
    //pop-parameterValue1
    popParameterUnit1=pop.time[0].parameter.parameterUnit;

    //pop-start time2 隔日06:00~
    popStartTime2 = pop.time[1].startTime;
    //pop-end time2 ~隔日18:00
    popEndTime2 = pop.time[1].endTime;
    //pop-parameterName2
    popParameterName2 = pop.time[1].parameter.parameterName;
    //pop-parameterValue2
    popParameterUnit2 = pop.time[1].parameter.parameterUnit;

    //pop-start time3 隔日18:00~
    popStartTime3 = pop.time[2].startTime;
    //pop-end time3 ~後天06:00
    popEndTime3 = pop.time[2].endTime;
    //pop-parameterName3
    popParameterName3 = pop.time[2].parameter.parameterName;
    //pop-parameterValue3
    popParameterUnit3 = pop.time[2].parameter.parameterUnit;



    //MinT section 最低溫度
    //mint-start time1 今日18:00~
    mintStartTime1 = mint.time[0].startTime;
    //mint-end time1 ~隔日06:00
    mintEndTime1 = mint.time[0].endTime;
    //mint-parameterName1
    mintParameterName1 = mint.time[0].parameter.parameterName;
    //mint-parameterValue1
    mintParameterUnit1=mint.time[0].parameter.parameterUnit;

    //mint-start time2 隔日06:00~
    mintStartTime2 = mint.time[1].startTime;
    //mint-end time2 ~隔日18:00
    mintEndTime2 = mint.time[1].endTime;
    //mint-parameterName2
    mintParameterName2 = mint.time[1].parameter.parameterName;
    //mint-parameterValue2
    mintParameterUnit2 = mint.time[1].parameter.parameterUnit;

    //mint-start time3 隔日18:00~
    mintStartTime3 = mint.time[2].startTime;
    //mint-end time3 ~後天06:00
    mintEndTime3 = mint.time[2].endTime;
    //mint-parameterName3
    mintParameterName3 = mint.time[2].parameter.parameterName;
    //mint-parameterValue3
    mintParameterUnit3 = mint.time[2].parameter.parameterUnit;




    //MaxT section 最高溫度
    //maxt-start time1 今日18:00~
    maxtStartTime1 = maxt.time[0].startTime;
    //maxt-end time1 ~隔日06:00
    maxtEndTime1 = maxt.time[0].endTime;
    //maxt-parameterName1
    mintParameterName1 = maxt.time[0].parameter.parameterName;
    //maxt-parameterValue1
    maxtParameterUnit1=maxt.time[0].parameter.parameterUnit;

    //maxt-start time2 隔日06:00~
    maxtStartTime2 = maxt.time[1].startTime;
    //maxt-end time2 ~隔日18:00
    maxtEndTime2 = maxt.time[1].endTime;
    //maxt-parameterName2
    maxtParameterName2 = maxt.time[1].parameter.parameterName;
    //maxt-parameterValue2
    maxtParameterUnit2 = maxt.time[1].parameter.parameterUnit;

    //maxt-start time3 隔日18:00~
    maxtStartTime3 = maxt.time[2].startTime;
    //maxt-end time3 ~後天06:00
    maxtEndTime3 = maxt.time[2].endTime;
    //maxt-parameterName3
    maxtParameterName3 = maxt.time[2].parameter.parameterName;
    //maxt-parameterValue3
    maxtParameterUnit3 = maxt.time[2].parameter.parameterUnit;





    //CI section 舒適度
    //ci-start time1 今日18:00~
    ciStartTime1 = ci.time[0].startTime;
    //ci-end time1 ~隔日06:00
    ciEndTime1 = ci.time[0].endTime;
    //ci-parameterName1
    ciParameterName = ci.time[0].parameter.parameterName;

    //ci-start time2 隔日06:00~
    ciStartTime2 = ci.time[1].startTime;
    //ci-end time2 ~隔日18:00
    ciEndTime2 = ci.time[1].endTime;
    //ci-parameterName2
    ciParameterName = ci.time[1].parameter.parameterName;

    //ci-start time3 隔日18:00~
    ciStartTime3 = ci.time[2].startTime;
    //ci-end time3 ~後天06:00
    ciEndTime3 = ci.time[2].endTime;
    //ci-parameterName3
    ciParameterName = ci.time[2].parameter.parameterName;

    //畫面render
    //天氣現象
    document.querySelector("#status").innerHTML=wxParameterName1;
    //降雨機率
    document.querySelector("#rain-status-value").innerHTML=popParameterName1;
    //最低溫
    document.querySelector("#temp-low").innerHTML=mintParameterName1;
    //最高溫
    document.querySelector("#temp-high").innerHTML=mintParameterName1;
    //舒適度
    document.querySelector("#comfort").innerHTML=ciParameterName;
    
    console.log(weatherData)
})
.catch((error)=>{
    console.log(error)
});












