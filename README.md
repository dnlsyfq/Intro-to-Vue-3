Documentation
```
data - used for storing known dynamic values
computed - used for computing dynamic values based on known dynamic values — can additionally specify a setter by specifying get and set functions — the setter will update other dynamic values when the computed value changes
watch - used for performing functionality when a specified dynamic value changes
methods - used for storing instance methods to be used throughout the app
```

Install Vue
```
npm init vue@3
```

Javascript Expression
```
<h1>{{ product }}</h1>

<p>{{ firstName + ' ' + lastName}}</p>

<span>{{ clicked ? true : false }}</span>

<div>{{ message.method() }}</div>
```

Computed properties

* js
```
const app = new Vue({
  el:'#app',
  data:{
    hoursStudied:274
  },
  computed:{
    languageLevel: function(){
      if (this.hoursStudied < 100){
        return 'Beginner';
      } else if(this.hoursStudied < 1000){
        return 'Intermediate';
      } else {
        return 'Expert';
      }
    }
  } 

})
```

* html
```
<div id="app">
  <p> You have studied for {{hoursStudied}} hours. You have {{languageLevel}}-level mastery.</p>
</div>
```

---

* html
```
       <fieldset>
          <legend>Purchase Agreement</legend>
          <p>I, {{fullName}}, wish to buy {{ ticketDescription }} tickets. I understand that all ticket sales are final.</p>
          <input type="checkbox" name="agreement" id="agree">
          <label for="agree">I Agree</label>
        </fieldset>
```

* js
```
const app = new Vue({
  el: '#app',
  data: {
    firstName: 'First',
    lastName: 'Last',
    email: '',
    ticketQuantity: 1,
    ticketType: 'general',
    referrals: [],
    specialRequests: '',
    purchaseAgreementSigned: false
  },
  computed:{
    fullName:function(){
      if(this.firstName && this.lastName){
        return this.firstName + ' ' + this.lastName;
      } else {
        return this.firstName || this.lastName;
      }
    },
    ticketDescription:function(){
      let readableTicketType = 'General Admission';
      if(this.ticketType === 'vip'){
        readableTicketType = 'VIP';
      }

      let ticketPluralization = 'tickets';
      if(this.ticketQuantity === 1){
        ticketPluralization = 'ticket';
      }

      return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
    }
  }
});
```

### Computed Property Setters
update the necessary data values if a computed value ever changes

* html
```
<div id=“app”>
  <p>You have studied for {{ hoursStudied }} hours. You have {{ languageLevel }}-level mastery.</p>
  <span>Change Level:</span>
  <select v-model="languageLevel">
    <option>Beginner</option>
    <option>Intermediate</option>
    <option>Expert</option>
  </select>
</div>
```

* js
```
const app = new Vue({
  el:'#app',
  data: {
    hoursStudied: 274
  },
  computed:{
    languageLevel:{
      get: function(){
        if(this.hoursStudied < 100){
          return 'Beginner';
        } else if (this.hoursStudied < 1000) {
          return 'Intermediate';
        } else {
          return 'Expert';
        }
      },
      set: function(newLanguageLevel){
        if(newLanguageLevel === 'Beginner'){
          this.hoursStudied = 0;
        } else if(newLanguageLevel === 'Intermediate'){
          this.hoursStudied = 100;
        } else if(newLanguageLevel === 'Expert'){
          this.hoursStudied = 1000;
        }
      }

    }
  }
})
```
### watch 
computed value will only recompute when a dynamic value used inside of its getter function changes. For example, in our previous examples languageLevel would only be recomputed if hoursStudied changed. But what do we do if we want to make app updates without explicitly using a value in a computed function? We use the watch property.

```
const app = new Vue({
  el: '#app',
  data: {
    currentLanguage: 'Spanish',
    supportedLanguages: ['Spanish', 'Italian', 'Arabic'],
    hoursStudied: 274
  },
  watch: {
    currentLanguage: function (newCurrentLanguage, oldCurrentLanguage) {
      if (supportedLanguages.includes(newCurrentLanguage)) {
        this.hoursStudied = 0;
      } else {
        this.currentLanguage = oldCurrentLanguage;
      }
    }
  }
});
```
### Instance Method 
html
```
<button v-on:click="resetProgress">Reset Progress</button>
```

js
```
const app = new Vue({
  el:"#app",
  data: {
    hoursStudied: 300
  },
  methods: {
    resetProgress: function(){
      this.hoursStudied = 0;
    }
  }
})
```
