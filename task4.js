four.onmousemove = function() { 
    x1= event.clientX; 
    y1= event.clientY;
    x2=x1-38;
    y2=y1-90; 
}
  document.onclick=function()
  {
    if(x1>37 && x1<512 && y1>100 && y1<560)
    {
      let newRectangle = document.createElement('div');
      newRectangle.innerHTML;
      let task3 = document.getElementById('field4');
      task3.appendChild(newRectangle);
        
      let pos='fixed';
      let r = Math.floor(Math.random() * (223));
      let g = Math.floor(Math.random() * (256));
      let b = Math.floor(Math.random() * (256));
      let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
      let RANDOM_SIZE=getRandomInt(30, 150);
      let heightPX = 0;
      let leftPX =  x2-(RANDOM_SIZE/2) + 'px';
      let topPX =  y2 -(RANDOM_SIZE/2)+ 'px';
      let border_bottom=RANDOM_SIZE + 'px solid transparent ';
      let border_top=RANDOM_SIZE + 'px solid transparent';
      let border_right=RANDOM_SIZE + 'px solid '+color;
  
      Element.prototype.setAttributes = function(attrs) {
        for (var idx in attrs) {
          if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
            for (var prop in attrs[idx]) {
              this.style[prop] = attrs[idx][prop];
            }
          } else {
            this.setAttribute(idx, attrs[idx]);
          }
        }
      };
    
      newRectangle.setAttributes({
        'styles': {
          'position': pos,
          'width': heightPX,
          'height': heightPX,
          'left': leftPX,
          'top': topPX,
          'border-bottom': border_bottom,
            'border-top': border_top,
            'border-right': border_right,
        },
      });
      newRectangle.setAttribute('class', 'draggable')
    }
  }
  document.oncontextmenu=function()
  {
    if(x1>50 && x1<630 && y1>110 && y1<600)
    {
      let newRectangle = document.createElement('div');
      newRectangle.innerHTML;
      let task3 = document.getElementById('field4');
      task3.appendChild(newRectangle);
        
      let pos='fixed';
      let r = Math.floor(Math.random() * (223));
      let g = Math.floor(Math.random() * (256));
      let b = Math.floor(Math.random() * (256));
      let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
      let RANDOM_SIZE=getRandomInt(30, 150);
      let heightPX = 0;
      let leftPX =  x2-(RANDOM_SIZE/5) + 'px';
      let topPX =  y2 -(RANDOM_SIZE/5)+ 'px';
      let border_bottom=RANDOM_SIZE + 'px solid transparent ';
      let border_top=RANDOM_SIZE + 'px solid transparent';
      let border_left=RANDOM_SIZE + 'px solid '+color;
  
      Element.prototype.setAttributes = function(attrs) {
        for (var idx in attrs) {
          if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
            for (var prop in attrs[idx]) {
              this.style[prop] = attrs[idx][prop];
            }
          } else {
            this.setAttribute(idx, attrs[idx]);
          }
        }
      };
    
      newRectangle.setAttributes({
        'styles': {
          'position': pos,
          'width': heightPX,
          'height': heightPX,
          'left': leftPX,
          'top': topPX,
          'border-bottom': border_bottom,
            'border-top': border_top,
            'border-left': border_left,
        },
      });
      newRectangle.setAttribute('class', 'draggable')
    }
  }
  function button1()
  {
    document.getElementById('one').style.display =  'block'; 
    document.getElementById('two').style.display =  'none'; 
    document.getElementById('three').style.display =  'none';
    document.getElementById('four').style.display =  'none';
  }
  function button2()
  {
    document.getElementById('two').style.display =  'block';
    document.getElementById('one').style.display =  'none'; 
    document.getElementById('three').style.display =  'none';
    document.getElementById('four').style.display =  'none';
  }
  function button3()
  {
    document.getElementById('two').style.display =  'none';
    document.getElementById('one').style.display =  'none'; 
    document.getElementById('three').style.display =  'block';
    document.getElementById('four').style.display =  'none';
  }
  function button4()
  {
    document.getElementById('two').style.display =  'none';
    document.getElementById('one').style.display =  'none'; 
    document.getElementById('three').style.display =  'none';
    document.getElementById('four').style.display =  'block';
  }
  