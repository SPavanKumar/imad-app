var express = require('express');
var morgan =  require('morgan');
var path =require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'kumarpavan284',
    database: 'kumarpavan284',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var Projects = {
         'project-one' :{  
            title: 'ProRss',
            heading: '1.Fruits RSS',
            subheading:'Mobile app',
            date : 'aug12,15',
            
            content: `
                <p>Hi this is Pavan. I am going to create a mobile app.</p>
                <p>
                    This app will be useful for people in buying Fruites. This project is given by RSS. Feeling proud to work for RSS.
                </p>
                 <p> I have a brilliant girl in my Team named Harika. She can complete sudoku in easy level in 1.20 sec. and hard level 10 to 11 min.
                </p> 
                
                     <input type="text" id= "pname" placeholder = "pname"></input>
                              <input type="submit" value = "submit" id="s_t"></input>
          
            <ul id="pnamelist">
                
            </ul>
                `
             
         },
         'project-two' :{
                title: 'Pedhabala Shiksha',
                heading: '2.Pedhabala Shiksha',
                subheading:'Mobile app',
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
         'project-three' :{
                    title: 'Help in 360',
                    heading: '3.Help in 360',
                    subheading:'Web app',
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
    var subheading = data.subheading;
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
                            <h3>${subheading}</h3>
                            <div>
                                <a href="/">Home</a>
                                <a href="/project-one">pro1</a>
                                <a href="/project-two">pro2</a>
                                <a href="/project-three">pro3</a>
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





app.get('projects/:projectName',function (req, res) {
  
    pool.query("SELECT * FROM project WHERE title = '" + req.params.projectName + "'",  function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            if (result.rows.length === 0) {
                res.status(404).send('project not found');
            }  else {
                var projectData = result.rows[0];
                res.send(createTemplate(projectData));
            }
        }  
        
    });
    
  });



app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function (req, res) {
    
    pool.query('SELECT * FROM test', function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
        }
    });
    
});


var counter = 0;
app.get('/counter', function(req, res) {
    counter =counter + 1;
    res.send(counter.toString());
});


var names = [];
app.get('/submit-name', function (req, res) {
    
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});




app.get('/ui/style.css',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/pro.html',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'pro.html'));
});

app.get('/ui/main.js',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




            





var port = 80;
app.listen(port, function(){ 
    console.log(`I MAD course app listening on port ${port}!`);
});