$(document).ready(function() {
 $('.shop').annotateImage({ 
      editable: true, 
      useAjax: false, 
      notes: [ { "top": 60,  
                 "left": 300,  
                 "width": 50,  
                 "height": 50,  
                 "text": "Header",  
                 "id": "h1",  
                 "editable": false }, 
               { "top": 200,  
                 "left": 600,  
                 "width": 50,  
                 "height": 50,  
                 "text": "Picture of Product",  
                 "id": "s1",  
                 "editable": false }, 
               { "top": 200,  
                 "left": 150,  
                 "width": 50,  
                 "height": 50,  
                 "text": "Menu",  
                 "id": "m1",  
                 "editable": false } ]    
    }); 
});