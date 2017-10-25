function drag(div){
    var _x;
    var _y;
    var sX;
    var sY;
    var W=$(div).width();
    var H=$(div).height();

    var move=false;
    // console.log('2',$(window).width() ,$(window).height());
     $(div).off('mousemove');
    $(div).off('mouseup');
        $(div).on(
    {
        mousedown:(e)=>{
          
            move=true;
         
          sX=$(div).offset().left;
          sY=$(div).offset().top;
            _x=e.clientX -sX;
            _y=e.clientY-sY;
          console.log(sX,sY);
          console.log('mousedown',_x,_y);

    },
            mousemove:(e)=>{
         
            if(move)
            {
                var l=e.clientX-_x;
                var t=e.clientY-_y;
                if(l<0)
                {
                 l=0;
                }
                if(l>($(window).width()-W))
                {
                    l=($(window).width()-W);
                }
                if(t<0)
                {
                    t=0;
                }
                if(t>($(window).height()-H))
                {
                    t=($(window).height()-H);
                }
            $(div).offset({left:l,top:t});
            }

        },
            mouseup:(e)=>{
            move=false;
            console.log('mouseup', $(div).offset().left, $(div).offset().top);
        }

    } );
    }