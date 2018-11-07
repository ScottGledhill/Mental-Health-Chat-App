import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'

export const Sidebar = connect(state => ({
  users: state.users 
}), {})(SidebarComponent)

//connect() to map the stores users from the state
//export provides const Sidebar to Sidebar component