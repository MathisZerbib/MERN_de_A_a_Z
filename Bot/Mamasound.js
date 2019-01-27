window.get_pageinfo = function() {
    var type = "";
    var name = "";
    var location = "";
    var titre = "";
    var date = "";
    var desc = "";
    var price = "";
    var img = "";

    function DateInfo(){
        var toDay = document.querySelector('.cDay > span[data-reactid="203"]');
        toDay = toDay && toDay.innerText ? toDay.innerText : "No date";

    }
    type = document.querySelector('.wrapper .title');
    type = type && type.innerText ? type.innerText : 'Notype';
    
    name = document.querySelector('.details .title');
    name = name && name.innerText ? name.innerText : "Notitle";

    location = document.querySelector('.details .address');
    location = location && location.innerText ? location.innerText : "Nolocation";

    titre = document.querySelectorAll('.title > span')[1];
    titre = titre && titre.innerText ? titre.innerText : "Notitle";

    date = document.querySelector('.date');
    date = date && date.innerText ? date.innerText : "**/**";

    desc = document.querySelector('.description > p');
    desc = desc && desc.innerText ? desc.innerText : "Desc";


    price = document.querySelector('.price');
    price = price && price.innerText ? price.innerText : "Noprice";

    img = document.querySelector('.preview > img');
    img = img && img.src ? img.src : "";

    return {
        return_type: type,
        return_name: name,
        return_location: location,
        return_titre: titre,
        return_date: date,
        return_desc: desc,
        return_price: price,
        return_img: img,

    };
};