### 单元测试和TDD（测试驱动开发）
- TDD优点
* 代码质量提高了
- 单元测试
* 测试覆盖率高，业务耦合高（导致业务变更就会导致单元测试用例需要重写， 因此比较适合和业务解耦的代码，例如函数工具库），代码量大（测试代码有可能比业务代码还要多）

- 先测试在写代码
- TDD一般结单元测试使用，是白盒测试
- 重点测试代码
- 安全度低
- 速度快 （主要是渲染shallowMount）

### 集成测试和BDD（行为驱动开发）
- 先写代码在写测试
- BDD一般结合集成测试使用，是黑盒测试
- 重点测试在UI, dom是从用户的操作角度进行的测试
- 安全度高
- 数度慢（主要是渲染mount）
# jest-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
