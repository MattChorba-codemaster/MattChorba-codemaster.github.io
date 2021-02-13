function toggleBannerAd() { 
        var d = new Date();
        console.log(d.getDay());
        if(d.getDay() == 5)  {
         document
             .getElementsByClassName("bannerAd")[0]
                .classList.toggle("itIsFriday");
        }
}
