angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $http, FeedService, $location, $ionicLoading, $ionicPopup) {

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
        $http.get('http://www.renies.com.br/ddd37/gerenciador/listagens/leitorrss/')
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
   
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
