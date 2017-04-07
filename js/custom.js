var appName=angular.module('dataTable',[]);
appName.controller("tableCtrl",['$scope',function($scope){
  $scope.sortType='name';
  $scope.sortReverse=false;
  $scope.tableData=[
    {
      'name':'raghav',
      'age':24,
      'id':'1049',
      'city':'delhi'
    },
     {
      'name':'Amrendra',
      'age':28,
      'id':'1024',
      'city':'Bangalore'
    },
     {
      'name':'Dr Gosh',
      'age':44,
      'id':'1083',
      'city':'Mumbai'
    },
     {
      'name':'raghav',
      'age':24,
      'id':'1049',
      'city':'delhi'
    },
     {
      'name':'Jasintha',
      'age':22,
      'id':'1055',
      'city':'Ahamadabad'
    }
  ];
/*   $scope.headerKey=allKey();
    function allKey(){
    var keyList=[],
        firstElement=$scope.tableData[0];
    for(var key in firstElement){
      keyList.push(key);
    }
    return keyList;
  } */
 
}]);