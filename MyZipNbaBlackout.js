var Ipv4 = null;
var Ipv6 = null;
var Ipv4ErrorFlag = false;
var Ipv6ErrorFlag = false;


var BrowserType = window.navigator.appName;
var BrowserVersion = window.navigator.appVersion;

console.log( "Your Browser is: "+ BrowserType )
console.log( "Your Browser version: "+ BrowserVersion )

$(document).ready(function(){
    var Ipv4 = null;
    var Ipv6 = null;
    var Ipv4ErrorFlag = false;
    var Ipv6ErrorFlag = false;
    
    // function viewDidLoad(){
        $.get("https://ipv4.myip.addr.space/ajaxlookup")
        .done(function(data) {
            Ipv4 = data;
        })
        .fail(function(data) {
           Ipv4ErrorFlag = true;
        });

    // }
    
    
    $('.Ipv4').text(Ipv4);
    });




    $(document).ready(function Ipv4QuestionMark() {  
        $.get("https://ipv4.myip.addr.space/ajaxlookup")
        .done(function(data) {
            Ipv4 = data;
          
            
            var HtmlText = $.parseHTML(Ipv4);
            $(HtmlText).appendTo('.AppendLocationForIPV4');
            $('.label2').text(Ipv4);
            if(Ipv4 != null){
                console.log(Ipv4)
                }
            $(Ipv4).appendTo('.AppendLocationForIPV4');
            $('.AppendLocationForIPV4').hide();
            // $('.label2').hide();
            var labe2Data = $('.AppendLocationForIPV4').find("a").text();
            $('.label2').text(labe2Data);
            var label2values = $('.label2').text();
            // console.log(label2values.substring(13))
            // console.log($('.label2').text());
            var Label2Length = (label2values.length / 2);
            var Ipv4Data = label2values.substring(0 , Label2Length);
            $('.label2').text(Ipv4Data);
    
            SearchIpv4(Ipv4Data);
        })
        .fail(function(data) {
           Ipv4ErrorFlag = true;
        });
       // http://ipv6.vm3.test-ipv6.com/ip/?callback=?&testdomain=test-ipv6.com&testname=test_aaaa
    
        
    if(Ipv4 != null){
    console.log(Ipv4)
    }
    });





    $(document).ready(function Ipv6QuestionMark() {  
        $.get("https://ipv6.myip.addr.space/ajaxlookup")
        .done(function(data) {
            Ipv4 = data;
          
            
            var HtmlText = $.parseHTML(Ipv4);
            $(HtmlText).appendTo('.AppendLocationForIPV6');
            $('.label3').text(Ipv4);
            if(Ipv4 != null){
                console.log(Ipv4)
                }
            $(Ipv4).appendTo('.AppendLocationForIPV6');
            $('.AppendLocationForIPV6').hide();
            // $('.label2').hide();
            var labe2Data = $('.AppendLocationForIPV6').find("a").text();
            $('.label2').text(labe2Data);
            var label2values = $('.label2').text();
            // console.log(label2values.substring(13))
            // console.log($('.label2').text());
            var Label2Length = (label2values.length / 2);
            var Ipv4Data = label2values.substring(0 , Label2Length);
            $('.label3').text(Ipv4Data);
    
            SearchIpv6(Ipv4Data);
        })
        .fail(function(data) {
           Ipv4ErrorFlag = true;
        });
       // http://ipv6.vm3.test-ipv6.com/ip/?callback=?&testdomain=test-ipv6.com&testname=test_aaaa
    
        
    // if(Ipv4 != null){
    // console.log(Ipv4)
    // }
    });

    

function SearchIpv4(IPV4Search){
    $.get('http://api.ipstack.com/'+ IPV4Search +'?access_key=5fe122eaf1f4747d130b2ec6da3504de')
    .done(function(data){
        console.log(data);
        if(data.type == 'ipv4'){
            var Ipv4Data = data.ip;
            $('.Ipv4Data').text(Ipv4Data);
        }else{
            $('.Ipv4Data').text("No IPV4 Availble");
        }
        
        var ZipData = data.zip;
        $('.ZipData').text(ZipData);
    })
    .fail(function(){
        $('.Ipv4Data').text("No IPV4 Availble");
    });


    // $.get("https://ipv6.myip.addr.space/ajaxlookup")
    // .done(function(data) {
    //     $('.Ipv6Data').text(data);
    //     //console.log(data);

    //     console.log(data);
    //     if(data.type == 'ipv6'){
    //         var Ipv4Data = data.ip;
    //         $('.Ipv4Data').text(Ipv4Data);
    //     }else{
    //         $('.Ipv4Data').text("No IPV4 Availble");
    //     }
        
    //     var ZipData = data.zip;
    //     $('.ZipData').text(ZipData);
        
    // })
    // .fail(function() {
    //     $('.Ipv6Data').text("No IPV6 Availble");
    // });



    // $('.Ipv4Data').text(IPV4Search);

}


function SearchIpv6(IPV6Search){

    $('.Ipv6Data').text(IPV6Search)

    // $.get("https://ipv6.myip.addr.space/ajaxlookup")
    // .done(function(data) {
    //     $('.Ipv6Data').text(data);
    //     //console.log(data);

    //     console.log(data);
    //     if(data.type == 'ipv6'){
    //         var Ipv4Data = data.ip;
    //         $('.Ipv4Data').text(Ipv4Data);
    //     }else{
    //         $('.Ipv4Data').text("No IPV4 Availble");
    //     }
        
    //     var ZipData = data.zip;
    //     $('.ZipData').text(ZipData);
        
    // })
    // .fail(function() {
    //     $('.Ipv6Data').text("No IPV6 Availble");
    // });



    // $('.Ipv4Data').text(IPV4Search);

}


    





function CopyText() {
    // text
    var Text = $(".CopyZipButton");
    var copyToClipboard = str => {
        var copyText = $('.CopyZipButton');
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
      };

      copyToClipboard;
}  


$(document).ready(function(){
    var BackGroundImageHeight = $('.BackGroundImage').height();
    var ViewHeight = $('.BackGroundImageDiv').height();
    var TopBarHeight = $('.TopBar').height();
    var HeightOkay = ViewHeight - BackGroundImageHeight;
    $('.BackGroundImage').css({
        "top" : HeightOkay
    })
  });





  Ipv6QuestionMark();/// calling the function at the bottom of the javascript code because it is far more likely to work.