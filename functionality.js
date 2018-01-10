    const inputs = document.querySelectorAll('.controls input'); //grab classes on slider divs 

    function handleUpdate(){
          const suffix = this.dataset.sizing || ''; //grab 'sizing' data- class
          document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix); //affix suffix(sizing)
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));  //when sliderz are changed
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //this will catch eventz