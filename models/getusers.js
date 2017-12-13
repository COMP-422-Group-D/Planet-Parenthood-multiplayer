fetch('/api/users'.then(function(response) {
          console.log("print fetch name process....:")

    response.text().then(function(text) {
        //alert(text);
       document.getElementById('users').innerHTML = text;
	 
    });
});