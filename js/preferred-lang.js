(()=>{var e={fallback:"https://coreynote.life/",homes:{en:"https://coreynote.life/en/","zh-hant":"https://coreynote.life/"}};(()=>{let o=navigator.language||navigator.userLanguage;if(o in e.homes){window.location.href=e.homes[o];return}let t=o.split("-");for(let n in e.homes)if(n.indexOf(t[0])===0){window.location.href=e.homes[n];return}window.location.href=e.fallback})();})();