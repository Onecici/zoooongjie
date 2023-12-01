```scss
    .center-vertically {
      width: 34px;
      height: 40px;
      color: rgba(255, 255, 255, 0.60);
      margin: 0 4px 4px;
      text-align: center;

      @mixin timeFont($selected, $unselected) {
        &.active-date-time {
          >.time-numer {
            color: #FFF;
            font-size: var($selected, 12px) !important;
          }
        }

        .time-numer {
          font-size: var($unselected, 10px) !important;
        }
      }
		// @for循环动态在.center-vertically类中生成 &:nth-of-type() 伪类
        // 1 through 15  表示从1循环到15  $i可以获取当前循环的1-15数值
        // #{} 可以动态插入变量
      @for $i from 1 through 15 {
        &:nth-of-type(#{$i}) {
          @include timeFont(--selected-time-numer-0#{$i}, --unselected-time-numer-0#{$i})
        }
      }
	}
```

