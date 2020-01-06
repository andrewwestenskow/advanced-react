import React from 'react'
import Counter from './components/Counter'
import PianoList from './components/PianoList'
import Poke from './components/Poke'
import Toggle from './components/Toggle'
import ToggleRenderProps from './components/ToggleRenderProps'
import ToggleRPC from './components/ToggleRPC'
import SimpleButton from './components/SimpleButton'
import ComplexButton from './components/ComplexButton'
import Square from './components/Square'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>HOOKS</h1>
      <Counter />
      <PianoList />
      <Poke />

      <h1>HOCS</h1>

      <ComplexButton />
      <ComplexButton darkMode />
      <SimpleButton />
      <SimpleButton darkMode />
      <Square darkMode />
      <Square />

      <h1>RENDER PROPS</h1>

      <Toggle darkMode>
        <h1>What do you do when you see a space man?</h1>
      </Toggle>
      <ToggleRenderProps
        render={({ on, setOn, style }) => (
          <div>
            {on && <h1>Park your car, man.</h1>}
            <button style={style} onClick={() => setOn(!on)}>
              Show/Hide
            </button>
          </div>
        )}
      />
      <ToggleRPC>
        {({ on, setOn, style }) => (
          <div>
            {on && (
              <h1>
                I got an A on my origami assignment when I turned my paper into
                my teacher
              </h1>
            )}
            <button style={style} onClick={() => setOn(!on)}>
              Show/Hide
            </button>
          </div>
        )}
      </ToggleRPC>
    </div>
  )
}
export default App
