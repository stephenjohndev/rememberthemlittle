(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04d9c15a"],{8477:function(t,e,a){"use strict";var c=a("ef45"),s=a.n(c);s.a},c5ad:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category_container"},t._l(t.$store.getters.categories,function(e){return e.category_active?a("a",{staticClass:"category",class:{active:t.$store.getters.selectedCategoryId==e.category_id},on:{click:function(a){t.$store.commit("setSelectedCategoryId",e.category_id),t.$router.push("/book/package")}}},[a("clazy-load",{attrs:{src:e.category_image}},[a("img",{staticClass:"category_image",attrs:{src:e.category_image}}),a("div",{staticClass:"category_image animated-background",attrs:{slot:"placeholder"},slot:"placeholder"})]),a("h3",{staticClass:"category_title",staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.category_name))]),a("p",{staticClass:"category_description"},[t._v(t._s(e.category_description))])],1):t._e()}),0)},s=[],o=(a("8477"),a("2877")),r={},i=Object(o["a"])(r,c,s,!1,null,"eb065e58",null);i.options.__file="book-category.vue";e["default"]=i.exports},ef45:function(t,e,a){}}]);