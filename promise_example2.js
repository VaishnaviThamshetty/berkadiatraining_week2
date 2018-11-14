function MyService($q) {
    return {
      getSomething() {
        return $q((resolve, reject) => {
          if (true) {
            resolve('Success!');
          } else {
            reject('Oops... something went wrong');
          }
        });
      }
    };
  }
  angular
    .module('app')
    .service('MyService', MyService);