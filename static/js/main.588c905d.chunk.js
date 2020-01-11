(this["webpackJsonpgoals-pay-off"]=this["webpackJsonpgoals-pay-off"]||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/goals.9627b3da.jpg"},42:function(e,a,t){e.exports=t(56)},49:function(e,a,t){},51:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(34),o=t.n(c),r=t(63),s=(t(47),t(48),t(49),t(30)),m=t(3),i=t(7),d=t(8),u=t(10),h=t(9),p=t(11),g=function(e){var a=e.accounts,t=e.handleAddAccount,n=e.newAccount,c=e.handleAccountChange,o=e.handleAccountEdit,r=e.handleDeleteAccount;return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h3",null,"Create New Account"),l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 form-group"},l.a.createElement("label",{htmlFor:"acount1"},"Account Name"),l.a.createElement("input",{onChange:c,placeholder:"ex. Dart Wars",name:"accountName",type:"text",className:"form-control",value:n.accountName})),l.a.createElement("div",{className:"col-md-3 form-group"},l.a.createElement("label",{htmlFor:"goal"},"Goal Amout"),l.a.createElement("input",{value:n.goalAmount,onChange:c,placeholder:"20",name:"goalAmount",type:"text",className:"form-control"})),l.a.createElement("div",{className:"col-md-3 form-group"},l.a.createElement("label",{htmlFor:"current"},"Current Amout"),l.a.createElement("input",{value:n.currentAmount,onChange:c,placeholder:"0",name:"currentAmount",type:"text",className:"form-control"})),""===n._id?l.a.createElement("div",{className:"col-md-2 form-group"},l.a.createElement("button",{className:"btn btn-primary mt-4"},"Add")):l.a.createElement("div",{className:"col-md-2 form-group"},l.a.createElement("button",{className:"btn btn-success mt-4"},"Save Edit")))),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Account"),l.a.createElement("th",null,"Goal"),l.a.createElement("th",null,"Current"),l.a.createElement("th",null))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.accountName),l.a.createElement("td",null,e.goalAmount),l.a.createElement("td",null,e.currentAmount),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return o(e)},className:"btn btn-success mr-1"},l.a.createElement("i",{className:"fa fa-pencil"})),l.a.createElement("button",{onClick:function(){return r(e)},className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"}))))})))))},E=t(35),f=t(36),b=t.n(f);function v(e){var a=Object(E.a)(e).slice(0),t=Object(m.a)(a).map(Number);return b.a.sum(t)}var A=function(e){var a=e.paidGoals,t=e.goals,n=e.handleAdminSubmit,c=e.handleAdminPayment,o=e.handlePaymentChange;return console.log(a),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h2",null,"Track Goal Payments"),l.a.createElement("small",null,"If goal was accomplished send payment; if not send a note to help complete goal to standard"),t.map((function(e){return l.a.createElement("div",{key:e._id,className:"alert alert-primary"},l.a.createElement("p",{className:""},e.task),l.a.createElement("hr",null),l.a.createElement("div",{className:"mb-0"},l.a.createElement("form",{onSubmit:n},l.a.createElement("div",{className:"form-row align-items-center"},l.a.createElement("select",{className:"form-control col-md-2",onChange:function(a){return o(a,e)},name:"paid",id:"amountToPay",value:e.paid},l.a.createElement("option",{key:"0",value:"0"},"Amount.."),l.a.createElement("option",{key:"1",value:".50"},".50"),l.a.createElement("option",{key:"2",value:"1.00"},"$1.00"),l.a.createElement("option",{key:"3",value:"1.50"},"$1.50"),l.a.createElement("option",{key:"4",value:"2.00"},"$2.00"),l.a.createElement("option",{key:"5",value:"3.00"},"$3.00")),l.a.createElement("button",{onClick:function(){return c(e)},className:"btn btn-info m-1",disabled:"0"===e.paid},"Pay"),e.noteStatus?l.a.createElement("button",{onClick:function(){return e.noteStatus=!e.noteStatus},className:"btn btn-sm-1 btn-danger"},"Cancel"):l.a.createElement("button",{onClick:function(){return e.noteStatus=!e.noteStatus},className:""===e.note?"btn m-1 btn-success":"btn m-1 btn-warning"},""===e.note?"Send a Note":"Note Sent"),e.noteStatus&&l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-row align-items-center"},l.a.createElement("input",{value:e.note,name:"note",onChange:function(a){return o(a,e)},className:"form-control"}),l.a.createElement("button",{onClick:function(){return e.noteStatus=!e.noteStatus},className:"btn m-1 btn-sm btn-success"},"Send")))),l.a.createElement("p",{className:"text-success"},e.fixed&&""===e.note?"Note read and fixed! Can I get paid now?":""))))})),l.a.createElement("div",{className:"card text-white bg-info"},l.a.createElement("h3",null,"Total Paid: ",v(a))))},N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.goals.filter((function(e){return!0===e.childCompleted&&!0!==e.completed})),a=this.props.goals.map((function(e){return e.paid}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",null,"Admin"),l.a.createElement("h4",null,"track childs goals and pay them at the end of the week")))),l.a.createElement("div",{className:"row m-4"},l.a.createElement(A,{handlePaymentChange:this.props.handlePaymentChange,handleAdminSubmit:this.props.handleAdminSubmit,handleAdminPayment:this.props.handleAdminPayment,goals:e,paidGoals:a}),l.a.createElement(g,{accounts:this.props.accounts,newAccount:this.props.newAccount,handleAddAccount:this.props.handleAddAccount,handleAccountChange:this.props.handleAccountChange,handleAccountEdit:this.props.handleAccountEdit,handleDeleteAccount:this.props.handleDeleteAccount})))}}]),a}(n.Component),y=(t(51),t(25)),w=t(61),C="dollars",k=function(e){var a=e.account,t=Object(w.a)({accept:C,drop:function(){return{name:a.accountName,_id:a._id}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),n=Object(y.a)(t,2),c=n[0],o=c.canDrop,r=c.isOver,s=n[1],m="#17a2b8";return o&&r?m="#087182":o&&(m="#60bece"),l.a.createElement("div",{ref:s,className:"mx-2 mb-2"},l.a.createElement("div",{className:"card text-white ",style:{width:"18rem",backgroundColor:m}},l.a.createElement("div",{className:"card-header"},"Saving Account"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a.accountName),l.a.createElement("ul",{key:a._id,className:"list-group list-group-flush"},l.a.createElement("li",{key:a._id,className:"list-group-item text-body mb-1"},"Goal for savings: $",a.goalAmount),l.a.createElement("li",{className:"list-group-item text-dark"},"Current savings: $",a.currentAmount)),l.a.createElement("p",{className:"card-text"},"Keep doing your best, remember why you made your goal and you will be there in no time."))))},G=t(62),O=function(e){var a=e.name,t=e.amount,n=e.pg,c=e.handleAddMoneyToAccount,o=Object(G.a)({item:{name:a,amount:t,_id:n._id,type:C},end:function(e,a){var t=a.getDropResult();e&&t&&(c(t,e),alert("You dropped ".concat(e.amount," into ").concat(t.name," ").concat(t.id,"!")))},collect:function(e){return{isDragging:e.isDragging()}}}),r=Object(y.a)(o,2),s=r[0].isDragging,m=r[1],i=s?.4:1;return l.a.createElement("div",{className:"card-body"},l.a.createElement("blockquote",{className:"blockquote mb-0"},l.a.createElement("small",{amount:t,ref:m,style:{opacity:i},className:"alert alert-success"},l.a.createElement("i",{className:"fa fa-money fa-lg mr-1"}),"$",n.paid)))},S=t(59),_=t(29),x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row py-5"},l.a.createElement("h2",null,"Saving Accounts")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2 mb-1"},0!==this.props.paidGoals.length&&l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header text-white bg-success h4"},"You Got Paid"),this.props.paidGoals.map((function(a){return l.a.createElement(S.a,{backend:_.a},l.a.createElement(O,{handleAddMoneyToAccount:function(a,t){return e.props.handleAddMoneyToAccount(a,t)},name:a.task,amount:a.paid,pg:a,key:a._id}))})))),l.a.createElement("div",{className:"col-md-10"},l.a.createElement("div",{className:"row"},this.props.accounts.map((function(e){return l.a.createElement(S.a,{backend:_.a},l.a.createElement(k,{account:e,key:e._id}))}))))))}}]),a}(n.Component),j=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.props.goals.filter((function(e){return!0!==e.childCompleted})),t=this.props.goals.filter((function(e){return!0===e.childCompleted&&!0!==e.completed})),n=this.props.goals.filter((function(e){return""!==e.note}));return console.log(this.props),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-5"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("h2",null,"Create your Goals")),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("h3",null,"Completed Goals"),0===n.length?" ":l.a.createElement("div",{className:"alert alert-danger"},l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-exclamation fa-lg mr-1"}),n.length," of your goals came back with a note attached. Fix it to get paid.")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("form",{onSubmit:this.props.handleAddGoal,className:"form-group"},l.a.createElement("label",{htmlFor:"goal"},"Goal description"),l.a.createElement("textarea",{type:"text",name:"goal",onChange:this.props.handleNewGoal,value:this.props.newGoal.task,className:"form-control",placeholder:"Keep room clean, clothes in the laundry basket, books on the bookshelf and bed made"}),l.a.createElement("button",{className:"btn btn-primary mt-1"},"Add")),a.map((function(a){return l.a.createElement("div",{className:"alert alert-primary"},l.a.createElement("p",{className:""},a.task,l.a.createElement("button",{onClick:function(){return e.props.handleChildCompletedGoal(a)},className:"btn btn-sm btn-success mx-2"},l.a.createElement("i",{className:"fa fa-check-circle fa-lg"})),l.a.createElement("button",{onClick:function(){return e.props.handleDeleteGoal(a)},className:"btn btn-sm btn-danger"},l.a.createElement("i",{className:"fa fa-trash fa-lg"}))),l.a.createElement("p",{className:"mb-0"},a.note&&l.a.createElement("span",{className:"text-danger"},a.note)))}))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("h6",null,"You've got ",t.length," completed Goals Awaiting Approval and Payment"),t.map((function(a){return l.a.createElement("div",{className:"alert alert-info"},l.a.createElement("p",null,a.note&&l.a.createElement("h3",null,"You've got a goal renturn")),l.a.createElement("p",{className:""},a.task),l.a.createElement("p",{className:"mb-0"},a.note&&l.a.createElement("span",{className:"text-danger"},a.note,l.a.createElement("button",{onClick:function(){return e.props.handleChildFixedGoal(a)},className:"btn btn-info btn-sm m-1"},"Fixed it"))))})))))}}]),a}(n.Component),D=t(28),P=t(60),T=function(e){var a=e.user,t=e.paidGoals;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(D.a,{className:"navbar-brand",to:"/"},"Goals Pay"),l.a.createElement("div",{className:"",id:"navbarNav"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement(P.a,{className:"nav-item nav-link",to:"/accounts"},"Accounts"),l.a.createElement(P.a,{className:"nav-item nav-link",to:"/goals"},"Goals"),!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{className:"nav-item nav-link",to:"/admin"},"Admin")),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{className:"nav-item nav-link",to:"/profile"},a.name),l.a.createElement(P.a,{className:"nav-item nav-link",to:"/logout"},"Logout")))),0!==t.length&&l.a.createElement("p",{className:"alert alert-success text-right p-1"},l.a.createElement("i",{className:"fa fa-money fa-lg mr-1"}),"You just got paid"))},F=t(39),I=t.n(F),Y=function(e){var a=e.accounts,t=e.goals,n=t.filter((function(e){return!0!==e.childCompleted})),c=t.map((function(e){return e.paid})),o=a[0];return console.log(o),l.a.createElement("div",{className:"row m-2"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"mb-2"},l.a.createElement("div",{className:"card text-white bg-dark"},l.a.createElement("div",{className:"card-body "},l.a.createElement("h1",null,"GOALS THAT PAY"),l.a.createElement("small",null,"You compelete your goals and you get paid. Set up savings accounts to help manage your earnings."))))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",null,"You got ",n.length," incomplete goals",0!==n.length?"so get to work.":"."),l.a.createElement("h5",null,"Heres a quick breakdown of your cash:"),l.a.createElement("h6",null,"Your overall cash made from compeleting goals: $",v(c)))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("img",{width:"100%",src:I.a,alt:""}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",null,"You currenty have ",a.length," accounts set up toward your savings."),l.a.createElement("h5",null,"Heres a quick breakdown of your accounts:"),l.a.createElement("h6",null,"Looks like you'll be on your way to ",o.accountName,"soon. You just need $",Number(o.goalAmount)-Number(o.currentAmount)))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"mb-2 text-center"},l.a.createElement("div",{className:""},l.a.createElement("h5",null,"GOALS THAT PAY"),l.a.createElement("small",null,"Help your child understand how to earn money and allocate their earnings.")))))},$=t(64),M=t(40),H=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={newGoal:{_id:" ",task:" ",note:""},newAccount:{_id:"",accountName:"",goalAmount:"",currentAmount:""},accounts:[{_id:1234,accountName:"Disneyland",goalAmount:"160",currentAmount:"0"},{_id:4567,accountName:"Ice Cream",goalAmount:"10",currentAmount:"2"},{_id:8790,accountName:"Movies",goalAmount:"16",currentAmount:"4"},{_id:7890,accountName:"Movies",goalAmount:"16",currentAmount:"4"}],goals:[{_id:1234,task:"Empty dishwasher and load with dirty dishes",note:"Try again, dishwasher is not empty",noteStatus:!1,fixed:!1,childCompleted:!0,completed:!1,paid:"0",paymentAllocated:!1},{_id:2345,task:"Have my planner signed everyday this week",note:"",noteStatus:!1,fixed:!1,childCompleted:!1,completed:!1,paid:"0",paymentAllocated:!1},{_id:3456,task:"Clean bathroom when its my turn without being told",note:"",noteStatus:!1,fixed:!1,childCompleted:!1,completed:!1,paid:"0",paymentAllocated:!1},{_id:34567,task:"Clean bedroom without being told",note:"",noteStatus:!1,fixed:!1,childCompleted:!1,completed:!1,paid:"0",paymentAllocated:!1}],paidGoals:[]},t.handleAdminSubmit=function(e){e.preventDefault(),t.paidOffGoals(),t.handleStateChangePaid()},t.handlePaymentChange=function(e,a){var n=e.currentTarget,l=Object(m.a)(t.state.goals),c=l.findIndex((function(e){return e===a}));l[c][n.name]=n.value,t.setState({goals:l})},t.handleAdminPayment=function(e){var a=Object(m.a)(t.state.goals),n=a.findIndex((function(a){return a===e}));a[n].completed=!0},t.handleStateChangePaid=function(){t.setState({paid:!0})},t.handleAddAccount=function(e){e.preventDefault();var a=t.state.newAccount;console.log("submit newAccount._id: ",a._id),a._id?t.handleFindandEditAccount():t.handleCreateNewAccount(),a={_id:"",accountName:"",goalAmount:"",currentAmount:""},t.setState({newAccount:a})},t.handleCreateNewAccount=function(){var e=t.state.newAccount;e._id=Date.now();var a=[t.state.newAccount].concat(Object(m.a)(t.state.accounts));t.setState({accounts:a,newAccount:e})},t.handleFindandEditAccount=function(){var e=t.state.newAccount,a=Object(m.a)(t.state.accounts),n=a.findIndex((function(a){return a._id===e._id}));a[n]={_id:e._id,accountName:e.accountName,goalAmount:e.goalAmount,currentAmount:e.currentAmount},console.log(a,e),t.setState({accounts:a})},t.handleAccountChange=function(e){var a=e.currentTarget,n=Object(s.a)({},t.state.newAccount);n[a.name]=a.value,n[a.name]=a.value,n[a.name]=a.value,console.log("change newAccount._id: ",n._id),t.setState({newAccount:n})},t.handleAccountEdit=function(e){var a={_id:e._id,accountName:e.accountName,goalAmount:e.goalAmount,currentAmount:e.currentAmount};console.log("edit newAccount._id: ",a._id),t.setState({newAccount:a})},t.handleAddMoneyToAccount=function(e,a){var n=Object(m.a)(t.state.accounts),l=n.findIndex((function(a){return a._id===e._id})),c=Number(n[l].currentAmount)+Number(a.amount);n[l].currentAmount=c.toString();var o=Object(m.a)(t.state.goals),r=o.findIndex((function(e){return e._id===a._id}));o[r].paymentAllocated=!0,t.setState({accounts:n,goals:o}),t.paidOffGoals()},t.handleDeleteAccount=function(e){var a=Object(m.a)(t.state.accounts),n=a.findIndex((function(a){return a._id===e._id}));a.splice(n,1),t.setState({accounts:a}),console.log("delete: ",e)},t.paidOffGoals=function(){var e=t.state.goals.filter((function(e){return!0===e.completed&&!0!==e.paymentAllocated}));t.setState({paidGoals:e}),console.log("paid",e)},t.handleAddGoal=function(e){e.preventDefault();var a=[t.state.newGoal].concat(Object(m.a)(t.state.goals));t.setState({goals:a});t.setState({newGoal:{_id:" ",task:" ",note:""}})},t.handleNewGoal=function(e){var a=Object(s.a)({},t.state.newGoal);a.task=e.currentTarget.value,a._id=Date.now().toString(),a.note="",a.childCompleted=!1,t.setState({newGoal:a})},t.handleDeleteGoal=function(e){var a=Object(m.a)(t.state.goals),n=a.findIndex((function(a){return a._id===e._id}));a.splice(n,1),t.setState({goals:a}),console.log("delete: ",e)},t.handleChildCompletedGoal=function(e){var a=Object(m.a)(t.state.goals),n=a.findIndex((function(a){return a._id===e._id}));a[n].childCompleted=!a[n].childCompleted,t.setState({goals:a})},t.handleChildFixedGoal=function(e){var a=Object(m.a)(t.state.goals),n=a.findIndex((function(a){return a._id===e._id}));a[n].fixed=!0,a[n].note="",t.setState({goals:a})},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{paidGoals:this.state.paidGoals}),l.a.createElement($.a,null,l.a.createElement(M.a,{path:"/accounts",render:function(a){return l.a.createElement(x,Object.assign({},a,{accounts:e.state.accounts,paidGoals:e.state.paidGoals,handleAddMoneyToAccount:e.handleAddMoneyToAccount}))}}),l.a.createElement(M.a,{path:"/goals",render:function(a){return l.a.createElement(j,Object.assign({},a,{goals:e.state.goals,handleAddGoal:e.handleAddGoal,newGoal:e.state.newGoal,handleNewGoal:e.handleNewGoal,handleDeleteGoal:e.handleDeleteGoal,handleChildCompletedGoal:e.handleChildCompletedGoal,handleChildFixedGoal:e.handleChildFixedGoal}))}}),l.a.createElement(M.a,{path:"/admin",render:function(a){return l.a.createElement(N,Object.assign({},a,{accounts:e.state.accounts,goals:e.state.goals,paidGoals:e.state.paidGoals,handleAdminSubmit:e.handleAdminSubmit,handleAdminPayment:e.handleAdminPayment,handlePaymentChange:e.handlePaymentChange,handleAddAccount:e.handleAddAccount,newAccount:e.state.newAccount,handleAccountChange:e.handleAccountChange,handleAccountEdit:e.handleAccountEdit,handleDeleteAccount:e.handleDeleteAccount}))}}),l.a.createElement(M.a,{path:"/",render:function(a){return l.a.createElement(Y,Object.assign({},a,{accounts:e.state.accounts,goals:e.state.goals}))}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(r.a,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.588c905d.chunk.js.map