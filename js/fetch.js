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



let searchText;
let weather;


if (searchText==null){
    console.log(searchText)
    weather = fetchWeather("臺北市");
}

//抓使用者搜尋的縣市
function getSearchText(){
    searchText=document.querySelector("#input-field").value;
    console.log(searchText)
    weather = fetchWeather(searchText);
    weather.
then((weatherData)=>{
    /**這邊做資料處理&畫面render*/


    /** interact with user section */
    
    //資料狀態
    let ok=weatherData.success;
    console.log(ok);

    //資料內容
    let dataDescription=weatherData.records.datasetDescription;
    console.log(dataDescription);

    //地點
    let location = weatherData.records.location[0].locationName;
    console.log(location)

    //資料類型有五種
    let wx = weatherData.records.location[0].weatherElement[0];
    let pop = weatherData.records.location[0].weatherElement[1];
    let mint = weatherData.records.location[0].weatherElement[2];
    let ci = weatherData.records.location[0].weatherElement[3];
    let maxt = weatherData.records.location[0].weatherElement[4];

    //Wx section 天氣現象
    //Wx-start time1 今日18:00~
    let wxStartTime1 = wx.time[0].startTime;
    //Wx-end time1 ~隔日06:00
    let wxEndTime1 = wx.time[0].endTime;
    //Wx-parameterName1
    let wxParameterName1 = wx.time[0].parameter.parameterName;
    //Wx-parameterValue1
    let wxParameterValue1=wx.time[0].parameter.parameterValue;

    //Wx-start time2 隔日06:00~
    let wxStartTime2 = wx.time[1].startTime;
    //Wx-end time2 ~隔日18:00
    let wxEndTime2 = wx.time[1].endTime;
    //Wx-parameterName2
    let wxParameterName2 = wx.time[1].parameter.parameterName;
    //Wx-parameterValue2
    let wxParameterValue2 = wx.time[1].parameter.parameterValue;

    //Wx-start time3 隔日18:00~
    let wxStartTime3 = wx.time[2].startTime;
    //Wx-end time3 ~後天06:00
    let wxEndTime3 = wx.time[2].endTime;
    //Wx-parameterName3
    let wxParameterName3 = wx.time[2].parameter.parameterName;
    //Wx-parameterValue3
    let wxParameterValue3 = wx.time[2].parameter.parameterValue;



    //PoP section 降雨機率 
    //pop-start time1 今日18:00~
    let popStartTime1 = pop.time[0].startTime;
    //pop-end time1 ~隔日06:00
    let popEndTime1 = pop.time[0].endTime;
    //pop-parameterName1
    let popParameterName1 = pop.time[0].parameter.parameterName;
    //pop-parameterValue1
    let popParameterUnit1=pop.time[0].parameter.parameterUnit;

    //pop-start time2 隔日06:00~
    let popStartTime2 = pop.time[1].startTime;
    //pop-end time2 ~隔日18:00
    let popEndTime2 = pop.time[1].endTime;
    //pop-parameterName2
    let popParameterName2 = pop.time[1].parameter.parameterName;
    //pop-parameterValue2
    let popParameterUnit2 = pop.time[1].parameter.parameterUnit;

    //pop-start time3 隔日18:00~
    let popStartTime3 = pop.time[2].startTime;
    //pop-end time3 ~後天06:00
    let popEndTime3 = pop.time[2].endTime;
    //pop-parameterName3
    let popParameterName3 = pop.time[2].parameter.parameterName;
    //pop-parameterValue3
    let popParameterUnit3 = pop.time[2].parameter.parameterUnit;



    //MinT section 最低溫度
    //mint-start time1 今日18:00~
    let mintStartTime1 = mint.time[0].startTime;
    //mint-end time1 ~隔日06:00
    let mintEndTime1 = mint.time[0].endTime;
    //mint-parameterName1
    let mintParameterName1 = mint.time[0].parameter.parameterName;
    //mint-parameterValue1
    let mintParameterUnit1=mint.time[0].parameter.parameterUnit;

    //mint-start time2 隔日06:00~
    let mintStartTime2 = mint.time[1].startTime;
    //mint-end time2 ~隔日18:00
    let mintEndTime2 = mint.time[1].endTime;
    //mint-parameterName2
    let mintParameterName2 = mint.time[1].parameter.parameterName;
    //mint-parameterValue2
    let mintParameterUnit2 = mint.time[1].parameter.parameterUnit;

    //mint-start time3 隔日18:00~
    let mintStartTime3 = mint.time[2].startTime;
    //mint-end time3 ~後天06:00
    let mintEndTime3 = mint.time[2].endTime;
    //mint-parameterName3
    let mintParameterName3 = mint.time[2].parameter.parameterName;
    //mint-parameterValue3
    let mintParameterUnit3 = mint.time[2].parameter.parameterUnit;




    //MaxT section 最高溫度
    //maxt-start time1 今日18:00~
    let maxtStartTime1 = maxt.time[0].startTime;
    //maxt-end time1 ~隔日06:00
    let maxtEndTime1 = maxt.time[0].endTime;
    //maxt-parameterName1
    let maxtParameterName1 = maxt.time[0].parameter.parameterName;
    //maxt-parameterValue1
    let maxtParameterUnit1=maxt.time[0].parameter.parameterUnit;

    //maxt-start time2 隔日06:00~
    let maxtStartTime2 = maxt.time[1].startTime;
    //maxt-end time2 ~隔日18:00
    let maxtEndTime2 = maxt.time[1].endTime;
    //maxt-parameterName2
    let maxtParameterName2 = maxt.time[1].parameter.parameterName;
    //maxt-parameterValue2
    let maxtParameterUnit2 = maxt.time[1].parameter.parameterUnit;

    //maxt-start time3 隔日18:00~
    let maxtStartTime3 = maxt.time[2].startTime;
    //maxt-end time3 ~後天06:00
    let maxtEndTime3 = maxt.time[2].endTime;
    //maxt-parameterName3
    let maxtParameterName3 = maxt.time[2].parameter.parameterName;
    //maxt-parameterValue3
    let maxtParameterUnit3 = maxt.time[2].parameter.parameterUnit;





    //CI section 舒適度
    //ci-start time1 今日18:00~
    let ciStartTime1 = ci.time[0].startTime;
    //ci-end time1 ~隔日06:00
    let ciEndTime1 = ci.time[0].endTime;
    //ci-parameterName1
    let ciParameterName1 = ci.time[0].parameter.parameterName;

    //ci-start time2 隔日06:00~
    let ciStartTime2 = ci.time[1].startTime;
    //ci-end time2 ~隔日18:00
    let ciEndTime2 = ci.time[1].endTime;
    //ci-parameterName2
    let ciParameterName2 = ci.time[1].parameter.parameterName;

    //ci-start time3 隔日18:00~
    let ciStartTime3 = ci.time[2].startTime;
    //ci-end time3 ~後天06:00
    let ciEndTime3 = ci.time[2].endTime;
    //ci-parameterName3
    let ciParameterName3 = ci.time[2].parameter.parameterName;

    //畫面render
    //地點
    document.querySelector("#place").innerHTML=location;
    //天氣現象
    document.querySelector("#status").innerHTML=wxParameterName1;
    //天氣現象圖示
    document.querySelector("#weather-icon").src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/"+wxParameterValue1+".svg"
    //降雨機率
    document.querySelector("#rain-status-value").innerHTML=popParameterName1;
    //最低溫
    document.querySelector("#temp-low").innerHTML=mintParameterName1;
    //最高溫
    document.querySelector("#temp-high").innerHTML=maxtParameterName1;
    //舒適度
    document.querySelector("#comfort").innerHTML=ciParameterName1;

    
    console.log(weatherData)
})
.catch((error)=>{
    console.log(error)
});
}


weather.
then((weatherData)=>{
    /**這邊做資料處理&畫面render*/


    /** interact with user section */
    
    //資料狀態
    let ok=weatherData.success;
    console.log(ok);

    //資料內容
    let dataDescription=weatherData.records.datasetDescription;
    console.log(dataDescription);

    //地點
    let location = weatherData.records.location[0].locationName;
    console.log(location)

    //資料類型有五種
    let wx = weatherData.records.location[0].weatherElement[0];
    let pop = weatherData.records.location[0].weatherElement[1];
    let mint = weatherData.records.location[0].weatherElement[2];
    let ci = weatherData.records.location[0].weatherElement[3];
    let maxt = weatherData.records.location[0].weatherElement[4];

    //Wx section 天氣現象
    //Wx-start time1 今日18:00~
    let wxStartTime1 = wx.time[0].startTime;
    //Wx-end time1 ~隔日06:00
    let wxEndTime1 = wx.time[0].endTime;
    //Wx-parameterName1
    let wxParameterName1 = wx.time[0].parameter.parameterName;
    //Wx-parameterValue1
    let wxParameterValue1=wx.time[0].parameter.parameterValue;

    //Wx-start time2 隔日06:00~
    let wxStartTime2 = wx.time[1].startTime;
    //Wx-end time2 ~隔日18:00
    let wxEndTime2 = wx.time[1].endTime;
    //Wx-parameterName2
    let wxParameterName2 = wx.time[1].parameter.parameterName;
    //Wx-parameterValue2
    let wxParameterValue2 = wx.time[1].parameter.parameterValue;

    //Wx-start time3 隔日18:00~
    let wxStartTime3 = wx.time[2].startTime;
    //Wx-end time3 ~後天06:00
    let wxEndTime3 = wx.time[2].endTime;
    //Wx-parameterName3
    let wxParameterName3 = wx.time[2].parameter.parameterName;
    //Wx-parameterValue3
    let wxParameterValue3 = wx.time[2].parameter.parameterValue;



    //PoP section 降雨機率 
    //pop-start time1 今日18:00~
    let popStartTime1 = pop.time[0].startTime;
    //pop-end time1 ~隔日06:00
    let popEndTime1 = pop.time[0].endTime;
    //pop-parameterName1
    let popParameterName1 = pop.time[0].parameter.parameterName;
    //pop-parameterValue1
    let popParameterUnit1=pop.time[0].parameter.parameterUnit;

    //pop-start time2 隔日06:00~
    let popStartTime2 = pop.time[1].startTime;
    //pop-end time2 ~隔日18:00
    let popEndTime2 = pop.time[1].endTime;
    //pop-parameterName2
    let popParameterName2 = pop.time[1].parameter.parameterName;
    //pop-parameterValue2
    let popParameterUnit2 = pop.time[1].parameter.parameterUnit;

    //pop-start time3 隔日18:00~
    let popStartTime3 = pop.time[2].startTime;
    //pop-end time3 ~後天06:00
    let popEndTime3 = pop.time[2].endTime;
    //pop-parameterName3
    let popParameterName3 = pop.time[2].parameter.parameterName;
    //pop-parameterValue3
    let popParameterUnit3 = pop.time[2].parameter.parameterUnit;



    //MinT section 最低溫度
    //mint-start time1 今日18:00~
    let mintStartTime1 = mint.time[0].startTime;
    //mint-end time1 ~隔日06:00
    let mintEndTime1 = mint.time[0].endTime;
    //mint-parameterName1
    let mintParameterName1 = mint.time[0].parameter.parameterName;
    //mint-parameterValue1
    let mintParameterUnit1=mint.time[0].parameter.parameterUnit;

    //mint-start time2 隔日06:00~
    let mintStartTime2 = mint.time[1].startTime;
    //mint-end time2 ~隔日18:00
    let mintEndTime2 = mint.time[1].endTime;
    //mint-parameterName2
    let mintParameterName2 = mint.time[1].parameter.parameterName;
    //mint-parameterValue2
    let mintParameterUnit2 = mint.time[1].parameter.parameterUnit;

    //mint-start time3 隔日18:00~
    let mintStartTime3 = mint.time[2].startTime;
    //mint-end time3 ~後天06:00
    let mintEndTime3 = mint.time[2].endTime;
    //mint-parameterName3
    let mintParameterName3 = mint.time[2].parameter.parameterName;
    //mint-parameterValue3
    let mintParameterUnit3 = mint.time[2].parameter.parameterUnit;




    //MaxT section 最高溫度
    //maxt-start time1 今日18:00~
    let maxtStartTime1 = maxt.time[0].startTime;
    //maxt-end time1 ~隔日06:00
    let maxtEndTime1 = maxt.time[0].endTime;
    //maxt-parameterName1
    let maxtParameterName1 = maxt.time[0].parameter.parameterName;
    //maxt-parameterValue1
    let maxtParameterUnit1=maxt.time[0].parameter.parameterUnit;

    //maxt-start time2 隔日06:00~
    let maxtStartTime2 = maxt.time[1].startTime;
    //maxt-end time2 ~隔日18:00
    let maxtEndTime2 = maxt.time[1].endTime;
    //maxt-parameterName2
    let maxtParameterName2 = maxt.time[1].parameter.parameterName;
    //maxt-parameterValue2
    let maxtParameterUnit2 = maxt.time[1].parameter.parameterUnit;

    //maxt-start time3 隔日18:00~
    let maxtStartTime3 = maxt.time[2].startTime;
    //maxt-end time3 ~後天06:00
    let maxtEndTime3 = maxt.time[2].endTime;
    //maxt-parameterName3
    let maxtParameterName3 = maxt.time[2].parameter.parameterName;
    //maxt-parameterValue3
    let maxtParameterUnit3 = maxt.time[2].parameter.parameterUnit;





    //CI section 舒適度
    //ci-start time1 今日18:00~
    let ciStartTime1 = ci.time[0].startTime;
    //ci-end time1 ~隔日06:00
    let ciEndTime1 = ci.time[0].endTime;
    //ci-parameterName1
    let ciParameterName1 = ci.time[0].parameter.parameterName;

    //ci-start time2 隔日06:00~
    let ciStartTime2 = ci.time[1].startTime;
    //ci-end time2 ~隔日18:00
    let ciEndTime2 = ci.time[1].endTime;
    //ci-parameterName2
    let ciParameterName2 = ci.time[1].parameter.parameterName;

    //ci-start time3 隔日18:00~
    let ciStartTime3 = ci.time[2].startTime;
    //ci-end time3 ~後天06:00
    let ciEndTime3 = ci.time[2].endTime;
    //ci-parameterName3
    let ciParameterName3 = ci.time[2].parameter.parameterName;

    //畫面render
    //地點
    document.querySelector("#place").innerHTML=location;
    //天氣現象
    document.querySelector("#status").innerHTML=wxParameterName1;
    //天氣現象圖示
    document.querySelector("#weather-icon").src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/"+wxParameterValue1+".svg"
    //降雨機率
    document.querySelector("#rain-status-value").innerHTML=popParameterName1;
    //最低溫
    document.querySelector("#temp-low").innerHTML=mintParameterName1;
    console.log(mintParameterName1)
    //最高溫
    document.querySelector("#temp-high").innerHTML=maxtParameterName1;
    console.log(maxtParameterName1)
    //舒適度
    document.querySelector("#comfort").innerHTML=ciParameterName1;

    
    console.log(weatherData)
})
.catch((error)=>{
    console.log(error)
});












