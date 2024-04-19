export function getScrollbarWidth() {
     return window.innerWidth - document.documentElement.clientWidth;
}

export function addBodyPaddingOnScrollRemove() {
     // add padding to nav bar
     const nav = document.querySelector(".nav");
     // @ts-ignore
     if (nav && nav?.offsetWidth) {
          // @ts-ignore
          if (parseFloat(nav?.offsetWidth) >= 1337)
               // @ts-ignore
               nav.style.paddingRight = `${getScrollbarWidth()}px`;
     }
     document.body.style.paddingRight = `${getScrollbarWidth()}px`;
}

export function removeBodyPaddingOnScrollRemove() {
     const nav = document.querySelector(".nav");
     // @ts-ignore
     if (nav && nav?.offsetWidth) {
          // @ts-ignore
          if (parseFloat(nav?.offsetWidth) >= 1337)
               // @ts-ignore
               nav.style.paddingRight = "0";
     }
     // @ts-ignore
     // prettier-ignore
     document.body.style.paddingRight = "0";
}
