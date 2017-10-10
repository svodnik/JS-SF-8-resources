let sessions = {
  title: "Advances in Wasp Farming",
  presenter: "Cassandra Fleming",
  day: "Monday",
  start: "12:30",
  end: "2:00",
  summary: "Recent advances and trends among wasp farmers"
}

let content = `<p class="title">${sessions.title}</p>
  <p><span class="label">Time: </span>${sessions.day} ${sessions.start} - ${sessions.end}</p>
  <p><span class="label">Presenter: </span>${sessions.presenter}</p>
  <p>${sessions.summary}</p>`;

$('.sessions').html(content);