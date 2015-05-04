angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, FeedService, $location) {

	        $scope.converte = function(variavel) {
            var str_1 = variavel.split("http://");
            if (!str_1[1]) { var str_2 = "";  } else { var str_2 = str_1[1].split('"');}
             
            return str_2[0];
          }

          $scope.ajeitaSmall = function(variavel) {
             if (variavel % 2 == 0) {return "small";}else { return ""; }             
          }
           $scope.ajeitaWidth = function(variavel) {
             if (variavel % 2 == 0) {return "";}else { return "500"; }             
          }
           $scope.ajeitaHeight = function(variavel) {
             if (variavel % 2 == 0) {return "";}else { return ""; }             
          }

        FeedService.parseFeed('http://portalctb.org.br/site/noticias-editorias.feed?type=rss').then(function(res){ 
            $scope.n = 0;       
            $scope.dataSet=res.data.responseData.feed.entries;
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
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
