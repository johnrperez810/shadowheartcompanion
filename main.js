let Shadowheart = function() {
    this.cavas = null;
    this.context = null;

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
    this.sheart.src = ("https://cdnb.artstation.com/p/assets/images/images/067/164/323/large/guilherme-tonini-shadowheart-1.jpg?1694698732");

    let ctx = this.context;
    ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
	ctx.drawImage(this.sheart, 0, 0, 222, 222);
	ctx.save();
	ctx.restore();
}

let shadheart = new Shadowheart();
shadheart.launch();