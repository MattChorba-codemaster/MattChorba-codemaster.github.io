function toggleBannerAd() { 
        var d = new Date();
        if(d.getDay != 5)  {
         document
             .getElementsByClassName("bannerAd")[0]
                .classList.toggle("notFriday");
        }
}
