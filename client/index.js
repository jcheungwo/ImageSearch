import { StackNavigator } from 'react-navigation'
import Main from './Components/Main.js'
import Results from './Components/Results.js'

export default RootNavigator = StackNavigator({
	Main: {
		screen: Main
	},
  Results: {
    screen: Results
  }
});