// import riot from 'riot';
import Timer from '../../timer.tag';

beforeEach(() => {
  const html = `
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div id="app">
      <timer></timer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/riot/3.10.0/riot.js"></script>
    </div>
  </body>
  `
  const document = cy.state('document')
  document.write(html)
  document.close()

  cy.window()
    .then(w => {
      // w.riot = riot
      console.log('riot is', w.riot)
      // TODO register "Timer" component
      // somehow. See https://github.com/riot/riot
      throw new Error('here')
      const t = w.riot.mount('timer', {start: 0})
      console.log(t)
    })
})
it('loads', () => {
  // cy.visit('index.html')
  console.log(Timer)
})
