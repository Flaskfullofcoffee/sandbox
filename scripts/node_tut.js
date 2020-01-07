

// fetch(url)
//   .then(function(data) {
//     // Here you get the data to modify as you please
//     })
//   })
//   .catch(function(error) {
//     // If there is any error you will catch them here
//   });

  var myArticle = document.querySelector('article');
  // var myLinks = document.querySelectorAll('ul a');




  // fetch(url)
  //   .then((resp) => resp.text())
  //   .then(function(data) {
  //     myArticle.innerHTML = data;
  //   })


    function get_doc(id){
      const url = 'https://docs.google.com/document/d/1nU0f_J9Zx4wxde2g4CwNo9ekR3SN8go4bUFoIXYVJoQ/edit';
      if(self.fetch){
      var setHeaders = new Headers();
      setHeaders.append('Authorization', 'Bearer ' + authToken.access_token);
      setHeaders.append('Content-Type', mime);

      var setOptions = {
          method: 'GET',
          headers: setHeaders
      };
      fetch(url,setOptions)
          .then(response => { if(response.ok){
          var reader = response.body.getReader();
          var decoder = new TextDecoder();
          reader.read().then(function(result){
              var data = {}
              data = decoder.decode(result.value, {stream: !result.done});
              console.log(data);
      });
          }
      else{
          console.log("Response wast not ok");
      }
    })  .catch(error => {
          console.log("There is an error " + error.message);
          });
      }
  }
