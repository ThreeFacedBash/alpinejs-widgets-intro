function Counter() {
    return {
      count: 0,
      increment() {
        if(this.count < 9)
        this.count++;
      },
      decrement() {
        if(this.count > 0)
        this.count--;
      },
      reset() {
        if(this.count > 0)
        this.count = 0;
      },
    };
  }
  
  document.addEventListener('alpine:init', function () {
  Alpine.data('counter', Counter);
});
