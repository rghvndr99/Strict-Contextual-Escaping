//dropable element
drpApp.directive("droppablenontrusted",function($sce){
    return {
        scope:{
            
        },
      template: '<ul><li class="defaulttext">Non-trusted Html</li>{{myHTML}}</ul>',
        link:function(scope,element){
          scope.myHTML = "";          
            var el=element[0];
            //assign events
            el.addEventListener('dragover',function(e){e.preventDefault();},false);
            el.addEventListener('dragenter',function(e){e.preventDefault();},false);
            el.addEventListener('drop',function(e){
                scope.myHTML="";                
                if(e.stopPropagation) e.stopPropagation();
                draggedHtml=e.dataTransfer.getData('Text');
               scope.$apply(function(){
                 var myhtmlstr = '<li>'+draggedHtml+'</li>';
                 scope.myHTML = scope.myHTML + $sce.getTrustedHtml(myhtmlstr);
               });               
                return false;
            },false);
        }
    }
});