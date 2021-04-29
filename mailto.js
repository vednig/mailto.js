linklst=document.links
console.log(linklst)
for (let index = 0; index < linklst.length; index++) {
    console.log(index);
    const element = linklst[index];
    
    if (element.href.startsWith('mailto:')) {
        const email=element.href.replace('mailto:','')
        console.log(element);
        showtext='Choose one:';
        showhtml="<br/><a href='https://mail.google.com/mail/?view=cm&fs=1&to="+email+"' >Gmail</a><br /><a href='https://outlook.live.com/owa/#to="+email+"&path=%2fmail%2faction%2fcompose'>Outlook</a><br><a href='http://compose.mail.yahoo.com/?to="+email+"'>Yahoo</a><br/><sup>By <a href='https://github.com/vednig/mailto.js'>Mailto.js</sup>";
        x=document.createElement('span')
        x.setAttribute('id','pophover-div')
        x.setAttribute('class','mt-bg-dark mt-rnd mt-card')
        x.setAttribute('hidden',true)
        //x.setAttribute('style','position: absolute;  z-index: 1;width:fit-content;position: relative; left: 0;min-width: 200px ;border: 1px #808080 solid ;padding: 8px ;background-color: #cfc ;z-index: 1 ;')
        x.innerText=showtext;
        x.innerHTML+=showhtml
        html=element.innerHTML
        element.innerHTML=x.outerHTML+'<br>'+html
    element.addEventListener('mouseover',function(){
        mousestate=1;
        document.getElementById('pophover-div').removeAttribute('hidden')
        setTimeout(() => {
            if(mousestate==0){
            document.getElementById('pophover-div').setAttribute('hidden',true)
            }
        }, 3000);
    })
    element.addEventListener('mouseleave',function(){
        mousestate=0;
        //document.getElementById('pophover-div').removeAttribute('hidden')
            //document.getElementById('pophover-div').setAttribute('hidden',true) 
    })
    }    
}
//choose a css style
//create a option bar for save preference for this site only /for all sites using mailto.js
//open choosen option for mail
