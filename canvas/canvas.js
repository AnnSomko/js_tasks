let c = document.getElementById('myCanvas');
let ctx = c.getContext("2d");
    
    for(var x=0.5;x<500;x+=10) {
        ctx.lineWidth = 1;
            ctx.moveTo(x,0);
            ctx.lineTo(x,500);
          }
    for(var y=0.5; y<500; y+=10) {
            ctx.moveTo(0,y);
            ctx.lineTo(500,y);
        }
        ctx.strokeStyle='grey';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100,100); 
        ctx.lineTo(100,400); //вісь у
        ctx.lineTo(400,400); //вісь х

        ctx.moveTo(100,100); // стрілки для осі у
        ctx.lineTo(94,115);

        ctx.moveTo(100,100);
        ctx.lineTo(106,115);

        ctx.moveTo(400,400); // стрілки для осі х
        ctx.lineTo(386,394);

        ctx.moveTo(400,400);
        ctx.lineTo(386,406);

        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.stroke();

        ctx.font = "20px serif";
        ctx.fillText("у", 80, 110);
        ctx.fillText("х", 400, 420);