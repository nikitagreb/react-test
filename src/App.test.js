import {configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({
  adapter: new Adapter()
})

describe('<App />', () => {

  it ('Should render 3 characters in light side', () => {

  })
})