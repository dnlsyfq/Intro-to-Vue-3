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
