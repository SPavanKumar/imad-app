var express = require('express');
var morgan =  require('morgan');
var path =require('path');

var app = express();
app.use(morgan('combined'));

var Projects = {
         'proone' :{  
            title: 'ProRss',
            heading: 'Mobile app',
            date : 'aug12,15',
            content: `
                <p>Hi this is Pavan. I am going to create a mobile app.</p>
                <p>
                    This app will be useful for people in buying Fruites. This project is given by RSS. Feeling proud to work for RSS.
                </p>
                 <p> I have a brilliant girl in my Team named Harika. She can complete sudoku in easy level in 1.20 sec. and hard level 10 to 11 min.
                </p> `
             
         },
         'protwo' :{
                title: 'Pedhabala Shiksha',
                heading: 'Mobile app',
                date : 'aug15,16',
                content: `
                
                    <p>Hi this is Pavan. I am going to create my 2nd mobile app.</p>
                    <p>
                        This app will be useful for Telugu Loving People. This project is given by Anjani Kumar. Feeling proud to work for Telugu Language.
                    </p>
                    <p> 
                        I have a brilliant girl in my Team named Harika.  Who recently deleted what's up app and wanted to create new messanger. She did not give party till now. There are so many parties to be given.
                    </p> `
            },
         'prothree' :{
                    title: 'Help in 360',
                    heading: 'Web app',
                    date : 'Jan 26,17',
                    content: `
                    
                        <p>Hi this is Pavan. I am going to create my 1st web app.</p>
                        <p>
                            This app will be useful for every person who are in need of anything. Mostly children and young students and patients. Feeling proud to help others in 360 angles.
                        </p>
                        <p> 
                            I have a brilliant girl in my Team named Harika.  Who has diffrent thoughts to help others and change our country position. She has lot of plans to be implemented to change our country's bad situations.
                        </p> `
         }
        
            
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

app.get('/:projectName',function (req, res) {
    var projectName = req.params.projectName; 
    res.send(createTemplate(Projects[projectName]));
    
});









var port = 80;
app.listen(port, function(){ 
    console.log(`I MAD course app listening on port ${port}!`);
});