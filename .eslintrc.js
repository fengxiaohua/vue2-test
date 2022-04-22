/*
 * @Description: 
 * @Date: 2022-04-12 14:43:53
 */
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 限制每行的最大属性数 提高可读性
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off', // 需要在单行元素的内容前后换行
    'vue/multiline-html-element-content-newline': 'off', // 需要在多行元素的内容前后换行
    'vue/name-property-casing': ['error', 'PascalCase'], // 为 Vue 组件中的 name 属性强制执行帕斯卡命名方式
    'vue/no-v-html': 'off', // 禁止使用 v-html 来防止 XSS 攻击
    'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
    // 强制在代码块中使用一致的大括号风格
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // 强制使用骆驼拼写法命名约定
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': [2, 'never'], // 要求或禁止末尾逗号
    // 强制在逗号前后使用一致的空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'], // 强制使用一致的逗号风格
    'constructor-super': 2, // 要求在构造函数中有 super() 的调用
    curly: [2, 'multi-line'], // 强制所有控制语句使用一致的括号风格
    'dot-location': [2, 'property'], // 强制在点号之前和之后一致的换行
    'eol-last': 2, // 要求或禁止文件末尾存在空行
    eqeqeq: [1, 'always', { null: 'ignore' }], // 要求使用 === 和 !==
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 要求回调函数中有容错处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 代码缩进
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': [2, 'prefer-single'], // 强制在 JSX 属性中一致地使用双引号或单引号
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 要求构造函数首字母大写
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2, // 强制或禁止调用无参构造函数时有圆括号
    'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'template-curly-spacing': [2, 'never'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 要求 IIFE 使用括号括起来
    'yield-star-spacing': [2, 'both'], // 强制在 yield* 表达式中 * 周围使用空格
    yoda: [2, 'never'], // 要求或禁止 “Yoda” 条件
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
    'max-depth': [2, { max: 5 }], // 强制可嵌套的块的最大深度
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
