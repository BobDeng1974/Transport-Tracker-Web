$(document).ready(function(){
   $('body').fadeIn();    
   $('#msg').keydown(function(evt){
       if(evt.which == 13) sendmsg();
   });    
});
var currentuser = "headquarter";
$('#recname').html('Vehicle '+choice);
            
var firebase = new Firebase("https://transport-tracker-affaa.firebaseio.com");
var db = '';
//$('#userlist #loader').show();
$('#msgframe #loader').show();

firebase.child('users').on('value',function(snapshot){
    db = snapshot.val();
    //updateuserlist(db);
});

firebase.on('child_removed',function(s){
    console.log(s.val());
});
            
/*function updateuserlist(db){
    $('#loader').hide();
    var i =0;
    _('userlist').innerHTML ='';
    for(prop in db){
        if(!db.hasOwnProperty(prop)) continue;
                    
        if(db[prop].user==sessionStorage.getItem('user')){
           _('userlist').innerHTML += "<div id='usermain' style='display:none' data-firebase='"+prop+"' class='usertag'><img class='circle'"+            
            "src='images/catpics/"+i+".jpg'><span>"+db[prop].user+"</span></div>";
            continue;
        }
        _('userlist').innerHTML += "<div id='user"+i+"' class='usertag'><img class='circle' src='images/catpics/"+i%7+".jpg'>"+
        "<span>"+db[prop].user+"</span></div>";
        i++;
    }
}*/

function animatescroll(){
    setTimeout(function(){ _('msgframe').scrollTop = _('msgframe').scrollHeight;  },100);
}

var messages = firebase.child('chat/'+choice);

function sendmsg(){
    console.log('user wants to send message');
    var msg = _('msg').value;
    if(msg!=''){
        msg = replace(msg,'(y)','ok');
        
        msg = replace(msg,':D','happiest');
        msg = replace(msg,'=D','happiest');
        msg = replace(msg,':-D','happiest');
        
        msg = replace(msg,':P','tongue');
        
        msg = replace(msg,':(','sad');
        msg = replace(msg,':-(','sad');
        msg = replace(msg,':[','sad');
        msg = replace(msg,'=(','sad');
        
        msg = replace(msg,':/','halfsad');
        
        msg = replace(msg,':)','happy');
        msg = replace(msg,':-)','happy');
        msg = replace(msg,':]','happy');
        msg = replace(msg,'=)','happy');
        
        msg = replace(msg,'8|','cool');
        msg = replace(msg,':v','dassan');
        
        msg = replace(msg,'-_-','facepalm');
        msg = replace(msg,':poop:','poop');
        msg = replace(msg,':shark:','shark');
        msg = replace(msg,'o_0','doubt');
        msg = replace(msg,":'(",'crying');
        
        msg = replace(msg,":-*",'winkkiss');
        msg = replace(msg,":*",'winkkiss');
        
        
        msg = replace(msg,"B-)",'smart');
        msg = replace(msg,"^_^",'pyaara');
        msg = replace(msg,"(devil)",'wickedhappy');
        
        messages.push({
            user: "headquarter",
            msg : msg
        });
        animatescroll();
        _('msg').value = '';
    }
}
var msgrecap = '';
var msgrefresh = 0;
var flipflop   = 0;
messages.on('value',function(s){
    msgrecap = s.val();
    _('msgframe').innerHTML ='';
    for(message in msgrecap){
        if(!msgrecap.hasOwnProperty(message)) continue;
        if(msgrecap[message].user=="headquarter"){
            _('msgframe').innerHTML += "<div class='sendcont'><div class='sent'>"+msgrecap[message].msg+"</div></div>";
        }
        else{
            _('msgframe').innerHTML += "<div class='recievedcont'><div class='recieved'>"+msgrecap[message].msg+"</div></div>";
            
            if(msgrefresh >0)_('msgincoming').play();
        }
        console.log(msgrecap[message].user);
    }
    animatescroll();
    msgrefresh++;
});

function replace(msg , key , cl){
    msg = msg.replace(key,"<span class='smiley "+cl+"'></span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    return msg ;
}

function _(el){
    return document.getElementById(el);
}