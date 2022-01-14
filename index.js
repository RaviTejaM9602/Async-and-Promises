const btn = document.querySelector('button');
setTimeout(() => {
  btn.style.transform = 'translateX(100px)';
  setTimeout(() => {
    btn.style.transform = 'translateX(200px)';
    setTimeout(() => {
      btn.style.transform = 'translateX(300px)';
      setTimeout(() => {
        btn.style.transform = 'translateX(400px)';
        setTimeout(() => {
          btn.style.transform = 'translateX(500px)';
        },1000);
      },1000);
    },1000);
  },1000);
},1000);
