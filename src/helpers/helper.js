export default {
  randomElement(object) {
    const randomKey = obj => (Math.floor(Math.random() * obj.length));
    switch(typeof object) {
        case 'array':
          return object[randomKey(object)]
        case 'object':
          const keys = Object.keys(object);
          return object[keys[randomKey(keys)]]
        default:
          return null;
        }
    },
  randomKey(object) {
    const keys = Object.keys(object);
    return keys[Math.floor(Math.random() * keys.length)];
  }
  }