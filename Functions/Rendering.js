
//to simplify the process of drawing an circle
const drawArc = (x,y,r) => {
	ctx.beginPath();
    ctx.arc(x+r, y+r, r,0, 2*Math.PI);
    ctx.stroke();
	ctx.closePath();
};
//to simplify the process of drawing a line
const drawLine = (x,y,x2,y2) => {
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	ctx.closePath();
};
//to simplify the process of drawing a oval
// ##-- ALL ANGLES ARE IN RADIANS --## // 
const drawOval = (x,y,w,h) => {
	ctx.beginPath();
	//inputs =				rotation    start angle end angle
	ctx.ellipse(x, y, w, h, Math.PI, 0*Math.PI, 2 * Math.PI);
	ctx.stroke();
	ctx.closePath();
};
//to simplify the process of drawing a tri
const drawTri = (x1, y1, x2, y2, x3, y3,) => {
	ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
	ctx.fill();
	ctx.closePath();
}
//to simplify the process of drawing a pologon
const drawHexa = (x,y,multi) => {
	ctx.save();
	ctx.beginPath();
	ctx.translate(x,y);
	
	ctx.moveTo(2*multi, 0);
	ctx.lineTo(5*multi, 0*multi);
	ctx.lineTo(7*multi, 2.5*multi);
	ctx.lineTo(5*multi, 5*multi);
	ctx.lineTo(2*multi, 5*multi);
	ctx.lineTo(0,       2.5*multi);
	ctx.lineTo(2*multi, 0);

	
	ctx.stroke();
	ctx.restore();
	ctx.closePath();

}


let MapPrint = (Ox, Oy) => {
    ctx.save();
    ctx.translate(- Ox%50, - Oy%50);

    Ox = Math.floor(Ox/50);
    Oy = Math.floor(Oy/50);
    
    for (let y=Oy-7; y<Oy+7; y++) {
        for (let x=Ox-11; x<Ox+11; x++) {

            //if not outside defined area
            if (y < 0 || x < 0 || x >= map[0].length || y >= map.length) continue;

            switch (map[y][x]) {
                case 1: 
                    ctx.fillStyle = "#000";
                    ctx.fillRect((11-Ox+x)*50, (7-Oy+y)*50, 50, 50);
            }
        }
    }
    ctx.restore();
};

let backGroundPrint = function(x,y) {
    ctx.save();
    
    ctx.translate( -(11*50  +x)/1.5,  -(3*50 + y)/1.5);

    for(let i=0; i<4; i++) {
        ctx.translate(300,0);

        ctx.fillStyle = '#32325e'; ctx.fillRect(0,0,1200,700);

        ctx.fillStyle = '#141424'; ctx.fillRect(0,0,300,50);
        ctx.fillStyle = '#141424'; ctx.fillRect(0,675,300,25);
    };

    ctx.restore();
}

text = function(x,y, text, size) {
	for (let i=0; i<text.length;i++) ctx.drawImage(letterList[text.charAt(i)],x + i*8*size,y, 8*size, 8*size);
}


const HexaPattern = function (x,y, length, size) {

	ctx.save();
	ctx.translate(x,y);

	for (let i=0; i<length; i++) {
		ctx.translate(0,5*size+1*size);

		ctx.fillStyle= '#f00';
		drawHexa(0,0, size);
		ctx.fill();
		
		ctx.fillStyle= '#000';
		ctx.lineWidth = 5;
		drawHexa(0.5*size, 0.4*size, size*0.85);

	}
	ctx.restore();
}