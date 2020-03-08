import { Component, Vue } from "vue-property-decorator";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";

@Component
export default class Home extends Vue {
  render() {
    return (
      <div class="home">
        <img alt="Vue logo" src={require("../assets/logo.png")} />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    );
  }
}
