"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8964],{3941:function(e,a,t){t.r(a),t.d(a,{Title:function(){return s},_frontmatter:function(){return l},default:function(){return b}});var o=t(3366),r=(t(7294),t(4983)),n=t(4295),i=["components"],s=function(){return(0,r.kt)("span",null,"Lab Environment ",(0,r.kt)("br",null))},l={},c={Title:s,_frontmatter:l},p=n.Z;function b(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)(p,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Architecture"),(0,r.kt)("p",null,"Below is a high-level view of your environment’s architecture."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB6UlEQVQoz1XLTW/TMACA4fxzBEeOEypCcERCmmDTmCZYWVlbimBN1/UriZPGSRwnsR07rj+SrruhaeKwV+/1cYwxlNWMEEop51y7Z6T/Yf35yPty5J32wOk77+QtOOvJq/e7yDXdwWhl/udoY6s8WqxXEQhqSitpS6EQbzO+DxFeomBTpilR2bZAmGvzLEebVpLYA0EWR0WWbDK+gCQodwHW7vZPP59fpcM1wjG7T5nRSj3D1hqKvMAd5v4MIwwi5EcxQGx0G47Dv79gPNxOl0m2RrJUhyfDuWCUPeJGGVHTVuSSYSlVFm7G44uK1q5fLKE/9AY3iQtF50O6ApkQoqpKSomUjVTSmRfy9U2die6w76SyGYyGk1EAwskSjm77H6dvvi2O1xmbLcJXL1/8OD8XcYxwSaRplHTcfNcbrQIMMKmZ2CUgTacTxnjMH643P4/d3sXdJx/Xc8hOLoeLtefB6rdXzVKptHZaYwvOBjB2/RSXZB7xEOIQ82XCBkF+GWbfAfJIlzQPIbuX9iBV52F1h3ZEaGfXiOkq/DoJBm4QRnFSsLjkW1wnRZ1QDUoTVQYxjbmpWM0J5DQVLNUkaXXjcM4RylOEEC4Iodbarm2fbq3p2set1da2qinjzQB612A1qML+Xlf/AM4NCmu9C79EAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"architecture1",title:"architecture1",src:"/Turbo-1-Day-Partner-Workshop/static/c45bd09db52cb363678aa7e126d209e8/3cbba/architecture.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/c45bd09db52cb363678aa7e126d209e8/7fc1e/architecture.png 288w","/Turbo-1-Day-Partner-Workshop/static/c45bd09db52cb363678aa7e126d209e8/a5df1/architecture.png 576w","/Turbo-1-Day-Partner-Workshop/static/c45bd09db52cb363678aa7e126d209e8/3cbba/architecture.png 1152w","/Turbo-1-Day-Partner-Workshop/static/c45bd09db52cb363678aa7e126d209e8/0b124/architecture.png 1728w","/Turbo-1-Day-Partner-Workshop/static/c45bd09db52cb363678aa7e126d209e8/4ea69/architecture.png 2304w","/Turbo-1-Day-Partner-Workshop/static/c45bd09db52cb363678aa7e126d209e8/7c9ca/architecture.png 2361w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("h1",null,"Your lab environment"),(0,r.kt)("p",null,"Techzone Collection: ",(0,r.kt)("a",{parentName:"p",href:"https://techzone.ibm.com/collection/6419ccb56e3bf3001760751d"},"https://techzone.ibm.com/collection/6419ccb56e3bf3001760751d")),(0,r.kt)("p",null,"To go through your lab sessions, you must first access your environment. Most of the labs will use the Turbonomic UI. Below are the instances you will use during this proof of technology session."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bastion Server")," - This is your main desktop. You will run the labs in this VM. It can be accessed using the link provided by your proctor. The link should automatically log you in the system (no user and password required).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Turbonomic")," - Which will be accessible through web browser on your bastion server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Instana")," - This will also be accessible through a bastion VM.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Kubernetes cluster")," - You are assigned your very own Kubernetes cluster. You won’t directly open the desktop for your cluster’s nodes, but will execute commands on it from your bastion VM to install and configure kubeturbo (more on this in “Add Targets” lab). ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Credentials file")," - The file including all credentials you need to go through this workshop is named “Turbo-PoT-Credentials.html” and is preset as a browser window on your bastion VM. To access it go to you bastion VM desktop and open FireFox window from activities on top left of the screen. The file should pop open."))),(0,r.kt)("h2",null,"Access bastion VM"),(0,r.kt)("p",null,"Use the link provided by your proctor. Once you click on it, it should open the below page in your browser. Click on the “Remote Desktop” item from the list to open up your bastion VM desktop. "),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAzElEQVQY04XLy07DMBCF4bz/o3UDCyQEqERKwsVtaje9eewZ+0dpuyhlwUifjubW9H1PCIGcMyLyW4zEG3/2Iue/aZroug7nHI2ZUmvBzLBaMcCoFCCbISkhaX6OqCqlGHbLjFLm67kqzcfwSZJM0ULZBuz7Cx1HdOUuYkK1orlc2Z1CEiUlJSeleXpZ8Lx8oG0fGd4WuNUrYdviwzs+LPH7Dn8Y8If+arhzmW32HdPJ0YRpxG/XbMKa3XGHaCSbkEzOmedeT/9Kc5rwA0QhghiG5RUpAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"bastion",title:"bastion",src:"/Turbo-1-Day-Partner-Workshop/static/7f4b23f3aa51afe9920d0bc4581a89e4/3cbba/bastion.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/7f4b23f3aa51afe9920d0bc4581a89e4/7fc1e/bastion.png 288w","/Turbo-1-Day-Partner-Workshop/static/7f4b23f3aa51afe9920d0bc4581a89e4/a5df1/bastion.png 576w","/Turbo-1-Day-Partner-Workshop/static/7f4b23f3aa51afe9920d0bc4581a89e4/3cbba/bastion.png 1152w","/Turbo-1-Day-Partner-Workshop/static/7f4b23f3aa51afe9920d0bc4581a89e4/0b124/bastion.png 1728w","/Turbo-1-Day-Partner-Workshop/static/7f4b23f3aa51afe9920d0bc4581a89e4/4ea69/bastion.png 2304w","/Turbo-1-Day-Partner-Workshop/static/7f4b23f3aa51afe9920d0bc4581a89e4/eee50/bastion.png 3202w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("p",null,"Navigate to the top left corner click on “Activities”, and select “FireFox”. Most necessary pages will be pre-populated."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACnUlEQVQoz0WSaVMaWRSG+29ksjiKisjSNjuNLA29sKMUtOiAhAgSlLBptJxkzGw1qTjLT+5nqq9TNR/euqfuPed5zz11pOzma5TNN2y8ecX3W5t4tj3senfZ8+2xH/Dj8/uRwwrRRJxAKEQiESd9qJKMhJ2oHEIJHzhhRXaUA9mJKDJSKhIkp/iJhQ+IJmKohypZLUfR0DFKFlalTNvuMBi+5e27IZPJJZPphNHpCS3LdAzLoFarUClbGJblSOuTFtm0SlCRif0H1AoapUqJjt1mPB6xXi/5eLvm9nbNarVgPp9xNbtyxpMx5+c9x7Y7zvFRw7GqNaTT8Ts0o4hp6tTrNWy7zXA4YDa75u7jDZ8/PfD402d+/vIo5Maffnzg/u6W1XLB9dWU0cWQ3g+nNJp1pKPTNvVmDbvTZnDeZzq5ZLWY83B/xy9fHvn29Q/+/vOJf/564unbV37/7VdhcnOzEqaj8QX9fk80UqlVkDKdCZXmMV27zXm/x+XogqvphNn1lPmHGcvlnPXNisVqwfvr92IEg+GAs94ZJ90TjtstGkcNMaJsIY/UX96T1w0yhyq5fFZIK2qYJVM4No+b2F1bAHr9nji7Z11x12q3xHu1XsUqW+RcYO/Mxi8H8ex4CIQChKNhkmqSbD6LbuqUq2Xqjbrowi125ca1Rk0YuiA3z21CzaaRDos5tvd22Nrewuvz4g/6kRWZSCxCIpUgnUkLuFugu6tk6rirYpT+V76gibxYKoGUNDQ2tjd5+eq7Z+jeM1QJK8SS8Weglqdo6phli1K1TLleFSrVKuKb8WScSDSCHFGQNnY8vHj9kh3vLr5ggJAiE45Fiasp1GyGjJYnpxfRDIOC+SxN18kVCyRSSYJyUIxqP7CPd9/Hv/uDnEf9H4hhAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"bastion1",title:"bastion1",src:"/Turbo-1-Day-Partner-Workshop/static/4d56fd7fee4f54e54c2d793c5fb04de3/3cbba/bastion1.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/4d56fd7fee4f54e54c2d793c5fb04de3/7fc1e/bastion1.png 288w","/Turbo-1-Day-Partner-Workshop/static/4d56fd7fee4f54e54c2d793c5fb04de3/a5df1/bastion1.png 576w","/Turbo-1-Day-Partner-Workshop/static/4d56fd7fee4f54e54c2d793c5fb04de3/3cbba/bastion1.png 1152w","/Turbo-1-Day-Partner-Workshop/static/4d56fd7fee4f54e54c2d793c5fb04de3/0b124/bastion1.png 1728w","/Turbo-1-Day-Partner-Workshop/static/4d56fd7fee4f54e54c2d793c5fb04de3/4ea69/bastion1.png 2304w","/Turbo-1-Day-Partner-Workshop/static/4d56fd7fee4f54e54c2d793c5fb04de3/93b49/bastion1.png 3194w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("p",null,"Add a new tab in the top right, and paste the lab link into the browser address bar: ",(0,r.kt)("a",{parentName:"p",href:"https://ibm.biz/Turbo1Day"},"https://ibm.biz/Turbo1Day"),". This way, you can follow the lab instructions and copy/paste commands without having to switch to your desktop view."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACZUlEQVQoz52R2U8TURTG5581GiXiEuObiOFJfBJaaGktICAqi1q6spWwpRRaLAVs6QooxihdpjOd/WdmgPjul/xycu/57pd7coRSsUShUCSbO+Ige0TuKE/uuMDxtxMqlVNq1Rqnp2eUyzWKxQqlco1ypUbppOyci6UqpVKVQqFEPl9BWIrFiMZjhD7NsjD1ltD0JPGZ98SCXwhHIoRCYeJLcZaXF1kIhYlNjBMLfma6/xXPurro6XmO5/UAk/4Ac1PTCPW6SKPRQvz9B/G8hvj9DOniB5LUQZJkJLGN2BK5bNSRZQVTktAUhfNqja87KQ4yGQ7TGYr7WcrZHIJhmJiGiVMtMAFDN+mcn9C4rKN0VKeva4ZTTdsEVMsV0skUh5ksub19Dncz5HYzCFgW2B7TwnIemJiKRjud5uL8ArEpOQGW3TctJ/QmcHt9k71kitRWkt3tHdLJXYQboy3TsDA0A13Tubq5lvWPm8Cd5A6uwUHGx8YJjAYcxsZGrwJto6poKNJPmpcFFB0ktckvuU1dVmm2ZJpyC0UV0TTVCdza3KK//yUjXi8+3wj+Nz4H4eZ3siQjthrI7Sa6ZqLqKh1VRe6odDoKiqqgdGR0TXP86+sb9PX1MTAwgMvlwuv14Pf7EQzdwEZqS7Sa4tXYxtUCrGtMw3AWZWNPYiuxmqC39wUutxu3283Q0DA+nx+B/1Q+X2Di3TQTk1N4hj34RnwEAmMIK2srhJZXWdrYYjGRIL66Rngxzof5eT7OzDIXDBOMxAhFokSiUYLhKNH4Mh7/ON1PnnLr9l3udHVz78Fj7j98xF8OFgkVJ6oxRAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"bastion0",title:"bastion0",src:"/Turbo-1-Day-Partner-Workshop/static/90f77d8e06b676f596262227922f3ba1/3cbba/bastion0.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/90f77d8e06b676f596262227922f3ba1/7fc1e/bastion0.png 288w","/Turbo-1-Day-Partner-Workshop/static/90f77d8e06b676f596262227922f3ba1/a5df1/bastion0.png 576w","/Turbo-1-Day-Partner-Workshop/static/90f77d8e06b676f596262227922f3ba1/3cbba/bastion0.png 1152w","/Turbo-1-Day-Partner-Workshop/static/90f77d8e06b676f596262227922f3ba1/f1619/bastion0.png 1682w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("p",null,"Select the first open “FireFox” tab.\nThis will display a table that list of all credentials needed to access your lab the environment."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACIUlEQVQoz32SW1PTUBSF87cd3wR9sBV6S5qGUlTe1IEfoAVfVC6SkJQq4NBCsbQ0NU1pmluRzzkHh+EB3TNrVk6Ss/Y6ex1ltVTkdSbDSj5HSSuhGTpqWUWvlNF0TXLtZY2Xq6/QKzpG1aBaq1LRNeYfP+LZ/BMWM88pLGTRCnmUeDQivugReh7TKGQSBn85JAinzGYpSRKTpCmpeE5nRGnK1Pf5uPaW9bV3WNtfOG44dH4co+w3HKyGw2mnw2QyoXvR5We3yyQIGF9dyXdRGBLeQxzH8rtp7mLubPH18yesrS2c3V0U27Y5ODjA932mYUiz2cSyLIbDIUEQyM0P1Ww2w7ZMmrbNoePw3bb5tr+PYlomTsOhfdqWIodHh+yZe3TOz5lOp0RRJAVubm7uICpJEjY3NqjXP1Cvv5e8ubmB0mq3uej1pJsojuj3+4z8kXQmHKdpeid4n0UjEZBu6Bg1g0rNkKy02i0Gg4EUELi8vMQdurfu4ui/guIWqJqKsXSbfHWlinLSOpEiYrNAr9+n2+0y8n0mweSfgiKcxfwi2YUsRbVIuVKmulxFEamKY4qOYi6e58mARLrCpRj+QzMUgiVNRa2U5f3U9DJLQtA0TbZ3thmPx/Kno+Mjzjpncgy/PE82eajiJOHN+jpGbZlcIU9RVVF1HcV1XQauSxhFEiJpsRYsmghB4fI+fl9fy+ZqRWfu6RyZbIYXuRyFYpE/aXgLrA8Arv4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"desktop",title:"desktop",src:"/Turbo-1-Day-Partner-Workshop/static/623b431a46638d37870f433b8f9380b4/3cbba/desktop0.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/623b431a46638d37870f433b8f9380b4/7fc1e/desktop0.png 288w","/Turbo-1-Day-Partner-Workshop/static/623b431a46638d37870f433b8f9380b4/a5df1/desktop0.png 576w","/Turbo-1-Day-Partner-Workshop/static/623b431a46638d37870f433b8f9380b4/3cbba/desktop0.png 1152w","/Turbo-1-Day-Partner-Workshop/static/623b431a46638d37870f433b8f9380b4/0b124/desktop0.png 1728w","/Turbo-1-Day-Partner-Workshop/static/623b431a46638d37870f433b8f9380b4/4ea69/desktop0.png 2304w","/Turbo-1-Day-Partner-Workshop/static/623b431a46638d37870f433b8f9380b4/d8092/desktop0.png 3196w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("h2",null,"Access your Turbonomic environment"),(0,r.kt)("p",null,"The Turbonomic instance is pre-populated in Firefox on your bastion VM. If you can not find it, refer to the Turbo-PoT-Credentials file to get your Turbonomic URL and open it on your bastion VM browser."),(0,r.kt)("h3",null,"Turbonomic Credentials"),(0,r.kt)("p",null,"Username: ",(0,r.kt)("strong",{parentName:"p"},"administrator")),(0,r.kt)("p",null,"Password: ",(0,r.kt)("strong",{parentName:"p"},"Refer to “Turbo-PoT-Credentials” on you bastion server")),(0,r.kt)("p",null,"Please note, your Turbonomic tab on the browser may have a warning message as shown below. This is not an issue, just click on “Advanced…” and then click on “Accept the Risk and Continue”."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACR0lEQVQoz12S208TURCH+2cb30xJTCyXQm/b7VIoIA/e8MkHoeqLQkQuLTcFNZFWKC106XYv5+zZ3c/sQoUwyeRMzuR8M7+Zk3q+WKO2tMDyzAS18afUshnKeolK1UA3dMoVjfmFeRaXl9CNCsbcLNXaHBW9TPrxI8bST8iOZ8hNTqDlZ0g5UjDsdrD//KLTbmFeXWC7DvG9JwSOY+O6Dr5S+MpHqgChfFxrwKeVV7xdec3OxjrHe01OT45J+b6P7wlUEBIBQRgSBAHq1pNYKaSUCCGTU/k+ruexvf2N3c2vbK1/YXdjg+bmJili8wcIu89gMGRoWQwGFpY1ZDgc0jdNbNvhocVFGjvbHDQaHDWbHDUaHO7ukoq7QlzimOdcdC/pdrv0er3/Ll2LQDqEgY8MQoIwfhERK6vX66ytvWdt9cY/1NdIRVGCRAbgCZ8gUEn1WKqQipOOz9F5QKtt4p61UK3fEM9XymRhWllDn9UpV3X0qn7bYRQxAt83z49Y3fd4tyfZOrik//M7ondxk/M8ilqRfDGPXtExqgbGnHHXYRiGCCGSjbqOkzyIovAWfVdsFMX5qewU45MZcoUcpXIJY/YB0Ly2uLq2ubp2sGw3mdMIMgKF94D5QoFCuZTILmolKg+BrgyQKpYPvWHEaT/krK8Q/T7SvEKYfYJOG3yJVIoXK2/QqwbZmWlyhTwFTbu3lPhvOU4i2XMdPu5bLH0e8HLdpL1/yMWPQzoHe7h/W8SLdl2XvFYiPZbm2XiGiewU07kc/wDNlBKAjztN4QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"desktop2",title:"desktop2",src:"/Turbo-1-Day-Partner-Workshop/static/3155ca2a752a5a88ee5063e62e604c5c/3cbba/desktop2.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/3155ca2a752a5a88ee5063e62e604c5c/7fc1e/desktop2.png 288w","/Turbo-1-Day-Partner-Workshop/static/3155ca2a752a5a88ee5063e62e604c5c/a5df1/desktop2.png 576w","/Turbo-1-Day-Partner-Workshop/static/3155ca2a752a5a88ee5063e62e604c5c/3cbba/desktop2.png 1152w","/Turbo-1-Day-Partner-Workshop/static/3155ca2a752a5a88ee5063e62e604c5c/0b124/desktop2.png 1728w","/Turbo-1-Day-Partner-Workshop/static/3155ca2a752a5a88ee5063e62e604c5c/4ea69/desktop2.png 2304w","/Turbo-1-Day-Partner-Workshop/static/3155ca2a752a5a88ee5063e62e604c5c/eed3c/desktop2.png 3192w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("h2",null,"Access your Instana environment"),(0,r.kt)("p",null,"Instana UI is also pre-populated in Firefox on your bastion server. You won’t spend much time in the Instana instance as it is pre-setup for you. You will access it only once to create an API key."),(0,r.kt)("h3",null,"Instana Credentials"),(0,r.kt)("p",null,"Endpoint IP address: ",(0,r.kt)("strong",{parentName:"p"},"10.0.0.2")),(0,r.kt)("p",null,"Username: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:admin@instana.local"},"admin@instana.local"))),(0,r.kt)("p",null,"Password: ",(0,r.kt)("strong",{parentName:"p"},"Refer to “Turbo-PoT-Credentials” on your bastion server")),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB20lEQVQ4y6WTSW/UQBBG/Tu5gYQ48PfIkOQCFyQOQQKhhJAwjPduO17wEm/d7YdszyQzyiBFwtKn6q6qfq7qxXI8h427wQ5sNqGL9+Uzvz6c4336iPP7Fi/0cdwNIha4gUsgA5zIIU5i0juBvJPcxZIkCrm6vsSyHZcgCAilRNob5LcLgtDDD3zCSCIjiRAC33cXG/hIIfFlQBgL8jwnzVJkHLFer7HS/A9VVVHkGZVnU9Y1ZVUtKstZRVHM2s2n/DhJ5hytFUopjDHkeYZltOZ/v3EcZ1tXNdZE3zl3MuOI1pq+H+i6nmEYHvxzzJiD/B1wqvwocA7WNZdX19zcrgmEPMjR267mOY9rpu14AmQbbNoWkWYk857VBy3OFS6LDoBZlh0Bbsdd35MUJUXT0A8DWpu5MqUWHavwOHBrh34gLUrqpqVXikYpWqUYhuVUjwGn62NNG/4YXD4DtGaka1oenHMSjGZEaXMcmO4DJ2nNOPTQdaRZws/Q50aErCOBF4l5/iPwaKrymcCuxRQ55Cnfv17wYvWOV6cnvDl/z+uzFS9PT3h7tsJ37aWTJ8AEq98C2Wt5stMBmOkHfYfutuq72afU8O8Ko/t7qmnx3oHsrs5zXsf+eHrXfwGrjDlgCLqlSAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"desktop3",title:"desktop3",src:"/Turbo-1-Day-Partner-Workshop/static/8025469cc107b1fa8221c3d7e5066b76/3cbba/desktop3.png",srcSet:["/Turbo-1-Day-Partner-Workshop/static/8025469cc107b1fa8221c3d7e5066b76/7fc1e/desktop3.png 288w","/Turbo-1-Day-Partner-Workshop/static/8025469cc107b1fa8221c3d7e5066b76/a5df1/desktop3.png 576w","/Turbo-1-Day-Partner-Workshop/static/8025469cc107b1fa8221c3d7e5066b76/3cbba/desktop3.png 1152w","/Turbo-1-Day-Partner-Workshop/static/8025469cc107b1fa8221c3d7e5066b76/b0588/desktop3.png 1712w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))}b.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return w}});var o=t(7294),r=t(8650),n=t.n(r),i=t(5444),s=t(9403),l=t(3321),c=t(5900),p=t.n(c),b=function(e){var a,t=e.title,r=e.theme,n=e.tabs,i=void 0===n?[]:n;return o.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=i.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===r,a))},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},d=function(e){var a=e.relativePagePath,t=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||r,s=n.baseUrl,l=n.subDirectory,c=s+"/edit/"+n.branch+l+"/src/pages"+a;return s?o.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"bx--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=t(4275),u=t(1721),g=function(e){function a(){return e.apply(this,arguments)||this}return(0,u.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var a,t=n()(e,{lower:!0,strict:!0}),l=t===s,c=new RegExp(s+"/?(#.*)?$"),b=r.replace(c,t);return o.createElement("li",{key:e,className:p()((a={},a["PageTabs-module--selected-item--aBB0K"]=l,a),"PageTabs-module--list-item--024o6")},o.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+b},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},o.createElement("nav",{"aria-label":a},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},a}(o.Component),A=g,h=t(2881),k=t(6958),f=t(36),y=function(e){var a=e.date,t=new Date(a);return a?o.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(f.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var a=e.pageContext,t=e.children,r=e.location,c=e.Title,p=a.frontmatter,u=void 0===p?{}:p,g=a.relativePagePath,f=a.titleType,w=u.tabs,T=u.title,N=u.theme,v=u.description,W=u.keywords,P=u.date,D=(0,k.Z)().interiorTheme,x=(0,i.useStaticQuery)("2456312558").site.pathPrefix,U=x?r.pathname.replace(x,""):r.pathname,C=w?U.split("/").filter(Boolean).slice(-1)[0]||n()(w[0],{lower:!0}):"",E=N||D;return o.createElement(l.Z,{tabs:w,homepage:!1,theme:E,pageTitle:T,pageDescription:v,pageKeywords:W,titleType:f},o.createElement(b,{title:c?o.createElement(c,null):T,label:"label",tabs:w,theme:E}),w&&o.createElement(A,{title:T,slug:U,tabs:w,currentTab:C}),o.createElement(h.Z,{padded:!0},t,o.createElement(d,{relativePagePath:g}),o.createElement(y,{date:P})),o.createElement(m.Z,{pageContext:a,location:r,slug:U,tabs:w,currentTab:C}),o.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-env-mdx-39eebf2f86b7ee15e280.js.map