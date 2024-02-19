let Shadowheart = function() {
    this.cavas = null;
    this.context = null;

}

let textBox = function(ncanvas, ncontext) {
    this.canvas = ncanvas;
    this.ncontext = ncontext;
}

Shadowheart.prototype.launch = function(){
    this.canvas = document.createElement("canvas");
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	this.context = this.canvas.getContext("2d");
	document.body.appendChild(this.canvas);
	this.canvas.style.position = "fixed";
	this.canvas.style.top = window.innerHeight-222+"px";
	this.canvas.style.left = window.innerWidth-222+"px";
	this.canvas.style.width = window.innerWidth + "px";
	this.canvas.style.height = window.innerHeight + "px";
	this.canvas.style.zIndex = "25000";

    this.sheart = document.createElement("img");
    this.sheart.src = "https://cdn.discordapp.com/attachments/491435162584743978/1208567408881565696/beautiful-shadowheart.png?ex=65e3c11c&is=65d14c1c&hm=bfae09b8a478dbc194a2f0fde17d6309f528c9228dc1aa6d33e551cba48db7ba&";

    let ctx = this.context;
    ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.sheart, 0, 0, 222, 222);
	ctx.save();
	ctx.restore();
}

textBox.prototype.launch = function(){
    this.tbox = document.createElement("img");
    this.tbox.src = "https://cdn.discordapp.com/attachments/491435162584743978/1208567561134809188/shadowheart_textbox.png?ex=65e3c140&is=65d14c40&hm=c86c937818c7d589d022b1cfaecd4790e45c66209ccf75333344aba9357c5986&";

    let ctx = this.context;
    ctx.drawImage(this.tbox, 0, -222, 222, 111);
}

let shadheart = new Shadowheart();
let textbawx = new textBox(shadheart.canvas, shadheart.context);
shadheart.launch();
textbawx.launch();