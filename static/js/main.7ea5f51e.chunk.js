(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),c=(a(33),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=a(7),h=a(11),p=a(14),f=a.n(p),g=(a(34),a(35),a(16)),v=a.n(g),y=a(23),E={token:"",deviceId:"",loggedIn:!1,error:"",trackName:"Track Name",artistName:"Artist Name",albumName:"Album Name",playing:!1,position:0,duration:1,handleLogin:function(e){var t=this;""!==e&&(this.token=e,this.loggedIn=!0,this.playerCheckInterval=setInterval(function(){return t.checkForPlayer(e)},1e3))},checkForPlayer:function(e){null!==window.Spotify&&(clearInterval(this.playerCheckInterval),this.player=new window.Spotify.Player({name:"Emily's Spotify Player",getOAuthToken:function(t){t(e)}}),this.createEventHandlers(e),this.player.connect())},createEventHandlers:function(e){var t=this;this.player.on("initialization_error",function(e){console.error(e)}),this.player.on("authentication_error",function(e){console.error(e),t.loggedIn=!1}),this.player.on("account_error",function(e){console.error(e)}),this.player.on("playback_error",function(e){console.error(e)}),this.player.on("player_state_changed",function(e){return t.onStateChanged(e)}),this.player.on("ready",function(){var a=Object(y.a)(v.a.mark(function a(n){var r;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:r=n.device_id,t.deviceId=r,t.transferPlaybackHere(t.deviceId,e);case 3:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}())},transferPlaybackHere:function(e,t){this.deviceId=e,this.token=t,fetch("https://api.spotify.com/v1/me/player",{method:"PUT",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify({device_ids:[e],play:!0})}).catch(function(e){return console.log("There was an error",e)})},onStateChanged:function(e){if(null!==e){var t=e.track_window.current_track,a=!e.paused;this.trackName=t.name,this.albumName=t.album.name,this.artistName=t.artists.map(function(e){return e.name}).join(", "),this.playing=a}else this.error="Looks like you might have swapped to another device?"},onPrevClick:function(){this.player.previousTrack()},onPlayClick:function(){this.player.togglePlay()},onNextClick:function(){this.player.nextTrack()}},b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={spotify:E},a.playerCheckInterval=null,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("Music: ",E),r.a.createElement("div",null,E.error&&r.a.createElement("p",null,"Error: ",E.error),r.a.createElement("div",{className:"music"},"now playing on spotify"),E.loggedIn?r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"currently-playing"},r.a.createElement("h2",{className:"song-name"},E.albumName),r.a.createElement("h2",{className:"song-name"},E.trackName),r.a.createElement("h3",{className:"artist-name"},E.artistName)),r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"previous",onClick:function(){return E.onPrevClick()}},r.a.createElement("i",{className:"fas fa-backward"})),r.a.createElement("div",{className:"play",onClick:function(){return E.onPlayClick()}},E.playing?"Pause":"Play"),r.a.createElement("div",{className:"next",onClick:function(){return E.onNextClick()}},r.a.createElement("i",{className:"fas fa-forward"})))):r.a.createElement("p",null,r.a.createElement(d.b,{to:"/settings"},"go to settings to log in to Spotify")))}}]),t}(n.Component),k=(a(41),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getDate=function(){var e=new Date,t=e.getMonth(),a=e.getDay();return{month:t,numberDay:e.getDate(),year:e.getFullYear(),months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a]}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.getDate(),t=e.month,a=e.numberDay,n=e.year,o=e.months,l=e.dayOfWeek;return r.a.createElement("div",{className:"todays-date"},r.a.createElement("h1",{id:"date"},l),r.a.createElement("h1",{id:"date"},o[t]," ",a,",  ",n),r.a.createElement("br",null),localStorage.getItem("calendar")?r.a.createElement("a",{href:localStorage.getItem("calendar").replace(/"/g,""),target:"_blank",rel:"noopener noreferrer"},"Go to your calendar"):r.a.createElement("div",null),r.a.createElement("p",null,r.a.createElement(d.b,{to:"/settings"},"go to settings to edit calendar")))}}]),t}(n.Component)),N=a(27),O=a(26),S=(a(42),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleHidden=function(){a.setState({isHidden:!a.state.isHidden})},a.addTodo=function(){if(a.state.input.length>0){var e={value:a.state.input,id:a.guid()};a.setState(function(t){return{todos:[].concat(Object(O.a)(t.todos),[e]),input:""}})}},a.handleInput=function(e){13===e.keyCode?a.addTodo():a.setState({input:e.target.value})},a.removeTodo=function(e){a.setState(function(t){return{todos:t.todos.map(function(t){return t.id!==e?t:Object(N.a)({},t,{deleted:!0})})}}),setTimeout(function(){a.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},1e3)},a.state=JSON.parse(localStorage.getItem("todoapp"))||{isHidden:!0,input:"",todos:[{value:"",id:a.guid()}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:"r&0x3|0x8").toString(16)})}},{key:"componentDidMount",value:function(){this.todoInput.focus()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todoapp",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"reminders"},r.a.createElement("p",null,"reminders"),r.a.createElement("div",{className:"reminder--btns",onClick:this.toggleHidden},r.a.createElement("i",{className:"fas fa-ellipsis-h"}))),this.state.todos.length>1?this.state.todos.map(function(t){return r.a.createElement(w,Object.assign({key:t.id},t,{onClick:function(){return e.removeTodo(t.id)}}))}):r.a.createElement("div",null),r.a.createElement("div",{className:this.state.isHidden?"hidden":null},r.a.createElement("div",{className:"addItems"},r.a.createElement("input",{name:"item",placeholder:"What do you need to do",value:this.state.input,onChange:this.handleInput,onKeyUp:this.handleInput,ref:function(t){e.todoInput=t}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.addTodo},"Add Item"))))}}]),t}(n.Component)),w=function(e){var t=e.value,a=e.onClick,n=e.deleted;return r.a.createElement("div",{className:"reminders--list inline"},r.a.createElement("ul",{className:"things"},r.a.createElement("li",null,r.a.createElement("label",{className:"todo"},r.a.createElement("span",{className:"todo ".concat(n?"deleted":"")},r.a.createElement("input",{className:"todo-checkbox",type:"checkbox",onClick:a}),r.a.createElement("span",{className:"todo-switch"}),r.a.createElement("label",{className:"todo-label"},t))))))},j=S,x=(a(43),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).timeFunc=function(){var e=new Date,t=e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}),a=e.getHours();return{message:a<11?"good morning":a>17?"good evening":"good afternoon",time:t}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.timeFunc(),t=e.message,a=e.time;return r.a.createElement("div",null,r.a.createElement("div",{id:"time",className:"time"},a),r.a.createElement("div",{id:"greeting",className:"timeGreeting"},t))}}]),t}(n.Component)),C=(a(44),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).success=function(e){!function(e,t){var a=new XMLHttpRequest;a.open("GET",e,!0),a.onreadystatechange=function(){4===a.readyState&&t&&t(JSON.parse(a.responseText))},a.send(null)}("https://api.openweathermap.org/data/2.5/forecast?lat="+e.coords.latitude+"&lon="+e.coords.longitude+"&APPID="+function(e){var t=e.split("");return t=(t=t.map(function(e){return String.fromCharCode(e.charCodeAt()+1)})).join("")}("a7073/1d8a1`c6a8d038c817/3e2`be8")+"&units=imperial",function(e){a.setState({temp:Math.round(e.list[0].main.temp_max),description:e.list[0].weather[0].description,homeCity:e.city.name})})},a.error=function(){alert("Please turn on your browsers geolocation to get local weather information.")},a.componentDidMount=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(a.success,a.error):alert("For the love of all that is good, please cease use of Internet Explorer!")},a.state={temp:a.temp,description:a.description,homeCity:a.homeCity},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.temp,a=e.description,n=e.homeCity;return r.a.createElement("div",null,r.a.createElement("div",{id:"weatherWidget",className:"weatherWidget"},t,"\xb0"),r.a.createElement("div",{id:"description",className:"description"},a),r.a.createElement("div",{id:"homeCity",className:"homeCity"},n))}}]),t}(n.Component)),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return localStorage.names&&(e=localStorage.getItem("names").replace(/"/g,"")),r.a.createElement("div",{className:"main-grid"},r.a.createElement("div",{className:"block one"},r.a.createElement(x,null),r.a.createElement("p",null,e)),r.a.createElement("div",{className:"block two"},r.a.createElement(b,null)),r.a.createElement("div",{className:"block three"},r.a.createElement(C,null)),r.a.createElement("div",{className:"block four"},r.a.createElement(k,{calendarHref:this.props.calendarHref,addHref:this.props.addHref})),r.a.createElement("div",{className:"block five"},r.a.createElement(j,null)))}}]),t}(n.Component),T=(a(45),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={spotify:E},a.playerCheckInterval=null,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"reset",value:function(){localStorage.removeItem("names")}},{key:"render",value:function(){var e,t=this;return console.log("Settings: ",E),localStorage.names&&(e=localStorage.getItem("names").replace(/"/g,"")),r.a.createElement("div",{className:"settings-grid"},r.a.createElement("div",{className:"block one"},r.a.createElement("div",{className:"name-heading"},"Change display name"),r.a.createElement("br",null),localStorage.names?r.a.createElement("span",{className:"name-change"},e," ",r.a.createElement("span",{className:"remove-name",onClick:this.reset},"\xa0\xa0\u2192\xa0\xa0reset")):r.a.createElement("div",{className:"name-change remove-name"},"\u2190 Enter your name in the space provided on the Menu.")),r.a.createElement("div",{className:"block two"},r.a.createElement("div",{className:"name-heading"},"Add a link to your calendar"),r.a.createElement("br",null),r.a.createElement("input",{className:"cal-link",value:this.props.calendarHref,onChange:function(e){return t.props.addHref(e)}})),r.a.createElement("div",{className:"block three"},this.state.spotify.error&&r.a.createElement("p",null,"Error: ",this.state.spotify.error),this.state.spotify.loggedIn?r.a.createElement("div",null):r.a.createElement("div",{className:"App-intro"},"Get your Spotify access token. ",r.a.createElement("br",null),"\u2193",r.a.createElement("a",{href:"https://beta.developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify",target:"_blank",rel:"noopener noreferrer"},"here"),". Enter your Spotify access token.",r.a.createElement("br",null),"\u2193",r.a.createElement("br",null),r.a.createElement("input",{onChange:function(e){return t.setState({token:e.target.value})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return t.state.spotify.handleLogin(t.state.token)}},"Go"))))}}]),t}(n.Component)),H=(a(46),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"headline"},"About the developer:",r.a.createElement("a",{className:"linkMe",href:"http://emilyannemoses.com",rel:"noopener noreferrer",target:"_blank"},"Emily Anne Moses")),r.a.createElement("div",null,r.a.createElement("p",null,"I've been a professional software developer for four years and counting. I've worked on enterprise software in Python, Go and JavaScript. I was first introduced to React in 2016, and proceeded to use it to create a form component on an already functioning web application. Since then I've worked with AngularJS, RiotJS, VueJS and LoneJS."),r.a.createElement("p",null,"All frameworks are more or less the same, but in picking up where I left off with React I'm impressed by how far it has come! I decided to use React Router 4 for this project, and I'm really happy with the performance. I'm also a ",r.a.createElement("i",null,"widget dashboard enthusiast")," and I've ",r.a.createElement("a",{href:"https://eamoses.github.io/widget-dashboard/",rel:"noopener noreferrer",target:"_blank"},"made one before based on the Momentum Dash design."))),r.a.createElement("div",null,r.a.createElement("p",null,"I am not a designer.  Fortunately, people with beautiful design chops exist, and for this project I borrowed Julie Park's ",r.a.createElement("a",{href:"https://codepen.io/juliepark/pen/KLWmxO",rel:"noopener noreferrer",target:"_blank"},"CodePen")," and build functionality into it!")),r.a.createElement("div",null,r.a.createElement("p",null,"The widget dashboard first saves your name to your local storage. This can be deleted and reset in the Settings component. The widget uses a weather API through the browser to find the your location and current weather as long as you approve these settings. It also displays the current time and date. You have the option to link a personal online Calendar if you wish. The To-do list saves the items to local storage, and these items are deleted when checked off."),r.a.createElement("p",null,"Implementation of the Spotify API was the most complex. I hadn't worked with this API since 2016 and it has changed drastically! Follow the directions in the Settings. You must first get a ",r.a.createElement("a",{href:"https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#",target:"_blank",rel:"noopener noreferrer"},"Web Playback SDK Access Token")," by logging in to your Spotify account on their website. My dashboard will then automatically load and play your most current playlist.")),r.a.createElement("div",null,r.a.createElement("p",null,"If you'd like to get in touch, please don't hesitate to ",r.a.createElement(d.b,{to:"/contact"},"Contact me!")," I'm always excited to meet other enthusiasts!")))}}]),t}(n.Component)),P=(a(47),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"contact-header"},"Contact me"),r.a.createElement("div",{className:"contact-form"},r.a.createElement("div",{id:"contact",className:"centered"},r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{method:"POST",action:"https://formspree.io/eamoses@gmail.com"},r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"name"},"NAME"),r.a.createElement("input",{type:"text",id:"name",name:"user_name"}),r.a.createElement("label",{htmlFor:"email"},"EMAIL"),r.a.createElement("input",{type:"email",id:"mail",name:"user_email"})),r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"bio"},"MESSAGE"),r.a.createElement("textarea",{id:"bio",name:"user_bio"})),r.a.createElement("button",{type:"submit",className:"submit"},"SEND"),r.a.createElement("button",{type:"reset",className:"reset"},"RESET"))))))}}]),t}(n.Component)),A=(a(48),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.greetingToggle;return a&&(e=localStorage.getItem("names").replace(/"/g,"")),r.a.createElement("div",null,r.a.createElement("div",{className:"user"},a?r.a.createElement("div",{id:"greetingDisplay",className:"greeting"},e):r.a.createElement("div",{id:"greetingContainer"},r.a.createElement("div",{className:"text"},"Please enter your full name"),r.a.createElement("div",{className:"name"},r.a.createElement("input",{id:"name",value:this.props.nameVal,onKeyPress:this.props.toggleName,onChange:function(e){return t.props.setNameState(e)}})))))}}]),t}(n.Component)),_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"leftside-menu menu",id:"menu"},r.a.createElement(A,{nameVal:this.props.nameVal,setNameState:this.props.setNameState,greetingToggle:this.props.greetingToggle,toggleName:this.props.toggleName}),r.a.createElement(d.c,{className:"item",exact:!0,to:"/",activeStyle:{menu:f.a}},"home"),r.a.createElement(d.c,{className:"item",exact:!0,to:"/settings",activeStyle:{menu:f.a}},"settings"),r.a.createElement(d.c,{className:"item",exact:!0,to:"/about",activeStyle:{menu:f.a}},"about"),r.a.createElement(d.c,{className:"item",exact:!0,to:"/contact",activeStyle:{menu:f.a}},"contact")),r.a.createElement("div",{className:"content"},r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(I,Object.assign({},t,{calendarHref:e.props.calendarHref,addHref:e.props.addHref}))}}),r.a.createElement(h.a,{exact:!0,path:"/settings",render:function(t){return r.a.createElement(T,Object.assign({},t,{calendarHref:e.props.calendarHref,addHref:e.props.addHref}))}}),r.a.createElement(h.a,{exact:!0,path:"/about",component:H}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:P})))}}]),t}(n.Component),J=(a(49),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleName=function(e){13===e.charCode&&a.state.nameVal.length>0&&a.setState({greetingToggle:!0})},a.saveToLS=function(e){var t=JSON.parse(localStorage.getItem("names"));t=e,localStorage.setItem("names",JSON.stringify(t))},a.setNameState=function(e){a.setState({nameVal:e.target.value}),a.saveToLS(e.target.value)},a.addHref=function(e){a.setState({calendarHref:e.target.value});var t=e.target.value,n=JSON.parse(localStorage.getItem("calendar"));n=t,localStorage.setItem("calendar",JSON.stringify(n))},a.state={nameVal:"",greetingToggle:!1,calendarHref:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.names&&this.setState({greetingToggle:!0})}},{key:"render",value:function(){return r.a.createElement("div",{id:"dashboard-container",className:"container"},r.a.createElement(d.a,null,r.a.createElement(_,{addHref:this.addHref,calendarHref:this.state.calendarHref,nameVal:this.state.nameVal,setNameState:this.setNameState,greetingToggle:this.state.greetingToggle,toggleName:this.toggleName})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[28,1,2]]]);
//# sourceMappingURL=main.7ea5f51e.chunk.js.map