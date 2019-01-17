<template>
  <div class="dome">
    <br><button @click="prev()">Previous</button>
    <button @click="next()">Next</button><br>
    <img :src="images[currentNumber]" > 
    <h1>Peerapong Roilarp</h1>
  </div>
</template>

<script>

export default {
  data(){
      return{
          images:[
              'http://www.siamfishing.com/_pictures/content/upload2015/201506/1433831615.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQZgfV4evZZhzbVv9t6d2gP0cGAt2fEfAHkRgeKJ3In7GL9I1',
              'https://i.redd.it/spo5q1n66gg11.jpg'
          ],
              currentNumber: 0
      }
  },
  methods: {
      next(){
          this.currentNumber++
          if(this.currentNumber >= this.images.length){
              this.currentNumber = 0
          }
      },
      prev(){
          this.currentNumber--
          if(this.currentNumber < 0){
              this.currentNumber = this.images.length - 1
          }
      }
  }


}
</script>
