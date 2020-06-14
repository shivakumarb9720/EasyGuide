// Copyright (c) 2012 iSpeech, Inc.
// Redistribution of this source is prohibited.
// http://www.ispeech.org
function wrBeginInit(e){var t="";window.wrDownloadSupported===!0&&(t='<a onclick="return window.webReader['+e+'].downloadFile()" href="#"><div class="ispeech_wizard_button_d"></div></a>'),document.write('<div id="ispeech_widget_'+e+'" class="ispeech_wizard_button  ispeech_forbidden ispeech_bannera"><a onclick="return window.webReader['+e+'].togglePlayer()" href="#"><div class="ispeech_wizard_button_p"></div></a>'+t+"</div>");var n=function(e){window.isJQ172f(function(){typeof window.iSpeechWebReaderInit!="undefined"&&typeof window.iSpeechWebReaderInit[e]=="function"&&window.iSpeechWebReaderInit[e](e)})};typeof window.isJQ172f=="undefined"?window.isJQ172Init=function(){n(0)}:n(e)}var isJsHost="https:"==document.location.protocol?"https://":"http://";String.prototype.trim||(String.prototype.trim=function(){var e=this.replace(/^\s+/,"");for(var t=e.length-1;t>=0;t--)if(/\S/.test(e.charAt(t))){e=e.substring(0,t+1);break}return e}),String.prototype.rtrim||(String.prototype.rtrim=function(){var e=this.replace(/\s+$/,"");return e}),String.prototype.indexOfPlus||(String.prototype.indexOfPlus=function(e,t){var n=this,r=n.match(/<.+?\>/igm);if(r!=null&&r.length>0)for(var i=0;i<r.length;i++)n=n.replace(r[i],(new Array(r[i].length+1)).join(" "));return n.indexOf(e,t)}),String.prototype.replaceAt||(String.prototype.replaceAt=function(e,t,n){return this.substr(0,n)+t+this.substr(n+e.length)}),String.prototype.regexIndexOf||(String.prototype.regexIndexOf=function(e,t){var n=this.substring(t||0).search(e);return n>=0?n+(t||0):n}),typeof window.isJQ172f=="undefined"&&document.write('<script src="'+isJsHost+'www.ispeech.org/scripts/jquery.1.7.2.js" type="text/javascript"></s'+"cript>"),typeof isAudioJS=="undefined"&&document.write('<script src="'+isJsHost+'www.ispeech.org/scripts/audiojs.is.js" type="text/javascript"></'+"script>");if(typeof window.hasWebReaderInitalized=="undefined"||!window.hasWebReaderInitalized){window.hasWebReaderInitalized=!0,window.wrInstance=-1,window.lastiSpeechHighlighter=null;function iSpeechHighlighter(e){var t=e&&typeof e.autoPlay=="boolean"?e.autoPlay:!1,n=null,r=null,i=Math.max(10,e&&e.charsPerSentence?e.charsPerSentence:200),s=[0,0],o=[null,null],u=1e3,a=e&&e.lastOffset?e.lastOffset:0,f=e&&e.enableHighlight?e.enableHighlight:!1,l=[null,null],c=e&&typeof e.readImgAlt=="boolean"?e.readImgAlt:!0,h=e&&e.extraLineNodes instanceof Array?e.extraLineNodes:["div"],p=-1,d=null,v=null,m=!1,g=e,y=0,b=0,w=null,E=10,S=[!1,!1],T=null,N=!1,C=0,k=-1,L=-1,A=null,O=0,M=0,_=[],D=!1,P=0,H="",B="usenglishfemale",j=e&&e.style?e.style:".iSpeechHighlightWord {background: #5C7AF2;color: #FFFFFF;-moz-border-radius: 3px;border-radius: 3px}.iSpeechHighlightSentence {background: #DADFF5; color:#000000;-moz-border-radius: 3px;border-radius: 3px}",F="webreader",I=!1,q=!1,R=0,U=null;this.resetHighlighter=function(){n=null,O=0,M=0,_=[],s=[0,0],a=0,S=[!1,!1],l=[null,null],p=-1,d=null,v=null,m=!1,y=0,b=0,w=null,T=null,N=!1,D=!1,C=0,k=-1,L=-1,A=null,I=!1,q=!1,R=0,U=null},this.getID=function(){return d},this.stopOthers=function(){typeof window.wrNoInit=="undefined"&&(window.lastiSpeechHighlighter!=null&&window.lastiSpeechHighlighter.getID()!=d&&window.lastiSpeechHighlighter.stop(),window.lastiSpeechHighlighter=this)},this.getTextForNode=function(e,t,n){var r=",";if(this.isiSpeechForbidden(e))return"";var i="",s=0;if(t!=null&&t.length>0)for(s=0;s<t.length;s++)if(t[s]==e)return"";var o=e.childNodes;if(o.length==0&&e.nodeType==3){var u=window.isJQ172f(e).text().trim().replace(/[\n\r]/g," ");this.isLineNode(e.parentNode)&&e.nextSibling==null&&(u.length>1&&u.charAt(u.length-1)!=r?u+=r+" ":!this.isValidPeriod(u.length-1,u)&&u.charAt(u.length-1)==r&&(u+=r+" ")),i+=u.replace(/[\t]/g," ").trim().replace(/\.[\n\r]+/g,r+" ")+" ",q=!0}else if(!c||o.length!=0||e.nodeType!=1||e.nodeName.toLowerCase()!="img"&&e.nodeName.toLowerCase()!="input"){q&&this.isLineNode(e)&&(n.trim().length==0||n.trim().length>1&&(n.trim().charAt(n.trim().length-1)!="."||!this.isValidPeriod(n.trim().length-1,n.trim()))&&n.trim().charAt(n.trim().length-1)!=",")&&(i=i.trim()+r+" "),q=!1;for(var s=0;s<o.length;s++)i+=this.getTextForNode(o[s],t,n+i)||"";this.isLineNode(e)&&(i.trim().length==0||i.trim().length>1&&(i.trim().charAt(i.trim().length-1)!="."||!this.isValidPeriod(i.trim().length-1,i))&&i.trim().charAt(i.trim().length-1)!=",")&&(i=i.trim()+r+" ")}else{var a=e.getAttribute("alt");a!=null&&a.length>0&&(e.className==null||e.className.toLowerCase().indexOf("webreader_no_pause")==-1?a.length>1&&a.charAt(a.length-1)!=r&&(a+=r+" "):a+=" ",i+=a.replace(/[\t]/g," ").trim().replace(/\.[\n\r]/g,r)+" "),q=!0}while(i.indexOf("  ")>-1||i.indexOf(" "+r+" ")>-1||i.indexOf(r+" "+r)>-1||i.indexOf(r+r+" ")>-1)i=i.replace("  "," "),i=i.replace(" "+r+" ",r+" "),i=i.replace(r+" "+r,r+" "),i=i.replace(r+r+" ",r+" ");var u=n+i;return u.match(/\., $/)&&(i=i.replace(/\., $/,". ")),n==""&&(i.match(/^\. $/)||(i=i.replace(/^\. /,"")),i.match(/^, $/)||(i=i.replace(/^, /,""))),i},this.applySpans=function(e,t,n,r){if(!f)return;if(this.isiSpeechForbidden(e))return;if(t!=null&&t.length>0)for(L=0;L<t.length;L++)if(t[L]==e)return;var i=e.childNodes,s="";if(i.length==0&&e.nodeType==3||c&&i.length==0&&e.nodeType==1&&(e.nodeName.toLowerCase()=="img"||e.nodeName.toLowerCase()=="input")){s=e.innerText||e.textContent||e.data||"";var o=!1,u=0;if(e.nodeName.toLowerCase()=="img"||e.nodeName.toLowerCase()=="input")o=!0,s=e.getAttribute("alt")||"";s=s.replace(/(\r\n|\n|\r)/gm," ");while(s.indexOf("  ")>-1)s=s.replace("  "," ");if(s.length>0){var a=null,l=e.nextSibling==null,h=document.createElement(F);window.isJQ172f(h).addClass("ispeech_sentence_"+O),window.isJQ172f(h).addClass("ispeech_forbidden"),e.nextSibling!=null&&!o?window.isJQ172f(e.nextSibling).before(h):e.parentNode.appendChild(h);var p=new Array,d=new Array,v=new Array,m=n[R],g=0,y=-1,b=0;while(R<parseInt(n.words)){g=s.toLowerCase().indexOf(m.text.toLowerCase().replace(/[\.,]$/,""),y),v.push(m.text.match(/[\.,] ?$/)!=null&&this.isEndChar(m.text.trim()));if(!(g>-1))break;if(y>-1){var w=s.substring(b,g);w.rtrim().length<w.length?d.push(" "):d.push(""),p.push(w.rtrim()),b=g}y=g+m.text.length,m=n[++R]}p.push(s.substring(b,y)),p.push(s.substring(y));for(var E=0;E<p.length;E++){var S=v.shift();if(p[E].substr(0,2)==". "||p[E].substr(0,1)==",")O++,a=h,h=document.createElement(F),window.isJQ172f(h).addClass("ispeech_sentence_"+O),window.isJQ172f(h).addClass("ispeech_forbidden"),window.isJQ172f(a).after(h);var x=document.createElement(F);x.id="ispeech_word_"+M++,window.isJQ172f(x).attr("sId",O),window.isJQ172f(x).addClass("ispeech_forbidden"),o&&window.isJQ172f(x).css("display","none");var T=document.createTextNode(p[E]);x.appendChild(T),h.appendChild(x);var N=p[E].trim().substr(p[E].trim().length-1,1);((this.isEndChar(p[E].trim())||N=="["||N=="]")&&p[E].trim().length==1||p[E].trim().length==0||this.isEndChar(p[E].trim().substr(0,1))&&p[E].trim().length<3)&&window.isJQ172f(x).addClass("ispeech_word_skip");if(!o){if(E<p.length-1&&d.length>0){var C=d.shift();window.isJQ172f(h).append(document.createTextNode(C))}if(S&&p[E].trim().length>1||this.isEndChar(p[E].trim())||E==p.length-1&&this.isLineNode(e.parentNode)&&l)O++,E<p.length-1&&(a=h,h=document.createElement(F),window.isJQ172f(h).addClass("ispeech_sentence_"+O),window.isJQ172f(h).addClass("ispeech_forbidden"),window.isJQ172f(a).after(h))}}o&&(e.className==null||e.className.toLowerCase().indexOf("webreader_no_pause")==-1)&&O++,I=!0}o||_.push(e)}else{I&&this.isLineNode(e)&&O++,I=!1;var k=[];for(var L=0;L<i.length;L++)k.push(i[L]);for(var L=0;L<k.length;L++)this.applySpans(k[L],t,n,r+1);this.isLineNode(e)&&O++}if(r==0)while(e=_.pop())e.parentNode.removeChild(e)},this.isEndChar=function(e){if(e!=null&&e.length>0){var t=[e.substr(e.length-1,1),e.substr(e.length-2,1)],n=["!",".",";",":",",","?","و",".","。","、"];for(var r=0;r<n.length;r++)for(var i=0;i<t.length;i++)if(t[i]==n[r]&&this.isValidPeriod(i==0?e.length-1:e.length-2,e))return!0}return!1},this.isLineNode=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase(),n=["li","h1","h2","h3","h4","h5","h6","ul","p","td","tr","table","small","br"];if(h&&h.length>0)for(var r=0;r<h.length;r++)n.push(h[r].toLowerCase().trim());for(var r=0;r<n.length;r++)if(n[r]==t)return!0}return!1},this.isiSpeechForbidden=function(e){return e==null||e.parentNode==0||e.className==null?!1:e.nodeName.toLowerCase()=="script"||e.nodeType==8||e.nodeName.toLowerCase()=="sup"||e.nodeName.toLowerCase()=="sub"||e.nodeName.toLowerCase()=="embed"||e.nodeName.toLowerCase()=="object"||e.nodeName.toLowerCase()=="style"||e.nodeName.toLowerCase()=="head"?!0:e.className!=null&&(e.className.indexOf("ispeech_forbidden")>-1||e.className.indexOf("ispeech_no_read")>-1||e.className.indexOf("webreader_skip")>-1)?!0:this.isiSpeechForbidden(e.parentNode)},this.parseMarkers=function(e){var t=null,n=0,r=new Object;for(x=0;x<e.childNodes.length;x++){t=e.childNodes[x];if(t.nodeType==1)switch(t.nodeName.toLowerCase()){case"word":r[n]=this.wordValue(t),n++;break;default:r[t.nodeName.toLowerCase()]=t.innerText||t.textContent||t.text}}return r},this.wordValue=function(e){var t=new Object,n=null;for(var r=0;r<e.childNodes.length;r++)n=e.childNodes[r],n.nodeType==1&&(t[n.nodeName.toLowerCase()]=n.innerText||n.textContent||n.text);return t},this.moveScripts=function(e,t){for(var n=e.length-1;n>=0;n--)e[n].nodeName.toLowerCase()=="script"?t.appendChild(e[n]):e[n].childNodes.length>0&&this.moveScripts(e[n].childNodes,t)},this.initalizeHighlight=function(){this.moveScripts(v.childNodes,v.parentNode),n=v.innerHTML,M==0&&this.advanceHighlight(0)},this.combineMarkers=function(e,t){var n=new Array,r=0;if(e!=null){for(var i=0;i<parseInt(e.words);i++)n.push({text:e[i].text});r+=parseInt(e.words)}if(t!=null){for(var i=0;i<parseInt(t.words);i++)n.push({text:t[i].text});r+=parseInt(t.words)}return n.words=r+"",n},this.checkIfPlayerReady=function(e){s[e]++,(s[e]==2||!f&&s[e]==1)&&b==e&&(t||N?(n==null&&f?this.initalizeHighlight():this.advanceHighlight(e),this.isIOS()&&!N?(m=!0,this.onPlayReady()):(this.stopOthers(),l[e]!=null&&this.movePosition(0,e),o[e].play(),N=!0)):(m=!0,this.onPlayReady()))},this.startParseMarkers=function(e,t){l[t]==null&&typeof e!="undefined"&&e.childNodes!=null?(l[t]=this.parseMarkers(e.childNodes[e.childNodes.length-1]),this.checkIfPlayerReady(t)):this.disableHighlighting()},this.isFlashSupported=function(){try{if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return!0}catch(e){if(navigator.mimeTypes["application/x-shockwave-flash"]!=undefined)return!0}return!1},this.disableHighlighting=function(e){f=!1,s[e]--,l=[null,null],U=null,this.clearHighlighting(),this.checkIfPlayerReady(e)},this.initializePlayer=function(e,t,n,i,u){var a=this,c=!1;if(f){var h=a.createRequestURL("markers",e,t,n,i);window.isJQ172f.ajax({url:h,cache:!0,error:function(e,t){window.isJQ172f.getJSON(h+"&output=json&jsoncallback=?",function(e){e&&e.data!=null?a.startParseMarkers(window.isJQ172f.parseXML(e.data),u):a.disableHighlighting(u)}).error(function(){a.disableHighlighting(u)})},success:function(e){a.startParseMarkers(e,u)}})}if(o[u]==null||!this.isIOS())o[u]=isAudioJS.create(document.getElementById(d+"_"+u),{css:".audiojs{height:0px; opacity: 0 ; filter:alpha(opacity=0);}",swfLocation:isJsHost+"www.ispeech.org/Flash/taudiojs.swf",loadProgress:function(e){(e>0||/(Firefox)/i.test(navigator.userAgent))&&S[u]==0&&!a.isIOS()&&(S[u]=!0,a.checkIfPlayerReady(u),u==0&&!D&&(D=!0,y<w.length&&a.initializePlayer(w[y++],g.voice,g.speed,g.apiKey,1)))},updatePlayhead:function(e){e>0&&a.movePosition(e,u)},loadError:function(r){c||(c=!0,o[u].load(a.createRequestURL("convert",e,t,n,i)))},trackEnded:function(e){if(w==null)return;s[u]=0,l[u]=null,S[u]=!1;if(y==w.length+r.length-1||y==1&&w.length==1){a.clearHighlighting(),a.resetHighlighter(),a.onPlayComplete();return}y<w.length&&a.initializePlayer(w[y],g.voice,g.speed,g.apiKey,u),y++,b++,b==r.length&&(b=0),p=-1;if(s[b]==2||!f&&s[b]==1)a.isIOS()||a.sleep(500),o[b].play(),a.advanceHighlight(b),l[b]!=null&&a.movePosition(0,b)}});o[u].load(this.createRequestURL("convert",e,t,n,i)),this.isIOS()&&a.checkIfPlayerReady(u)},this.sleep=function(e){var t=(new Date).getTime();for(var n=0;n<1e7;n++)if((new Date).getTime()-t>e)break},this.createRequestURL=function(e,t,n,r,i){r==null&&(r=P),n==null&&(n=B),i==null&&(i=H);if(typeof g.pl!="undefined"&&g.pl.length>0)for(var s=0;s<g.pl.length;s++)g.pl[s]!=null&&g.pl[s].n!=null&&(t=t.replace(new RegExp(g.pl[s].n+"\\b","g"),g.pl[s].v));var o=null;return typeof this.callbackURL=="function"&&(o=this.callbackURL(t,n,r,e)),o==null||o==0||o==""?isJsHost+"api.ispeech.org/api/rest?speed="+r+"&apikey="+i+"&text="+encodeURIComponent(t)+"&action="+e+"&voice="+n+"&format=mp3&e=audio.mp3":o},this.movePosition=function(e,t){if(l[t]!=null){var n=this.getWord(e*1e3,t);if(n>-1&&n!=p&&n>p){for(var r=p+1;r<=n;r++){for(;;){if(!window.isJQ172f("#ispeech_word_"+C).hasClass("ispeech_word_skip"))break;C++}if(window.isJQ172f("#ispeech_word_"+C).text().indexOf(l[t][r]["text"])==-1){var i=0,s=5,o=0;while(s>0){i++;if(l[t][r+i-o]==null||window.isJQ172f("#ispeech_word_"+(C+i)).length==0){i=0;break}if(!window.isJQ172f("#ispeech_word_"+(C+i)).hasClass("ispeech_word_skip")){if(window.isJQ172f("#ispeech_word_"+(C+i)).text().indexOf(l[t][r+i-o]["text"])!=-1){i=0;break}s--}else o++}if(i>0){var u=l[t][r].text;for(var a=C;a<C+10;a++)if(window.isJQ172f("#ispeech_word_"+a).length>0&&window.isJQ172f("#ispeech_word_"+a).text()==u){C=a,u=!1;break}if(u!=0)for(var a=C;a>C-10;a--)if(window.isJQ172f("#ispeech_word_"+a).length>0&&window.isJQ172f("#ispeech_word_"+a).text()==u){C=a;break}}}window.isJQ172f("#ispeech_word_"+k).removeClass("iSpeechHighlightWord"),window.isJQ172f("#ispeech_word_"+C).addClass("iSpeechHighlightWord");var f=parseInt(window.isJQ172f("#ispeech_word_"+C).attr("sId"));f!=L&&(A!=null&&A.removeClass("iSpeechHighlightSentence"),A=window.isJQ172f(v).find(".ispeech_sentence_"+f),A.addClass("iSpeechHighlightSentence"),L=f),k=C++}p=n}}},this.getWord=function(e,t){if(e==0)return 0;for(var n=Math.max(p,0);n<parseInt(l[t].words);n++)if(e>=parseInt(l[t][n].start)&&e<=parseInt(l[t][n].end))return n;return e>parseInt(l[t][parseInt(l[t].words)-1].end)?parseInt(l[t].words)-1:-1},this.isIOS=function(){return/(ipod|iphone|ipad|android|blackberry)/i.test(navigator.userAgent)},this.getLastElement=function(){var e=document.lastChild;while(e!=null){if(e.nodeType==1)break;e=e.previousSibling}return e},this.initialize=function(e,t){if(--E>=0&&v==null){typeof e=="string"?v=document.getElementById(e):v=e;if(v!=null){T=t;var n=this.getTextForNode(v,t,"").trim();n.match(/^\.+$/)&&(n=""),n.match(/^,+$/)&&(n="");if(n&&n.trim().length>0){d="iSpeechPlayer_"+v.id+"_"+(new Date).getTime();var s=document.createElement("style");s.type="text/css",s.styleSheet?s.styleSheet.cssText=j:s.innerHTML=j,this.getLastElement().appendChild(s),w=this.splitByMarkers(n,this.getSentenceMarkers(i,n)),this.isIOS()?r=[null]:r=[null,null];for(var o=0;o<r.length;o++)r[o]=document.createElement("audio"),r[o].setAttribute("id",d+"_"+o),this.getLastElement().appendChild(r[o]);return this.initializePlayer(w[y++],g.voice,g.speed,g.apiKey,0),E++,!0}return v=null,"No text was found inside of selected node"}return"Could not find target node: "+(e||"")}return"Could not initialize or was already initialized"},this.splitByMarkers=function(e,t){var n=new Array,r=new Array,i=0;for(var s=0;s<t.length;s++){var o=e.substring(i,t[s]);o&&o.trim().length>0&&n.push(o.trim()),i=t[s]}return n},this.getNodePath=function(e){var t;while(e.length){var n=e[0],r=n.localName||n.tagName||n.nodeName;if(!r||r=="#document")break;r=r.toLowerCase();if(n.id)return r+"#"+n.id+(t?">"+t:"");n.className&&(r+="."+n.className.split(/\s+/).join("."));var i=e.parent(),s=i.children(r);s.length>1&&(r+=":eq("+s.index(e)+")"),t=r+(t?">"+t:""),e=i}return t},this.pause=function(){return o[b]!=null&&(s[b]==2||!f&&s[b]==1)&&!m?(o[b].pause(),m=!0,!0):!1},this.play=function(){if(d==null)alert("iSpeech highlighter is not initialized.");else if(o[b]!=null&&(s[b]==2||!f&&s[b]==1)&&m)return this.stopOthers(),n==null&&f&&(this.initalizeHighlight(),this.movePosition(0,b)),o[b].play(),N=!0,m=!1,!0;return!1},this.advanceHighlight=function(e){if(f){var t=new Array;if(T&&T.length>0)while(T.length>0)t.push(this.getNodePath(window.isJQ172f(T.shift())));n!=null&&window.isJQ172f(v).html(n);while(t.length>0)T.push(window.isJQ172f(t.shift()).get(0));O=0,R=0,M=0,U=this.combineMarkers(U,l[e]),this.applySpans(v,T,U,0)}},this.isPlaying=function(){return N&&!m},this.stop=function(){this.pause(),this.clearHighlighting(),this.resetHighlighter(),this.onPlayComplete()},this.clearHighlighting=function(){f&&n!=null&&(window.isJQ172f(v).html(n),n=null)},this.getSentenceMarkers=function(e,t){var n=0,r=0,i=new Array,s=0;while(s>-1){s=t.indexOfPlus(".",n),n==0&&s==-1&&(s=t.length);if(s>-1){if(s-r>u)while(s>-1)s=t.indexOfPlus(" ",n),s>-1&&(s-r>e?(i.push(s+1),r=s+1):s-r>u&&alert("Failed to parse sentences correctly."),n=s+1);else s-r>e&&this.isValidPeriod(s,t)&&(i.push(s+1),r=s+1);n=s+1}}return i.push(t.length),i},this.isValidPeriod=function(e,t){var n=["Dr","St","Ms","Mrs","Mr","Sr","Jr","U.S","U.S.A","D.C"];for(var r=0;r<n.length;r++)if(t.substring(e-n[r].length,e)==n[r])return!1;return!0},this.onPlayComplete=function(){},this.onPlayReady=function(){}}function iSpeechMultiHighlighter(e){var t=new iSpeechHighlighter(e),n=null,r=0,i=!1,s=!1,o=[];this.pause=function(){return t.pause()},this.play=function(){return t.play()},this.clearHighlighting=function(){t.clearHighlighting()},this.nextTrack=function(){for(;;){if(!(r<n.length)){this.resetHighlighter(),this.onPlayComplete();return}if(t.initialize(n[r++],o)===!0)return;if(r==n.length){this.resetHighlighter(),this.onPlayComplete();return}}},this.initialize=function(e,r){n=e,o=r;if(!i){var u=this;i=!0,t.onPlayComplete=function(){u.nextTrack()},t.onPlayReady=function(){s?t.play():(s=!0,u.onPlayReady())}}this.nextTrack()},this.resetHighlighter=function(){s=!1,this.clearHighlighting(),n=null,r=0,o=[]},this.onPlayComplete=function(){},this.onPlayReady=function(){}}function iSpeechWebReader(e){var t=null,n=this,r=null,i=e,s=parseInt(e.id||0),o=!1;this.play=function(){return t.play()},this.pause=function(){return t.pause()},this.getId=function(){return s},this.elementByTree=function(e,t){var n=-1,r=0,i=e.split(" > "),s=null;for(r=i.length-1;r>=0;r--){var o=i[r].trim().split("<");if(o[0].indexOf("#")>-1){var u=o[0].split("#");u=u[1].split("."),s=document.getElementById(u[0].trim());if(s!=null){for(var a=1;a<o.length;a++)s=s.parentNode||s;n=r;break}}}s=s||document.firstChild;for(r=n+1;r<i.length;r++){var f=i[r].split("<");for(var a=1;a<f.length;a++)s=s.parentNode||s;s=this.findChildElement(s,f[0],t)}return s},this.findChildElement=function(e,t,n){if(e!=null){while(e.nodeName.toLowerCase()=="html"&&e.firstChild==null||e.nodeType==8){if(e.nextSibling==null)break;e=e.nextSibling}if(t.indexOf(".")==0){var r=t.split("@"),i=window.isJQ172f(e).children(r[0]);return r.length>1?i.get(parseInt(r[1])):i.get(0)}var s=t.split("@"),o=s[0],u=0;s.length>1&&(u=parseInt(s[1]));if(e.childNodes!=null){var i=e.childNodes,a=0;for(a=0;a<i.length;a++)if(o.toLowerCase()==i[a].nodeName.toLowerCase()&&(i[a].id==null||i[a].id.indexOf("ispeech")==-1&&i[a].id.indexOf("iSpeech")==-1)){if(u==0)return i[a];u--}}if(n)return e}return null},this.isNodeChildOf=function(e,t){return t.parentNode!=null&&t.parentNode==e?!0:t.parentNode==null?!1:this.isNodeChildOf(e,t.parentNode)},this.treelistToArray=function(e){var t=new Array,n=new Array,r=e.split(";"),i=0,s=null;for(i=0;i<r.length;i++){var o=r[i].substring(0,1);if(o=="."){var u=window.isJQ172f(r[i]);for(var a=0;a<u.length;a++)t.push(u.get(a))}else{s=this.elementByTree(r[i].substring(1),o!="-");if(s!=null&&s.nodeName.toLowerCase()!="html")if(o=="-")n.push(s);else{var f=!1;for(var a=0;a<t.length;a++)if(t[a]==s||this.isNodeChildOf(t[a],s))f=!0;f==0&&t.push(s)}}}return new Array(t,n)},this.getLastElement=function(){var e=document.lastChild;while(e!=null){if(e.nodeType==1)break;e=e.previousSibling}return e},this.moveWidgetToFirstElement=function(){var e=this.getWidget();if(r.nodeName.toLowerCase()=="td")window.isJQ172f(r).closest("table").prepend(e);else try{r.parentNode.insertBefore(e,r)}catch(t){r.parentNode.appendChild(e)}},this.getWidget=function(){var e=document.getElementById("ispeech_widget_"+s);return e==null&&window.parent&&(e=window.parent.document.getElementById("ispeech_widget_"+s)),e},this.initialize=function(){var e=!1;t==null&&(e=!0,t=new iSpeechMultiHighlighter(i));var s=this.treelistToArray(i.content);t.initialize(s[0],s[1]),r=s[0][0],typeof window.wrMoveToTop!="undefined"&&window.wrMoveToTop==1&&this.moveWidgetToFirstElement(),e&&(t.onPlayComplete=function(){u=!1,n.initialize(),n.getWidget().className="ispeech_forbidden ispeech_bannera ispeech_wizard_button"+(i.downloadSupport?"_download":"")},t.onPlayReady=function(){if(!o){o=!0;var e=document.createElement("link");e.setAttribute("type","text/css"),e.setAttribute("rel","stylesheet"),e.setAttribute("href",isJsHost+"www.ispeech.org/styles/webreader.css"),n.getLastElement().appendChild(e)}n.onPlayReady()})},this.initialize();var u=!1;this.togglePlayer=function(){if(!u){if(u=this.play())this.getWidget().className="ispeech_wizard_button"+(i.downloadSupport?"_download":"")+"_stop ispeech_bannerb ispeech_forbidden"}else this.pause()&&(u=!1,this.getWidget().className="ispeech_wizard_button ispeech_bannera ispeech_forbidden");return!1},this.downloadFile=function(){alert("This feature is not yet supported. Please contact iSpeech support for more details.")},this.getIsPlaying=function(){return u},this.clearHighlighting=function(){t.clearHighlighting()},this.onPlayReady=function(){}}}typeof window.iSpeechWebReaderInit!="undefined"&&typeof window.wrNoInit=="undefined"&&wrBeginInit(++window.wrInstance);