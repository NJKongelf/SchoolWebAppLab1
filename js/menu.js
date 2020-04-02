function loadMenuItems() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'data/menu.json',
        success: function (data) {
            let Menu = "";
            data.Menus.forEach(function (item) {
                Menu += '<li>'
                Menu += '<a href="' + item.Link + '">'
                Menu += item.Headline
                Menu += '</a>'
                Menu += '</li>'
            });
            document.getElementById("menulist").innerHTML = Menu;
        }
    });
}
loadMenuItems()