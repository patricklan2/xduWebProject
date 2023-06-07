"use strict";(self["webpackChunkmy_cinima"]=self["webpackChunkmy_cinima"]||[]).push([[279],{3279:function(t,e,o){o.r(e),o.d(e,{default:function(){return f}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("integral")]),e("el-card",{attrs:{shadow:"hover"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("div",{staticStyle:{"font-size":"20px","line-height":"30px"}},[e("i",{staticClass:"el-icon-user"}),t._v("商品")]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("添加")])],1),e("el-table",{staticClass:"table",attrs:{data:t.goodData,border:""}},[e("el-table-column",{attrs:{prop:"name",label:"name",width:"180",align:"center"}}),e("el-table-column",{attrs:{prop:"integral",label:"积分",align:"center"}}),e("el-table-column",{attrs:{prop:"stock",label:"存量",align:"center"}}),e("el-table-column",{attrs:{label:"操作",width:"500px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleModify(o.row)}}},[t._v("修改")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleDelete(o.row)}}},[t._v("删除")])]}}])})],1),e("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"total, prev, pager, next","current-page":t.page.index,"page-size":t.page.size,total:t.page.total},on:{"current-change":t.handlePageChange}}),e("good-dialog",{ref:"add"}),e("good-dialog",{ref:"modify",attrs:{modify:!0}})],1)],1)},s=[],i=o(9109),l=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:"添加",visible:t.visible,width:"70%"},on:{"update:visible":function(e){t.visible=e}}},[e("el-form",{attrs:{model:t.good,"label-width":"70px",size:"mini"}},[e("el-form-item",{attrs:{label:"名字"}},[e("el-input",{attrs:{disabled:t.modify},model:{value:t.good.name,callback:function(e){t.$set(t.good,"name",e)},expression:"good.name"}})],1),e("el-form-item",{attrs:{label:"数量"}},[e("el-input",{model:{value:t.good.stock,callback:function(e){t.$set(t.good,"stock",e)},expression:"good.stock"}})],1),e("el-form-item",{attrs:{label:"积分"}},[e("el-input",{model:{value:t.good.integral,callback:function(e){t.$set(t.good,"integral",e)},expression:"good.integral"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)],1)},n=[],r={props:["modify"],data(){return{visible:!1,good:{name:"",stock:0,integral:0}}},methods:{confirm(){this.visible=!1,this.$emit("goodDialogConfirm",this.good)},show(t){this.good=t,this.visible=!0}}},d=r,c=o(1001),g=(0,c.Z)(d,l,n,!1,null,null,null),u=g.exports,h={components:{GoodDialog:u},data(){return{goodData:[],page:{index:1,size:8,total:0}}},created(){this.getGoodData()},mounted(){this.$refs.add.$on("goodDialogConfirm",(t=>{(0,i.bT)(t).then((t=>{200==t.status?(this.$message.success("添加成功"),this.getGoodData()):this.$message.error("添加失败，服务器出现故障")}))})),this.$refs.modify.$on("goodDialogConfirm",(t=>{(0,i.or)(t).then((t=>{200==t.status?(this.$message.success("编辑成功"),this.getGoodData()):this.$message.success("编辑失败，服务端出现问题")}))}))},methods:{getGoodData(){(0,i.To)({pageIndex:this.page.index,pageSize:this.page.size}).then((t=>{this.goodData=t.data.list,this.page.total=t.data.pageTotal}))},handlePageChange(t){this.page.index=t,this.getGoodData()},handleAdd(){this.$refs.add.show({})},handleModify(t){this.$refs.modify.show(t)},handleDelete(t){this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((()=>{(0,i.aH)(t).then((t=>{200==t.status?(this.$message.success("删除成功"),this.getGoodData()):this.$message.error("删除失败，服务器出现故障")}))})).catch((()=>{}))}}},m=h,p=(0,c.Z)(m,a,s,!1,null,null,null),f=p.exports},9109:function(t,e,o){o.d(e,{To:function(){return s},aH:function(){return n},bT:function(){return i},or:function(){return l}});var a=o(1117);const s=t=>(0,a.Z)({url:"selectAllGood",method:"get",params:t}),i=t=>(0,a.Z)({url:"addGood",method:"post",params:t}),l=t=>(0,a.Z)({url:"modifyGood",method:"post",params:t}),n=t=>(0,a.Z)({url:"deleteGood",method:"post",params:t})}}]);
//# sourceMappingURL=279.48438d0c.js.map