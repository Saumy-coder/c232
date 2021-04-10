/*class Box {
    constructor(x,y,width,height){
        var options = {
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;

        World.add(world,this.body);
    }
    display() {

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
    // PLS PLS PLS WORK WORK I will give you a party of anything you want PLSPLSPlSPLSLPLSPLPL 
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height)  
        pop()
        
    }
}
*/
class Box { 
    constructor(x, y, width, height) { 
        var options = { 'restitution':1, } 
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width; this.height = height; 
        World.add(world, this.body);
     } 
    display(){ 
        var pos =this.body.position; 
        push(); 
        translate (pos.x,pos.y) 
        rotate(this.body.angle)
        rectMode(CENTER); 
        fill(255); 
        rect(0,0, this.width, this.height); 
        pop() 
    } 
};