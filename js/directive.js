angular.module('Autotek.directive', [])

.directive('headerBarSupremeEnglish', function() {
    return {
        restrict: 'AE',
        templateUrl: 'EnglishTemplates/partials/header.html',
        controller: "LogoutCtrl"
    }
})

.directive('leftSideBarEnglish', function() {
    return {
        restrict: 'AE',
        templateUrl: 'EnglishTemplates/partials/leftsidebar.html',
        controller: "LogoutCtrl"
    }
})

.directive('footerBarEnglish', function() {
        return {
            restrict: 'AE',
            templateUrl: 'EnglishTemplates/partials/footer.html'
        }
    })
    // Arabic Directives//
    .directive('headerBarSupremeArabic', function() {
        return {
            restrict: 'AE',
            templateUrl: 'ArabicPages/partials/header.html',
            controller: "LogoutCtrl"
        }
    })
    .directive('leftSideBarArabic', function() {
        return {
            restrict: 'AE',
            templateUrl: 'ArabicPages/partials/leftsidebar.html',
            controller: "LogoutCtrl"
        }
    })

.directive('footerBarArabic', function() {
    return {
        restrict: 'AE',
        templateUrl: 'ArabicPages/partials/footer.html'
    }
})

.directive('setTimeDirective', function($rootScope) {
    return {
        restrict: 'AE',
        scope: {
            time: '=time',
            endtime: '=endtime',
            branchstarttime: '=branchstarttime',
            branchendtime: '=branchendtime'
        },
        link: function(scope, elem, attr) {
            elem.bind('click', function() {
                console.log("in directive", scope.time)
                $("#startTime").val(scope.time.split('T')[1]);
                $("#endTime").val(scope.endtime.split('T')[1]);
                console.log("in directive befor", scope.branchstarttime)
                $rootScope.branchstarttime = $("#startTime").val();
                console.log("in directive", $rootScope.branchstarttime)
                $rootScope.branchendtime = $("#endTime").val();
            })
        }
    }
})

.directive("openModal", function() {
    return {
        restrict: 'AE',
        link: function(scope, elem, attr) {
            elem.bind('click', function() {
                console.log("hello ooo")
                $('#myModal').modal('show');
            })
        }
    }
})

.directive("closeModal", function() {
    return {
        restrict: 'AE',
        link: function(scope, elem, attr) {
            elem.bind('click', function() {
                console.log("hello ooo")
                $('#myModal').modal('hide');
            })
        }
    }
})

.directive('timeMask', function() {
    return {
        restrict: 'AE',
        link: function(scope, elem, attr) {
            $('#endTime').mask('00:00 AM', {
                'translation': {
                    A: { pattern: /[A,P]/ },
                },
                'placeholder': "__:__ __"
            });
        }
    }
})

.directive('gpsMasklatitude', function() {
	return {
		restrict : 'AE', 
		link: function(scope, elem, attr) {
			$('#latitude').mask('99.9999', { 'placeholder': "__.____"})
		}
	}
})
.directive('gpsMasklongitude', function() {
	return {
		restrict : 'AE', 
		link: function(scope, elem, attr) {
			$('#longitude').mask('99.9999', {'placeholder': "__.____"})
		}
	}
})