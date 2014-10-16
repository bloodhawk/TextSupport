//global libs
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var client = require('twilio')('ACac2640d52c42197185831aa09691ab63', 'f8847c6ca388fd1c046495e123d0bb50');
var Firebase = require('firebase');
var port = 8500;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/')); //serve static content in public dist (yeoman) dir

//endpoints
app.post('/support/messages/', function(req, res){
	var toNum = req.body.toNum;
	var body = req.body.message;
	var FireRoot = new Firebase('https://textsupport92.firebaseio.com/numbers/' + toNum + '/');
	if(toNum && body){
		client.sendMessage({
		    to:toNum,
		    from:'+18019809945',
		    body:body 
			}, function(err, responseData) { 
		    if (!err && responseData.errorCode === null) { 
		    	var fBody = responseData.body;
		    	var fDate = responseData.date_created;
		    	FireRoot.push({
		    		body: fBody,
		    		date_sent: fDate,
		    		support: true
		    	}, function(error) {
				  if (error) {
				    res.status(500).send('Text sent, but DB failed to save');
				  } else {
				    res.status(200).send("Data saved successfully to DB.");
				  }
				});
		    } else {
		    	res.status(500).send('Failed to send txt message');
		    }
		});
	}
});

app.get('/support/resources/:resource_name', function (req, res, next) {

  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny'
  };

  var fileName = req.params.resource_name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      res.status(404).sendFile('404.html', options);
    }
  });

})
//instantiate server
app.listen(port, function(){
	console.log("Server running on port: " + port);
});
