Template.section_one.helpers({
  stepCompleted: function(){
    return Session.get('stepCompleted');
  },
  progress: function(stepNb){
    var stepCompleted = Session.get('stepCompleted');
    var currentProgress = (100 * stepCompleted)/stepNb;
    return currentProgress;
  }
});

Session.set("stepCompleted", 0);

Template.section_one.events({
  "blur textarea, blur input, change checkbox": function (event, template) {
    var content = event.target.value;
    var step = Session.get('stepCompleted');
    if(content != '' && step < 3) {
      Session.set('stepCompleted', step + 1);
    } else if(step > 0) {
      Session.set('stepCompleted', step - 1);
    }
  }
});