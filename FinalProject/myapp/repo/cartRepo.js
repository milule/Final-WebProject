exports.getNumberOfItems = cart => {
    if (!cart) {
        return -1;
    }
    console.log(cart);
    var n = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
        n += cart[i].Quantity;
    }

    return n;
}

exports.getTotal = cart => {
    if (!cart) {
        return -1;
    }
    console.log(cart);
    var n = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
        var m = cart[i].Quantity;
        var b = cart[i].Price;
        n += m*b;
    }
    console.log(n);
    return n;
}

exports.add = (cart, item) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i].ProID === item.product.ProID) {
            cart[i].Quantity += item.quantity;
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