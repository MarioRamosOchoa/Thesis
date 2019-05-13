// Script for the calendar to function
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  // colors used for each calendar event
  var commonapp = 'rgb(255, 0, 0)';
  var sat = 'rgb(10, 101, 24)';
  var fafsa = 'rgb(42, 122, 245)';
  var act = 'rgb(166, 0, 255)';
  var college = 'rgb(255, 134, 0)';

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['interaction', 'dayGrid', 'timeGrid', 'bootstrap', 'list'],
    themeSystem: 'bootstrap',
    defaultView: 'dayGridMonth',
    defaultDate: '2019-04-07',
    editable: true,
    selectable: true,
    selectHelper: true,
    eventLimit: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth, listMonth'
    },

    eventClick: function(info) {
      $('#modalTitle').html(info.event.title);
      $('#modalBody').html(info.event.extendedProps.description);
      $('#calendarModal').modal();
    },

    // List of all events that will automatically be added to the calendar.
    events: [{
        title: 'Common App Due',
        start: '2019-01-15',
        description: '<p>Remember to submit your common app applications by today. Various schools have this as the final regular decision deadline. Visit <a href="https://www.commonapp.org/" target="_blank">the Common App page</a> for more information.</p>',
        backgroundColor: commonapp,
      },
      {
        title: '2018-19 FAFSA Due',
        start: '2019-06-30',
        description: '<p>Remember to submit your FAFSA form by today for the 2018-19 school year. Visit <a href="https://studentaid.ed.gov/sa/fafsa" target="_blank">the FAFSA page</a> for more information.</p>',
        backgroundColor: fafsa,
      },
      {
        title: 'SAT TEST TODAY',
        start: '2019-05-04',
        description: '<p>There is an SAT test today. Visit <a href="https://collegereadiness.collegeboard.org/sat/register/dates-deadlines" target="_blank">the SAT page</a> for more information.</p>',
        backgroundColor: sat,
      },
      {
        title: 'ACT TEST TODAY',
        start: '2019-04-13',
        description: '<p>Visit <a href="http://www.act.org/content/act/en/products-and-services/the-act/registration.html" target="_blank">the ACT website</a> for more information.</p>',
        backgroundColor: act,
      },
      {
        title: 'Common App Goes Live',
        start: '2019-08-01',
        description: '<p>The Common App will typically open on August 1st for the 2020-21 school year applications. Visit <a href="https://www.commonapp.org/" target="_blank">the Common App page</a> for more information. </p>',
        backgroundColor: commonapp,
      },
      {
        title: 'Typical Early Decision Deadline',
        start: '2018-10-1',
        description: '<p></p>',
        backgroundColor: commonapp,
      },
      {
        title: 'Typical Regular Decision Deadline',
        start: '2019-01-01',
        description: '<p></p>',
        backgroundColor: commonapp,
      },
      {
        title: 'Reed College Application Deadline',
        start: '2019-01-15',
        description: '<p>Visit <a href="https://www.reed.edu/" target="_blank">www.reed.edu</a> for more information.</p>',
        backgroundColor: college,
      },
      {
        title: 'Gonzaga College Application Deadline',
        start: '2019-02-01',
        description: '<p>Visit <a href="https://www.gonzaga.edu" target="_blank">www.gonzaga.edu</a> for more information.</p>',
        backgroundColor: college,
      },
      {
        title: 'Seattle Pacific University Application Deadline',
        start: '2019-02-01',
        description: '<p>Visit <a href="https://www.spu.edu" target="_blank">www.spu.edu</a> for more information.</p>',
        backgroundColor: college,
      },
      {
        title: 'University of Oregon Application Deadline',
        start: '2019-01-15',
        description: '<p>Visit <a href="https://www.uoregon.edu" target="_blank">www.uoregon.edu</a> for more information.</p>',
        backgroundColor: college,
      },
      {
        title: 'University of Puget Sound Application Deadline',
        start: '2019-01-15',
        description: '<p>Visit <a href="https://www.pugetsound.edu" target="_blank">www.pugetsound.edu</a> for more information.</p>',
        backgroundColor: college,
      },
      {
        title: 'Whitman College Application Deadline',
        start: '2019-01-15',
        description: '<p>Visit <a href="https://www.whitman.edu" target="_blank">www.whitman.edu</a> for more information.</p>',
        backgroundColor: college,
      },
      {
        title: 'Western Washington University Application Deadline',
        start: '2019-01-31',
        description: '<p>Visit <a href="https://www.wwu.edu" target="_blank">www.wwu.edu</a> for more information.</p>',
        backgroundColor: college,
      },
      {
        title: 'Last Day to Register for the SAT',
        start: '2019-05-03',
        description: '<p>Visit <a href="https://collegereadiness.collegeboard.org/sat/register/dates-deadlines" target="_blank">the SAT website</a> for more information.</p>',
        backgroundColor: sat,
      },
      {
        title: 'Last SAT test of 2019',
        start: '2019-06-01',
        description: '<p>Visit <a href="https://collegereadiness.collegeboard.org/sat/register/dates-deadlines" target="_blank">the SAT website</a> for more information.</p>',
        backgroundColor: sat,
      },
      {
        title: 'Last ACT Test',
        start: '2019-07-13',
        description: '<p>Visit <a href="http://www.act.org/content/act/en/products-and-services/the-act/registration.html" target="_blank">the ACT website</a> for more information.</p>',
        backgroundColor: act,
      },
      {
        title: 'ACT Registration',
        start: '2019-05-03',
        description: '<p>Last day to register for the 2nd to last test for this year. Visit <a href="http://www.act.org/content/act/en/products-and-services/the-act/registration.html" target="_blank">the ACT website</a> for more information.</p>',
        backgroundColor: act,
      },
      {
        title: 'ACT Test Day',
        start: '2019-06-08',
        description: '<p>Visit <a href="http://www.act.org/content/act/en/products-and-services/the-act/registration.html" target="_blank">the ACT website</a> for more information.</p>',
        backgroundColor: act,
      },
      {
        title: 'Willamette University Application Deadline',
        start: '2019-01-15',
        description: '<p>Visit <a href="https://willamette.edu/" target="_blank">www.willamette.edu</a> for more information.</p>',
        backgroundColor: college,
      }
    ]
  });
  calendar.render();
});
