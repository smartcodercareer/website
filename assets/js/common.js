export const getCookie = name => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name, path="/", domain=window.location.hostname) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=${path};domain=${domain};`;
};

export const debounce = (func, wait, immediate) => {
  let timeout;

  return function() {
    let context = this, args = arguments;
    let later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};
