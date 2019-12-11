//const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);
const capitalize = str => {
    let [init, ...rest] = str;
    return init.toUpperCase() + rest.join('');
}

module.exports = {capitalize}