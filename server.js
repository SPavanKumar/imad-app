var express = require('express');
var morgan =  require('morgan');
var path =require('path');

var app = express();
app.use(morgan('combined'));


var Pro1 = { 
    title: 'ProRss',
    heading: 'Mobile app',
    date : 'aug12,15',
    content: `<p> This is my first html file.I am learnig html in this course. Click on "home".</p>
        
        <p>Hi this is Pavan. I am going to create a mobile app.</p>
        <p>
            This app will be useful for people in buying Fruites. This project is given by RSS. Feeling proud to work for RSS.
        </p>
         <p> I have a brilliant girl in my Team named Harika. She can complete sudoku in easy level in 1.20 sec. and hard level 10 to 11 min.
        </p> `
};
  
function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = ` <html>
                        <head>
                       
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <link href="/ui/style.css" rel="stylesheet" />
                        
                         <title>
                           ${title}
                        </title>
                        </head>
                        <body>
                            
                          <div class=abc>
                            <h1>${heading}</h1>    
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
                    return htmlTemplate;
}

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/pavan',function (req, res) {
    res.send(createTemplate(Pro1));
});









var port = 80;
app.listen(port, function(){ 
    console.log(`I MAD course app listening on port ${port}!`);
});