exports.getNumberOfItems = cart => {
    if (!cart) {
        return -1;
    }
    var n = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
        n += cart[i].Quantity;
    }

    return n;
}

exports.add = (cart, item) => {
    //console.log('item' + item);
    for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i].ProId === item.ProId) {
            cart[i].Quantity += item.Quantity;
            return;
        }
    }

    cart.push(item);
}

exports.remove = (cart, proId) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (proId === cart[i].ProId) {
            cart.splice(i, 1);
            return;
        }
    }
}