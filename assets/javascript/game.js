$(document).ready(function() {
    var swChewbacca = $("#swChewbacca");
    var swHanSolo = $("#swHanSolo");
    var swAckbar = $("#swAckbar");
    var swStormTrooper = $("#swStormTrooper");
    var swChewbaccaCharacter = $("#swChewbaccaCharacter");
    var swHanSoloCharacter = $("#swHanSoloCharacter");
    var swAckbarCharacter = $("#swAckbarCharacter");
    var swStormTrooperCharacter = $("#swStormTrooperCharacter");
    var swChewbaccaEnemy = $("#swChewbaccaEnemy");
    var swHanSoloEnemy = $("#swHanSoloEnemy");
    var swAckbarEnemy = $("#swAckbarEnemy");
    var swStormTrooperEnemy = $("#swStormTrooperEnemy");
    var swChewbaccaDefender = $("#swChewbaccaDefender");
    var swHanSoloDefender = $("#swHanSoloDefender");
    var swAckbarDefender = $("#swAckbarDefender");
    var swStormTrooperDefender = $("#swStormTrooperDefender");
    var attackButton = $("#attackButton");
    var swAttack = $("#swAttack");
    var swCounterAttack = $("#swCounterAttack");
    var stormTrooperDefense = false;
    var hanSoloDefense = false;
    var ackbarDefense = false;
    var chewbaccaDefense = false;
    var stormTrooperCharacter = false;
    var hanSoloCharacter = false;
    var ackbarCharacter = false;
    var chewbaccaCharacter = false;
    var attackDamage = 0;
    var counterAttackDamage = 0;
    var swAttack = $("#swAttack");
    var swCounterAttack = $("#swCounterAttack");
    var chewbaccaHP = $(".chewbaccaHP").attr("value");
    var ackbarHP = $(".ackbarHP").attr("value");
    var stormHP = $(".stormHP").attr("value");
    var hanHP = $(".hanHP").attr("value");
    var gameOver = $(".gameOver button");
    

    $("#swChewbacca").on("click", function(){
        swChewbacca.css("display", "none");
        swChewbaccaCharacter.css("display", "inherit");
        swHanSolo.css("display", "none");
        swAckbar.css("display", "none");
        swStormTrooper.css("display", "none");
        swHanSoloEnemy.css("display", "inherit");
        swAckbarEnemy.css("display", "inherit");
        swStormTrooperEnemy.css("display", "inherit");
        chewbaccaCharacter = true;
    })
    
    $("#swHanSolo").on("click", function(){
        swChewbacca.css("display", "none");
        swHanSoloCharacter.css("display", "inherit");
        swHanSolo.css("display", "none");
        swAckbar.css("display", "none");
        swStormTrooper.css("display", "none");
        swChewbaccaEnemy.css("display", "inherit");
        swAckbarEnemy.css("display", "inherit");
        swStormTrooperEnemy.css("display", "inherit");
        hanSoloCharacter = true;
    })

    $("#swAckbar").on("click", function(){
        swChewbacca.css("display", "none");
        swAckbarCharacter.css("display", "inherit");
        swHanSolo.css("display", "none");
        swAckbar.css("display", "none");
        swStormTrooper.css("display", "none");
        swHanSoloEnemy.css("display", "inherit");
        swChewbaccaEnemy.css("display", "inherit");
        swStormTrooperEnemy.css("display", "inherit");
        ackbarCharacter = true;
    })

    $("#swStormTrooper").on("click", function(){
        swChewbacca.css("display", "none");
        swStormTrooperCharacter.css("display", "inherit");
        swHanSolo.css("display", "none");
        swAckbar.css("display", "none");
        swStormTrooper.css("display", "none");
        swHanSoloEnemy.css("display", "inherit");
        swAckbarEnemy.css("display", "inherit");
        swChewbaccaEnemy.css("display", "inherit");
        stormTrooperCharacter = true;
    })

    $("#swChewbaccaEnemy").on("click", function(){
        swChewbaccaEnemy.css("display", "none");
        swChewbaccaDefender.css("display", "inherit");
        attackButton.css("display","block");
        swAckbarEnemy.css("pointer-events", "none");
        swHanSoloEnemy.css("pointer-events", "none");
        swStormTrooperEnemy.css("pointer-events", "none");
        chewbaccaDefense = true;
    })

    $("#swHanSoloEnemy").on("click", function(){ 
        swHanSoloDefender.css("display", "inherit");
        swHanSoloEnemy.css("display", "none");
        attackButton.css("display","block");
        swAckbarEnemy.css("pointer-events", "none");
        swChewbaccaEnemy.css("pointer-events", "none");
        swStormTrooperEnemy.css("pointer-events", "none");
        hanSoloDefense = true;
    })

    $("#swStormTrooperEnemy").on("click", function(){
        swStormTrooperDefender.css("display", "inherit");
        swStormTrooperEnemy.css("display", "none");
        attackButton.css("display","block");
        swAckbarEnemy.css("pointer-events", "none");
        swHanSoloEnemy.css("pointer-events", "none");
        swChewbaccaEnemy.css("pointer-events", "none");
        stormTrooperDefense = true;
    })

    $("#swAckbarEnemy").on("click", function(){
        swAckbarDefender.css("display", "inherit");
        swAckbarEnemy.css("display", "none");
        attackButton.css("display","block");
        swChewbaccaEnemy.css("pointer-events", "none");
        swHanSoloEnemy.css("pointer-events", "none");
        swStormTrooperEnemy.css("pointer-events", "none");
        ackbarDefense = true;
    })    

    
    attackButton.on("click", function(){
        if (chewbaccaCharacter === true && ackbarDefense === true) {
            result = attackDamage + 12;
            attackDamage = result;
            counterAttackDamage = 15;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newChewbaccaHP = chewbaccaHP - counterAttackDamage;
            chewbaccaHP = newChewbaccaHP;
            newAckbarHP = ackbarHP - attackDamage;
            ackbarHP = newAckbarHP;
            $('.swCharacter .chewbaccaHP').html(chewbaccaHP);
            $('.yourDefender .ackbarHP').html(ackbarHP);
            
            if (chewbaccaHP > 0 && hanHP <= 0 && stormHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (ackbarHP <= 0 && chewbaccaHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swHanSoloEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                ackbarDefense = false;
                swAckbarDefender.css("display", "none");
            }
            else if (chewbaccaHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
        }

       else if (chewbaccaCharacter === true && hanSoloDefense === true) {
            result = attackDamage + 12;
            attackDamage = result;
            counterAttackDamage = 10;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newChewbaccaHP = chewbaccaHP - counterAttackDamage;
            chewbaccaHP = newChewbaccaHP;
            newHanHP = hanHP - attackDamage;
            hanHP = newHanHP;
            $('.swCharacter .chewbaccaHP').html(chewbaccaHP);
            $('.yourDefender .hanHP').html(hanHP);
            
            if (chewbaccaHP > 0 && hanHP <= 0 && stormHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (hanHP <= 0 && chewbaccaHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swHanSoloEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                hanSoloDefense = false;
                swHanSoloDefender.css("display", "none");
            }
            else if (chewbaccaHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
       }

       else if (chewbaccaCharacter === true && stormTrooperDefense === true) {
            result = attackDamage + 12;
            attackDamage = result;
            counterAttackDamage = 25;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newChewbaccaHP = chewbaccaHP - counterAttackDamage;
            chewbaccaHP = newChewbaccaHP;
            newStormHP = stormHP - attackDamage;
            stormHP = newStormHP;
            $('.swCharacter .chewbaccaHP').html(chewbaccaHP);
            $('.yourDefender .stormHP').html(stormHP);
            
            if (chewbaccaHP > 0 && hanHP <= 0 && stormHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }                
            else if (stormHP <= 0 && chewbaccaHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swHanSoloEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                stormTrooperDefense = false;
                swStormTrooperDefender.css("display", "none");
            }
            else if (chewbaccaHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }              
       }

       else if (hanSoloCharacter === true && ackbarDefense === true) {
            result = attackDamage + 8;
            attackDamage = result;
            counterAttackDamage = 15;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newHanHP = hanHP - counterAttackDamage;
            hanHP = newHanHP;
            newAckbarHP = ackbarHP - attackDamage;
            ackbarHP = newAckbarHP;
            $('.swCharacter .hanHP').html(hanHP);
            $('.yourDefender .ackbarHP').html(ackbarHP);
            
            if (hanHP > 0 && chewbaccaHP <= 0 && stormHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (ackbarHP <= 0 && hanHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swChewbaccaEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                ackbarDefense = false;
                swAckbarDefender.css("display", "none");
            }
            else if (hanHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
            
       }

       else if (hanSoloCharacter === true && chewbaccaDefense === true) {
            result = attackDamage + 8;
            attackDamage = result;
            counterAttackDamage = 20;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newHanHP = hanHP - counterAttackDamage;
            hanHP = newHanHP;
            newChewbaccaHP = chewbaccaHP - attackDamage;
            chewbaccaHP = newChewbaccaHP;
            $('.swCharacter .hanHP').html(hanHP);
            $('.yourDefender .chewbaccaHP').html(chewbaccaHP);
            
            if (hanHP > 0 && chewbaccaHP <= 0 && stormHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (chewbaccaHP <= 0 && hanHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swChewbaccaEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                chewbaccaDefense = false;
                swChewbaccaDefender.css("display", "none");
            }
            else if (hanHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "inherit");
            }
       }

       else if (hanSoloCharacter === true && stormTrooperDefense === true) {
            result = attackDamage + 8;
            attackDamage = result;
            counterAttackDamage = 25;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newHanHP = hanHP - counterAttackDamage;
            hanHP = newHanHP;
            newStormHP = stormHP - attackDamage;
            stormHP = newStormHP;
            $('.swCharacter .hanHP').html(hanHP);
            $('.yourDefender .stormHP').html(stormHP);
            
            if (hanHP > 0 && chewbaccaHP <= 0 && stormHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (stormHP <= 0 && hanHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swChewbaccaEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                stormTrooperDefense = false;
                swStormTrooperDefender.css("display", "none");
            }
            else if (hanHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
       }

       else if (stormTrooperCharacter === true && ackbarDefense === true) {
            result = attackDamage + 15;
            attackDamage = result;
            counterAttackDamage = 15;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newStormHP = stormHP - counterAttackDamage;
            stormHP = newStormHP;
            newAckbarHP = ackbarHP - attackDamage;
            ackbarHP = newAckbarHP;
            $('.swCharacter .stormHP').html(stormHP);
            $('.yourDefender .ackbarHP').html(ackbarHP);
            if (stormHP > 0 && hanHP <= 0 && chewbaccaHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (ackbarHP <= 0 && stormHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swChewbaccaEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                ackbarDefense = false;
                swAckbarDefender.css("display", "none");
            }
            else if (stormHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
            
       }

       else if (stormTrooperCharacter === true && chewbaccaDefense === true) {
            result = attackDamage + 15;
            attackDamage = result;
            counterAttackDamage = 20;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newStormHP = stormHP - counterAttackDamage;
            stormHP = newStormHP;
            newChewbaccaHP = chewbaccaHP - attackDamage;
            chewbaccaHP = newChewbaccaHP;
            $('.swCharacter .stormHP').html(stormHP);
            $('.yourDefender .chewbaccaHP').html(chewbaccaHP);
            
            if (stormHP > 0 && hanHP <= 0 && chewbaccaHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }                
            else if (chewbaccaHP <= 0 && stormHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swChewbaccaEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                chewbaccaDefense = false;
                swChewbaccaDefender.css("display", "none");
            }
            else if (stormHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
            if (stormHP > 0 && hanHP <= 0 && chewbaccaHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
       }

       else if (stormTrooperCharacter === true && hanSoloDefense === true) {
            result = attackDamage + 15;
            attackDamage = result;
            counterAttackDamage = 10;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newStormHP = stormHP - counterAttackDamage;
            stormHP = newStormHP;
            newHanHP = hanHP - attackDamage;
            hanHP = newHanHP;
            console.log(stormHP);
            console.log(hanHP)
            $('.swCharacter .stormHP').html(stormHP);
            $('.yourDefender .hanHP').html(hanHP);
            
            if (stormHP > 0 && hanHP <= 0 && chewbaccaHP <= 0 && ackbarHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (hanHP <= 0 && stormHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swHanSoloEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                hanSoloDefense = false;
                swHanSoloDefender.css("display", "none");
            }
            else if (stormHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
       }

       else if (ackbarCharacter === true && hanSoloDefense === true) {
            result = attackDamage + 10;
            attackDamage = result;
            counterAttackDamage = 10;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newAckbarHP = ackbarHP - counterAttackDamage;
            ackbarHP = newAckbarHP;
            newHanHP = hanHP - attackDamage;
            hanHP = newHanHP;
            $('.swCharacter .ackbarHP').html(ackbarHP);
            $('.yourDefender .hanHP').html(hanHP);
            
            if (ackbarHP > 0 && hanHP <= 0 && chewbaccaHP <= 0 && stormHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (hanHP <= 0 && ackbarHP > 0) {
                swChewbaccaEnemy.css("pointer-events", "auto");
                swHanSoloEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                hanSoloDefense = false;
                swHanSoloDefender.css("display", "none");
            }
            else if (ackbarHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
       }

       else if (ackbarCharacter === true && chewbaccaDefense === true) {
            result = attackDamage + 10;
            attackDamage = result;
            counterAttackDamage = 20;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newAckbarHP = ackbarHP - counterAttackDamage;
            ackbarHP = newAckbarHP;
            newChewbaccaHP = chewbaccaHP - attackDamage;
            chewbaccaHP = newChewbaccaHP;
            $('.swCharacter .ackbarHP').html(ackbarHP);
            $('.yourDefender .chewbaccaHP').html(chewbaccaHP);
            
            if (ackbarHP > 0 && hanHP <= 0 && chewbaccaHP <= 0 && stormHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (chewbaccaHP <= 0 && ackbarHP > 0) {
                swAckbarEnemy.css("pointer-events", "auto");
                swChewbaccaEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                chewbaccaDefense = false;
                swChewbaccaDefender.css("display", "none");
            }
            else if (ackbarHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
       }

       else if (ackbarCharacter === true && stormTrooperDefense === true) {
            result = attackDamage + 10;
            attackDamage = result;
            counterAttackDamage = 25;
            swAttack.text("Your attack yields " + attackDamage + " damage!")
            swCounterAttack.text("You have been hit with a counter attack for " + counterAttackDamage + " damage!")
            newAckbarHP = ackbarHP - counterAttackDamage;
            ackbarHP = newAckbarHP;
            newStormHP = stormHP - attackDamage;
            stormHP = newStormHP;
            $('.swCharacter .ackbarHP').html(ackbarHP);
            $('.yourDefender .stormHP').html(stormHP);
            
            if (ackbarHP > 0 && hanHP <= 0 && chewbaccaHP <= 0 && stormHP <= 0) {
                $(".youWin").css("display", "block");
                $(".container1").css("display", "none");
            }
            else if (stormHP <= 0 && ackbarHP > 0) {
                swHanSoloEnemy.css("pointer-events", "auto");
                swChewbaccaEnemy.css("pointer-events", "auto");
                swStormTrooperEnemy.css("pointer-events", "auto");
                stormTrooperDefense = false;
                swStormTrooperDefender.css("display", "none");
            }
            else if (ackbarHP <= 0) {
                $(".container1").css("display", "none");
                $(".gameOver").css("display", "block");
            }
       }
    })
})