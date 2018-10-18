var lienzo;
var context;
var turno=1;
window.onload = init();

function  makeSimpleLine ( x1 , y1 , x2 , y2 )
{
  context . beginPath ();
  context . lineWidth = 8 ;
  context . strokeStyle = ' # 000000 ' ;
  context . moveTo (x1, y1);
  context . lineTo (x2, y2);
  // /contexto.lineCap='round ';
  context . stroke();
}

function  getMousePos ( canvas , evt ) {
  var rect =  canvas . getBoundingClientRect ();
        return {
          x :  evt . clientX  -  rect . left ,
          y :  evt . clientY  -  rect . top
        };
}
function dibujaX(x1, y1, x2, y2){
  makeSimpleLine(x1+20, y1+20, x2-20, y2-20);
  makeSimpleLine(x2-20, y1+20, x1+20, y2-20 );
}

function dibujaO(x,y,r){
  context.beginPath();
  context.arc(x,y,r,0,(Math.PI/180)*360,true);
  context.strokeStyle = "rgb(196, 61, 31)";
  context.lineWidth = 10;
  context.stroke();
}

function evalua(x, y){

}

function init(){
  lienzo=document.getElementById('canvas');
  context=lienzo.getContext('2d');
  makeSimpleLine ( 200 , 0 , 200 , 600 );
  makeSimpleLine ( 400 , 0 , 400 , 600 );
  makeSimpleLine ( 0 , 200 , 600 , 200 );
  makeSimpleLine ( 0 , 400 , 600 , 400 );
  lienzo . addEventListener ( 'click' , function ( evt ) {
    var Coordenadas = getMousePos (lienzo, evt);


  }, false );
}
