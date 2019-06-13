<template>
<div class="container">
    <div class="calculator">
        <div class="input">
            <input type="string" v-model="result">
        </div>
        <div class="display">
<!--row1-->
            <button class="special" @click="clear">C</button>
            <button class="special" @click="del">&larr;</button>
            <button class="special" @click="percent">%</button>
            <button class="special" @click="power">x<sup>2</sup></button>
            <button class="operator" @click="add('/')">/</button>
<!--row12-->
            <button class="item" @click="add(7)">7</button>
            <button class="item" @click="add(8)">8</button>
            <button class="item" @click="add(9)">9</button>
            <button class="item" @click="sin">sin</button>
            <button class="operator" @click="add('*')">*</button>
<!--row3-->
            <button class="item" @click="add(4)">4</button>
            <button class="item" @click="add(5)">5</button>
            <button class="item" @click="add(6)">6</button>
            <button class="item" @click="cos">cos</button>
            <button class="operator" @click="add('-')">-</button>
<!--row4-->
            <button class="item" @click="add(1)">1</button>
            <button class="item" @click="add(2)">2</button>
            <button class="item" @click="add(3)">3</button>
            <button class="item" @click="tan">tan</button>
            <button class="operator" @click="add('+')">+</button>
<!--row5-->
            <button class="item zero" @click="add(0)">0</button>
            <button class="item" @click="add('.')">.</button>
            <button class="operator" @click="calc">=</button>

        </div>
    </div>
    <div class="log_area">
        <div class="log_font">Log:</div>
        <p v-for="log in logs" :key="log">{{log}}</p>
        
    </div>
</div>
</template>
<script>
export default {
    name:'calculator',
    data() {
        return {
            result:0,
            length,
            enter:false,
            state:false,
            logs:[],
        }
    },
    methods:{
        clear:function(){
        this.result=0;
        this.enter=false;
        },
        del:function(){
            if(this.enter==true)
                this.clear();
            else if(this.enter==false &&this.result.length>1)
                this.result=this.result.slice(0,this.result.length-1);
            else if(this.result.length==1)
                this.clear();
        },
            
        percent:function(){
            //this.result=this.result/100
            this.add("/100");
        },
        add:function(expression){//expression!=nullNumber.isInteger(this.result)
            if(Number.isInteger(this.result))
                this.result='';
            this.result+=expression+'';
            
        },
        calc:function(){
            this.logs.push(this.result+" = "+eval(this.result));
            this.result=eval(this.result);
            this.enter=true;
        },
        power:function(){
            //this.result=Math.pow(this.result,2);
            let power=this.result*this.result;
            this.add(power);
        },
        sin:function(){
            this.result=Math.sin(this.result);
        },
        cos:function(){
            this.result=Math.cos(this.result);
        },
        tan:function(){
            this.result=Math.tan(this.result);
        }
    }
}
</script>
<style>
.log_area{
    width: 50%;
    padding-left:5%;
    float: left;
}
.log_font{
    font-size: 200%;
}
.log_area>p{
    font-size: 120%;
}

.calculator{
    background-color: #2f2f31;
    
    font-family: Arial, Helvetica, sans-serif;
    float: left;    
}
.input{
    width:90%;
}
.input>input{
    width:100%;
    height: 110px;
    color:#fff;
    background: none;
    border:none;
    font-size: 2.4rem;
    text-align: right;
    outline: none;
    
}
.display {
  
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px;
    grid-gap: 2px;
    background-color: #2f2f31;
    padding: 10px;
}

.item,.operator,.special {
    background-color: #616163;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    font-size: 1.6rem;
    border: none;
    outline: none;

}
.operator{
    background-color:#f49e3f;
}
.special{
    background-color:#424345;
    
}
.zero{
    grid-column-start: 1;
    grid-column-end: 4;
}
button:active{
    background-color: #2f2f31;
}

</style>
