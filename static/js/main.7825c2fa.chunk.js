(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],{101:function(t,e,a){},102:function(t,e,a){},106:function(t,e,a){},126:function(t,e,a){},128:function(t,e,a){},130:function(t,e,a){"use strict";a.r(e);var n=a(3),s=a.n(n),c=a(14),i=a.n(c),r=(a(52),a(53),a(20)),o=a(21),d=a(28),l=a(27),h=a(40),j=a(39),u=a.n(j),D=(a(54),a(55),a(5));var b=function(t){var e=Object(n.useState)(),a=Object(h.a)(e,2),c=a[0],i=a[1],r=Object(n.useState)(),o=Object(h.a)(r,2),d=o[0],l=o[1];return Object(D.jsx)(s.a.Fragment,{children:Object(D.jsxs)("form",{className:"Search",children:[Object(D.jsx)("label",{htmlFor:"Enter start date for image search",children:"Start Date:"}),Object(D.jsx)(u.a,{selected:t.startDate,startDate:c,endDate:d,maxDate:new Date,onSelect:function(t){return i(t)},onChange:t.changeStartDate,placeholderText:"Enter start date",tabIndex:"0","aria-describedby":"Start Date"}),Object(D.jsx)("label",{htmlFor:"Enter end date for image search",children:"End Date:"}),Object(D.jsx)(u.a,{selected:t.endDate,startDate:c,endDate:d,minDate:c,maxDate:new Date,onChange:t.changeEndDate,onSelect:function(t){return l(t)},placeholderText:"Enter end date",tabIndex:"0","aria-describedby":"End Date"})]})})},g=(a(101),function(t){var e="Card "+t.className;return Object(D.jsx)("div",{className:e,children:t.children})}),m=(a(102),a(44)),f=a(43),O=(a(106),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={liked:!1},t.toggle=function(){var e=t.state.liked;e=!e,t.setState({liked:e})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(D.jsx)("button",{tabIndex:"0",onClick:this.toggle,title:"Like or Dislike","aria-label":this.state.liked?"Liked":"Unliked",children:Object(D.jsx)(f.a,{icon:m.a,style:this.state.liked?{color:"blue"}:null})})}}]),a}(n.Component)),x=O,p=a(17),v=a.n(p),y=function(t){var e=v()(t.date).format("MM/DD/YYYY"),a=null;return"image"===t.media_type&&(a=Object(D.jsxs)(g,{className:"Photo",children:[Object(D.jsx)("img",{src:t.photo,alt:t.title,tabIndex:"0"}),Object(D.jsx)("h5",{children:t.title}),Object(D.jsx)("h6",{children:e}),Object(D.jsx)(x,{})]})),Object(D.jsx)("div",{children:a})},k=a(45),S=a.n(k),C=(a(126),a(127),function(t){return t.isLoading?Object(D.jsx)(S.a,{type:"Circles",color:"#00BFFF",height:80,width:80}):0===t.imagesData.length||1===t.imagesData.length&&"video"===t.imagesData[0].media_type?Object(D.jsx)("div",{className:"DisplayImagesErr",children:"Sorry, no images found."}):Object(D.jsx)("div",{className:"DisplayImages",children:t.imagesData.map((function(t){return Object(D.jsx)(y,{photo:t.url,title:t.title,media_type:t.media_type,date:t.date},t.url)}))})}),Y="s3IfT4IU7K1eoWsacrswNeqxza0EkkDZebCd0NdQ",E=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={imagesData:[],startDate:new Date,endDate:new Date,isLoading:!1},t.startDateChangedHandler=function(e){t.setState({startDate:e}),t.loadData(e,t.state.endDate)},t.endDateChangedHandler=function(e){t.setState({endDate:e}),t.loadData(t.state.startDate,e)},t.loadData=function(e,a){t.setState({isLoading:!0});var n=v()(e).format("YYYY-MM-DD"),s=v()(a).format("YYYY-MM-DD"),c="https://api.nasa.gov/planetary/apod?api_key=".concat(Y,"&start_date=").concat(n,"&end_date=").concat(s);fetch(c).then((function(t){return t.json()})).then((function(e){t.setState({imagesData:e,isLoading:!1})})).catch((function(t){return console.log(t)}))},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadData(this.state.startDate,this.state.endDate)}},{key:"render",value:function(){return Object(D.jsxs)(s.a.Fragment,{children:[Object(D.jsxs)("div",{"aria-atomic":"true","aria-live":"polite",className:"sr-only",role:"status",children:[" ","".concat(this.state.imagesData.length," image").concat(1===this.state.imagesData.length?"":"s"," found")]}),Object(D.jsx)(b,{startDate:this.state.startDate,endDate:this.state.endDate,changeStartDate:this.startDateChangedHandler,changeEndDate:this.endDateChangedHandler}),Object(D.jsx)(C,{imagesData:this.state.imagesData,isLoading:this.state.isLoading})]})}}]),a}(n.Component),F=E,N=(a(128),function(){return Object(D.jsxs)("div",{className:"Header",children:[Object(D.jsx)("h2",{children:"The Spacebook"}),Object(D.jsx)("h5",{children:Object(D.jsx)("i",{children:"for the aspiring astronauts in all of us!!"})})]})});var w=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(N,{}),Object(D.jsx)(F,{})]})},I=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(w,{})}),document.getElementById("root")),I()},52:function(t,e,a){},53:function(t,e,a){},55:function(t,e,a){}},[[130,1,2]]]);
//# sourceMappingURL=main.7825c2fa.chunk.js.map