angular.module('starter.controllers', ['ionic'])

<<<<<<< HEAD
.controller('ListaNoticias', function($scope, $http, FeedService, $location, $ionicLoading, $ionicPopup) {
=======
.controller('DashCtrl', function($scope, $http,  $location, $ionicLoading, $ionicPopup) {
>>>>>>> origin/Inicial

$ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
        $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticiasselecionadas/'+$stateParams.idNoticia)
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.noticias  = res.data;              
                });     
 
        
         
        $scope.go = function(path){
         console.log(path);
          $location.url('#/tab'+path);
        }

})


.controller('DashCtrl', function($scope, $http, FeedService, $location, $ionicLoading, $ionicPopup) {

 
          $scope.mudanoticia = function(id){
            console.log('muda');
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
        $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticiasselecionadas/'+id)
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.noticias  = res.data;              
                });  
          }

	        $scope.converte = function(variavel) {
            var str_1 = variavel.split("http://");
            if (!str_1[1]) { var str_2 = "";  } else { var str_2 = str_1[1].split('"');}
             
            return str_2[0];
          }

          $scope.ajeitaSmall = function(variavel) {
           if (variavel == "sim") {return "mosaicogrande";} else { return "mosaico"; }             
          }
           $scope.ajeitaWidth = function(variavel) {
             if (variavel == "sim") {return "100%";}else { return "225"; }             
          }
           $scope.ajeitaHeight = function(variavel) {
             if (variavel == "sim") {return "50%";}else { return "155"; }             
          }
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
<<<<<<< HEAD
        $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticias/135')
=======

  var headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };


        $http.get('noticiasnacionais.json')
>>>>>>> origin/Inicial
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.noticias  = res.data;              
                });     
 
        
         
        $scope.go = function(path){
         console.log(path);
          $location.url('#/tab'+path);
        }

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})


.controller('Principal', function($scope, $stateParams, Chats) {
   
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
<<<<<<< HEAD
     
   $scope.chat = Chats.get($stateParams.idNoticia, $stateParams.tiponoticia);
=======
  console.log(Chats.get($stateParams.idNoticia));

   $scope.chat = Chats.get($stateParams.idNoticia);
>>>>>>> origin/Inicial
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
