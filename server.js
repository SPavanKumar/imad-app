var express = require('express');
var morgan =  require('morgan');
var path =require('path');

var app = express();
app.use(morgan('combined'));

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var Pro1 = { 
    title: 'ProRss',
    heading: 'Mobile app',
    date : 'aug12,15',
    content: `<p> Hi this is Pavan Kumar. I am going to develop application for Rss People </p>
              <p> The app will be very useful for fruite marketing and people well get fruites just with one tap</p>
              <p> Happy to get this work and feeling proud to serve RSS.</p>`
};

var htmlTemplat = ` <!DOCTYPE html>
                    <html>
                    <head>
                        
                        <title>${title}</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <link href="/ui/style.css" rel="stylesheet" />
                    </head>
                    <body>
                        <h1>${heading}</h1>
                        
                      <div class=abc>
                            
                        <div>
                            <a href="/">Home</a>
                        </div> 
                        <hr/>
                        <div>${date}</div>
                        <div>
                          ${content}
                        </div>
                       </div>
                    </body>
                    </html>
 
`;
    
app.get('/ui/style.css',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/pavan',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui','pavan.html'));
});









var port = 80;
app.listen(port, function(){ 
    console.log(`I MAD course app listening on port ${port}!`);
});