/* This source code is Copyright (c) Vibrant Media 2001-2008 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */
if('undefined'==typeof INTELLITXT) {var INTELLITXT={};} if('undefined'==typeof INTELLITXT.EventMonitor) {INTELLITXT.EventMonitor=function(eventPairs,events) {if('undefined'!=typeof eventPairs&&('undefined'!=typeof eventPairs.eventPairs||'undefined'!=typeof eventPairs.events)) {if('undefined'!=typeof eventPairs.events) {events=eventPairs.events;} if('undefined'!=typeof eventPairs.eventPairs) {eventPairs=eventPairs.eventPairs;}} var e=new Array();var eP=new Array();var _cD=function(sE,eE) {var rv;if(e[sE]&&e[eE]) {rv=e[eE].time-e[sE].time;} return rv;};var _cP=function(eN) {for(var pN in eP) {if(eP[pN].startEventName==eN||eP[pN].endEventName==eN) {var nD=_cD(eP[pN].startEventName,eP[pN].endEventName);if(nD!=eP[pN].duration) {eP[pN].duration=nD;eP[pN].logged=false;}}}};this.getEvent=function(name) {return e[name];};this.getEvents=function() {return e;};this.getEventPair=function(startEventName,endEventName) {return eP[startEventName+'_'+endEventName];};this.getEventPairs=function() {return eP;};this.logEvent=function(name,relog) {var rE=null;if('undefined'!=typeof e[name]&&(relog||!e[name].logged)) {e[name].logged=true;rE={name:e[name].name,time:e[name].time};} return rE;};this.logEvents=function(relog) {var arE=new Array();for(var eN in e) {var tE=this.logEvent(eN,relog);if(tE) {arE[arE.length]=tE;}} return arE;};this.logEventPair=function(startEventName,endEventName,relog) {var rP=null;var nS=startEventName+'_'+endEventName;if('undefined'!=typeof eP[nS]&&'undefined'!=typeof eP[nS].duration&&(relog||!eP[nS].logged)) {eP[nS].logged=true;var rNS=nS;var dur=eP[nS].duration;if(dur<0) {rNS=endEventName+'_'+startEventName;dur=Math.abs(dur);} rP={name:rNS,duration:dur};} return rP;};this.logEventPairs=function(relog) {var arP=new Array();for(var pN in eP) {var tP=this.logEventPair(eP[pN].startEventName,eP[pN].endEventName,relog);if(tP) {arP[arP.length]=tP;}} return arP;};this.setEvent=function(name,time) {if('undefined'==typeof time) {var now=new Date();time=now.getTime();} var event={name:name,time:time,logged:false};e[name]=event;_cP(name);};this.setEventPair=function(startEventName,endEventName,duration) {if('undefined'==typeof duration) {duration=_cD(startEventName,endEventName);} var eventPair={startEventName:startEventName,endEventName:endEventName,duration:duration,logged:false};eP[startEventName+'_'+endEventName]=eventPair;};if('undefined'!=typeof eventPairs) {for(var pN in eventPairs) {if(eventPairs[pN].startEventName&&eventPairs[pN].endEventName) {this.setEventPair(eventPairs[pN].startEventName,eventPairs[pN].endEventName,eventPairs[pN].duration);}}} if('undefined'!=typeof events) {for(var eN in events) {if(events[eN].name) {this.setEvent(events[eN].name,events[eN].time);}}}};} ; 