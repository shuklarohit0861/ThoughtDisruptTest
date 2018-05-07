angular.module('ThoughtDisruptApp', [])
       .controller('NavComponent', function NavComponent($scope){
           $scope.navbarValues =[
               {
                   value:"Home",
                   selected: true
               },
               {
                   value:"Services",
                   selected: false
               },
               {
                   value:"Product",
                   selected: false
               },
               {
                   value: "Contact",
                   selected: false
               }
            ];

            $scope.changeSelected= function(selectedValue){
            
                    if(!selectedValue.selected){
                        let i = 0;
                        $scope.navbarValues.forEach(navbarValue => {
                            if(navbarValue.value == selectedValue.value){
                                $scope.navbarValues[i].selected = true;
                                i++;
                            }else{
                                $scope.navbarValues[i].selected = false;
                                i++;

                            }
                        });
                    }
            }

       })