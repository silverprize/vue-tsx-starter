import { Component, Vue } from "vue-property-decorator";
import "./App.scss";

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    );
  }
}
