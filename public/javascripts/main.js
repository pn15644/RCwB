$(document).ready(function() {
  var index = 0;
  var control = 50;
  var support = 50;
  // starting scenario set
  var scenario= [
      {"child_event": "Your child wants more snack",
       "choices": ["No, they already have their portion", "Give them some healthy options to choose from", "Give them anything they want", "Leave them be"],
      },
      {"child_event": "Your child grabs a toy from a friend",
       "choices": ["Order them to return the toy immediately", "Tell them that their friend is playing with it and they can take turn playing", "Your child should be able to play with it whenever they want to", "Not intervene"],
      },
      {"child_event": "Your child is having difficulty with reading and spelling",
       "choices": ["Tell them how disappointed you are and get them to practice more", "Get a slightly easier book series to read to encourage them, and then the one at their level", "Assure them that they are doing great", "They will learn sooner or later"],
      },
      {"child_event": "You and your child are going to the park",
       "choices": ["Dress them how you want them to look, even if your child wants to wear something else", "Let them decide what they want to wear", "Let them decide what they want to wear", "On a 2nd thought, they can go to the park themselves"],
      }
    ];

  // first starting scenario
  $('#scenario').text(scenario[0].child_event);
  createAnswerList(0);

  // consequent scenarios
  $('form').submit(function(event) {
    event.preventDefault();
    getAnswer();
    if (index < scenario.length -1) {
      index += 1;
      $('#scenario').text(scenario[index].child_event);
      createAnswerList(index);
    } else {
      $('#s_button').remove();
      var result_bt = $('<input type="button" value="result"/>');
      $('#r_button').append(result_bt);
    };
  });

  // create multiple options for the player to choose
  function createAnswerList(sce_index) {
    $('#p_choices').empty();
    for (var i=0; i < scenario[sce_index].choices.length; i++) {
      $('#p_choices').append(createAnswer(sce_index, i));
    }
  }

  // create an option for the player to choose
  function createAnswer(sce_index, choice_index) {
    var input='';
    input = '<input type="radio" name="p_answer" value="' + (choice_index+1) + '"/>';
    input += scenario[sce_index].choices[choice_index] + '</br>';
    return input;
  }

  // find out which answer player chose and get the score
  function getAnswer () {
    var answer = $('input[name=p_answer]:checked').val();
    console.log(answer);
    switch(answer) {
      case '1':
        control += 5;
        console.log("control now is " +control);
        break;
      case '2':
        control += 5;
        console.log("control now is " +control);
        break;
      case '3':
        control -= 5;
        console.log("control now is " +control);
        break;
      case '4':
        control -= 5;
        console.log("control now is " +control);
        break;
    }
  }
});
