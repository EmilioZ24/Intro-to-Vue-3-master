const app = Vue.createApp({
    data() {
        return{
            product: 'socks',
            // Solution
            description: 'A warm fuzzy pair of socks.' ,
            image: './assets/images/socks_green.jpg',
            url: "https://www.vuemastery.com",
            inventory: 100,
            onSale: true,
            details: ["50 cotton", "30% wool", "20% polyester"],
            variants:[
                { id: 2234, color: 'green', image: "./assets/images/socks_green.jpg"},
                { id: 2235, color: 'blue', image: "./assets/images/socks_blue.jpg"}
            ],
            sizes: ["xsmall", "small", "medium", "large", "xlarge"],
        }
    },
    methods:{
        addToCart(){
            this.cart +=1;
        },
        updateImage(variantImage){
            this.image = variantImage;
        },
        removeFromCart(){
            if (this.cart>0){
                this.cart -=1;
            } else{
                this.cart = 0;
            }
           
        }
    }
})

