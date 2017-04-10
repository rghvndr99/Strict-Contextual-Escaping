//dropable element
drpApp.directive("droppable",function($sce){
    return {
        scope:{
            
        },
      template: '<ul ng-bind-html="myHTML"></ul>',
        link:function(scope,element){
          scope.myHTML = "";          
            var el=element[0];
            //assign events
            el.addEventListener('dragover',function(e){e.preventDefault();},false);
            el.addEventListener('dragenter',function(e){e.preventDefault();},false);
            el.addEventListener('drop',function(e){
                console.log('drop started');
                
                if(e.stopPropagation) e.stopPropagation();
                draggedHtml=e.dataTransfer.getData('Text');
               scope.$apply(function(){
                 var myhtmlstr = '<li>'+draggedHtml+'</li>';
                 scope.myHTML = scope.myHTML + $sce.getTrustedHtml(myhtmlstr);
               });
                  //this.querySelector('ul').append($sce.parseAsHtml('<li>'+draggedHtml+'</li>'));
                return false;
            },false);
        }
    }
});