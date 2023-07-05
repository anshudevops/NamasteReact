function close(){
    for(var i=0;i<5;i++){
        function tooClose(){
            setTimeout(function(){
                console.log(i)
    
            },i*1000)();
        };

        tooClose();
       
    }
}

close();