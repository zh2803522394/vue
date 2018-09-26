new Vue({
    el:"#app",
    data:{
        num:"",
        iptvalue:"接下来要做什么...",
        title:"待办事项",
        TJ:"添加",
        value:"接下来要做什么...",
        constyle:{width:'400px',margin:'0 auto',textAlign:'center'},
        iptstyle:{padding:'4%',width:'300px'},
        astyle:{padding:'3%',border:"1px #999 solid",backgroundColor:'#2196f3',color:'white'},
        ulstyle:{padding:'0px'},
        listyle:{padding:'3% 0',border:"1px #999 solid",listStyle:'none',width:'100%'},
        as2:{float:'right',paddingRight:'5%'},
        
        block:true,
        none:false,
        
        arrs:[
            {name:"学习javascript",txt:"删除"},
            {name:"学习Vue.js",txt:"删除"},
            {name:"整个项目",txt:"删除"}
        ],
        
    },
    methods:{
        fun1:function(){
            this.value="";
        },
        fun2:function(){
            this.value="接下来要做什么...";
        },
        
        
        //删除
        fun3:function(index){
            this.arrs.splice(index,1);
        },
        
        
        //添加
        fun4:function(){
            if(this.num !== ""){
                 this.arrs.push({
                name:this.num,
                txt:this.text="删除"
                })
            }else{
                
            }
           
            
        },
    }
})