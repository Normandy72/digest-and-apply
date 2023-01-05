* setTimeout function lives separate from digest, so digest can be installed manually: `$scope.$digest();`. But that is a __wrong way__, because exceptions and errors in this code (code before `$scope.$digest();`) become invisible for Angular.
* __correct way__ is using `$apply` instead of `$digest`.
* `$apply` accept function where our code can be moved to.
* in native Angular there is a `$timeout` function and there is no reason to use `setTimeout()`, `$digest` or `$apply`.