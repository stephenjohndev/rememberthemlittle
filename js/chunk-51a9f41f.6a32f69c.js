(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51a9f41f"],{"126e":function(a,t,e){},"83f2":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"padding-large",staticStyle:{"padding-top":"7rem"}},[e("div",{staticClass:"group block"},[e("a",{staticClass:"special padding",class:{active:"Day"==a.calendarMode},attrs:{href:"#"},on:{click:function(t){a.calendarModeDay()}}},[a._v("Day")]),e("a",{staticClass:"special padding",class:{active:"Week"==a.calendarMode},attrs:{href:"#"},on:{click:function(t){a.calendarModeWeek()}}},[a._v("Week")]),e("a",{staticClass:"special padding",class:{active:"Month"==a.calendarMode},attrs:{href:"#"},on:{click:function(t){a.calendarModeMonth()}}},[a._v("Month")]),e("a",{staticClass:"special padding",class:{active:"Year"==a.calendarMode},attrs:{href:"#"},on:{click:function(t){a.calendarModeYear()}}},[a._v("Year")])]),e("br"),e("br"),e("div",{staticClass:"table-container"},["Day"==a.calendarMode?e("table",{staticClass:"wide",attrs:{cellspacing:"0"}},[a._m(0),e("tbody",a._l(a.sales,function(t){return e("tr",[e("td",[e("span",[a._v(a._s(t.booking_date))])]),e("td",[e("span",[a._v(a._s(t.account_name))])]),e("td",[e("span",[a._v(a._s(t.bookings_total))])])])}),0)]):a._e(),"Week"==a.calendarMode?e("table",{staticClass:"wide",attrs:{cellspacing:"0"}},[a._m(1),e("tbody",a._l(a.sales,function(t){return e("tr",[e("td",[e("span",[a._v(a._s(t.weekstart))])]),e("td",[e("span",[a._v(a._s(t.weekend))])]),e("td",[e("span",[a._v(a._s(t.bookings_total))])])])}),0)]):a._e(),"Month"==a.calendarMode?e("table",{staticClass:"wide",attrs:{cellspacing:"0"}},[a._m(2),e("tbody",a._l(a.sales,function(t){return e("tr",[e("td",[e("span",[a._v(a._s(t.monthstart))])]),e("td",[e("span",[a._v(a._s(t.monthend))])]),e("td",[e("span",[a._v(a._s(t.bookings_total))])])])}),0)]):a._e(),"Year"==a.calendarMode?e("table",{staticClass:"wide",attrs:{cellspacing:"0"}},[a._m(3),e("tbody",a._l(a.sales,function(t){return e("tr",[e("td",[e("span",[a._v(a._s(t.salesyear))])]),e("td",[e("span",[a._v(a._s(t.bookings_total))])])])}),0)]):a._e()]),[e("paginate",{staticClass:"paginator",staticStyle:{display:"flex","list-style-type":"none"},attrs:{"page-count":a.pageCount,"page-range":2,"margin-pages":2,"click-handler":a.goToPage,"prev-text":"Prev","next-text":"Next","container-class":"className","page-class":"page-item"}})]],2)},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[e("span",[a._v("Date")])]),e("th",[e("span",[a._v("Account")])]),e("th",[e("span",[a._v("Total")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[e("span",[a._v("Week Start")])]),e("th",[e("span",[a._v("Week End")])]),e("th",[e("span",[a._v("Total")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[e("span",[a._v("Month Start")])]),e("th",[e("span",[a._v("Month End")])]),e("th",[e("span",[a._v("Total")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[e("span",[a._v("Year")])]),e("th",[e("span",[a._v("Total")])])])])}],c=e("bc3a"),o=e.n(c),r={data:function(){return{calendarMode:"Day",sales:[],pageNum:0,pageCount:0,searchbar:"",totalprice:0}},mounted:function(){this.getPageNumber(this.pageNum,this.calendarMode,this.searchbar),this.getPageCount()},methods:{goToPage:function(a){console.log(a),this.pageNum=a,this.getPageNumber(this.pageNum,this.calendarMode,this.searchbar)},calendarModeDay:function(){this.calendarMode="Day",this.getPageNumber(this.pageNum,this.calendarMode,this.searchbar)},calendarModeWeek:function(){this.calendarMode="Week",this.getPageNumber(this.pageNum,this.calendarMode,this.searchbar)},calendarModeMonth:function(){this.calendarMode="Month",this.getPageNumber(this.pageNum,this.calendarMode,this.searchbar)},calendarModeYear:function(){this.calendarMode="Year",this.getPageNumber(this.pageNum,this.calendarMode,this.searchbar)},searchMode:function(){this.getPageNumber(this.pageNum,this.calendarMode,this.searchbar)},getAllSales:function(){var a=this;console.log("tinawag kita");var t=new FormData;t.append("account_id",this.$store.getters.userId),o.a.post("/_system/php/api/salesreport/getAll.php",t).then(function(t){t.data.success?(a.sales=t.data.data,console.log("tagumpay")):console.error("bigo"+t.data)}).catch(function(a){console.log(a)})},getPageCount:function(){var a=this,t=new FormData;t.append("account_id",this.$store.getters.userId),o.a.post("/_system/php/api/salesreport/getPageCount.php",t).then(function(t){t.data.success?a.pageCount=t.data.data:console.error(t.data)}).catch(function(a){console.log(a)})},getPageNumber:function(a,t,e){var s=this,n=new FormData;n.append("account_id",this.$store.getters.userId),n.append("pageNum",a),n.append("calendar_mode",t),n.append("searchbar",e),o.a.post("/_system/php/api/salesreport/getByPage.php",n).then(function(a){a.data.success?s.sales=a.data.data:console.error(a.data)}).catch(function(a){console.log(a)})}}},i=r,l=(e("d876"),e("2877")),d=Object(l["a"])(i,s,n,!1,null,"58d39094",null);d.options.__file="admin-sales.vue";t["default"]=d.exports},d876:function(a,t,e){"use strict";var s=e("126e"),n=e.n(s);n.a}}]);