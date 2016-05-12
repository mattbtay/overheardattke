

window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/10eQQGsVwyAlKSk_Ios-6z-t-eTym_g7v8iowmokSwAI/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    //alert("Successfully processed!")
    console.log(data);

    var quoteItem = data.length + 1,
          listquoteItem = Math.randomRange(data.length);

    var quoteID = listquoteItem;
    	Quote = data[quoteID].quote,
    	Author = data[quoteID].author;


    
    document.getElementById('quote').innerHTML = Quote;
    document.getElementById('author').innerHTML = Author;

  }

  Math.randomRange = function(min, max) {
    if (min && max) {
        return (min + Math.floor(Math.random() * (max - min + 1)));
    } else if (min) {
        return (Math.floor(Math.random() * min))
    } else {
        return (Math.floor(Math.random() * 101));
    }
}

  
