(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88032a78"],{"77be":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"padding",attrs:{id:"account"}},[t("div",{staticClass:"grid"},[t("form",{staticClass:"span-12 start-4-medium span-6-medium start-5-large span-4-large grid-1-small",on:{submit:function(a){a.preventDefault(),e.prepareSubmit()}}},[t("fieldset",[t("legend",[e._v("Update your account information")]),t("label",{attrs:{for:"name"}},[e._v("Full Name")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"wide",attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),t("br"),t("label",{attrs:{for:"contact"}},[e._v("Contact Number")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.contact,expression:"contact"}],staticClass:"wide",attrs:{type:"number",name:"contact",id:"contact",required:""},domProps:{value:e.contact},on:{input:function(a){a.target.composing||(e.contact=a.target.value)}}}),t("br"),t("label",{attrs:{for:"email"}},[e._v("Email")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"wide",attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("br"),t("label",{attrs:{for:"gender"}},[e._v("Gender")]),t("br"),t("br"),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",id:"gender",value:"Male",required:""},domProps:{checked:"Male"==e.gender,checked:e._q(e.gender,"Male")},on:{change:function(a){e.gender="Male"}}}),t("span",{staticClass:"margin-x-small"},[e._v("Male")])]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",id:"gender",value:"Female",required:""},domProps:{checked:"Female"==e.gender,checked:e._q(e.gender,"Female")},on:{change:function(a){e.gender="Female"}}}),t("span",{staticClass:"margin-x-small"},[e._v("Female")])]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",id:"gender",value:"Other",required:""},domProps:{checked:"Other"==e.gender,checked:e._q(e.gender,"Other")},on:{change:function(a){e.gender="Other"}}}),t("span",{staticClass:"margin-x-small"},[e._v("Other")])]),t("br"),t("br"),t("label",{attrs:{for:"birthday"}},[e._v("Birthday")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.birthday,expression:"birthday"}],staticClass:"wide",attrs:{type:"date",name:"birthday",id:"birthday",required:""},domProps:{value:e.birthday},on:{input:function(a){a.target.composing||(e.birthday=a.target.value)}}}),t("br"),t("label",{attrs:{for:"location"}},[e._v("Location")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"wide",attrs:{type:"text",name:"location",id:"location",required:""},domProps:{value:e.location},on:{input:function(a){a.target.composing||(e.location=a.target.value)}}}),t("br"),t("button",{staticClass:"primary",attrs:{type:"submit"}},[e._v("Save Changes")]),t("button",{staticClass:"margin-left-small",on:{click:function(a){a.preventDefault(),e.$router.go(-1)}}},[e._v("Discard")])])])])])},r=[],i=(t("7f7f"),t("cadf"),t("551c"),t("097d"),t("bc3a")),o=t.n(i),c={data:function(){return{name:"",contact:"",email:"",gender:"",birthday:"",location:""}},methods:{prepareSubmit:function(){var e=this,a=new FormData;a.append("account_id",this.$store.getters.userId),a.append("account_name",this.name),a.append("account_email",this.email),a.append("account_contact",this.contact),a.append("account_gender",this.gender),a.append("account_birthdate",this.birthday),a.append("account_location",this.location),o.a.post("/_system/php/api/account/update.php",a).then(function(a){alert("Saved!"),e.$router.go(-1)}).catch(function(e){alert("An error occured")})}},mounted:function(){var e=this;o.a.get("/_system/php/api/account/get.php?account_id="+this.$store.getters.userId).then(function(a){a.data.success&&(e.name=a.data.data.account_name,e.email=a.data.data.account_email,e.gender=a.data.data.account_gender,e.birthday=a.data.data.account_birthdate,e.contact=a.data.data.account_contact,e.location=a.data.data.account_location)}).catch(function(e){console.error(e)})}},d=c,s=t("2877"),l=Object(s["a"])(d,n,r,!1,null,null,null);l.options.__file="Account.vue";a["default"]=l.exports},"7f7f":function(e,a,t){var n=t("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in r||t("9e1e")&&n(r,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);