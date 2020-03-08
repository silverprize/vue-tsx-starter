# vue-tsx-starter

This repository is vue app project template.  
Support type inference completely in tsx expression.  
No shim-vue.d.ts.  
No shim-tsx.d.ts.

## Depend on
### Props, Events, Slots typing
[vue-tsx-support](https://github.com/wonderful-panda/vue-tsx-support)

### hot update for tsx SFC
[vue-jsx-hot-loader](https://github.com/skyrpex/vue-jsx-hot-loader)

## Guide vue template to tsx

### v-model
vue
```vue
<template>
  <input v-model="model">
</template>
```
tsx
```tsx
render() {
  return <input v-model={this.model} />
}
```

### v-if
vue
```vue
<template>
  <div v-if="done">done</div>
  <div v-else>loading</div>
</template>
```
tsx
```tsx
render() {
  return (
    {this.done 
      ? <div>done</div>
      : <div>loading</div>
    }
  )
}
```

### v-for
vue
```vue
<template>
  <ul>
    <li v-for="obj in list" :key="obj.id">
      {{obj.text}}
    </li>
  </ul>
</template>
```
```tsx
render() {
  return (
    <ul>
      {this.list.map(obj => (
        <li key={obj.id}>{obj.text}<li>
      ))}
    </ul>
  )
}
```

### v-on
vue
```vue
<template>
  <input v-on="$listener" >
</template>
```
tsx
```tsx
render() {
  return <input on={this.$listeners} />
}
```

### v-bind
vue
```vue
<template>
  <input v-bind="$attrs" >
</template>
```
tsx
```tsx
render() {
  return <input {...this.$attrs} />
}
```

### src
vue
```vue
<template>
  <img src="./image.png">
</template>
```
tsx
```tsx
render() {
  return <img src={require('./image.png')} />
}

or

import image from './image.png'
render() {
  return <img src={image} />
}
```

### default slot
vue
```vue
<template>
  <div>
    <slot />
  </div>
</template>
```
tsx
```tsx
render() {
  return <div>{this.$slots.default}</div>
}
```

### scoped slot
vue
```vue
<!-- MyComponent.vue -->
<template>
  <div>
    <slot name="slotA" v-bind="{ propString }" />
    <slot name="slotB" v-bind="{ propString }" />
    <slot name="slotC" v-bind="propObject" />
  </div>
</template>

<!-- ParentComponent.vue -->
<template>
  <MyComponent>
    <template v-slot:slotA="{ propString }">
      <div>{{ propString }}</div>
    </template>
    <template v-slot:slotB="{ propString }">
      {{ propString }}
    </template>
    <template v-slot:slotC="{ propA, propB }">
      <div>{{ propA }}</div>
      <div>{{ propB }}</div>
    </template>
  </MyComponent>
</template>
```
tsx
```tsx
// MyComponent.tsx
render() {
  return (
    <div>
      {this.$scopedSlots.slotA({ propString: this.propString })}
      {this.$scopedSlots.slotB({ propString: this.propString })}
      {this.$scopedSlots.slotC(this.propObject)}
    </div>
  )
}

// ParentComponent.tsx
render() {
  return (
    <MyComponent
      scopedSlots={{
        slotA: ({ propString }) => (
          <div>{prop}</div>
        ),
        slotB: ({ propString }) => (
          [prop]
        ),
        slotC: ({ propA, propB }) => (
          [<div>{propA}</div>, <div>{propB}</div>]
        ),
      }}
    />
  )
}
```

### filter
vue
```vue
Vue.filter('myFilter', ...)
<template>
  <p>{{ value | myFilter }}</p>
</template>
```
tsx
```tsx
import myFilter from './myFilter'
render() {
  return <p>{myFilter(this.value)}</p>
}
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
