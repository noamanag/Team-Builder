//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var players = req.body.player;
  var no_players = players.length;
  var team_A = [];
  var team_B = [];
  function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
for(var i = 0; i<100; i++);
shuffle(players);
if(players.length%2 == 0){
for(var i = 0; i<players.length/2; i++){
  team_A.push(players[i]);
}
for(var i = players.length/2; i<players.length; i++){
  team_B.push(players[i]);
}
}
else{
  players.push("NONE");
  for(var i = 0; i<players.length/2; i++){
    team_A.push(players[i]);
  }
  for(var i = players.length/2; i<players.length; i++){
    team_B.push(players[i]);
  }
}
res.render("teams.ejs",{team_A:team_A,team_B:team_B});
console.log(team_A);
console.log(team_B);

/*
  if(players.length%2 == 0){
    var player_names = req.body.player;
    var nos = players.length;
    for(var i=1;i<=(players.length/2)+1;i++){
      var randomNumber = Math.floor(Math.random()*nos);
      team_A.push(player_names[randomNumber]);
      player_names.splice(randomNumber,1);
      nos = nos-1;
    }
    team_B = player_names;
    console.log(team_A);
    console.log(team_B);
  }else{
    var player_names = req.body.player;
    //player_names.push("NONE");
    var nos = players.length;
    for(var i=0;i<players/2;i++){
      var randomNumber = Math.floor(Math.random()*nos);
      team_A.push(player_names[randomNumber]);
      player_names.splice(randomNumber,1);
      nos = nos-1;
    }
    team_B = player_names;
    console.log(team_A);
    console.log(team_B);
  }
  */
  //res.sendFile(__dirname+"/index.html");
});

app.listen(3000, function(){
  console.log("SERVER RUNNING ON 3000");
});
