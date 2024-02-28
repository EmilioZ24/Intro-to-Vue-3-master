const app = Vue.createApp({
    data() {
        return{
            product: 'socks',
            // Solution
            description: 'A warm fuzzy pair of socks.' ,

            url: "https://www.vuemastery.com",

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
        updateVariant(index){
            this.selectedVariant = index;

        },
        removeFromCart(){
            if (this.cart>0){
                this.cart -=1;
            } else{
                this.cart = 0;
            }
           
        }
    },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            // solution
            sale() {
                if (this.onSale) {
                    return this.brand + ' ' + this.product + ' is on sale.'
                }
                return ''
            }
    }
})

