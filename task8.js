function getData() {

    axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {
    
    // 10 elements at a time
    
    response.data.slice(1, 10).forEach(picture => {
    
    $("#task").html($("#task").html() + `
    
    <div>
    
    <img src="${picture.url}" height="300" alt="${picture.title}" />
    
    <p>${picture.title}</p>
    
    </div>
    
    `)
    
    });
    
    });
    
    }