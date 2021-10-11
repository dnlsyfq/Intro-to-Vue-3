const helloWorld = new Vue({
  el: '#helloVue',
  data: {
    title:"Hello, world?!".toUpperCase(),
    message:"First template"
  }
})

helloWorld.title = 'Hi';

const example = new Vue({
  el:'#example',
  data:{
    title:"Hello",
    message:"Daily Cat",
    name:"Chewie",
    img: {
      src:'https://placeimg.com/200/200/animals',
      alt:'A placeholder image'
    }
  }
})

const book = new Vue({
  el: '#book',
  data:{
    title: 'The Sirens of Titan',
    author: 'Kurt Vonnegut',
    summary:'This is a summary of the Sirens of Titan.',
    showDetails: false
  },
  methods:{
    sayHello: function(){
      alert(this.title);
    },
    toggleDetails: function(){

    }
  }
});