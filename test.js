var test=new Vue({
    el:'#Slider',
    data() {
        return {
            images:['https://picsum.photos/1024/480/?image=52','https://picsum.photos/1024/480/?image=54','https://picsum.photos/1024/480/?image=58','https://picsum.photos/id/12/1024/480'],
            titles:['First Slide','Second Slide','Third Slide','Fourth Slide'],
            captions:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est.","Ut pellentesque ut lacus vel interdum.","Nulla vitae elit libero, a pharetra augue mollis interdum."],
            current:0,
            timer:null,
            period:10000,
            size:{ //image size
                width:0,
                height:0,
            },
        }
    },
    mounted() {
        this.start();
        this.calc_size();
        window.onresize = () => {
            this.windowWidth = window.innerWidth}
    },
    methods: {
        start(){
            this.timer=setInterval(this.next,this.period);
        },
        stop(){
            clearInterval(this.timer);
            this.timer=null;
        },
        next(){
            if(this.current<(this.images.length-1))
                this.current++;
            else
                this.current=0;
        },
        prev(){
            if(this.current<=0)
                this.current=(this.images.length-1);  
            else
                this.current--;
        },
        calc_size(){
            this.size.width=window.innerWidth;
        },
        jump(number){
            clearInterval(this.timer);
            this.timer=null;
            this.current=number-1;
            this.timer=setInterval(this.timer);
        },
        change_css(number){ //indicators亮起來
            if(number!=(this.current+1))
                return {'background-color': '#bbb'}; //不是current image
            else
                return {'background-color': 'white'};//current image
        },
    },
    computed: {
        length:function(){
            return this.images.length;
        }
    },
})