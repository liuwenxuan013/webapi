var request=new XMLHttpRequest();
request.open('GET',
    'http://api.giphy.com/v1/gifs/random?api_key=L9qwWCSHfJjRo4UTlKy9K4UWiezmixU5&tag=squirrels&rating=g');
request.onload=function(){
    var response= request.response;
    var parseData=JSON.parse(response);
    console.log(parseData);
    var originalUrl=parseData.data.images.original.url;
    console.log(originalUrl);
    var gif=document.createElement('img');
    gif.setAttribute('src',originalUrl);
    document.body.appendChild(gif);
}
request.send();

