//draggable Directive
drpApp.directive("draggable",function(){
  return function(scope,element){
    var el=element[0];
        el.draggable=true;
        //assign events
        el.addEventListener('dragstart',function(e){
          console.log('drag start');
          e.dataTransfer.setData('Text',this.innerHTML);
          return false;
        },false);
       
    el.addEventListener('dragend',function(e){
          console.log('drag end');
          return false;
        },false);
    
  }
});

