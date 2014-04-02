
(function() {
  var props_tmpl, results_tmpl;


  //templates for the password analysis
  results_tmpl = '{{#results}}\n<table class="table table-striped">\n  <tr>\n    <td>password: </td>\n    <td><strong>{{password}}</strong></td>\n  </tr>\n  <tr>\n    <td>entropy: </td>\n    <td>{{entropy}}</td>\n  </tr>\n  <tr>\n    <td>crack time (seconds): </td>\n    <td>{{crack_time}}</td>\n  </tr>\n  <tr>\n    <td>crack time (display): </td>\n    <td>{{crack_time_display}}</td>\n  </tr>\n  <tr>\n    <td>score from 0 to 4:</td>\n    <td>{{score}}</td>\n  </tr>\n  <tr>\n    <td>calculation time (ms): </td>\n    <td>{{calc_time}}</td>\n  </tr>\n  <tr>\n    <td colspan="2"><strong>Breakdown:</strong></td>\n  </tr>\n</table>\n{{& match_sequence_display}}\n{{/results}}';

  props_tmpl = '<div class="match-sequence">\n{{#match_sequence}}\n<table class="table">\n  <tr>\n    <td colspan="2">\'<strong>{{token}}</strong>\'</td>\n  </tr>\n  <tr>\n    <td>pattern:</td>\n    <td>{{pattern}}</td>\n  </tr>\n  <tr>\n    <td>entropy:</td>\n    <td>{{entropy}}</td>\n  </tr>\n  {{#cardinality}}\n  <tr>\n    <td>cardinality:</td>\n    <td>{{cardinality}}</td>\n  </tr>\n  {{/cardinality}}\n  {{#rank}}\n  <tr>\n    <td>dict-name:</td>\n    <td>{{dictionary_name}}</td>\n  </tr>\n  <tr>\n    <td>rank:</td>\n    <td>{{rank}}</td>\n  </tr>\n  <tr>\n    <td>base-entropy:</td>\n    <td>{{base_entropy}}</td>\n  </tr>\n  <tr>\n    <td>upper-entropy:</td>\n    <td>{{uppercase_entropy}}</td>\n  </tr>\n  {{/rank}}\n  {{#l33t}}\n  <tr>\n    <td>l33t-entropy:</td>\n    <td>{{l33t_entropy}}</td>\n  </tr>\n  <tr>\n    <td>l33t subs:</td>\n    <td>{{sub_display}}</td>\n  </tr>\n  <tr>\n    <td>un-l33ted:</td>\n    <td>{{matched_word}}</td>\n  </tr>\n  {{/l33t}}\n  {{#graph}}\n  <tr>\n    <td>graph: </td>\n    <td>{{graph}}</td>\n  </tr>\n  <tr>\n    <td>turns: </td>\n    <td>{{turns}}</td>\n  </tr>\n  <tr>\n    <td>shifted keys: </td>\n    <td>{{shifted_count}}</td>\n  </tr>\n  {{/graph}}\n  {{#repeated_char}}\n  <tr>\n    <td>repeat-char:</td>\n    <td>\'{{repeated_char}}\'</td>\n  </tr>\n  {{/repeated_char}}\n  {{#sequence_name}}\n  <tr>\n    <td>sequence-name:</td>\n    <td>{{sequence_name}}</td>\n  </tr>\n  <tr>\n    <td>sequence-size</td>\n    <td>{{sequence_space}}</td>\n  </tr>\n  <tr>\n    <td>ascending:</td>\n    <td>{{ascending}}</td>\n  </tr>\n  {{/sequence_name}}\n  {{#day}}\n  <tr>\n    <td>day:</td>\n    <td>{{day}}</td>\n  </tr>\n  <tr>\n    <td>month:</td>\n    <td>{{month}}</td>\n  </tr>\n  <tr>\n    <td>year:</td>\n    <td>{{year}}</td>\n  </tr>\n  <tr>\n    <td>separator:</td>\n    <td>\'{{separator}}\'</td>\n  </tr>\n  {{/day}}\n</table>\n{{/match_sequence}}\n</div>';

  // hook to run zxcvbn each time the input changes
  window.zxcvbn_load_hook = function() {
    return $(function() {
      // set up our vars
      var last_q, r, rendered, _listener;

      // this is the bit that actually watches password_input
      _listener = function() {
        var current, results;
        current = $('#password_input').val();
        advanced = document.getElementById("advanced_option").checked;
        
        //if there's nothing there, just return the nothing :)
        if (!current) {
          $('#password_results').html('');
          return;
        }
        // if password_input has changed
        if (current !== last_q) {
          // the input is now set to last_q
          last_q = current;
          // run the tool and set it to r
          r = zxcvbn(current);
          // use mustache to populate the props_templ template, only if they have checked the advanced checkbox
          if (advanced == 1)  {
          r.match_sequence_display = Mustache.render(props_tmpl, r);

         }
          // create a results array from r
          results = {
            results: [r]
          };
          // give us an object with whatever mustache gives us from the results_tmpl template
          rendered = Mustache.render(results_tmpl, results);
          return $('#password_results').html(rendered);
        }
      };
      return setInterval(_listener, 100);
    });
  };

}).call(this);
