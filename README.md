# location-changer-js
This library can find the relative path of the current location in the brwoser when you are in the (Next.js project or similar React.js projects)




# installation
    npm install location-changer-js



# usage
    
    import LocationChangejs from 'LocationChangejs'


    var resultpath = LocationChangejs.getCurrentURLPath(location.href);

# or

    LocationChangejs.getCurrentURLPath(location.href).then(resurl => { 
      console.log(resurl);
    }).catch(err => {
      console.log(err);
    });



# consideration

it's helper js library which provide :
  you can use this library in all js and jsx projects.
  it will help you to get result of end point address to reload or save or any thing you want to do with it.
  
  
  
  
  
# example


  # ex1:   

    http://localhost:3000/product/8728374287348237482634
    
    in return => "/product/8728374287348237482634"
    
    
  
    
  # ex2:   

    http://localhost:3000/product#/
    
    in return => "/product"
    
    
