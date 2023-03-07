var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var tutorialsRouter = require('./routes/turorial');


var db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
//   console.log(`  _______       __     _______     _______.     _______.  ______   .______      
//  /  _____|     |  |   |   ____|   /       |    /       | /  __  \\  |   _  \\     
// |  |  __  __ __|  |   |  |__     |   (----\`   |   (----\`|  |  |  | |  |_)  |    
// |  | |_ ||__|__   |   |   __|     \\   \\        \\   \\    |  |  |  | |      /     
// |  |__| |     |  |  |__|  |____.----)   |   .----)   |   |  \`--'  | |  |\\  \\----.
//  \\______|     |__|\\______|_______|_______/    |_______/     \\______/  | _| \`._____|

// Congratulations! Database synchronization successful.`);

// });


// console.log('\x1b[32m%s\x1b[0m', `  _______       __     _______     _______.     _______.  ______   .______      
//  /  _____|     |  |   |   ____|   /       |    /       | /  __  \\  |   _  \\     
// |  |  __  __ __|  |   |  |__     |   (----\`   |   (----\`|  |  |  | |  |_)  |    
// |  | |_ ||__|__   |   |   __|     \\   \\        \\   \\    |  |  |  | |      /     
// |  |__| |     |  |  |__|  |____.----)   |   .----)   |   |  \`--'  | |  |\\  \\----.
//  \\______|     |__|\\______|_______|_______/    |_______/     \\______/  | _| \`._____|

// Congratulations! Database synchronization successful.`);

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

console.log(
  
  '\x1b[32m%s\x1b[0m',`_____                    _____                    _____                    _____          
         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         
        /::\\____\\                /::\\    \\                /::\\    \\                /::\\____\\        
       /:::/    /                 \\:::\\    \\              /::::\\    \\              /:::/    /        
      /:::/    /                  \\:::\\    \\            /::::::\\    \\            /:::/    /         
     /:::/    /                    \\:::\\    \\          /:::/\\:::\\    \\          /:::/    /          
    /:::/    /                      \\:::\\    \\        /:::/__\\:::\\    \\        /:::/____/           
   /:::/    /                        \\:::\\    \\      /::::\\   \\:::\\    \\      /::::\\    \\           
  /:::/    /                          \\:::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\____\\________  
 /:::/    /                            \\:::\\    \\  /:::/\\:::\\   \\:::\\____\\  /:::/\\:::::::::::\\    \\ 
/:::/    /                              \\:::\\____\\/:::/  \\:::\\   \\:::|    |/:::/  |:::::::::::\\____\\
\\::/    /                                \\::/    /\\::/   |::::\\  /:::|____|\\::/   |\\::/~~/\\__\\::::/
 \\/____/                                  \\/____/  \\/____|:::::\\/:::/    /  \\/____|~~|/~~/~    /    
                                                           |:::::::::/    /             |::::|~~|     
                                                           |::|\\::::/    /              |::::|  /     
                                                           |::| \\::/____/               \\::/~~/      
                                                           |::|  ~|                       \\__\\        
                                                           |::|   |                                   
                                                           \\::|   |                                   
                                                            \\:|   |                                   
                                                             \\|___|                                   
                                                                                                       
Database synchronization successful.`);





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tutorials', tutorialsRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



