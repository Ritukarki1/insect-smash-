
/*var x = 0;

let box = document.querySelector('.box');
        for(let x = 0; x<4; x++){
            let clone = box.cloneNode(true);
            document.body.appendChild(clone)
            clone.style.top = "10px";
            clone.style.left = "150px";
            clone.style.backgroundColor = "blue";

    
        }*/


 /* for(i=0; i < 4; i++){
      var cont = document.querySelector('#box');
      var box = document.createElement("div");
      box.id = "box";
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      box.style = "position:absolute;height: 80px;width: 80px;  ";
      box.style.top = Math.floor(Math.random() * 60) + "px";
      box.style.left = Math.floor(Math.random() * 60) + "px";
      box.style.background = "#" + randomColor;
      cont.append(box);
    }
    
    var box = document.querySelector("#box");
    var animate = setInterval(move, 1);
    var dx = 1;
    var dy = 1;
    positionX = 0;
    positionY = 200;
    
    function move() {
      positionX += dx;
      positionY += dy;
      box.style.left = positionX + "px";
      box.style.top = positionY + "px";
    
      if (positionX == 215 && positionY == 415) {
        dy = -1;
      }
      if (positionX == 420) {
        dx = -1;
        dy = -1;
      }
      if (positionY == 0) {
        dx = -1;
        dy = 1;
      }
      if (positionX == 0) {
        dy = +1;
        dx = +1;
      }
    
      if (positionY == 425) {
        dy = -1;
      }
    }*/
      
    var xposition = 1;
    var yposition = 1;
    
    var div = new Array();
    var Xposition = new Array();
    var Yposition = new Array();
    
    window.onload = createDiv();
    function createDiv() {
    
        
                        for (i=1; i<6; i++){
        
                            var divs = document.createElement("div");
                                divs.setAttribute('id', 'div_id' + i );
                                divs.innerHTML = "Div" + i;
                        
                                divs.style = "position:absolute;text-align:center;padding-top: 15px; height: 50px;width: 50px; top:" + X + "px; left:" + Y + "px;";
    
                                var X =  Math.floor((Math.random() * 420)+ 1) ;
                                var Y =  Math.floor((Math.random() * 420)+ 1);
    
                                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                                divs.style.background = "#" + randomColor;
                                
                                const maindiv = document.getElementById("box");
                                maindiv.append(divs);              
                                Movement(0.2, 0.2, X, Y, divs, i)
                                
                            }    
                        }
    
    
    
    
    function Movement(xposition, yposition, X, Y, divs, index){
        let count = 0;
      /*  divs.onclick = function(){  
                count ++;
                divs.innerHTML = "Div" + index + ":" +count;
                document.querySelector(".para").innerHTML = "Selected Div" + index + " = " +count;
                document.querySelector(".para").style = "font-size: 20px; color: green; font-weight: 600;"
                
                   
        }*/
        
        setInterval(() => {
            X += xposition;
            divs.style.left = X + "px";
    
            Y += yposition;
            divs.style.top = Y + "px";
            
    
            if(X > 450 || X < 10){
                xposition = xposition * -1;
            }
            if (Y > 450 || Y < 10) {
                yposition = yposition * -1;
            }
            Xposition[index] = X;
            Yposition[index] = Y;
    
            for (var i = 0; i < 6; i++) {
    
                if (!(i === index)) {
                    if ((Xposition[i] < X + 50) && (Xposition[i] + 50 > X) && (Yposition[i] < Y + 50) && (Yposition[i] + 50 > Y)) {
                        xposition = xposition * -1;
                        yposition = yposition * -1;
                    }
                }
            }
        }, 1);
    
    
    }
       
