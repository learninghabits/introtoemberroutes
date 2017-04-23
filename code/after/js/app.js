App = Ember.Application.create();

var colours = [
  {
    id: 1,
    name: 'red',
    info: 'Red is the color at the longer-wavelengths end of the spectrum of visible light next to orange, at the opposite end from violet.[3] Red color has a predominant light wavelength of roughly 620–740 nanometers. Light with a longer wavelength than red but shorter than terahertz radiation and microwave is called infrared.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Strawberries.jpg/902px-Strawberries.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Red'
  },
  {
    id: 2,
    name: 'yellow',
    info: 'Yellow is the color between green and orange on the spectrum of visible light. It is evoked by light with a predominant wavelength of roughly 570–590 nm. In traditional color theory, used in painting, and in the subtractive color system, used in color printing, yellow is a primary color. In the RGB color model, used to create colors on television and computer screens, yellow is made by combining red and green at equal intensity.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gelber_Kanarienvogel.JPG/1600px-Gelber_Kanarienvogel.JPG',
    wikipedia: 'https://en.wikipedia.org/wiki/Yellow'
  },
  {
    id: 3,
    name: 'blue',
    info: 'Blue is the colour between violet and green on the optical spectrum of visible light. Human eyes perceive blue when observing light with a wavelength between 450 and 495 nanometres, which is between 4500 and 4950 ångströms. Blues with a higher frequency and thus a shorter wavelength gradually look more violet, while those with a lower frequency and a longer wavelength gradually appear more green. Pure blue, in the middle, has a wavelength of 470 nanometers (4700 ångströms). In painting and traditional colour theory, blue is one of the three primary colours of pigments, along with red and yellow, which can be mixed to form a wide gamut of colours. Red and blue mixed together form violet, blue and yellow together form green. Blue is also a primary colour in the RGB colour model, used to create all the colours on the screen of a television or computer monitor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Gabbiano_cielo.jpg/600px-Gabbiano_cielo.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Blue'
  }
];


App.Router.map(function () {
  this.resource('index',{"path" : "/"}, function () {
    this.resource('colours', { "path": "/colours/:id" });
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return colours;
  }
});

App.ColoursRoute = Ember.Route.extend({
  model: function (data) {
    var colourId = data.id;
    var results = colours.filter(function (colour) {
      return colour.id == colourId;
    });

    if (results.length > 0) {
      return results[0];
    }

    this.transitionTo("index");
  }
});
