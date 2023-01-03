(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},31:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a,r,o,p,c,i,x,s,b,d,l,u,m,f=t(0),g=t.n(f),h=t(16),j=t.n(h),O=(t(31),t(22)),w=t(5),v=t(6),C=t(9),k=t(8),y=t(7),S=t(2),z=t(3),A=z.a.label(a||(a=Object(S.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  padding: 20px 0;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n  background-color: #00000090;\n"]))),B=z.a.input(r||(r=Object(S.a)(["\n  background-color: #ffffff7f;\n  width: 240px;\n  border-radius: 5px;\n  margin: 0 auto;\n  height: 23px;\n  margin-top: 15px;\n  border: 1px solid #f3b9ee;\n  &::placeholder {\n    color: #000;\n    text-transform: lowercase;\n    font-size: 12px;\n    letter-spacing: 1px;\n    padding-left: 3px;\n  }\n"]))),F=t(1),D=function(e){var n=e.value,t=e.onChange;return Object(F.jsxs)(A,{children:["Find contacts by name",Object(F.jsx)(B,{type:"text",value:n,onChange:t,placeholder:"search..."})]})},J=t(20),L=z.a.form(o||(o=Object(S.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin: 0 auto;\n      width: 250px;\n      padding: 30px 25px;\n      border-radius: 5px;\n      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n      background-color: #00000090;\n    "]))),N=z.a.label(p||(p=Object(S.a)(["\n      text-transform: uppercase;\n      font-size: 12px;\n      letter-spacing: 2px;\n      font-weight: 600;\n    "]))),H=z.a.input(c||(c=Object(S.a)(["\n      width: 240px;\n      height: 23px;\n      border-radius: 5px;\n      padding: 3px;\n      margin: 5px 0 20px;\n      background-color: #ffffff7f;\n      border: 1px solid #f3b9ee;\n      &::placeholder {\n        color: #000;\n        text-transform: lowercase;\n        font-size: 12px;\n        letter-spacing: 1px;\n        padding-left: 3px;\n        /* &:hover {\n          box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,\n            rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;\n        } */\n      }\n    "]))),I=z.a.button(i||(i=Object(S.a)(["\n      width: 200px;\n      height: 23px;\n      padding: 2px;\n      border-radius: 5px;\n      margin: 0 auto;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      background-color: #ffffff7f;\n      border: 0;\n      cursor: pointer;\n      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n\n      &:hover {\n        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,\n          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,\n          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n        background-color: #ffffff2f;\n      }\n    "]))),Z=function(e){Object(C.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={name:"",number:""},e.handleChange=function(n){var t=n.target,a=t.name,r=t.value;e.setState(Object(J.a)({},a,r))},e.handleSubmit=function(n){n.preventDefault(),e.props.onSubmit(e.state),e.props.onClick(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(v.a)(t,[{key:"render",value:function(){var e=Object(y.a)();return Object(F.jsxs)(L,{onSubmit:this.handleSubmit,children:[Object(F.jsxs)(N,{children:["Name",Object(F.jsx)(H,{type:"text",name:"name",onChange:this.handleChange,placeholder:"enter name...",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:e,required:!0})]}),Object(F.jsxs)(N,{children:["Number",Object(F.jsx)(H,{type:"tel",name:"number",onChange:this.handleChange,placeholder:"enter phone number...",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:e,required:!0})]}),Object(F.jsx)(I,{type:"submit",children:"Add contact"})]})}}]),t}(f.Component),q=Z,E=z.a.ul(x||(x=Object(S.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n  list-style: none;\npadding: 20px 0;\nmargin: 0;\nbackground-color: #00000090;\n border-radius: 5px;\n   box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n"]))),M=z.a.button(s||(s=Object(S.a)(["\n      width: 200px;\n      height: 20px;\n      padding: 2px;\n      border-radius: 5px;\n      margin: 5px auto 15px;\n      /* text-transform: uppercase; */\n      letter-spacing: 2px;\n      background-color: #ffffff7f;\n\n      border: 0;\n      cursor: pointer;\n      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n\n      /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset; */\n      &:hover {\n        box-shadow:rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n      background-color: #ffffff2f;\n      }\n    "]))),P=z.a.div(b||(b=Object(S.a)(["\nfont-size: 20px;\nfont-weight: 600;\n  color: black;\n"]))),R=z.a.div(d||(d=Object(S.a)(["\nfont-size: 16px;\nfont-style: italic;\n  color: black;\n"]))),K=function(e){var n=e.contacts,t=e.onDeleteContact;return Object(F.jsx)(E,{children:n.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(F.jsxs)("li",{id:n,children:[Object(F.jsx)(P,{children:a}),Object(F.jsx)(R,{children:r}),Object(F.jsx)(M,{type:"button",onClick:function(){return t(n)},children:"Delete"})]},n)}))})},T=t(21),$=z.a.h1(l||(l=Object(S.a)(["\n      font-size: 30px;\n      text-align: center;\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      font-weight: 700;\n      color: #B4A7B3;\n      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n      border-radius: 5px;\n      background-color: #00000090;\n    "]))),G=z.a.div(u||(u=Object(S.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      width: 300px;\n      margin: 50px auto;\n      padding: 5px 20px 20px;\n      background-color: #fff;\n      border-radius: 5px;\n     box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n    "]))),Q=z.a.h2(m||(m=Object(S.a)(["\n    margin-top: 20px;\n   font-size: 26px;\n      text-align: center;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      font-weight: 700;\n      color: #B4A7B3;\n      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n      border-radius: 5px;\n      background-color: #00000090;\n    "]))),U=function(e){Object(C.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={contacts:T,filter:""},e.formSubmitHandler=function(e){console.log(e)},e.handleBtnClick=function(n){var t=n.name,a=n.number;if(e.state.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts!"));else{var r={id:Object(y.a)(),name:t,number:a};e.setState((function(e){var n=e.contacts;return{contacts:[r].concat(Object(O.a)(n))}}))}},e.deleteContact=function(n){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e.changeFilter=function(n){e.setState({filter:n.currentTarget.value})},e.getFilteredItems=function(){var n=e.state,t=n.filter,a=n.contacts,r=t.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(v.a)(t,[{key:"render",value:function(){var e=this.state.filter,n=this.getFilteredItems();return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(G,{children:[Object(F.jsx)($,{children:"Phonebook"}),Object(F.jsx)(q,{onClick:this.handleBtnClick,onSubmit:this.formSubmitHandler}),Object(F.jsx)(Q,{children:"Contacts"}),Object(F.jsx)(D,{value:e,onChange:this.changeFilter}),Object(F.jsx)(K,{contacts:n,onDeleteContact:this.deleteContact})]})})}}]),t}(f.Component);j.a.createRoot(document.getElementById("root")).render(Object(F.jsx)(g.a.StrictMode,{children:Object(F.jsx)(U,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e7bf3645.chunk.js.map