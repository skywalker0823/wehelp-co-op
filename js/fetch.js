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






//抓使用者搜尋的縣市
function getSearchText(){
    let searchText=document.querySelector("#input-field").value;
    console.log(searchText)
    let weather = fetchWeather(searchText);
    weather.
    then((weatherData)=>{
    /**這邊做資料處理&畫面render*/

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
        console.log(typeof(wxParameterValue1))
        console.log(wxParameterValue1)
        if(wxParameterValue1 == "1"){
            document.querySelector("#weather-icon").src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/24.svg"
        }
        else if(wxParameterValue1 == "2" ||wxParameterValue1 == "3"){
            document.querySelector("#weather-icon").src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/27.svg"
        }
        else if(wxParameterValue1 == "4" || wxParameterValue1 == "5" || wxParameterValue1 == "6" || wxParameterValue1 == "7" ){
            console.log(wxParameterValue1)
            document.querySelector("#weather-icon").src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/28.svg"
        }
        else if(wxParameterValue1 == "8" || wxParameterValue1 == "9"){
            document.querySelector("#weather-icon").src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/12.svg"
        }
        else{
            console.log(wxParameterValue1)
            document.querySelector("#weather-icon").src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/"+wxParameterValue1+".svg"
        }
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



    
//頁面載入完成,先顯示臺北市天氣
window.addEventListener("load",()=>{
    document.querySelector("#input-field").value = "臺北市";
    getSearchText();
    //選擇不同縣市後,直接顯示該縣市天氣
    let county = document.querySelector("#input-field");
    county.addEventListener("change",()=>{
        getSearchText();
    })

})


/* 月份對照
01 => JAN
02 => FEB
03 => MAR
04 => APR
05 => MAY
06 => JUN
07 => JUL
08 => AUG
09 => SEP
10 => OCT
11 => NOV
12 => DEC
*/

/* 背景對照
rainy => 
https://archive.org/download/ezgifresize1/ezgif%20resize1.gif

sunny => 
https://i.pinimg.com/originals/f8/42/6b/f8426bf4f6892dfed16b2e0f583d5670.gif

cloudy => 
../img/cloudy.gif
*/









