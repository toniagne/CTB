// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

.state('tab.dash-vernoticia', {
    url: '/dash/vernoticia/:idNoticia',
    views: {
      'tab-dash': {
        templateUrl: 'templates/vernoticia.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

.state('tab.dash-listanoticias', {
    url: '/dash/listanoticias/:idNoticia',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'ListaNoticias'
      }
    }
  })


    .state('tab.account-detail', {
      url: '/account/conheca',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-detail.html',
          controller: 'Principal'
        }
      }
    })
    .state('tab.account-estaduais', {
      url: '/account/estaduais',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-estaduais.html',
          controller: 'Principal'
        }
      }
    })
    .state('tab.account-downloads', {
      url: '/account/downloads',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-downloads.html',
          controller: 'Principal'
        }
      }
    })
    .state('tab.account-secretarias', {
      url: '/account/secretarias',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-secretarias.html',
          controller: 'Principal'
        }
      }
    })
    .state('tab.account-contato', {
      url: '/account/contato',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-contato.html',
          controller: 'Principal'
        }
      }
    })

    .state('tab.account-principios', {
      url: '/account/principios',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-principios.html',
          controller: 'Principal'
        }
      }
    })
    .state('tab.account-plano', {
      url: '/account/plano',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-plano.html',
          controller: 'Principal'
        }
      }
    })
    .state('tab.account-filiacao', {
      url: '/account/filiacao',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-filiacao.html',
          controller: 'Principal'
        }
      }
    })
    .state('tab.account-direcao', {
      url: '/account/direcao',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-direcao.html',
          controller: 'Principal'
        }
      }
    })


  .state('tab.principal', {
      url: '/principal',
      views: {
        'tab-principal': {
          templateUrl: 'templates/tab-principal.html',
          controller: 'Principal'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
