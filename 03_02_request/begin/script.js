var request =new XMLHttpRequest();
//request.open('GET','https://hplussport.com/api/products?qty=2&order=name');
request.open('GET','https://hplussport.com/api/products?order=name');
request.onload=function() {
    var response = request.response;
    var parseData=JSON.parse(response);
    console.log(parseData);
    var description=parseData[0].description;
    console.log(description);


    for (item in parseData){
        var name=parseData[item].name;
        var products=document.createElement('li');
        products.innerHTML=name;
        document.body.appendChild(products);

        var imgUrl=parseData[item].image;
        var images=document.createElement('img');
        images.setAttribute('src',imgUrl);
        document.body.appendChild(images);

        var price=parseData[item].price;
        var proPrice=document.createElement('p');
       proPrice.innerHTML='Price: $'+price;
        document.body.appendChild(proPrice);
    }

}
request.send();



