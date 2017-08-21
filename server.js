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
        
        <p> On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look. You can easily change the formatting of selected text in the document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly.</p>
        <p>
            To change the overall look of your document, choose new Theme elements on the Page Layout tab. To change the looks available in the Quick Style gallery, use the Change Current Quick Style Set command. Both the Themes gallery and the Quick Styles gallery provide reset commands so that you can always restore the look of your document to the original contained in your current template. On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.
        </p>
         <p> selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly. To change the overall look of your document, choose new Theme elements on the Page Layout tab. To change the looks available in the Quick Style gallery, use the Change Current Quick Style Set command. Both the Themes gallery and the Quick Styles gallery provide reset commands so that you can always restore the look of your document to the original contained in your current template.
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