<html> 
    <head>
        <title>Messenger</title>
        <link rel="stylesheet" href="css/client.css">
        <link rel="icon" href="images/favicon.png"/>
        <script src="js/jquery.js"></script>
        <script src="js/firebase.js"></script>
    </head>
    <body style="display:none">
        <div class="container">
            
           <div class="msgpanel">
                <div class="nameband" id='nameband'>
                    <div class="band">
                        <span class='recname' id='recname' ></span>
                    </div>
                </div>
                <div class="msgframe" id='msgframe'>
                    <div class="loader" id='loader'></div>
                </div>
           </div>
        </div>
        <div class='msgdiv'><input id='msg' type="text" name='msg' placeholder="type your message in here" class="msginput"></div>
        <audio src="assets/msgincoming.mp3" id='msgincoming'></audio>
		<script type="text/javascript">
			var choice = "<?php echo $_GET['choice']?>"; // That's for a string
			console.log("value="+choice);
		</script>
        <script src="js/client.js"></script>
    </body>
</html>
